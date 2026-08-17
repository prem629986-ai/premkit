export type OutputFormat = "image/jpeg" | "image/png" | "image/webp";

export async function loadImage(file: File): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.decoding = "async";
    img.src = url;
    await img.decode();
    return img;
  } finally {
    URL.revokeObjectURL(url);
  }
}
export function canvasFromImage(img: HTMLImageElement, w=img.naturalWidth, h=img.naturalHeight) {
  const c=document.createElement("canvas"); c.width=Math.max(1,Math.round(w)); c.height=Math.max(1,Math.round(h));
  const ctx=c.getContext("2d")!; ctx.drawImage(img,0,0,c.width,c.height); return c;
}
export function canvasBlob(c: HTMLCanvasElement, type: OutputFormat="image/jpeg", quality=0.88): Promise<Blob> {
  return new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(new Error("Could not create output")),type,quality));
}
export async function resizeFile(file:File,w:number,h:number,type:OutputFormat="image/jpeg",quality=0.9){
  const img=await loadImage(file); return canvasBlob(canvasFromImage(img,w,h),type,quality);
}
export async function transform(file:File, op:string, opts:any={}):Promise<Blob>{
  const img=await loadImage(file); const w=img.naturalWidth,h=img.naturalHeight;
  let ow=w,oh=h; if(op==="rotate90"||op==="rotate270"){ow=h;oh=w;}
  const c=document.createElement("canvas"); c.width=ow;c.height=oh;const ctx=c.getContext("2d")!;
  ctx.save();
  if(op==="rotate90"){ctx.translate(ow,0);ctx.rotate(Math.PI/2)}
  else if(op==="rotate180"){ctx.translate(ow,oh);ctx.rotate(Math.PI)}
  else if(op==="rotate270"){ctx.translate(0,oh);ctx.rotate(-Math.PI/2)}
  else if(op==="flipH"){ctx.translate(w,0);ctx.scale(-1,1)}
  else if(op==="flipV"){ctx.translate(0,h);ctx.scale(1,-1)}
  if(op==="blur") ctx.filter=`blur(${opts.amount??6}px)`;
  if(op==="grayscale"||op==="bw") ctx.filter=op==="bw"?"grayscale(1) contrast(2)":"grayscale(1)";
  if(op==="pixelate"){
    const s=Math.max(2,opts.size??10), small=document.createElement("canvas"); small.width=Math.ceil(w/s);small.height=Math.ceil(h/s);
    const sx=small.getContext("2d")!; sx.imageSmoothingEnabled=false;sx.drawImage(img,0,0,small.width,small.height);ctx.imageSmoothingEnabled=false;ctx.drawImage(small,0,0,w,h);ctx.restore();return canvasBlob(c,"image/png");
  }
  ctx.drawImage(img,0,0,w,h);ctx.restore();return canvasBlob(c,opts.type??"image/jpeg",opts.quality??.9);
}
export async function crop(file:File,x:number,y:number,w:number,h:number,type:OutputFormat="image/png"){
  const img=await loadImage(file), c=document.createElement("canvas");c.width=w;c.height=h;
  c.getContext("2d")!.drawImage(img,x,y,w,h,0,0,w,h); return canvasBlob(c,type,.9);
}
export async function addText(file:File,text:string, opts:any={}){
  const img=await loadImage(file), c=canvasFromImage(img),ctx=c.getContext("2d")!;
  ctx.font=`${opts.size??42}px sans-serif`;ctx.fillStyle=opts.color??"#ffffff";ctx.strokeStyle="#000";ctx.lineWidth=4;
  const x=opts.x??30,y=opts.y??c.height-40;ctx.strokeText(text,x,y);ctx.fillText(text,x,y);return canvasBlob(c,"image/png");
}
export async function addBorder(file:File,size:number,color:string){
  const img=await loadImage(file),c=document.createElement("canvas");c.width=img.naturalWidth+size*2;c.height=img.naturalHeight+size*2;const ctx=c.getContext("2d")!;
  ctx.fillStyle=color;ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(img,size,size);return canvasBlob(c,"image/png");
}
export async function fitCanvas(file:File,w:number,h:number,bg:string="#fff"){
  const img=await loadImage(file),c=document.createElement("canvas");c.width=w;c.height=h;const ctx=c.getContext("2d")!;
  ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);const scale=Math.min(w/img.naturalWidth,h/img.naturalHeight),nw=img.naturalWidth*scale,nh=img.naturalHeight*scale;
  ctx.drawImage(img,(w-nw)/2,(h-nh)/2,nw,nh);return canvasBlob(c,"image/jpeg",.92);
}
export async function joinImages(files:File[], gap=16){
  const imgs=await Promise.all(files.map(loadImage)),w=Math.max(...imgs.map(i=>i.naturalWidth)),h=imgs.reduce((a,i)=>a+i.naturalHeight,0)+gap*(imgs.length-1);
  const c=document.createElement("canvas");c.width=w;c.height=h;const ctx=c.getContext("2d")!;ctx.fillStyle="#fff";ctx.fillRect(0,0,w,h);let y=0;
  imgs.forEach((i,idx)=>{ctx.drawImage(i,(w-i.naturalWidth)/2,y);y+=i.naturalHeight+(idx<imgs.length-1?gap:0)});return canvasBlob(c,"image/jpeg",.92);
}
export async function splitGrid(file:File, rows=2, cols=2){
  const img=await loadImage(file), out:Blob[]=[];const cw=Math.floor(img.naturalWidth/cols),ch=Math.floor(img.naturalHeight/rows);
  for(let r=0;r<rows;r++)for(let cidx=0;cidx<cols;cidx++)out.push(await crop(file,cidx*cw,r*ch,cidx===cols-1?img.naturalWidth-cidx*cw:cw,r===rows-1?img.naturalHeight-r*ch:ch,"image/png"));
  return out;
}
export async function compressToTarget(file:File,targetBytes:number){
  const img=await loadImage(file); let scale=1, best:Blob|null=null;
  for(let pass=0;pass<5;pass++){
    const c=canvasFromImage(img,img.naturalWidth*scale,img.naturalHeight*scale);
    let lo=.05,hi=.95;
    for(let i=0;i<9;i++){const q=(lo+hi)/2,b=await canvasBlob(c,"image/jpeg",q); if(b.size>targetBytes)hi=q; else {best=b;lo=q}}
    if(best && best.size<=targetBytes) return best;
    scale*=.82;
  }
  return best??canvasBlob(canvasFromImage(img),"image/jpeg",.6);
}
export function formatBytes(n:number){return n<1024?`${n} B`:n<1048576?`${(n/1024).toFixed(1)} KB`:`${(n/1048576).toFixed(2)} MB`;}

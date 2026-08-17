import {UploadCloud} from "lucide-react";
import {useRef,useState} from "react";
export default function UploadBox({multiple,onFiles}:{multiple?:boolean;onFiles:(files:File[])=>void}){
 const ref=useRef<HTMLInputElement>(null);const [drag,setDrag]=useState(false);
 const accept="image/jpeg,image/png,image/webp,image/heic,image/gif";
 const pick=(f:FileList|null)=>f&&onFiles(Array.from(f));
 return <div className={drag?"upload drag":"upload"} onDragOver={e=>{e.preventDefault();setDrag(true)}} onDragLeave={()=>setDrag(false)} onDrop={e=>{e.preventDefault();setDrag(false);pick(e.dataTransfer.files)}} onClick={()=>ref.current?.click()} role="button" tabIndex={0}>
 <UploadCloud size={34}/><b>Drop image{multiple?"s":""} here</b><span>or tap to choose from your device</span><button type="button" onClick={e=>{e.stopPropagation();ref.current?.click()}}>Choose {multiple?"files":"image"}</button><input ref={ref} hidden type="file" accept={accept} multiple={multiple} onChange={e=>pick(e.target.files)}/><small>JPG, PNG, WEBP and supported browser formats</small></div>
}
import {formatBytes} from "../utils/image";
export default function ImagePreview({file,output}:{file?:File;output?:Blob|null}){
 const [src,setSrc]=React.useState<string>(); const [out,setOut]=React.useState<string>();
 React.useEffect(()=>{if(file){const u=URL.createObjectURL(file);setSrc(u);return()=>URL.revokeObjectURL(u)}},[file]);
 React.useEffect(()=>{if(output){const u=URL.createObjectURL(output);setOut(u);return()=>URL.revokeObjectURL(u)}},[output]);
 if(!file)return null;return <div className="preview-grid"><div><h4>Original</h4>{src&&<img src={src}/>}<small>{formatBytes(file.size)}</small></div>{output&&<div><h4>Processed</h4>{out&&<img src={out}/>}<small>{formatBytes(output.size)}</small></div>}</div>
}
import React from "react";
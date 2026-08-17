import {ArrowRight, Heart} from "lucide-react";
import type {Tool} from "../data/tools";
export default function ToolCard({tool,fav,onFav}:{tool:Tool;fav:boolean;onFav:(id:string)=>void}){
 return <div className="toolcard"><a href={`#/tool/${tool.id}`}><div className="toolicon">{tool.name.slice(0,1)}</div><div className="tooltext"><strong>{tool.name}</strong><small>{tool.description}</small></div><ArrowRight className="arrow" size={18}/></a><button className={fav?"fav active":"fav"} onClick={()=>onFav(tool.id)} aria-label="Favorite">{fav?"♥":"♡"}</button></div>
}
import {ArrowRight, Zap, ShieldCheck, Smartphone} from "lucide-react";
import ToolCard from "../components/ToolCard";import {tools} from "../data/tools";
export default function Home({fav,onFav}:{fav:string[];onFav:(id:string)=>void}){
 const popular=tools.filter(t=>t.popular);
 return <main><section className="hero"><div className="container hero-inner"><div><div className="eyebrow"><Zap size={15}/> FAST • PRIVATE • SIMPLE</div><h1>Powerful Image Tools.<br/><span>Simple to Use.</span></h1><p>Resize, compress, edit, convert and optimize your images online — quickly and easily.</p><div className="hero-buttons"><a className="primary" href="#/tools">Explore All Tools <ArrowRight size={18}/></a><a className="secondary" href="#/tools?cat=Popular">Popular Tools</a></div><div className="trust"><span><ShieldCheck/> Local processing</span><span><Smartphone/> Mobile ready</span></div></div><div className="hero-art"><div className="art-card">IMAGE<br/><strong>TOOLS</strong><small>Resize • Compress • Convert</small></div></div></div></section>
 <section className="section container"><div className="section-head"><div><p className="eyebrow">START HERE</p><h2>Most used tools</h2></div><a href="#/tools">View all <ArrowRight size={16}/></a></div><div className="grid">{popular.map(t=><ToolCard key={t.id} tool={t} fav={fav.includes(t.id)} onFav={onFav}/>)}</div></section>
 </main>
}
import {Moon, Sun, Search, Menu, X} from "lucide-react";
import {useState} from "react";
export default function Header({dark,setDark,query,setQuery}:{dark:boolean;setDark:(v:boolean)=>void;query:string;setQuery:(v:string)=>void}){
 const [open,setOpen]=useState(false);
 return <header className="header"><div className="nav container">
  <a className="brand" href="#/">Prem<span>Tools</span></a>
  <button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
  <nav className={open?"navlinks open":"navlinks"}><a href="#/">Home</a><a href="#/tools">All Tools</a><a href="#/about">About</a><a href="#/contact">Contact</a></nav>
  <div className="nav-actions"><div className="search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search tools..." aria-label="Search tools"/></div><button className="iconbtn" onClick={()=>setDark(!dark)} aria-label="Toggle theme">{dark?<Sun/>:<Moon/>}</button></div>
 </div></header>
}
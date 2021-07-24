import "./intro.scss"
import cover from "../assets/cover.png";
import arrow from "../assets/arrow.png";

export default function Intro() {
  return (
         <div className="intro" id="intro">
               <div className="left">
                 <div className="imgContainer">
                  <img src={cover} alt=""/>
                 </div>
               </div>
                 <dev className="right">
                   <div className="wrapper">
                     <h2>Hello, and Welcome</h2>
                     <h1>To my Personal</h1>
                     <h3>Web Portfolio</h3>
                   </div>
                   <a href="#work">
                     <img src={arrow} alt=""/>
                   </a>
                 </dev>
         </div>  
  );
}



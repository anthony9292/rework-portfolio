 import"./topbar.scss";

import { PhoneAndroid, Email } from "@material-ui/icons";

    export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left"> 
                        <a href="#intro" className="logo"> Portfolio.</a> 
                        <div className="itemContainer">
                            <PhoneAndroid className="icon"/>
                            <span>613-501-4892</span>
                        </div>
                        <div className="itemContainer"> 
                         <Email className="icon"/> 
                         <span>anthon.n24@gmail.com</span>
                        </div>
                </div>
                <div className="right">
                    {/*set method* for menu animations*/}
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </div> 
                </div>
            </div>
        </div>
    );
}

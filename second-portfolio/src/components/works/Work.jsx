import { useEffect, useState } from "react";
import WorkList from "../workllist/WorkList";
import "./work.scss";
import {
  Projects,
  NetworkHub,
 Socials,
} from "../../data";

export default function Work() {
  const [selected, setSelected] = useState("Projects");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "projects",
      title: "Projects",

    },
    {
      id: "network",
      title: "Network Hub",
    },
    {
      id: "socials",
      title: "Social Hub",
    },

    {
        id:1 
    }
    
    
  ];

  useEffect(() => {
    switch (selected) {
      case "projects":
        setData(Projects);
        break;
      case "network":
        setData(NetworkHub);
        break;
      case "socials":
        setData(Socials);
        break;
      default:
        setData(Projects);
    }
  }, [selected]);

  return (
    <div className="work" id="work">
      <h1>Portfolio Hub</h1>
      <ul>
        {list.map((item) => (
          <WorkList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container" >
        {data.map((d) => (
          <div className="item"  >
            <img 
              src={d.img}
              alt=""
             />
             {/*onClick event to bring in ulr from data.js and display it on new windows*/}
            <h3 onClick={()=> window.open(d.url, "_blank").focus()}>{d.title}</h3>
            
          </div>
        ))}
      </div>
    </div>
  );
}
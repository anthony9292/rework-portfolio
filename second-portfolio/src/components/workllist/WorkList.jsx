import "./workList.scss"

export default function WorkList({ id, title, active, setSelected }) {
    return (
     <li 
    className={active ? "workList active" : "workList"} 
    //on click effect to grab list id and display
    onClick={() => setSelected(id)}
      >
            {title}
        </li>
    );
}


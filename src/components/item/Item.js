import { useState } from "react";

function Item(props) {
    const [title, setTitle] = useState(props.title);
    const changeIt = () => {
       setTitle("updated" + title);
       console.log(title);
        
    };
   
    return (
      <div>
        {title}
        <button onClick={changeIt}>change</button>
      </div>
    );
  }
  
  export default Item;
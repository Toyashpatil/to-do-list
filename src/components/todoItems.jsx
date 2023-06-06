import React from "react";


function ToDo(props){

    return(<div>
        <li onClick={()=>{props.onChecked(props.id)}}>
        {props.text}
        </li>
    </div>
         
    );
}

export default ToDo;
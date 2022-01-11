import TextField from "./Textfield";
import TodoList from "./TodoList";
import { useState } from "react";

const Container = () => {

    const [currentItems, setCurrentItems] = useState([]);
    return ( 
        <div className="container">
            <TextField currentItems={currentItems} setCurrentItems={setCurrentItems}/>
            <TodoList currentItems={currentItems} setCurrentItems={setCurrentItems}/>
        </div>
    );
}
 
export default Container;
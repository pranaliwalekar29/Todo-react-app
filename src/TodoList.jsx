import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdDeleteForever, MdOutlineDeleteForever } from "react-icons/md";
export const TodoList= ({data,checked,onHandleDeleteTodo,onHandleCheckedTodo})=>{
    return(
    <li className="todo-item">
        <span className={checked ? "checkList":"nonCheckList"}>{data}</span>
            <button className="checkButton" onClick={()=>onHandleCheckedTodo(data)}><IoCheckmarkDoneSharp/></button>
            <button className="deleteButton" onClick={()=>onHandleDeleteTodo(data)}><MdDeleteForever/></button>
    </li>
    );
}
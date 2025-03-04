import { useState } from "react";
export const Todoform = ({onAddTodo}) =>{
    const [inputValue,setInputValue]=useState({});

     //initailly the valye was "" but using this we are setting the input to our setinput value 
     const handleInputChange= (value)=>{
        setInputValue({id:value,content:value,checked:false});
    };

    const handleFormSubmit = (event) => {
        //child to parent connection i.e have to call parent function here
        event.preventDefault();//prevent the auto submitting of form
        onAddTodo(inputValue);
         //after entering the input and pressing the AddTask button the value is set to "" 
        setInputValue({id:"",content:"",checked:"false"});
    };

    return(
        <section className="form">
        <form onSubmit={handleFormSubmit}>
        <div>
            <input 
            type="text" 
            autoComplete="off"
            className="todo-input" 
            value={inputValue.content} 
            onChange={(event) => handleInputChange(event.target.value)}>
            </input>
        </div>
        <div>
            <button type="submit" className="todo-btn">ADD TASK</button>
        </div>
        </form>
    </section>
    )
}
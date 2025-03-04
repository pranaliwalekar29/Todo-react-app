const todoKey="reactTodo";
export const getLocalStorageTodoData = () => {
    const rawTodo = localStorage.getItem(todoKey);
        return rawTodo ? JSON.parse(rawTodo) : []; // ✅ Prevents JSON parse error
    
};


export const setLocalStorageTodoData = (task)=>{
    return localStorage.setItem(todoKey,JSON.stringify(task));

}
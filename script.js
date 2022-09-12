// Project using Event Delegation 

const todoForm=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list");

const todoBtnDone=document.querySelector(".Done");

const todoBtnRemove=document.querySelector("Remove");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const InputEl=todoInput.value;
    const newLi=document.createElement("li");
    const newLiInnerText=`
    <span class="text">${InputEl}</span>
    <div class="todo-buttons">
        <button type="button" class="todo-btn Done">Done</button>
        <button type="button" class="todo-btn Remove">Remove</button>
    </div>`;

    newLi.innerHTML=newLiInnerText;
todoList.append(newLi);
todoInput.value="";
});

todoList.addEventListener("click",(e)=>{
    //check if user clicked on done
    if(e.target.classList.contains("Remove")){
       const liRemove=e.target.parentNode.parentNode;
       liRemove.style.display="none";
        
    }
    if(e.target.classList.contains("Done")){
        const liSpan=e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through";
    }
})
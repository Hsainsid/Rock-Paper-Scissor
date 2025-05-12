const todoList = [{
    name:'make dinner',
    dueDate:'2022-12-22'
},
{
    name:'wash dish',
    dueDate:'2022-12-22'
}];

renderTodolist();

function renderTodolist() {
let todolistHTML = '';

todoList.forEach(function(todoObject, index ){
    //const todoObject = todoList[i]; //mentiond todoObject in line 15 hence no need to get it from arrya now
    const{name ,dueDate} = todoObject;

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick = "
            todoList.splice(${index}, 1);
            renderTodolist();
        " class = 'delete-css'>Delete</button>
        <`;  
        todolistHTML += html;
});

document.querySelector('.js-todo-list')
    .innerHTML= todolistHTML;
}

function addTodo() {
 const inputElement = document.querySelector ('.js-name');  
 const name = inputElement.value;

 const dateInputElement = document.querySelector
 ('.js-dueDate');
const dueDate = dateInputElement.value

 todoList.push({
    // name: name,
    // dueDate : dueDate
    name,dueDate
});

 inputElement.value=''  //reset the name to "To do name " wont show value once it adds
renderTodolist();
}

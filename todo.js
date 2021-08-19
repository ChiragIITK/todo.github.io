
var addButton = document.getElementById("addButton");
var toDoList = document.getElementById("toDoList");
var todoInput = document.getElementById("todoInput");
var todoDate = document.getElementById("tododate");

function markAsDone(event){
    if (event.target.innerHTML === "Done") {
        event.target.parentElement.parentElement.classList.add("markAsDone");
        event.target.innerHTML = "UnDone"
    }
    else {
        event.target.parentElement.parentElement.classList.remove("markAsDone")
        event.target.innerHTML = "Done"
    }
    event.target.parentElement.parentElement.classList.remove("markAsProg")
}

function markAsProg(event){
    event.target.parentElement.parentElement.classList.add("markAsProg");
}

function edittodo(event){
    var x1 = event.target.parentElement.parentElement.firstChild.firstChild.innerHTML;
    var newtext = prompt("Update Task Name");
    if (newtext === null){
        newtext = x1
    }
    event.target.parentElement.parentElement.firstChild.firstChild.innerHTML = newtext
}


function deltodo(event){
    event.target.parentNode.parentNode.remove();
}

function clearList(){
    toDoList.innerHTML ="";
}

function addToDoList(){
    if (todoInput.value === ""){

        alert("No Task Entered!!")

    } else{
        var toDoMain = document.createElement('div');
        toDoMain.id = String(Math.random());
        toDoMain.classList.add("todomain")

        var todo = document.createElement('div');

        var taskname = document.createElement('div');
        taskname.appendChild(document.createTextNode(todoInput.value));
        taskname.classList.add("taskstyle")

        var date = document.createElement('div');
        if (todoDate.value !== ""){
            date.appendChild(document.createTextNode("Due by: "+todoDate.value));
        }
        date.classList.add("datestyle");

        todo.appendChild(taskname);
        todo.appendChild(date);

        todo.classList.add("todostyle")

        var todoFunctions = document.createElement('div');

        var todoEdit = document.createElement('button');
        todoEdit.appendChild(document.createTextNode('Edit'));
        todoFunctions.appendChild(todoEdit);
        todoEdit.addEventListener("click", edittodo );
        todoEdit.classList.add("buttonstyle");

        var todoProg = document.createElement('button');
        todoProg.appendChild(document.createTextNode('In Progress'));
        todoFunctions.appendChild(todoProg);
        todoProg.addEventListener("click", markAsProg );
        todoProg.classList.add("buttonstyle");

        var todoDone = document.createElement('button');
        todoDone.appendChild(document.createTextNode('Done'));
        todoFunctions.appendChild(todoDone);
        todoDone.addEventListener("click", markAsDone );
        todoDone.classList.add("buttonstyle");

        var todoX = document.createElement('button');
        todoX.appendChild(document.createTextNode('X'));
        todoFunctions.appendChild(todoX);
        todoX.addEventListener("click", deltodo );
        todoX.classList.add("buttonstyle");

        todoFunctions.classList.add("todofn");

        toDoMain.appendChild(todo);
        toDoMain.appendChild(todoFunctions);

        toDoList.appendChild(toDoMain);
        toDoList.classList.add("liststyle")
    }

    document.querySelector("#todoInput").value = '';
    document.querySelector("#tododate").value = '';
}


addButton.addEventListener("click", addToDoList );
delAll.addEventListener("click", clearList );

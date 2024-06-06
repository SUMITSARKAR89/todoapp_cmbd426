document.getElementById('add').onclick = function (){
    if (document.querySelector('#todo-content input').value.length == 0){
        alert('Please write your task details and press add button')
    }else {document.getElementById('todo-list').innerHTML += 
        `<div class="task">
            <span id="task-name">
            ${document.querySelector('#todo-content input').value}
            </span>
            <button id="delete">Del</button>
        </div>
        `;

       

    }

    //this is for delete
    let newTask = document.querySelectorAll('#delete');
    for (let a=0; a<newTask.length; a++){
        newTask[a].onclick = function(){
            this.parentNode.remove();
        }
    }
} 
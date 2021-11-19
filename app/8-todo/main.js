    let formElement = document.getElementById('form'),
        todoContainer = document.getElementById('todo-container');

    function addTask(e){
        e.preventDefault();
    //get input value
    let todoTaskEle = document.getElementById('todo-task'),
        todoValue = todoTaskEle.value,
    //create new li element
        liEle = document.createElement('li'),
    //create new span element
        spanEle = document.createElement('span'),
    //create a element for 'done' 
        doneEle = document.createElement('a'),

    //create a element for 'edit' 
        editEle = document.createElement('a'),

    //create a element for 'delete' 
        deleteEle = document.createElement('a');

    //add input value inside the <span>text</span>
        spanEle.innerHTML = todoValue;
    
    //create class name for each a tag
    doneEle.classList.add('done-btn');
    editEle.classList.add('edit-btn');
    deleteEle.classList.add('delete-btn');

    //add link for each a tag
    doneEle.setAttribute('href', '#');
    editEle.setAttribute('href', '#');
    deleteEle.setAttribute('href', '#');

    //add text for each a tag
    doneEle.innerHTML = 'Done';
    editEle.innerHTML = 'Edit';
    deleteEle.innerHTML = 'Delete';

    //add click event for all the links

    //insert span tag and other links inside li
    liEle.appendChild(spanEle);
    liEle.appendChild(doneEle);
    liEle.appendChild(editEle);
    liEle.appendChild(deleteEle);
    //insert li tag inside ol
    todoContainer.append(liEle);
    todoTaskEle.value = '';
    
    }

//on form submit

formElement.addEventListener('submit', addTask);
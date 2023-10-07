// javascript code goes here

function addTask(event){
    event.preventDefault()
    const inputNode=document.getElementsByClassName('todo-input')[0]
    const task=inputNode.value
    const divNode=document.createElement('div')
    const listNode=document.createElement('li')
    listNode.innerText=task
    listNode.setAttribute('class','todo-item')
    const createButton=document.createElement('button')
    createButton.innerText='Completed'
    createButton.setAttribute('class','btn')
    const deleteButton=document.createElement('button')
    deleteButton.innerText='Delete'
    deleteButton.setAttribute('class','btn')
    //Push li and button inside DIV
    divNode.appendChild(listNode)
    divNode.appendChild(createButton)
    divNode.appendChild(deleteButton)
    //Fetch UL and append div element
    const ulNode=document.getElementsByClassName('todo-list')[0]
    ulNode.appendChild(divNode)
    //add complete fuctionality button
    addCompleteFunction(createButton,listNode)
    addDeleteFunction(deleteButton,divNode)


}
const addButton=document.getElementsByClassName('todo-button')[0]
addButton.addEventListener('click',addTask)

function addCompleteFunction(createButton,listNode){
    createButton.addEventListener('click',function(){
        if(listNode.style['text-decoration']!==''){
            listNode.style['text-decoration']=''
        }else{
            listNode.style['text-decoration']='line-through solid rgb(0, 0, 0)'
        }
    })
}

function addDeleteFunction(deleteButton, divNode){
    deleteButton.addEventListener('click',function(){
        divNode.remove()
    })
}
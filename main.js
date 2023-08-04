const input = document.getElementById('input')
const btn = document.getElementById('btn')
const toDoList = document.getElementById('toDoList')

btn.addEventListener('click',()=>{
    const data = input.value
    toDoList.innerHTML +=  `<div class="container border h-100 " id="item">
    <span id="checkbox" >
       <input type="checkbox" name="" id="checkItem">
    </span>
<span class="container">${data}</span>`
})
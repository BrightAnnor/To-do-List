const input = document.getElementById('input')
const btn = document.getElementById('btn')
const toDoList = document.getElementById('toDoList')

btn.addEventListener('click',()=>{
    const data = input.value
    if(data.trim() < 1){
        // const body = document.getElementById('cont') 

        toDoList.innerHTML =`
            <div class="position-absolute top-50 start-50 translate-middle border fs-1 text-center p-5" style="background-color: azure; width: 400px;height: 200px;border-radius: 30px; color:red; font-weight:bolder;">
            Please Type What You Want To Do
        
        </div> `
    }else{
    toDoList.innerHTML += `<div class="container p-2 w-50 fs-5 mt-3"  style="background-color: white;border-radius: 30px;">
    <div class="container  h-100 " id="item">
        <span id="checkbox" >
        <input type="checkbox" name="" id="checkItem">
        </span>
        <span class="container">${data}</span>

    </div>

</div>`

    }
    
})
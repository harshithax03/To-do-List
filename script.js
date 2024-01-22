console.log("hello")
// ---> Select and get all elements from html doc
const form = document.querySelector('#new-item-form')
const input = document.querySelector('#item-input')
// const button = document.querySelector('#btn')
const taskContainer = document.querySelector('.task-container')
// --->When the form is submitted the items should be 
// added and displayed into tasks container
form.addEventListener('submit', e =>{
    e.preventDefault()
    // 1.create a new item
      let task = document.createElement('div')
    task.innerText = ` ${'👉'}  ${input.value}`
    const btn = document.createElement('button')
    // 2. append del btn to task 
    btn.innerText = '✅'
    btn.classList.add('task-btn')
    task.appendChild(btn)
    // 2.add and display item in the list
    taskContainer.appendChild(task)
    // 3. add del event to btn
    btn.addEventListener('click', () => {
    taskContainer.removeChild(task)   
    })
    
    // 4.clear input
    input.value= ''

   
})
// --->When item is clicked a strike through should appear

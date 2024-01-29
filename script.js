const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const listContainer = document.querySelector('[data-lists]')
const listBtn = document.querySelector('#list-btn')
const deleteListBtn = document.querySelector('[data-delete-list-btn]')
// creating a variable to hold all of lists in myList element
// list of list
const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) ||[]
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

listContainer.addEventListener('click', e =>{
  console.log(e.target.tagName)
  if(e.target.tagName.toLowerCase() === 'li'){
    selectedListId = e.target.dataset.listId
    saveAndRender()
    console.log(selectedListId)
  }
})
deleteListBtn.addEventListener('click', e =>{
  lists = lists.filter(list => list.id !== selectedListId)
  selectedListId = null
  saveAndRender()
})

newListForm.addEventListener('submit', e=>{
  e.preventDefault()
  const listName =newListInput.value
  if (listName == null ||listName === '') return
  const list = createList(listName)
  newListInput.value = null
  lists.push(list)
  // console.log(list)
  saveAndRender()
})
function createList(name){
  return {id:Date.now().toString(), name: name, tasks:[]}
}
function save(){
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
}
function saveAndRender(){
  save()
  render()
}
function render() {
  clearElement(listContainer)
  lists.forEach(list =>{
    const listElement = document.createElement('li')
    listElement.dataset.listId = list.id
    listElement.classList.add('list-name')
    listElement.innerText = list.name
    if (list.id === selectedListId) {
      listElement.classList.add('active-list')
    }
    
    listContainer.appendChild(listElement)
  })
  // console.log(lists)
}
function clearElement(element){
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}
render()


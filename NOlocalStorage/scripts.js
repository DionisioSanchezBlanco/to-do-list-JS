let btnAdd = document.getElementById("add-task-button");
let inputTask = document.getElementById("input-task");
let itemList = document.querySelectorAll("li");

function addTask(newTask){
  let tag = document.createElement("li");
  let itemInput = document.createElement("input");
  let itemSpan = document.createElement("span");
  let itemButton = document.createElement("button");
  
  // define types
  itemInput.type = "checkbox";
  
  // define classes
  itemSpan.className = "task";
  itemButton.className = "delete-btn";
  
  itemSpan.appendChild(
    document.createTextNode(newTask)
  );
  
  let ele = document.getElementById('task-list')
  ele.appendChild(tag);
  tag.appendChild(itemInput);
  tag.appendChild(itemSpan);
  tag.appendChild(itemButton);
  itemButton.addEventListener('click',function (e) {
        e.currentTarget.parentNode.remove();
    });
  itemInput.addEventListener('click', function (e){
    let styleEle = getComputedStyle(itemSpan).textDecoration;
  
    if (styleEle == "line-through solid rgb(0, 0, 0)"){
     itemSpan.style.textDecoration = "none"; 
      console.log('ok');
    } else{
      itemSpan.style.textDecoration = "line-through";
    }
  });
}

btnAdd.addEventListener("click", function(){
  let newTask = inputTask.value;
  addTask(newTask);
  inputTask.value = '';
});

// To remove original data
function removeList(){
 let btnDelete = document.querySelectorAll(".delete-btn");
  for (let i = 0; i < btnDelete.length; i++){
    btnDelete[i].addEventListener("click", function(e){
      e.currentTarget.parentNode.remove();
    });
  } 
} 
removeList();

function line(){
  let spTask = document.querySelectorAll("input");
  let spTaskSpan = document.querySelectorAll("span");
  console.log(spTask);
  for (let i = 1; i < spTask.length; i++){
    spTask[i].addEventListener("click", function(){
      //spTaskSpan[i].style.textDecoration = "line-through";
         let styleEle = getComputedStyle(spTaskSpan[i]).textDecoration;
  
    if (styleEle == "line-through solid rgb(0, 0, 0)"){
     spTaskSpan[i].style.textDecoration = "none"; 
      console.log('ok');
    } else{
      spTaskSpan[i].style.textDecoration = "line-through";
    }
    });
  }
}

line();

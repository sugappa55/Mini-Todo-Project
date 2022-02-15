

var arr=JSON.parse(localStorage.getItem("task"))||[]


function addTask(event){
    event.preventDefault()


   var Task={
       task:document.querySelector("#name").value,
       time:document.querySelector("#time").value,
     priority:document.querySelector("select").value
   }
   arr.push(Task)

   localStorage.setItem("task",JSON.stringify(arr))

}


 var task_data = JSON.parse(localStorage.getItem("task"))
appendTasks(task_data)






/*                   appending data                 */


function appendTasks(arr){
    
    var tbody=document.querySelector("tbody")

    tbody.innerHTML=""
    //  console.log(body)
    arr.forEach(function(elem,index){
        
var row=document.createElement("tr")

var col1=document.createElement("td")


  col1.textContent=index+1

var col2=document.createElement("td")


col2.textContent=elem.task



var col3=document.createElement("td")


col3.textContent=elem.time


var col4=document.createElement("td")


col4.textContent=elem.priority


var col5=document.createElement("td")


if(elem.status=="Done")
{
    col5.textContent=elem.status
    col5.style.backgroundColor="green"

}
else 
{
    col5.textContent="Pending"
     col5.style.border="1px solid red"
}
var col6=document.createElement("td")

col6.textContent="Delete"

col6.addEventListener("click",function(){


    arr.splice(index,1)


    localStorage.setItem("task",JSON.stringify(arr))


    appendTasks(arr)
    filter()
})

var col7=document.createElement("td")

if(col5.textContent == "Pending") col7.textContent="Done"
else col7.textContent="Pending"


col7.setAttribute("class" , "hover")

col7.addEventListener("click",function(){
    
    
    
    elem.status=col7.textContent
localStorage.setItem("task",JSON.stringify(arr))
      appendTasks(arr)
      filter()
    
})

  row.append(col1,col2,col3,col4,col5,col6,col7)

tbody.append(row)  

})

}






/*          filtering array          */

function filter(){
    var completed=  task_data.filter(function(elem){
        return elem.status=="Done"
    })
    
    localStorage.setItem("completed_tasks",JSON.stringify(completed))

}
filter()

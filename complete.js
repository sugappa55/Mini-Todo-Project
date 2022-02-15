var completed_tasks=JSON.parse(localStorage.getItem("completed_tasks"))


appendTasks(completed_tasks)

function appendTasks(arr){
    
    var tbody=document.querySelector("tbody")

    tbody.innerHTML=""
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




var col6=document.createElement("td")

col6.textContent="Delete"

col6.addEventListener("click",function(){


    arr.splice(index,1)


    localStorage.setItem("completed_tasks",JSON.stringify(arr))


    appendTasks(arr)
})



  row.append(col1,col2,col3,col4,col6)

// var tr=document.createElement("tr")
tbody.append(row)  

})

}

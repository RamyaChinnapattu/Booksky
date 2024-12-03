var a=document.querySelector(".overlay")
var b=document.querySelector(".popup")
var c=document.getElementById("plus")
c.addEventListener("click",function(){
    a.style.display="block"
    b.style.display="block"
}
)
var d=document.getElementById("cancel")
d.addEventListener("click",function(event)
{
    event.preventDefault()
    a.style.display="none"
    b.style.display="none"
})
var e=document.querySelector(".container")
var f=document.getElementById("add")
var g=document.getElementById("booktitle")
var h=document.getElementById("author")
var i=document.getElementById("des")
f.addEventListener("click",function(event)
{
    event.preventDefault()
    var j=document.createElement("div")
    j.setAttribute("class","con-inside")
    j.innerHTML=`<h2>${g.value}</h2>
    <h4>${h.value}</h4>
    <p>${i.value}</p>
    <button onclick="del(event)">DELETE</button>`
    e.append(j)
    a.style.display="none"
    b.style.display="none"

})
function del(event)
{
    event.target.parentElement.remove()
}


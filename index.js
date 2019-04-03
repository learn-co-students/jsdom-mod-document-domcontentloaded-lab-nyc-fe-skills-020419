
let div = document.getElementById("hidden-div")

document.addEvenetListener("DOMContentLoaded", replaceText(div))


function replaceText(innerDiv){
  innerDiv.innerHTML = "301"
}

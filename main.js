var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDosContainer");
var inputField = document.getElementById("inputField");
let notice = document.getElementById("notice");


addToDoButton.onclick = function () {
    var paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;

    if (paragraph.innerText.length == 0) {
        notice.style.display = "block";
        //remove the notice after 3 seconds
        setTimeout(function () {
          notice.style.display = "none";
        }, 3000);
      }else {
        toDoContainer.appendChild(paragraph);
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        paragraph.appendChild(span);

        inputField.value = "";
        paragraph.onclick = function () {
            paragraph.classList.toggle("checked");
        }
        span.onclick = function () {
            toDoContainer.removeChild(paragraph);
          };
        
    }
}
let submit = document.querySelector("#submit-btn");
let del = document.querySelectorAll(".del-btn");
let search = document.querySelector("#search-input");
let form = document.querySelector("form");
let ul = document.querySelector("ul");


// Events
form.addEventListener('submit', addNewItem);
ul.addEventListener('click', delItem)
search.addEventListener('keyup' , searchItem)
//functions
function addNewItem(e) {
    e.preventDefault();
    let li = document.createElement("li");
    let textInput = document.querySelector("#text-input").value;
    let newDelBtn = document.createElement("button");
    if (textInput !== "") {
        li.className = "list-item";
        newDelBtn.className = "del-btn";

        li.appendChild(document.createTextNode(textInput));
        newDelBtn.appendChild(document.createTextNode("X"));
        li.appendChild(newDelBtn);

        ul.appendChild(li);
    } else {
        submit.preventDefault()
    }
}

function delItem(e) {
    if (e.target.classList.contains("del-btn")) {
        if (confirm("Are You Sure")) {
            let li = e.target.parentElement;
            ul.removeChild(li)
        }
    }
}

function searchItem(e){
    
//search item by filter method?

    let text = e.target.value.toLowerCase();
    text.filter(function ele(){

    })


}
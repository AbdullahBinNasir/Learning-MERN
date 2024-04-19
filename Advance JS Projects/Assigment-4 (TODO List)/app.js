
let input = document.getElementById("input")
let addBtn = document.getElementById("add")
let ulList = document.getElementById("unOrderList")
let delAll = document.getElementById("delAll")
let editing = document.getElementById("editing")

// Add Items In Todo
function add(){
    
    let li = document.createElement("li")

    li.textContent = input.value;
    
    
    
    // Delete Icon
    let del = document.createElement("i")
    del.setAttribute("class" , "fa-solid fa-trash")
    del.setAttribute("onclick" , "delSpecific(this)")
    
    // Edit Icon
    let editIcon = document.createElement("i")
    editIcon.setAttribute("class", "fa-solid fa-pen")
    editIcon.setAttribute("onclick", "editSpecific(this)")
    
    if(input.value == ""){
        alert("Please Enter Value To Add It")
    }else{

        
        li.appendChild(editIcon)
        li.appendChild(del)
        ulList.appendChild(li)
        
        input.value = ""
    } 
        
    }
    
    // Delete All Items From Todo

function DelAll(){
        ulList.textContent = ""
}

// Delete Clicked Item From Todo
function delSpecific(e){
    e.parentNode.innerHTML = ""
}


function editSpecific(e) {
    let listItem = e.parentNode;

    // Create a new input element
    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.value = listItem.textContent.trim();
    newInput.style = "background-color:transparent"
    newInput.style.border = "none"
    newInput.style.outline = "none"
    newInput.style.color = "white"
    newInput.style.textAlign = "center"

    // Create a save button
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Edit";
    saveBtn.style = "background-color:aqua"
    saveBtn.style.border = "none"
    saveBtn.style.borderRadius = "25px"
    saveBtn.style.paddingRight = "15px"
    saveBtn.style.paddingLeft = "15px"
    saveBtn.style.outline = "none"
    saveBtn.style.color = "black"
  

    saveBtn.style.textAlign = "center"
    saveBtn.setAttribute = ("onmouseover" , "textDeco()")
    saveBtn.addEventListener("click", function () {
        listItem.textContent = newInput.value;


        // Delete Icon
        let del = document.createElement("i")
        del.setAttribute("class" , "fa-solid fa-trash")
        del.setAttribute("onclick" , "delSpecific(this)")
        
        // Edit Icon
        let editIcon = document.createElement("i")
        editIcon.setAttribute("class", "fa-solid fa-pen")
        editIcon.setAttribute("onclick", "editSpecific(this)")
        
        listItem.appendChild(editIcon)
        listItem.appendChild(del)
    });
    
    
    
    listItem.innerHTML = "";
    
            listItem.appendChild(newInput);
            listItem.appendChild(saveBtn);
    
    }

 function textDeco(e){
    e.style.textDecoration = "underline"
    e.style.cursor = "pointer"
    e.style.color = "red"
 }
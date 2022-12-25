const addInput = document.getElementById("add_input");
const itemsList = document.getElementById("items_list")

function removeItem(e) {
    const removeParent =  e.parentNode;
    removeParent.remove();
}

addInput.addEventListener("keyup", e => {
    const inputValue = addInput.value;
    if(e.keyCode === 13 && inputValue.length > 0) {
        const newItem = document.createElement("li");
        newItem.classList.add("items");
        newItem.innerText = inputValue;


        const delBtn = document.createElement("button");
        delBtn.classList.add("del_btn");
        delBtn.setAttribute("key", inputValue);
        delBtn.innerText = "Usuń";
        delBtn.setAttribute("onClick", "removeItem(this)");

        itemsList.appendChild(newItem);
        newItem.appendChild(delBtn);
        
        
    }
})
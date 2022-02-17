


const groceries = document.getElementsByClassName("groceries")[0];
const pen = document.getElementById("pen");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("usersInput");

pen.addEventListener("click", function(){

 allItems.innerHTML = "";
 
})

userInput.addEventListener("keydown", function(event){

if(event.key == "Enter"){
    addItem();
}



})

function addItem(){

     var h2 = document.createElement("h2");
      h2.innerHTML = "- " + userInput.value;

      h2.addEventListener("click", function(){
      if(allItems.style.textDecoration != "line-through"){
      h2.style.textDecoration = "line-through";
    } else {
       h2.style.textDecoration = "none";
      
    }

    })

    allItems.insertAdjacentElement("beforeend", h2);

    userInput.value = "";



}


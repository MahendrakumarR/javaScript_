function task() {
    var input = document.getElementById("txt").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    var text = document.createTextNode(input);
    li.appendChild(text);

     // Apply styles to the list item
     li.style.textAlign = "center";
     li.style.color= "red";
     li.style.backgroundColor = "lightblue";
     li.style.display = "flex";
     li.style.alignItems = "center"; // Center-align the text vertically
     li.style.justifyContent = "center"; // Center-align the text horizontally
     li.style.wordBreak = "break-word"; // Allow long words to break and wrap to next line
     li.style.padding= "20px";
     li.style.border="2px solid black";
     li.style.fontSize="20px";
     li.style.borderRadius= "10px";
     li.style.marginTop="10px";
     
 

    // Add a click event listener to mark task as completed
    li.addEventListener("click", function() {
        if (li.classList.contains("completed")) {
            li.classList.remove("completed");
        } else {
            li.classList.add("completed");
        }
    });

    // Add a button to delete the task
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    // Apply styles to the delete button
    deleteButton.style.color = "darkorange";
    deleteButton.style.border = "none";
    deleteButton.style.backgroundColor = "transparent"; // Set background color to transparent
    deleteButton.style.marginLeft = "10px";            // Add left margin for spacing
    deleteButton.style.fontSize="20px";
    deleteButton.style.backgroundColor = "lightgreen";
    deleteButton.style.border="2px solid black";
    deleteButton.style.borderRadius= "5px";
    deleteButton.style.marginTop="10px";
    

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    document.getElementById("txt").value = "";
}

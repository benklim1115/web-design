let input = prompt("What would you like to do?");
const todos = ["Enter a new to do"];

while(input !== "quit" && input !== "q") {
    /* CHECK ITEMS IN LIST */
    if(input === "list"){
        console.log("******************");
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("******************");
        /* NEW ITEM IN LIST */
    } else if(input === "new") {
        const newToDo = prompt("Ok, what is the new to do?");
        todos.push(newToDo);
        console.log(`${newToDo} added to the list!`);
        /* DELETING ITEM IN LIST */
    } else if(input === "delete") {
        const index = parseInt(prompt("Ok, enter an index to delete:"));
        if(!Number.isNaN(index)) {
        const deleted = todos.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index!");
        }
    }
    input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app!");
let todo=[];

let req= prompt("please enter your request");

while (true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }

    if(req=="list"){
        console.log("_______________");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
    }
    console.log(":______________");
    }
    
    else if(req=="add")
    
        {
        let task = prompt("please enter the task that you want to do");
    todo.push(task);
    console.log("task added");
    } 
    
    else if(req=="delete")
        {
        let idx=prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");
    } 
    
    else{
        console.log("wrong request");
    }
    req=prompt("please enter your request");
}




// let todo = [];
// let req = prompt("Please enter your request (list/add/delete/quit)");

// while (true) {
//     if (req === "quit") {
//         console.log("Quitting app...");
//         break;
//     }

//     if (req === "list") {
//         console.log("_______________");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(`${i}: ${todo[i]}`);
//         }
//         console.log("_______________");
//     } else if (req === "add") {
//         let task = prompt("Please enter the task that you want to add:");
//         todo.push(task);
//         console.log("Task added successfully!");
//     } else if (req === "delete") {
//         let idx = parseInt(prompt("Please enter the index of the task to delete:"));
//         if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
//             todo.splice(idx, 1);
//             console.log("Task deleted successfully!");
//         } else {
//             console.log("Invalid index. No task deleted.");
//         }
//     } else {
//         console.log("Invalid request. Please try again.");
//     }

//     req = prompt("Please enter your request (list/add/delete/quit)");
// }

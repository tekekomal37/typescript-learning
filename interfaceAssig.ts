interface Task{
    title : string;
    description ?: string;
    completed ?: boolean;    
}

let task1 : Task = {
    title: "Finish project report",
    // description: "",
    //  completed: false
}

let task2 : Task = {
    title: "Buy groceries",
    description: "Milk, bread, eggs",
    // completed: false
}

let task3 : Task ={
    title: "Clean room",
    description: "Vacuum, dust,mop",
    completed: true
}
console.log(task1);
console.log(task2);
console.log(task3);



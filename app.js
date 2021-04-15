const fs = require('fs'); //require is a func that pulls modules to use it
const chalk = require('chalk');
const yargs = require('yargs');
const argv = yargs.argv;
console.log(`\n=== ${chalk.cyanBright('Todo App by Zak Lunched')} ===\n`);
const Todo = require('./todo');

//Get command
// const command = yargs._[0]; //first option
//if command is add
const command = argv._[0];
if (command == 'add') {
    //fetch title
    // let title = process.argv[4];
    // //fetch body
    // let body = process.argv[6];
    //addTodo()
    Todo.add(argv.title, argv.body)
    console.log(chalk.greenBright('Todo Created'));
}

if (command == 'list-all') {
    //fetch all data
    const db = Todo.list();
    //print all data
    //for each changes index 
    db.forEach((todo, index) => console.log(`[${index}]: ${todo.title}`));
}
if (command == 'list-completed') {
    //fetch all data
    const checkedItems = Todo.checkedItems();
    
    //print all data
    //for each changes index 
    checkedItems.forEach((todo) => console.log("Title: ",todo.title ,"  Body: ", todo.body ,"   checked: ", todo.completed));
}
if (command == 'list-uncompleted') {
    //fetch all data
    const uncheckedItems = Todo.uncheckedItems();
    
    //print all data
    //for each changes index 
    uncheckedItems.forEach((todo) => console.log("Title: ",todo.title ,"  Body: ", todo.body ,"   checked: ", todo.completed));
}
if (command == 'show') {
    //fetch index option
    let index = yargs.index;
    console.log(Todo.show(index));

}
if (command == 'remove') {
    //fetch index option
    const itemDeleted = Todo.remove(argv.id);
    const msg = itemDeleted ? 'Item was deleted' : 'Item not found';
    console.log(chalk.greenBright(msg));

}
if (command == 'toggle') {
    //fetch index option
    let index = process.argv[4];
    //toggle todo completed status
    Todo.toggle(index)
    console.log(chalk.greenBright('Todo Completed Status Updated'));

}
if (command == 'edit') {
    Todo.editItem(argv.id , argv.title , argv.body, argv.completed);
}
    

function addTodo(title,body) {
    //Fetch todos from db.json file
    const db = JSON.parse(fs.readFileSync('./db.json')); //returns buffer ,need to convert json 

    //loop thro id to inc
    //db[i] = first object {id:1;title;etc}
    var maxID = 0;
    for(i=0; i<db.length; i++)
        if(db[i]["id"] > maxID)
            maxID = db[i]["id"];
    //create new todo object use es6 
    const newTodo = {
        id: maxID+1,
        title,
        body,
        completed : false,
    }
    //merge old data wihh new todo
    db.push(newTodo);

    // Write todos to db.json file
    fs.writeFileSync('./db.json',JSON.stringify(db));

}



// Todo
// --Title
// --Body
// -- Completed or not
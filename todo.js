const fs = require('fs');
module.exports = {
    //create method
    add(title,body) {
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
        this.save(db);    
    },

    //list method
    list() {
       return JSON.parse(fs.readFileSync('./db.json')); 
    },
    //show method
    show(index) {
        const db = this.list(); //this refers to object method.exports

        return db[index];
    },
    // remove method
    remove(id) {
        // Fetch All Data
        const db = this.list();
        const filteredtodos = db.filter((todo) => todo.id !== id);
        fs.writeFileSync('./db.json', JSON.stringify(filteredtodos));   
        return db.length !== filteredtodos.length;
        // Remove Todo By Index
        // db.splice(index, 1); //remove one
        //hatrg3 kolo m3ada 

        // Save Data
        
    },
    save(data) {
        fs.writeFileSync('./db.json', JSON.stringify(data))
    },
    // Update Completed Status Method
    toggle(index) {
        // Fetch All Data
        const db = this.list();
        
        // Fetch Todo by Index
        const todo = db[index];
        
        // Reverse Todo Completed Status
        todo.completed = !todo.completed;

        // Save Data
        this.save(db);
    },
    checkedItems(){
        const db = this.list();
        const items = db.filter((todo) => todo.completed === true);
        return items
    },
    uncheckedItems() {
        const db = this.list();
        const items = db.filter((todo) => todo.completed === false);
        return items
    },
     editItem (id , title , body, completed ) {

        const items = this.list();
    
                var i;
                for(i=0 ; i< items.length; i++)
                {        
                        if (items[i].id == id)
                        {
                            items[i].title = title;
                            items[i].body = body;
                            items[i].completed = completed;
    
                        }
                            
                }
            
            
                    this.save(items);  
                    console.log('-------------')
                    console.log("item is edited")
        
    }
}

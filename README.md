# Todo App
CLI Todo App With Nodejs

---
## Command
- [Create](#create)
- [Edit](#edit)
- [List](#list)
- [Show](#show)
- [Remove](#remove)
- [Toggle](#toggle)

---
### Create
Create New Todo

```sh
$ node app.js add--title "Todo Title" --body "Todo Body"

```

---
---
### Edit
Edit existing Todo

```sh
$ node app.js edit --id=write-id --title="edit title" --body="edit the content" --completed=true or false

```

---
### List all todos
List all Todos

```sh
$ node app.js list-all
```
---
### List all checked or uncheckedtodos
List checked Todos

```sh
$ node app.js list-completed
$ node app.js list-uncompleted
```

---
### Show
Show Todo

```sh

$ node app.js show --index 0

```

---
### Remove
Remove Todo by ID

```sh
$ node app.js remove --id=4
```

---
### Toggle
Toggle Todo Completed Status

```sh
$ node app.js Toggle --index 0

```

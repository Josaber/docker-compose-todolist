## Prepare

Change the IP address in `./todolist-frontend/server/app.js` and `./todolist-frontend/client/src/App.js` to your host ip address.

## Run

In this directory, run the command:

`docker-compose up`

## Visit

[backend](http://localhost:8080/todoitems)
[frontend](http://localhost:3000)

## Tips

* You'd better insert some records after you run the command.
* The `ddl` model is `create-drop`, so every time you run this project, you have no data.
* You can change the `ddl` to `update`.
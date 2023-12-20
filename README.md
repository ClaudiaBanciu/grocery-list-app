Setup MySQL, Node, and Angular
Create backend/config/config.json and change the password to your MySQL password.
{
  "host": "localhost",
  "user": "root",
  "database": "groceries",
  "password": "<password>"
}
By Default, MySQL gives the user 'root' with all privileges. You can simply change this to another user if desired. 
In this application we named our database 'groceries', however, if you went with a different name this will need to be changed.

To runt the application:

cd backend
$ npm start
cd ../groceryapp
$ ng serve

const inquirer = require("inquirer");
const mysql = require('mysql2');

const db = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'books_db'
	}
);

const questions = ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"]

function init() {
    inquirer
      .prompt([//prompts the user with questions
        {
          type: 'list',
          name: 'shape',
          message: "Please choose a shape for the logo: ",
          choices: ["Circle", "Triangle", "Square"]
        }
          ]).then((data) => {
              generateSvg(data.text, data.textColor, data.shape, data.shapeColor);//calls generateSVG with
          });}
  //calling init function
  init();
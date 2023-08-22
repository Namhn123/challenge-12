const inquirer = require("inquirer");
const mysql = require('mysql2');

const db = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'business_db'
	}
);

const questions = ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"]

function init() {
	inquirer
		.prompt([//prompts the user with questions
			{
				type: 'list',
				name: 'option',
				message: "What would you like to do?",
				choices: [questions[0], questions[1], questions[2], questions[3], questions[4], questions[5], questions[6]]
			}
				]).then((data) => {
					switch(data.option) {
						case questions[0]:
							db.query('SELECT * FROM employee', function (err, results) {console.table(results);});
							break;
						case questions[1]:
							addEmployee();
							break;
						case questions[2]:

							break;
						case questions[3]:
							db.query('SELECT * FROM role', function (err, results) {console.table(results)});
							break;
						case questions[4]:

							break;
						case questions[5]:
							db.query('SELECT * FROM department', function (err, results) {console.table(results)});
							break;
						case questions[6]:

							break;
					}
				});}

function addEmployee() {
	let roles = db.execute('SELECT title, id FROM role');
	console.log(roles);
	// inquirer
	// 	.prompt([
	// 		{
	// 			type: 'input',
	// 			name: 'firstName',
	// 			message: "What is the employee's first name?"
	// 		},
	// 		{
	// 			type: 'input',
	// 			name: 'lastName',
	// 			message: "What is the employee's last name?"
	// 		},
	// 		{
	// 			type: 'list',
	// 			name: ''
	// 		}
	// 			]).then((data) => {

	// 			});
}

init();
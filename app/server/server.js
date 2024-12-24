import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import sql from 'mssql'; 

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(__dirname, '../../dist');

let server = express();


server.use(express.urlencoded({ extended: true }));

server.use(express.json());

server.use(express.static(appDir));


const sqlConnect = await sql.connect({
	user: 'nodelesson',
  	password: '123',
	server : "USER-PC", 
	database : "lesson", 
	options : { 
	  trustedConnection : true,
	  trustServerCertificate: true
	} 
})

server.get('/api/getAllUsers', async function(req, res) {
	try {
		await sqlConnect;
		const result = await sql.query`select * from Users`;
		res.json(result.recordset)
	  } catch (err) {
		console.error(err);
	  }
});

server.get('/api/getUserById/:id', async function(req, res) {
	try {
		await sqlConnect;
		const result = await sql.query`SELECT * FROM users WHERE id = ${req.params.id}`;
		res.json(result.recordset)
	  } catch (err) {
		console.error(err);
	  }
});


server.post('/api/addUser', async function (req, res) {
	try {
		await sqlConnect;

		await sql.query`INSERT INTO users (Name, Surname, Age) VALUES (${req.body.Name}, ${req.body.Surname}, ${req.body.Age})`;

	  } catch (err) {
		console.error(err);
	  }

	  res.redirect('/');
})

server.post('/api/updateUser', async function (req, res) {
	try {
		await sqlConnect;
		await sql.query`UPDATE users SET Name=${req.body.Name}, Surname=${req.body.Surname}, Age=${req.body.Age} WHERE Id=${req.body.Id}`;

	  } catch (err) {
		console.error(err);
	  }

	  res.redirect(`/user/${req.body.Id}`);
})

server.post('/api/deleteUser/', async function (req, res) {
	try {
		await sqlConnect;
		
		await sql.query`DELETE FROM users WHERE Id=${req.body.id}`;

	  } catch (err) {
		console.error(err);
	  }

	  res.redirect('/');
})

server.get("/*", (req, res) => {
	res.type('text/html');
    res.sendFile(path.join(appDir, "index.html"));
});

server.listen(5000, '0.0.0.0', function() {
	console.log('running');
});
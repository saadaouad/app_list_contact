var express = require('express');
var app = express();
 
app.use(express.static(__dirname + "/public"));

app.get("/contactList", function(req, res){

	console.log("I received a GET request");

	personal_1 = {
		name : 'Saad',
		email : 'saadaouad05@gmail.com',
		number : '(+212) 6 14 62 11 39'
	};

	personal_2 = {
		name : 'Mohamed',
		email : 'm.elhachimi@obytes.com',
		number : '(+212) 6 48 10 55 32'
	};

	personal_3 = {
		name : 'Wael',
		email : 'w.elhachimi@obytes.com',
		number : '(+212) 6 15 17 41 02'
	};

	var contactList = [personal_1, personal_2, personal_3];

	res.json(contactList);

});
 
app.listen(3000);
console.log("Server running in port 3000");
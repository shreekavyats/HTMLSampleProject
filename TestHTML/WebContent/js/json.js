var data = {
	"users" : [ {
		"firstName" : "Ray",
		"lastName" : "Villalobos",
		"joined" : {
			"month" : "January",
			"day" : 12,
			"year" : 2012
		}
	}, {
		"firstName" : "John",
		"lastName" : "Jones",
		"joined" : {
			"month" : "April",
			"day" : 28,
			"year" : 2010
		}
	} ]
}
var output = "<ul>";
for ( var i in data.users) {
	output += "<li>" + data.users[i].firstName + " " + data.users[i].lastName
			+ "--" + data.users[i].joined.month + "</li>";
}
output += "</ul>";
document.getElementById("placeholder").innerHTML = output;


//function jsonTest() {
var text = '{"name":"Rama","street":"Silver Oak Street","phone":"555 1234567"}'
	var obj = JSON.parse(text);
	document.getElementById("demo").innerHTML = obj.name + "<br>" + obj.street
			+ "<br>" + obj.phone;
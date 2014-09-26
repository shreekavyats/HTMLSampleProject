function myFunction() {
	var date = new Date();
	var d = date.getFullYear()
	console.log(d)
	document.getElementById("demo").innerHTML = Date();
}

function showMsg() {
	var userInput = document.getElementById('userInput').value;
	document.getElementById('userMsg').innerHTML = userInput;
}

function stringFunctions() {
	// charAt()
	var enterdString = document.getElementById("stringFunChk").value;
	var result = enterdString.charAt(7);
	alert('charAt---->'+result);
	// concat()
	var message = "Welcome"
	alert(message.concat(" to JavaScript"));
	//fromCharCode()
	console.log(String.fromCharCode(72,69,76,76,79))
	
	//charCodeAt()
	alert('charCodeAt---->'+enterdString.charCodeAt(7))
	
	//localeCompare()
	var str1 = "ab";
	var str2 = "cd";
	alert('localeCompare--->'+str1.localeCompare(str2));
	
	//slice()
	var str = "Hello world!";
	alert('slice--->'+str.slice(1,5));
	
	//split
	var str = "How are you doing today?";
	var res = str.split(" ");
	alert('Split--->'+res)
	
	//trim
	var str = "         Hello world!           ";
	alert('trim--->'+str.trim());
}

function jsonTest() {
	var text = '{"name":"Rama","street":"Silver Oak Street","phone":"555 1234567"}'
	var obj = JSON.parse(text);
	document.getElementById("demo").innerHTML = obj.name + "<br>" + obj.street
			+ "<br>" + obj.phone;
}

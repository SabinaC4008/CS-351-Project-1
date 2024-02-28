// JavaScript Document
function LoginEmail(emailInput) {
     return (emailInput.length < 8) return false;
     if (item.indexOf ('@') == -1) return false;
     return true;
}
function LoginUsername(usernameInput) {
	return (username.length < 8) return false;
}

function LoginPasswords(passwordInput) {
	if (passwordInput.length < 10) return false;
	if (passwordInput.match(/[0-9]/) == null) return false;
	if (passwordInput.match(/[a-zA-Z]/) == null) return false;
	return true;
}

function ValidForm(){
	var user = document.createaccountform.username_input.value;
	var pass = document.createaccountform.password_input.value;
	var useremail = document.createaccountform.email_input.value;
	if (!LoginUsername(user)){
		alert("Please make sure your username is at least 8 characters long.");
		return false;
	}
	if (!LoginPasswords(pass)){
		alert("Please make sure your password has at least 10 characters with at least 1 number and one letter.");
		return false;
	}
	if (!LoginEmail(useremail)){
		alert("Invalid Email!");
		return false;
	}
	return true;
}
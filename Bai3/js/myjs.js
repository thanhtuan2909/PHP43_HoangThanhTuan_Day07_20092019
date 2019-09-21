function handleSubmit() {
	var name	= document.getElementById('name').value;
	var email	= document.getElementById('email').value;
	var contact	= document.getElementById('contact').value;

	var result = '';
	result += 'Name: ' + name + '<br>' + 'Email: ' + email + '<br>' +'Contact No: ' + contact;

	document.getElementById('result-p').innerHTML 	= result;
	document.getElementById('email').style			= 'background: #e8f0fe';
	return false;
}
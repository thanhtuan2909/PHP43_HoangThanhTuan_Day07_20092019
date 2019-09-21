function handleSubmit (){
	var name = document.getElementById('name').value;
	var mail = document.getElementById('mail').value;

	var result = '';
	result += 'Tên vừa nhập: ' + name + '\n' + 'Email vừa nhập: ' + mail;

	alert(result);
	return false;
}
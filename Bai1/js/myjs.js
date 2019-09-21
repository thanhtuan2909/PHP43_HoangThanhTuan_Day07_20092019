function handleSubmit() {
	var name = document.getElementById('name').value;
	var age  = document.getElementById('age').value;

	var result = '';
	result += "Tên vừa nhập: " + name + "<br>" + "Tuổi vừa nhập: " + age;
	document.getElementById('result-p').innerHTML = "<b>" + result + "</b>";
	return false;
}
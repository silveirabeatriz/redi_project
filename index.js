
document.getElementById('userForm').addEventListener('submit', function(event) {
	event.preventDefault();
	addUser();
});

function addUser() {
	const nameInput = document.getElementById('name');
	const messageInput = document.getElementById('message');
	const userMessageSection = document.getElementById('userMessageSection');
	const p = document.createElement('p');
	p.textContent = `Name: ${nameInput.value}
Message: ${messageInput.value}`;
	userMessageSection.appendChild(p);
	nameInput.value = '';
	emailInput.value = '';
	messageInput.value = '';
}
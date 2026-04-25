// app.js

// Dummy database user
const users = [
  { username: "admin", password: "123" },
  { username: "user", password: "1234" },
  { username: "hanafi", password:"25"},
];

function login(){
  const userInput = document.getElementById('username').value;
  const passInput = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  errorMsg.textContent = "";

  const user = users.find(u => u.username === userInput);

  if(!user){
    errorMsg.textContent = "User tidak ditemukan";
    return;
  }

  if(user.password !== passInput){
    errorMsg.textContent = "Password salah";
    return;
  }

  localStorage.setItem('user', user.username);
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('appPage').classList.remove('hidden');
  document.getElementById('profileName').innerText = user.username;
}

function logout(){
  localStorage.removeItem('user');
  location.reload();
}

function showPage(page){
  ['home','search','message','profile','settings'].forEach(p=>{
    document.getElementById(p).classList.add('hidden');
  });
  document.getElementById(page).classList.remove('hidden');
}

function sendMessage(){
  const input = document.getElementById('chatInput');
  const box = document.getElementById('chatBox');

  if(input.value){
    const msg = document.createElement('div');
    msg.textContent = input.value;
    box.appendChild(msg);
    input.value = '';
    box.scrollTop = box.scrollHeight;
  }
}

window.onload = ()=>{
  const user = localStorage.getItem('user');
  if(user){
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('appPage').classList.remove('hidden');
    document.getElementById('profileName').innerText = user;
  }
}

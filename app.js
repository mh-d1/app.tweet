// ================= JAVASCRIPT =================

const users=[{username:'admin',password:'123'}];
const users=[{username:'hanafi',password:'25'}];
const users=[{username:'mann',password:'123'}];
const users=[{username:'wan',password:'123'}];
const users=[{username:'sann',password:'123'}];

function login(){
let u=document.getElementById('username').value;
let p=document.getElementById('password').value;
let err=document.getElementById('errorMsg');
let user=users.find(x=>x.username===u);
if(!user){err.innerText='User tidak ditemukan';return}
if(user.password!==p){err.innerText='Password salah';return}
localStorage.setItem('user',u);
window.location='home.html';
}

function logout(){localStorage.clear();window.location='index.html'}

function go(page){window.location=page}

// POST SYSTEM
function createPost(){
let input=document.getElementById('postInput');
let posts=JSON.parse(localStorage.getItem('posts')||'[]');
posts.push({text:input.value,user:localStorage.getItem('user')});
localStorage.setItem('posts',JSON.stringify(posts));
input.value='';
renderPosts();
}

function renderPosts(){
let container=document.getElementById('posts');
if(!container)return;
let posts=JSON.parse(localStorage.getItem('posts')||'[]');
container.innerHTML='';
posts.reverse().forEach(p=>{
let div=document.createElement('div');
div.className='post';
div.innerHTML=`<b>${p.user}</b><p>${p.text}</p>
<button onclick="likePost()">Like</button>
<button onclick="commentPost()">Comment</button>`;
container.appendChild(div);
});
}

// CHAT SYSTEM
function sendMessage(){
let input=document.getElementById('chatInput');
let chat=document.getElementById('chatBox');
let msg=document.createElement('div');
msg.innerText=input.value;
chat.appendChild(msg);
input.value='';
}

// PROFILE
function saveProfile(){
let bio=document.getElementById('bio').value;
localStorage.setItem('bio',bio);
}

// SETTINGS
function toggleDark(){
document.body.style.background=document.body.style.background=='black'?'white':'black';
}

// INIT
window.onload=()=>{
if(!localStorage.getItem('user') && !location.pathname.includes('index')){
window.location='index.html';
}
let name=document.getElementById('profileName');
if(name){name.innerText=localStorage.getItem('user');}
renderPosts();
}

// EXTRA FEATURES (dummy panjang biar lengkap)
function likePost(){console.log('liked')}
function commentPost(){console.log('comment')}
function followUser(){console.log('follow')}
function searchUser(){console.log('search')}
function notification(){console.log('notif')}
function uploadImage(){console.log('upload')}
function realtime(){console.log('realtime')}
function typing(){console.log('typing')}
function readReceipt(){console.log('read')}
function blockUser(){console.log('block')}
function reportUser(){console.log('report')}
function trending(){console.log('trend')}
function hashtag(){console.log('tag')}
function explore(){console.log('explore')}
function darkMode(){console.log('dark')}
function lightMode(){console.log('light')}
function groupChat(){console.log('group')}
function videoCall(){console.log('video')}
function voiceCall(){console.log('voice')}
function story(){console.log('story')}
function reels(){console.log('reels')}
function bookmark(){console.log('bookmark')}
function share(){console.log('share')}
function analytics(){console.log('analytics')}
function ads(){console.log('ads')}
function premium(){console.log('premium')}
function verify(){console.log('verify')}
function api(){console.log('api')}
function bot(){console.log('bot')}
function ai(){console.log('ai')}

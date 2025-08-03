const popupMessages = [
  "Segura? 🤨",
  "No me mientas 😤"
];

let messageIndex = 0;

function handleYes() {
  if (messageIndex < popupMessages.length) {
    document.querySelector('#popup h2').innerText = popupMessages[messageIndex];
    messageIndex++;
  } else {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
  }
}

function handleNo() {
  document.getElementById('popup').classList.remove('active');
  document.getElementById('getOut').classList.add('active');
}

function showHint() {
  document.getElementById('hintMsg').innerText = 
    "😜 Nombre de usuario: Tu apodo en nuestro chat\n🔐 Contraseña: una fecha importante(hoy) (ddmmyyyy)";
}

function checkLogin() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  const correctUser = "daira😝";
  const correctPass = "03082025";

  if (user === correctUser && pass === correctPass) {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('successMsg').classList.add('active');
    setTimeout(() => {
      window.location.href = "letter.html";
    }, 4500); // 4.5 segundos para ver el gif
  } else {
    document.getElementById('loginStatus').innerText = "Wrong credentials, impostor detected!";
  }
}

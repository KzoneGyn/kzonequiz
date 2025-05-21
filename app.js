const questions = [
  { question: "Qual grupo tem um universo chamado 'BU'?", answer: "bts" },
  { question: "Qual girlgroup da HYBE lançou 'OMG' e 'Hype Boy'?", answer: "newjeans" },
  { question: "Qual boygroup da HYBE foi formado através do I-LAND?", answer: "enhypen" },
  { question: "Qual girlgroup da HYBE tem uma integrante chamada Sakura?", answer: "le sserafim" },
  { question: "Qual grupo da HYBE tem units como Hip Hop Team e Performance Team?", answer: "seventeen" },
];

let step = 0;
let correct = 0;

const root = document.getElementById("root");

const stars = document.createElement("div");
stars.className = "stars";
document.body.appendChild(stars);

const title = document.createElement("h1");
title.textContent = "🎮 Bem-vindo à HYBE FEST!";
root.appendChild(title);

const intro = document.createElement("p");
intro.textContent = "Descubra o tema do próximo encontrinho. Pressione Start para começar o quiz!";
root.appendChild(intro);

const input = document.createElement("input");
input.type = "text";
input.style.display = "none";
input.style.fontFamily = "'Press Start 2P', cursive";
input.style.marginTop = "20px";
input.style.padding = "10px";
input.style.fontSize = "14px";
input.style.width = "300px";
input.style.backgroundColor = "#222";
input.style.color = "#fff";
input.style.border = "2px solid #ff66cc";
root.appendChild(input);

const button = document.createElement("button");
button.textContent = "Start";
root.appendChild(button);

const music = new Audio("crazy-music-production.mp3");
music.loop = true;
music.volume = 0.5;

const successSound = new Audio("correct.mp3");

button.onclick = () => {
  if (step === 0) music.play();
  showQuestion();
};

function showQuestion() {
  input.style.display = "inline";
  intro.textContent = questions[step].question;
  button.textContent = "Verificar";
  button.onclick = () => {
    const answer = input.value.toLowerCase().trim();
    if (answer === questions[step].answer) {
      correct++;
      successSound.play();
    }
    input.value = "";
    step++;
    if (step < questions.length) {
      intro.textContent = questions[step].question;
    } else {
      endGame();
    }
  };
}

function endGame() {
  input.style.display = "none";
  button.textContent = "Ver Foto dos Grupos";
  title.textContent = "🎉 Tema Revelado: HYBE FEST!";
  intro.textContent = "Parabéns! Você descobriu o tema do próximo encontrinho.";

  const finalImage = document.createElement("img");
  finalImage.src = "hybe-groups.jpeg";
  finalImage.alt = "Todos os grupos da HYBE";
  finalImage.style.width = "100%";
  finalImage.style.marginTop = "20px";
  finalImage.style.display = "none";
  root.appendChild(finalImage);

  button.onclick = () => {
    finalImage.style.display = "block";
    button.style.display = "none";
  };
}
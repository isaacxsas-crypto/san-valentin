// TEXTO CARTA
const text = `Eres mi amor, mi changuita guapa, mi pedacito de cielo, mi vida, mi cielo, mi eterno amor, mi chuchurrumin, mi nena de ojitos lindos, mi chiki beibi, mi morenita, mi chiquita, mi prioridad, mi minioncita, mi esposita bonita, mi todotodotodotodotodotodotodotodotodo. 

Mi vida entera, eres todo lo hermoso que existe en este mundo. 
Gracias por dejarme amarte. 

MI AMOOOOOOOOOR 💗`;

let i = 0;
const typing = document.getElementById("typing");

// TYPEWRITER
function typeText() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 40);
    }
}

// BOTÓN SÍ
document.getElementById("yes").onclick = () => {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");

    const music = document.getElementById("music");
    music.volume = 0.6;
    music.play();

    typeText();
};

// BOTÓN NO ESCAPA
document.getElementById("no").onmouseover = (e) => {
    e.target.style.left = Math.random() * 120 - 60 + "px";
    e.target.style.top = Math.random() * 80 - 40 + "px";
};

// CORAZONES
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 10 + 14 + "px";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 400);

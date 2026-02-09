// TEXTO CARTA
const text = `Holaaaaa mi changuita linda, se que estamos lejos pero eso no me va a impedir darte algo, Te amo miamor y cuando digo que yo te amo más, no me refiero a que te amo más de lo que tu me amas , me refiero a que te amo más que a los dias malos que pasamos juntos, más que a cualquier pelea absurda o malentendido, te amo más que a la distancia que nos pueda separar, te amo más que a mis propias dudas más que a mis miedos , más que a todo lo que algunas vez intento frenarme , Te amo más de lo que piensas , más de lo que digo ,y sobre todo más de lo que te demuestro, me tienes amando cada pedacito de ti. CASEMONOS 💗

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
music.volume = 0;
music.play();

let vol = 0;
const fade = setInterval(() => {
    if (vol < 0.6) {
        vol += 0.02;
        music.volume = vol;
    } else {
        clearInterval(fade);
    }
}, 200);
    
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

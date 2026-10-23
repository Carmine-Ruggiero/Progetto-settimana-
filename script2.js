// --- Logica per il cambio tema ---
const bottoneTema = document.getElementById('cambia-tema');

bottoneTema.addEventListener('click', () => {
  // Attiva/disattiva la modalità notte sul tag body
  document.body.classList.toggle('dark-mode');
  
  // Cambia dinamicamente il testo del bottone a seconda dello stato
  if (document.body.classList.contains('dark-mode')) {
    bottoneTema.innerHTML = "☀️ Modalità Giorno";
  } else {
    bottoneTema.innerHTML = "🌙 Modalità Notte";
  }
});


const immaginiData = [
  { id: 1, src: "assets/bus.JPG", alt: "Paesaggio 1", preferita: true },
  { id: 2, src: "https://picsum.photos", alt: "Paesaggio 2", preferita: false },
  { id: 3, src: "https://picsum.photos", alt: "Paesaggio 3", preferita: true },
  { id: 4, src: "https://picsum.photos", alt: "Paesaggio 4", preferita: false },
  { id: 5, src: "https://picsum.photos", alt: "Paesaggio 5", preferita: true },
  { id: 6, src: "https://picsum.photos", alt: "Paesaggio 6", preferita: false },
  { id: 7, src: "https://picsum.photos", alt: "Paesaggio 7", preferita: false },
  { id: 8, src: "https://picsum.photos", alt: "Paesaggio 8", preferita: true }
];



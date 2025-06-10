const content = [
  {image: 'images/merle0.JPG', text: 'Liebe Merle,\nleider kann ich an deinem großen Tag heute nicht bei dir sein um zusammen mit dir zu feiern. Sei dir sicher, dass ich nichts lieber täte!🎈\nAber klick dich gern durch diese Bilder um ein wenig in den Erinnerungen der letzten Jahre zu stöbern:'},
  {image: 'images/merle1.JPG', text: 'Happy 18! 🎉\nAb jetzt darfst du alles – musst aber nix. Genieß die Freiheit und nimm das Leben nicht zu ernst.'},
  {image: 'images/merle2.JPG', text: 'Möge dieses Jahr voller magischer Momente sein, die dich strahlen lassen wie nie zuvor.✨'},
  {image: 'images/merle3.JPG', text: 'Die Welt steht dir jetzt offen - also erobere sie!\nOb Reisen, Träume oder Abenteuer: Geh deinen Weg mit Mut und einem Lächeln.'},
  {image: 'images/merle4.JPG', text: 'Bleib neugierig – auf Menschen, auf Städte, auf dich selbst.\nDenn wer Fragen stellt, entdeckt Welten."'},
  {image: 'images/merle5.JPG', text: 'Ich wünsche dir, dass du dich niemals verbiegen musst,\num irgendwo reinzupassen.\nSei lieber eine eigene Kategorie.'},
  {image: 'images/merle6.JPG', text: 'Für alle großen Entscheidungen:\nVertrau auf dein Gefühl.\nDein Kopf kann googeln, dein Herz weiß Bescheid.'},
  {image: 'images/merle7.PNG', text: 'Wenn du mal fällst:\nLern was draus. Lach drüber. Steh wieder auf.\nUnd trag den Kratzer wie ein Tattoo.'},
  {image: 'images/merle8.JPG', text: 'Ich wünsche dir einen Kompass, keinen Plan.\nDenn du wirst Wege finden, die auf keiner Karte stehen.✨'},
  {image: 'images/merle9.jpg', text: 'Möge das Leben dich überraschen –\nmit genau den Dingen, von denen du nicht wusstest, dass du sie brauchst.'},
  {image: 'images/merle10.jpg', text: 'Happy 18th Birthday! Möge deine nächsten Jahre voller Glück, Abenteuer und unendlicher Möglichkeiten sein - du hast es verdient!❤️'},
  {image: 'icons/qr-code.svg', text: 'Auch wenn ich heute leider nicht bei dir sein kann möchte ich dir trotzdem gerne meine Glückwünsche übermitteln!\nHab ganz viel Spaß und Freude in deinem neuen Lebensjahr!\nHerzlichen Glückwunsch von Noah🎂'},
];

let currentIndex = 0;

// Elemente auswählen
const imageElement = document.getElementById('current-image');
const textElement = document.getElementById('current-text');
const imageContainer = document.querySelector('.image-container');
const textContainer = document.querySelector('.text-container');

// Funktion zum Wechseln des Inhalts
function updateContent() {
    imageElement.src = content[currentIndex].image;
    imageElement.alt = `Bild ${currentIndex + 1}`;
    textElement.textContent = content[currentIndex].text;
}

// Event-Listener für Klicks
imageContainer.addEventListener('click', nextContent);
textContainer.addEventListener('click', nextContent);

function nextContent() {
    currentIndex = (currentIndex + 1) % content.length;
    updateContent();
}

// Initialen Content laden
updateContent();
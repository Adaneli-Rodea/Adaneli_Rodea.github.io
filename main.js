let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Llevo al rededor de 2 años trabajando en una agencia de publicidad. Aprendí HTML Y CSS en el bootcamp de Tecnolochicas PRO y estudio por mi cuenta diseño UX/UI , mi meta es poder especializarme en diseño de interfaces.')
  .pauseFor(200)
  .deleteChars(10)
  .start();

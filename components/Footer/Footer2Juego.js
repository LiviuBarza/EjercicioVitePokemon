import "./FooterPokemon.css";
const template = () => `
<h3>Piedra, Papel y Tijera</span></h3>
`;

export const PrintTemplate2Juego = () => {
  document.querySelector("footer").innerHTML = template();
};

import "./FooterPokemon.css";
const template = () => `
<h3>Pokemon Page</span></h3>
`;

export const PrintTemplateFooterPok = () => {
  document.querySelector("footer").innerHTML = template();
};

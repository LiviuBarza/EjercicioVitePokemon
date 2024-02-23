import "./Footer.css";
const template = () => `
<h3>© LIVIU 2024 🎮 HubApp</h3>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};

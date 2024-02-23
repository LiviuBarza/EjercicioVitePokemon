import { getData } from "../../global/state/globalState";
import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id="TresEnRaya">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6831/6831874.png"
            alt=" go to Piedra, Papel y Tijera"
          />
          <h2>PIEDRA, PAPEL, TIJERA</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListenersPokemon = () => {
  /** le damos el evento al boton de pokemon que es la unica pagina de contenido por
   * ahora esta creada en el proyecto
   */
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
};

const addEventListenersAhorcado = () => {
const navigateTopo = document.getElementById("TresEnRaya");
  navigateTopo.addEventListener("click", () => {
  initControler("TresEnRaya");
});
}



export const printTemplateDashboard = () => {
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";

  /** metemos los escuchadores de la pagina */
  addEventListenersPokemon();

  addEventListenersAhorcado();
  /** y por ultimo traemos la info que hace la llamada asincrona a la api de pokemon y lo setea en el estado
   */
  getInfo();
};


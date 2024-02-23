import { getUser } from "../../global/state/globalState";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import "./Header2Juego.css";

//!-------------------------------------------------------------------
//? ------------------1) TEMPLATE ------------------------------------
//!-------------------------------------------------------------------

const template = () => `
  <img
    src="https://cdn-icons-png.flaticon.com/512/6831/6831874.png"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682685633/home_nekvs0.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
  </nav>
`;
//!-----------------------------------------------------------------------------------
//? ----------------------- 2 ) Añadir los eventos con sus escuchadores---------------
//!-----------------------------------------------------------------------------------
const addListeners = () => {
  /** Para cada elemento grafico que son los botones que hacen acciones con el usuario
   * le meteremos su escuchador
   */
  //! ---------------->COLOR CHANGE RANDOM------ evento click del boton de cambio de color
  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    /** en este caso lo que hacemos el generar un color y cambiar el stylo del background del body */
    const color = changeColorRGB();
    document.body.style.background = color;
  });

  //! ----------------> DASHBOARD ------------- evento click del boton que nos lleva a los juegos
  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {
    // llamamos al initController con el dashboard para que pinte la pagina del dashboard
    initControler("Dashboard");
  });
};
//!-----------------------------------------------------------------------------------
//? ------------------------------ 3) La funcion que se exporta y que pinta-----------
//!-----------------------------------------------------------------------------------
export const PrintTemplateHeader2Juego = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};

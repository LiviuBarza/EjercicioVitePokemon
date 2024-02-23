import { getUser } from "../../global/state/globalState";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import "./HeaderPokemon.css";

//!-------------------------------------------------------------------
//? ------------------1) TEMPLATE ------------------------------------
//!-------------------------------------------------------------------

const template2 = () => `
  <img
    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c484caf9-ac5a-445d-abef-36be58f2d05b/dd7skgv-dd66933a-5f9f-4152-9f9a-97ee092a6e5f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0ODRjYWY5LWFjNWEtNDQ1ZC1hYmVmLTM2YmU1OGYyZDA1YlwvZGQ3c2tndi1kZDY2OTMzYS01ZjlmLTQxNTItOWY5YS05N2VlMDkyYTZlNWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f7hgVsux63kxhDGpW25-7Yv3lBefgSTP4WG2stdbTmg"
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

  //! ----------------> LOGOUT ----------------
};
//!-----------------------------------------------------------------------------------
//? ------------------------------ 3) La funcion que se exporta y que pinta-----------
//!-----------------------------------------------------------------------------------
export const PrintTemplateHeaderPok = () => {
  document.querySelector("header").innerHTML = template2();
  addListeners();
};

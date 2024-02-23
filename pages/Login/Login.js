import { setUser, setUserData } from "../../global/state/globalState";
import { initControler } from "../../utils/route";
import "./Login.css";
const template = () => `
  <div id="containerLogin">
    <div id="linea1"></div>
    <div id="linea2"></div>
    <h1 id="titleLogin">LOGIN LIVIU HUB</h1>
    <div id="linea3"></div>
    <div id="linea4"></div>
    <input type="email" name="username" id="username" />
    <button id="buttonLogin">Logueate a Liviu HUB</button>
  </div>
`;



const addListeners = () => {
  const buttonLogin = document.getElementById("buttonLogin");
  const username = document.getElementById("username");
  buttonLogin.addEventListener("click", (e) => {
    const valueInput = username.value;

    // como trabajo con el local lo convierto a string

    /**
     * Lo unico especial tiene este login es que comprueba si ya tenemos un usuario
     * en el local con datos dee algun usuario con el mismo nombre
     * y asi lo asocia para coger los me gusta de los pokemon
     */
    if (emailValid(valueInput)) {

      localStorage.setItem("username", valueInput)


      // importante es que si me logo es poner el token de autenticacion como true

      // y llamamos a la funcion dee set del user logado actual
      setUser(`${valueInput}USER`);
      // y seteamos los datos del locaStorage en los datos de usuario logado con sus favoritos
      initControler();
    } else{
      alert('introduzca un email valido')
    }

    /** llamamos al initControler sin el parametro para que compruebe que se ha metido el userCurrent en el sessionStorage  */
  });
};


function emailValid(email){
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email)
}

export const Login = () => {
  /** cuando pintamos el login hay que ocultar la nav con sus navegaciones */
  document.querySelector("nav").style.display = "none";
  document.querySelector("main").innerHTML = template();
  addListeners();
};


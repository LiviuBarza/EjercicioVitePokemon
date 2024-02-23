import { getUser } from "../global/state/globalState";
import { Login, PrintPokemonPage, printTemplateDashboard, PrintAhorcadoPage } from "../pages";
import { PrintTemplateHeader, PrintTemplateFooter, PrintTemplateHeaderPok, PrintTemplateFooterPok} from "../components"

//! ----------------------------------------------------------------------------------------------------------------------
//? ------------------------------------- CONTROLADOR DE LO QUE SE RENDERIZA EN CADA MOMENTO------------------------------
//! ----------------------------------------------------------------------------------------------------------------------

export const initControler = (pagesRender) => {
  /*El getUser es una funcion que hace de herramienta para los estados de la app   
  En el estado de la aplicacion se encuentran todos los datos y elementos 
  de la misma que queremos que sean de acceso por el completo de la aplicacion
  Para su utilizacion siempre tenemos la funcion que get (nos trae los datos) 
  y la funcion de set que settea los datos en los objetos del contexto que 
  tiene la aplicion.
  
  El contexto dee la aplicacion son los datos y estados actuales en funcion de  
  lo que esta pasando en la app en ese momento*/
  console.log("soy el user", getUser().name);

  /** Aqui tenemos el switch que evalua lo que recibe por parametro la funcion  en
   * caso de que no se reciba ningun parametro al llamar a la funcion cogera el
   * caso undefined que evaluara si hay usuario en el contesto o no lo hay
   * si lo hay un usuario en los estados del contesto en ese caso printamos el
   * el dashboard sino pintamos el login
   */
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintTemplateHeaderPok();
      PrintTemplateFooterPok();
      PrintPokemonPage();
      document.querySelector("header").style.backgroundColor = "#cd2020";
      document.querySelector("footer").style.backgroundColor = "#cd2020";
      document.querySelector("footer").style.color = "black";
      document.querySelector("footer").style.fontSize = "25px";
      break;
    case "Dashboard":
      printTemplateDashboard();
      PrintTemplateHeader();
      PrintTemplateFooter();
      const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
      document.querySelector("header").style.backgroundColor = prefersLightMode ? "#FFFFFF" : "#232222";
      document.querySelector("footer").style.backgroundColor = prefersLightMode ? "#FFFFFF" : "#232222";
      document.querySelector("footer").style.color = prefersLightMode ? "##000" : "#FFFFFF";
      document.querySelector("footer").style.fontSize = "16px";
      break;
    case "TresEnRaya":
      PrintAhorcadoPage();
      PrintTemplateHeaderPok();
      document.querySelector("header").style.backgroundColor = "yellow";
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      "Memory()";
      break;
  }
};

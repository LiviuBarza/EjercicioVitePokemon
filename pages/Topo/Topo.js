import { getData } from "../../global/state/globalState";
import "./Topo.css";

const template = () => `
<div id="resultado">
<h2 id="victoriaYo">tus victorias: <span id="meterVar"></span></h2>
<h2 id="victoriaMaquina">victorias de la maquina: <span id="meterVar2"></span></h2>
</div>
<div id="flex-container">
<figure id="piedra"><img src="https://images.vexels.com/media/users/3/145640/isolated/preview/a280e39f92cd30cd6181f08b1f4dca6b-tierra-piedra-piedra-roca.png" alt=""></figure>
<figure id="papel"><img src="https://static.vecteezy.com/system/resources/previews/011/888/293/non_2x/hand-gesture-cartoon-free-png.png" alt=""></figure>
<figure id="tijera"><img src="https://images.vexels.com/media/users/3/205028/isolated/preview/3f7b5d44a3ac705fbfdb33a0fc398e95-color-de-trazo-de-tijeras.png" alt=""></figure>
</div>
`;
	



export const PrintAhorcadoPage = () => {
	document.querySelector("main").innerHTML = template();
}
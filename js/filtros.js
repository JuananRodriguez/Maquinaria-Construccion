
var ordenarEstados=0;
var ordenarTransaccion=0;
var arrayBooleanos=[];

function ordenarActivos(formulario){

	var tabla = formulario.getElementsByTagName("table")[0];
	var filas = tabla.getElementsByTagName("tr");
	removeClassAll("invisible");

	if(ordenarEstados==0){
		for (var i = 1; i < filas.length; i++) {
			if (filas[i].lastChild.textContent == "Activo"){
				filas[i].classList.add("invisible");
			}
		}
		ordenarEstados=1;
		mostrarMensaje("Mostrando sólo los innactivos",false);
	}
	else if(ordenarEstados==1){
		for (var i = 1; i < filas.length; i++) {
			if (filas[i].lastChild.textContent == "Inactivo" || filas[i].lastChild.textContent == "Terminado"){
				filas[i].classList.add("invisible");
			}
		}
		ordenarEstados=2;
		mostrarMensaje("Mostrando sólo los activos",true);
	}
	else{
		ordenarEstados=0;
		mostrarMensaje("Mostrando Todos",true);
	}
}

function ordenarTransacciones(formulario){


	var tabla = formulario.getElementsByTagName("table")[0];
	var filas = tabla.getElementsByTagName("tr");
	removeClassAll("invisible");

	if(ordenarTransaccion==0){
		for (var i = 1; i < filas.length; i++) {
			if (filas[i].lastChild.textContent == "VENTA"){
				filas[i].classList.add("invisible");
			}
		}
		ordenarTransaccion=1;
		mostrarMensaje("Mostrando sólo las Compras",false);
	}
	else if(ordenarTransaccion==1){
		for (var i = 1; i < filas.length; i++) {
			if (filas[i].lastChild.textContent == "COMPRA"){
				filas[i].classList.add("invisible");
			}
		}
		ordenarTransaccion=2;
		mostrarMensaje("Mostrando sólo las Ventas",true);
	}
	else{
		ordenarTransaccion=0;
		mostrarMensaje("Mostrando Todos",true);
	}
}

function ordenarFila(formulario,col){
	dataset="";
	switch (col) {
		case 0:
			dataset = "cero"
			break;
		case 1:
			dataset = "uno"
			break;
		case 2:
			dataset = "dos"
			break;
		case 3:
			dataset = "tres"
			break;
		case 4:
			dataset = "cuatro"
			break;
		case 5:
			dataset = "cinco"
			break;
		case 6:
			dataset = "seis"
			break;
		case 7:
			dataset = "siete"
			break;
		case 8:
			dataset = "ocho"
			break;
		case 9:
			dataset = "nueve"
			break;		
	}
	if(arrayBooleanos[col]==null)
		arrayBooleanos[col]=true;

	var tabla = formulario.getElementsByTagName("table")[0];
	var aFilas = tabla.getElementsByTagName("tr");
	var aElementos = [];

	for (var i = 1; i < aFilas.length; i++) {
		aElementos.push(aFilas[i].getAttribute("data-"+dataset));
	}
	if(arrayBooleanos[col])
		aElementos.sort(sortNumber);
	else
		aElementos.sort(sortNumber2);

		for (var i = 0; i < aElementos.length; i++) 
			for (var j = 1; j < aFilas.length; j++) 
				if(aElementos[i]==aFilas[j].getAttribute("data-"+dataset))
					tabla.appendChild(aFilas[j]);
		arrayBooleanos[col] = !arrayBooleanos[col];
		//mostrarMensaje("Mostrando " +aFilas[0].children[col].textContent+ " en Orden Ascendente",true);
}

function removeClassAll(clase)
{	
	//var objetos = document.querySelectorAll("."+clase);
	var objetos = Array.from(document.getElementsByClassName(clase));
	for(var i=0;i<objetos.length;i++){
		objetos[i].classList.remove(clase);
	}
}

function sortNumber(a,b) {
    return a - b;
}

function sortNumber2(a,b) {
    return b - a;
}

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
			if (filas[i].lastChild.textContent == "Inactivo"){
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
	
	if(arrayBooleanos[col]==null)
		arrayBooleanos[col]=true;

	var tabla = formulario.getElementsByTagName("table")[0];
	var aFilas = tabla.getElementsByTagName("tr");
	var aElementos = [];

	for (var i = 1; i < aFilas.length; i++) {
		aElementos.push(aFilas[i].children[col].textContent);
	}
	aElementos.sort();

	if(arrayBooleanos[col]){
		for (var i = 0; i < aElementos.length; i++) 
			for (var j = 1; j < aFilas.length; j++) 
				if(aElementos[i]==aFilas[j].children[col].textContent)
					tabla.appendChild(aFilas[j]);
		mostrarMensaje("Mostrando en Orden Ascendente",true);
	}
	else{
		for (var i = aElementos.length - 1; i >= 0; i--) 
			for (var j = 1; j < aFilas.length; j++) 
				if(aElementos[i]==aFilas[j].children[col].textContent)
					tabla.appendChild(aFilas[j]);
		mostrarMensaje("Mostrando en Orden Descendente",false);
	}

	arrayBooleanos[col] = !arrayBooleanos[col];
}

function removeClassAll(clase)
{	
	//var objetos = document.querySelectorAll("."+clase);
	var objetos = Array.from(document.getElementsByClassName(clase));
	for(var i=0;i<objetos.length;i++){
		objetos[i].classList.remove(clase);
	}
}
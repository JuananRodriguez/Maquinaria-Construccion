var oGestion = new Gestion();

resetForms();

/************* Pone los formularios invisibles y resetea campos **************/
function resetForms(){
	var AformsSel = document.getElementsByTagName('form');

	for (var i = 0; i < AformsSel.length; i++) {
   		AformsSel[i].style.display="none";
   		AformsSel[i].reset();
    }  
}

/************* Selección de botones ***************/

/**Clientes**/
var menuClientes = document.getElementById("menuCliente").children[1];

for (var i = 0; i < menuClientes.children.length; i++) {
   		menuClientes.children[i].addEventListener('click',mostrarEnClientes);
}

function mostrarEnClientes(oEvento){
	var oE = oEvento || window.event;
	actualizaCombos("clientes");

	switch(oE.target.name) 
	{
	    case "Alta":
	        resetForms();
	        document.getElementById('frmAltaCliente').style.display="block";
	        break;
	    case "Baja":
	        resetForms();
	        document.getElementById('frmBajaCliente').style.display="block";
	        break;
	    case "Modificar":
	        resetForms();
	        document.getElementById('frmModCliente').style.display="block";
	        break;
	    default:
	        resetForms();
	        document.getElementById('frmListarCliente').style.display="block";
    }

}


/**Maquinaria**/
var menuMaquinas = document.getElementById("menuMaquinaria").children[1];

for (var i = 1; i < menuMaquinaria.children.length; i++) {
   		menuMaquinaria.children[i].addEventListener('click',mostrarEnMaquinaria);
}

function mostrarEnMaquinaria(oEvento){
	var oE = oEvento || window.event;

	switch(oE.target.name) 
	{
	    case "Alta":
	        resetForms();
	        document.getElementById('frmAltaMaquina').style.display="block";
	        break;
	    case "Baja":
	        resetForms();
	        document.getElementById('frmBajaMaquina').style.display="block";
	        break;
	    case "Modificar":
	        resetForms();
	        document.getElementById('frmModMaquina').style.display="block";
	        break;
	    default:
	        resetForms();
	        document.getElementById('frmListarMaquina').style.display="block";
    }

}

/**Alquiler**/
var menuAlquiler = document.getElementById("menuAlquileres").children[1];

for (var i = 0; i < menuAlquiler.children.length; i++) {
   		menuAlquiler.children[i].addEventListener('click',mostrarEnAlquiler);
}

function mostrarEnAlquiler(oEvento){
	var oE = oEvento || window.event;

	switch(oE.target.name) 
	{
	    case "Alta":
	        resetForms();
	        document.getElementById('frmAltaAlquiler').style.display="block";
	        break;
	    case "Listar":
	        resetForms();
	        document.getElementById('frmListarAlquiler').style.display="block";
	        break;
    }

}

/**Devolución**/
var menuDevoluciones = document.getElementById("menuDevoluciones").children[1];

for (var i = 0; i < menuDevoluciones.children.length; i++) {
   		menuDevoluciones.children[i].addEventListener('click',mostrarEnDevolucion);
}

function mostrarEnDevolucion(oEvento){
	var oE = oEvento || window.event;

	switch(oE.target.name) 
	{
	    case "Devolver":
	        resetForms();
	        document.getElementById('frmDevolucion').style.display="block";
	        break;
	    case "Listar":
	        resetForms();
	        document.getElementById('frmListarDevolucion').style.display="block";
	        break;
    }

}


/**Pagos**/
var menuPagos = document.getElementById("menuPagos").children[1];

for (var i = 0; i < menuPagos.children.length; i++) {
   		menuPagos.children[i].addEventListener('click',mostrarEnPagos);
}

function mostrarEnPagos(oEvento){
	var oE = oEvento || window.event;

	switch(oE.target.name) 
	{
	    case "Alta":
	        resetForms();
	        document.getElementById('frmAltaPago').style.display="block";
	        break;
	    case "Listar":
	        resetForms();
	        document.getElementById('frmListarPago').style.display="block";
	        break;
    }

}

/**Balance**/
var btnBalance = document.getElementById("btnBalance");
btnBalance.addEventListener('click',mostrarBalance);

function mostrarBalance(oEvento){
	var oE = oEvento || window.event;

	 resetForms();
	 document.getElementById('frmListarBalance').style.display="block";

}


//-----------EXPRESIONES REGULARES ÚTILES------------

var oExpRegValidarId = /^[0-9]{3}$/;
var oExpRegValidarNombre = /^[a-zA-Z\s]{3,20}$/;
var oExpRegValidarTelefono = /^[679][0-9]{8}$/;
var oExpRegValidarApellidos = /^[a-zA-Z\s]{2,40}$/;
var oExpRegValidarDni = /^[[0-9]{8}[a-zA-Z]$/;
var oExpRegValidarDuracion = /^[0-9]{2,3}$/;
var oExpRegValidarIdioma = /^[a-zA-Z]{3,20}$/;
var oExpRegValidarTitulo = /^[a-zA-Z0-9\s]{3,40}$/;
var oExpRegValidarNumSegSocial = /^[0-9]{12}$/;
var oExpRegValidarPrecio = /^[0-9]{1,}\.?[0-9]{0,2}?$/;
var oExpRegValidarFecha = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
var oExpRegValidarHora = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
var oExpRegValidadCapacidad = /^(?!0).*[0-9]{2,3}$/;
var oExpRegValidarCP = /^[0-9]{5}$/;

var oExpRegValidarMod = /^[a-zA-Z\s]{3,20}$/;
var oExpRegValidarIdMaquina = /^[0-9]{3}$/;
var oExpRegValidarDescripcion = /^[a-zA-Z0-9\s]{10,140}$/;
var oExpRegValidarPrecioAlq = /^[0-9]{1,}\.?[0-9]{0,2}?$/;
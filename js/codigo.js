var oGestion = new Gestion();

/**************Inicio del programa*************/
var btnInicio = document.getElementsByClassName("navbar-brand")[0];
btnInicio.addEventListener("click",inicio,false);

inicio();

function inicio(){
	resetForms();
	document.getElementById('frmBienvenida').style.display="block";


}



/************* Pone los formularios invisibles y resetea campos **************/
function resetForms(){
	var AformsSel = document.getElementsByTagName('form');

	for (var i = 0; i < AformsSel.length; i++) {
   		AformsSel[i].style.display="none";
   		AformsSel[i].reset();
    }

    var aClases = document.querySelectorAll(".is-invalid");

    for(var i=0;i<aClases.length;i++){
    	aClases[i].classList.remove("is-invalid");
    }
}

/************* Selección de botones ***************/

/**Compras**/
var menuCompras = document.getElementById("menuCompra").children[1];

for (var i = 0; i < menuCompras.children.length; i++) {
   		menuCompras.children[i].addEventListener('click',mostrarEnCompras);
}

function mostrarEnCompras(oEvento)
{
	var oE = oEvento || window.event;
	resetForms();

	switch(oE.target.name) 
	{
	    case "Comprar":
	    	actualizaCombos("proveedores");
	    	actualizaCombos("maquinas");
	    	actualizaCombos("empleados");
	        document.getElementById('frmComprar').style.display="block";
	        break;

	    case "Vender":
	  		actualizaCombos("empleados");
	    	actualizaCombos("maquinasNoAlquiladasActivas");
	    	actualizaCombos("clientes");
	        document.getElementById('frmVenta').style.display="block";
	        break;

	    case "Modificar":
	        actualizaCombos("transacciones");
	        document.getElementById('frmModificarCompra').style.display="block";
	        break;

	    default:
	        document.getElementById('frmListarCompras').style.display="block";
	        listarTransacciones();
    }
}

/**Compras --> LISTAR**/
function listarTransacciones()
{
	var formListar = document.getElementById("frmListarCompras");
	var tablaPrevia = document.getElementById("tablaListada");

	if(tablaPrevia!=null)
		tablaPrevia.remove();
	
	formListar.appendChild(tablaTransacciones());
}

/*** Compras --> MODIFICAR ****/
var oSelectModificarTransaccion = document.getElementById("selectModificarCompra");
oSelectModificarTransaccion.addEventListener("change", mostrarModificarTransaccion, false);

var oBtnModificarCompra = document.getElementById("btnModificarCompra");
oBtnModificarCompra.addEventListener("click", modificarCompra, false);

var oBtnModificarVenta = document.getElementById("btnModificarVenta");
oBtnModificarVenta.addEventListener("click", modificarVenta, false);

function mostrarModificarTransaccion(){
	var index = oSelectModificarTransaccion.firstChild.selectedIndex;
	if(index!=0){
		if(oGestion.buscarTransaccion(oSelectModificarTransaccion.firstChild.value) instanceof Compra){
			document.getElementById('frmModificarCompraAbierto').style.display="block";
			document.getElementById('frmModificarVentaAbierto').style.display="none";
			actualizaCombos("proveedores");
	    	actualizaCombos("maquinas");
	    	actualizaCombos("empleados");
			camposFormModificarCompra();
		}
		else{
			document.getElementById('frmModificarVentaAbierto').style.display="block";
			document.getElementById('frmModificarCompraAbierto').style.display="none";
			actualizaCombos("clientes");
	    	actualizaCombos("maquinasNoAlquiladasActivas");
	    	actualizaCombos("empleados");
	    	camposFormModificarVenta();
		}
		
	}
	else{
		document.getElementById('frmModificarVentaAbierto').style.display="none";
		document.getElementById('frmModificarCompraAbierto').style.display="none";
	}
}




/**Proveedores**/
var menuProveedores = document.getElementById("menuProveedor").children[1];

for (var i = 0; i < menuProveedores.children.length; i++) {
   		menuProveedores.children[i].addEventListener('click',mostrarEnProveedores);
}

function mostrarEnProveedores(oEvento){
	var oE = oEvento || window.event;
	resetForms();

	switch(oE.target.name) 
	{
	    case "Alta":
	        document.getElementById('frmAltaProveedor').style.display="block";
	        break;
	    case "Baja":
	        actualizaCombos("proveedores");
	        document.getElementById('frmBajaProveedor').style.display="block";
	        break;
	    case "Modificar":
	        actualizaCombos("todosProveedores");
	        document.getElementById('frmModProveedor').style.display="block";
	        break;
	    default:
	        document.getElementById('frmListarProveedor').style.display="block";
	        listarProveedores();
    }
}

/*** Proveedor --> MODIFICAR ****/
var oSelectModificarProveedor = document.getElementById("selectModificarProveedor");
oSelectModificarProveedor.addEventListener("change", mostrarModificarProveedor, false);

var oBtnModificarProveedor = document.getElementById("btnModificarProveedor");
oBtnModificarProveedor.addEventListener("click", modificarProveedor, false);

function mostrarModificarProveedor(){
	var index = oSelectModificarProveedor.firstChild.selectedIndex;
	if(index!=0){
		document.getElementById('frmModProveedorSeleccionado').style.display="block";
		camposFormModificarProveedor();
	}
	else
		document.getElementById('frmModProveedorSeleccionado').style.display="none";
}


/***Proveedor --> LISTAR ****/
function listarProveedores(){
	var formListar = document.getElementById("frmListarProveedor");
	var tablaPrevia = document.getElementById("tablaListada");

	if(tablaPrevia!=null)
		tablaPrevia.remove();
	
	formListar.appendChild(tablaProveedores());
}

/**Empleados**/
var menuEmpleados = document.getElementById("menuEmpleado").children[1];

for (var i = 0; i < menuEmpleados.children.length; i++) {
   		menuEmpleados.children[i].addEventListener('click',mostrarEnEmpleados);
}

function mostrarEnEmpleados(oEvento){
	var oE = oEvento || window.event;
	resetForms();

	switch(oE.target.name) 
	{
	    case "Alta":
	        document.getElementById('frmAltaEmpleado').style.display="block";
	        break;
	    case "Baja":
	        actualizaCombos("empleados");
	        document.getElementById('frmBajaEmpleado').style.display="block";
	        break;
	    case "Modificar":
	        actualizaCombos("todosEmpleados");
	        document.getElementById('frmModEmpleado').style.display="block";
	        break;
	    default:
	        document.getElementById('frmListarEmpleado').style.display="block";
	        listarEmpleados();
    }
}

/*** Empleado --> MODIFICAR ****/
var oSelectModificarEmpleado = document.getElementById("selectModificarEmpleado");
oSelectModificarEmpleado.addEventListener("change", mostrarModificarEmpleado, false);

var oBtnModificarEmpleado = document.getElementById("btnModificarEmpleado");
oBtnModificarEmpleado.addEventListener("click", modificarEmpleado, false);

function mostrarModificarEmpleado(){
	var index = oSelectModificarEmpleado.firstChild.selectedIndex;
	if(index!=0){
		document.getElementById('frmModEmpleadoSeleccionado').style.display="block";
		camposFormModificarEmpleado();
	}
	else
		document.getElementById('frmModEmpleadoSeleccionado').style.display="none";
}


/***Empleado --> LISTAR ****/
function listarEmpleados(){
	var formListar = document.getElementById("frmListarEmpleado");
	var tablaPrevia = document.getElementById("tablaListada");

	if(tablaPrevia!=null)
		tablaPrevia.remove();
	
	formListar.appendChild(tablaEmpleados());
}


/**Clientes**/
var menuClientes = document.getElementById("menuCliente").children[1];

for (var i = 0; i < menuClientes.children.length; i++) {
   		menuClientes.children[i].addEventListener('click',mostrarEnClientes);
}

function mostrarEnClientes(oEvento){
	var oE = oEvento || window.event;
	resetForms();

	switch(oE.target.name) 
	{
	    case "Alta":
	        document.getElementById('frmAltaCliente').style.display="block";
	        break;
	    case "Baja":
	        actualizaCombos("clientes");
	        document.getElementById('frmBajaCliente').style.display="block";
	        break;
	    case "Modificar":
	        actualizaCombos("clientes");
	        document.getElementById('frmModCliente').style.display="block";
	        break;
	    default:
	        document.getElementById('frmListarCliente').style.display="block";
	        listarClientes();
    }

}

/*** Cliente --> MODIFICAR ****/
var oSelectModificarCliente = document.getElementById("selectModificarCliente");
oSelectModificarCliente.addEventListener("change", mostrarModificarCliente, false);

var oBtnModificarCliente = document.getElementById("btnModificarCliente");
oBtnModificarCliente.addEventListener("click", modificarCliente, false);

function mostrarModificarCliente(){
	var index = oSelectModificarCliente.firstChild.selectedIndex;
	if(index!=0){
		document.getElementById('frmModClienteSeleccionado').style.display="block";
		camposFormModificarCliente();
	}
	else
		document.getElementById('frmModClienteSeleccionado').style.display="none";
}


/***Cliente --> LISTAR ****/
function listarClientes(){
	var formListar = document.getElementById("frmListarCliente");
	var tablaPrevia = document.getElementById("tablaListada");

	if(tablaPrevia!=null)
		tablaPrevia.remove();
	
	formListar.appendChild(tablaClientes());
}


/**Maquinaria**/
var menuMaquinas = document.getElementById("menuMaquinaria").children[1];

for (var i = 1; i < menuMaquinaria.children.length; i++) {
   		menuMaquinaria.children[i].addEventListener('click',mostrarEnMaquinaria);
}

function mostrarEnMaquinaria(oEvento){
	var oE = oEvento || window.event;
	resetForms();

	switch(oE.target.name) 
	{		
	    case "Alta":
	        document.getElementById('frmAltaMaquina').style.display="block";
	        break;
	    case "Baja":
	        actualizaCombos("maquinasNoAlquiladasActivas");
	        document.getElementById('frmBajaMaquina').style.display="block";
	        break;
	    case "Modificar":
	    	actualizaCombos("maquinas");
	        document.getElementById('frmModMaquina').style.display="block";
	        break;
	    default:
	        document.getElementById('frmListarMaquina').style.display="block";
	        listarMaquinas();
    }

}

/*** Maquina --> MODIFICAR ****/
var oSelectModificarMaquina = document.getElementById("selectModificarMaquina");
oSelectModificarMaquina.addEventListener("change", mostrarModificarMaquina, false);

var oBtnModificarMaquina = document.getElementById("btnModificarMaquina");
oBtnModificarMaquina.addEventListener("click", modificarMaquina, false);

function mostrarModificarMaquina(){
	var index = oSelectModificarMaquina.firstChild.selectedIndex;
	if(index!=0){
		document.getElementById('frmModMaquinaSeleccionada').style.display="block";
		camposFormModificarMaquina();
	}
	else
		document.getElementById('frmModMaquinaSeleccionada').style.display="none";
}


/***Maquina --> LISTAR ****/
function listarMaquinas(){
	var formListar = document.getElementById("frmListarMaquina");
	var tablaPrevia = document.getElementById("tablaListada");

	if(tablaPrevia!=null)
		tablaPrevia.remove();
	
	formListar.appendChild(tablaMaquinas());
}


/**Alquiler**/
var menuAlquiler = document.getElementById("menuAlquileres").children[1];

for (var i = 0; i < menuAlquiler.children.length; i++) 
{
   		menuAlquiler.children[i].addEventListener('click',mostrarEnAlquiler);
}

function mostrarEnAlquiler(oEvento)
{
	var oE = oEvento || window.event;

	switch(oE.target.name) 
	{
	    case "Alta":
	        resetForms();
	        actualizaCombos("maquinasNoAlquiladasActivas");
	        actualizaCombos("clientes");
	        actualizaCombos("empleados");
	        document.getElementById('frmAltaAlquiler').style.display="block";

	        var oSelectMaquina = document.getElementById("frmAltaAlquiler").selectMaquina;
			oSelectMaquina.addEventListener("change", calcularImporteAlquiler, false);

			var oSelectFechaini = document.getElementById("frmAltaAlquiler").txtFechaIniAlquiler;
			oSelectFechaini.addEventListener("change", calcularImporteAlquiler, false);

			var oSelectFechafin = document.getElementById("frmAltaAlquiler").txtFechaFinAlquiler;
			oSelectFechafin.addEventListener("change", calcularImporteAlquiler, false);
	        break;
	    case "Modificar":
	        resetForms();
	       	actualizaCombos("alquileres");
	        actualizaCombos("maquinas");
	        actualizaCombos("clientes");
	        actualizaCombos("empleados");
	        document.getElementById('frmModAlquiler').style.display="block";

	         var oSelectMaquina = document.getElementById("frmModAlquilerSeleccionado").selectMaquina;
			oSelectMaquina.addEventListener("change", calcularImporteAlquilerMod, false);

			var oSelectFechaini = document.getElementById("frmModAlquilerSeleccionado").txtFechaIniAlquiler;
			oSelectFechaini.addEventListener("change", calcularImporteAlquilerMod, false);

			var oSelectFechafin = document.getElementById("frmModAlquilerSeleccionado").txtFechaFinAlquiler;
			oSelectFechafin.addEventListener("change", calcularImporteAlquilerMod, false);
	        break;
	    case "Listar":
	        resetForms();
	        document.getElementById('frmListarAlquiler').style.display="block";
	        listarAlquileres();
	        break;
    }
}

/*** ALQUILER --> MODIFICAR ****/
var oSelectModificarAlquiler = document.getElementById("selectModificarAlquileres");
oSelectModificarAlquiler.addEventListener("change", mostrarModificarAlquiler, false);

var oBtnModificarAlquiler = document.getElementById("btnModificarAlquiler");
oBtnModificarAlquiler.addEventListener("click", modificarAlquileres, false);

function mostrarModificarAlquiler(){
	var index = oSelectModificarAlquiler.firstChild.selectedIndex;
	if(index!=0){
		document.getElementById('frmModAlquilerSeleccionado').style.display="block";
		camposFormModificarAlquileres();
	}
	else
		document.getElementById('frmModAlquilerSeleccionado').style.display="none";
}


function listarAlquileres(){
	var formListar = document.getElementById("frmListarAlquiler");
	var tablaPrevia = document.getElementById("tablaListada");

	if(tablaPrevia!=null)
		tablaPrevia.remove();
	
	formListar.appendChild(tablaAlquileres());
}


/**Devolución**/
var menuDevoluciones = document.getElementById("menuDevoluciones").children[1];

for (var i = 0; i < menuDevoluciones.children.length; i++) 
{
   		menuDevoluciones.children[i].addEventListener('click',mostrarEnDevolucion);
}

function mostrarEnDevolucion(oEvento)
{
	var oE = oEvento || window.event;

	switch(oE.target.name) 
	{
	    case "Devolver":
	        resetForms();
	        actualizaCombos("alquileresNoFinalizados");
	        document.getElementById('frmDevolucion').style.display="block";
	        break;
	    case "Listar":
	        resetForms();
	        document.getElementById('frmListarDevolucion').style.display="block";
	        listarDevoluciones();
	        break;
    }

}

function listarDevoluciones()
{
	var formListar = document.getElementById("frmListarDevolucion");
	var tablaPrevia = document.getElementById("tablaListada");

	if(tablaPrevia!=null)
		tablaPrevia.remove();
	
	formListar.appendChild(tablaDevoluciones());
}


/**Balance**/
var btnBalance = document.getElementById("btnBalance");
btnBalance.addEventListener('click',mostrarBalance);

function mostrarBalance(oEvento){
	var oE = oEvento || window.event;

	 resetForms();
	 document.getElementById('frmListarBalance').style.display="block";
	 mostrarEstadisticas();

}

function mostrarEstadisticas(){
	oDiv = document.createElement("DIV");
	oDiv.id="grafos";
	oDiv.classList.add("row");
	document.getElementById('frmListarBalance').replaceChild(oDiv, document.getElementById("grafos"));

	grafoBalanceAlquiler();
	grafoBalanceTransacciones();
    grafoClientes();
    grafoProveedores();
    grafoEmpleados();
    grafoMaquinaria();
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
var oExpRegDireccion=/^[/a-zA-Z\s]{5,80}\d+$/;
var oExpRegLocalidad = /^[a-zA-Z0-9\s]{3,40}$/;

var oExpRegValidarMod = /^[a-zA-Z\s\d]{3,20}$/;
var oExpRegValidarIdMaquina = /^[0-9]{3,9}$/;
var oExpRegValidarDescripcion = /^[a-zA-Z0-9\s]{10,140}$/;
var oExpRegValidarPrecioAlq = /^[0-9]{1,}\.?[0-9]{0,2}?$/;
var oExpRegValidarIdAlquiler = /^([A]{1}-\d+)$/;

var oExpRegValidarImporte = /^\d*\.?\d+(,\d+)?/;
var oExpRegValidarPrecio = /^[0-9]{1,}\.?[0-9]{0,2}?$/;
var oExpRegValidarId = /^[0-9]{3}$/; 
var oExpRegValidarIdTransaccion = /^([T]{1}-\d+)$/; 
var oExpRegValidarFecha = /^([0-2][0-9][0-9][0-9])-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;

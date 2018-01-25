//Validamos el formulario una vez rellenado

var oBtnAnadirDevolucion = document.frmDevolucion.btnAltaDevolucion;
oBtnAnadirDevolucion.addEventListener("click", anadirDevolucion, false);

function anadirDevolucion() 
{
	var sMensaje = "";
	formulario = document.frmDevolucion;

	var idAlquiler = formulario.selectAlquiler.value;
	var fechaAlquiler = formulario.txtFechaDevolucion.value.trim();
	var sMotivo = formulario.txtMotivoDevolucion.value.trim();

	var oDevolucion = new Devolucion(idAlquiler, fechaAlquiler, sMotivo);
	var bAltaDevolucion = oGestion.altaDevolucion(oDevolucion);

	if (bAltaDevolucion) 
	{
		actualizaCombos("alquileres");
		sMensaje = "Devolucion dada de alta";
		mostrarMensaje(sMensaje, true);
		document.frmDevolucion.reset();			
	}
	else
	{
		sMensaje = "Ha ocurrido un error, inténtelo más tarde";
		mostrarMensaje(sMensaje);
		claseError(document.frmDevolucion, 0);
	}
}

function tablaDevoluciones()
{	

	var oTabla = document.createElement("TABLE");
	oTabla.setAttribute("class", "table table-striped");
	oTabla.id = "tablaListada";
	oTabla.setAttribute("name","tablaListada");

	/*Cramos el Header y la Fila Principal*/
	var header = oTabla.createTHead();
	var fila = header.insertRow(0);

	/*Creamos las Celdas, con la Función crearCabecera (js/funciones.js)
	Las celdas estas contienen un A con un event que llaman a la 
	función Ordenar Fila (js/filtros.js)*/
	var oFormulario = document.getElementById("frmDevolucion");

	crearCabecera(oFormulario,fila,0,"ID-Alquiler");
	crearCabecera(oFormulario,fila,1,"Fecha de devolución");
	crearCabecera(oFormulario,fila,2,"Motivo");

	/*Finalmente creamos la cabecera de Estado, que tiene la 
	función ordenarActivos (js/filtros.js)*/

	// var enlaceOrden = document.createElement("A");
	// enlaceOrden.href="#";
	// enlaceOrden.appendChild(document.createTextNode("Estado"));
	// enlaceOrden.addEventListener("click", function(){ordenarActivos(oFormulario)}, false);

	//fila.insertCell(-1).appendChild(enlaceOrden);

	var body = oTabla.appendChild(oGestion.sRowHTMLDevoluciones());

	return oTabla;

	// var oTabla = document.createElement("TABLE");
	// oTabla.setAttribute("class", "table table-striped");
	// oTabla.id = "tablaListada";

	// var header = oTabla.createTHead();
	// var fila = header.insertRow(0);
	// fila.insertCell(-1).appendChild(document.createTextNode("ID"));
	// fila.insertCell(-1).appendChild(document.createTextNode("Fecha Devolucion"));

	// var body = oTabla.appendChild(oGestion.sRowHTMLDevoluciones());

	// return oTabla;	
}
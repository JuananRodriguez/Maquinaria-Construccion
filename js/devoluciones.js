//Validamos el formulario una vez rellenado

var oBtnAnadirDevolucion = document.frmDevolucion.btnAltaDevolucion;
oBtnAnadirDevolucion.addEventListener("click", anadirDevolucion, false);

function anadirDevolucion() 
{
	var sMensaje = "";
	formulario = document.frmDevolucion;

	var idAlquiler = formulario.selectAlquiler.value;
	var fechaAlquiler = formulario.txtFechaDevolucion.value.trim();

	var oDevolucion = new Devolucion(idAlquiler, fechaAlquiler);
	var bAltaDevolucion = oGestion.altaDevolucion(oDevolucion);

	if (bAltaDevolucion) 
	{
		actualizaCombos("alquileres");
		sMensaje = "Devolucion dada de alta";
		mostrarMensaje(sMensaje);
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

	var header = oTabla.createTHead();
	var fila = header.insertRow(0);
	fila.insertCell(-1).appendChild(document.createTextNode("ID"));
	fila.insertCell(-1).appendChild(document.createTextNode("Fecha Devolucion"));

	var body = oTabla.appendChild(oGestion.sRowHTMLDevoluciones());

	return oTabla;	
}
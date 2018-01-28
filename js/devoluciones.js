//Validamos el formulario una vez rellenado

var oBtnAnadirDevolucion = document.frmDevolucion.btnAltaDevolucion;
oBtnAnadirDevolucion.addEventListener("click", anadirDevolucion, false);

function validarDevolucion(formulario)
{
	var bAlquiler = true;
	var aError = [];  

	//****ID Alquiler
	if(formulario.getElementsByClassName("selectDivAlquiler")[0].firstChild.selectedIndex == 0)
	{
		if(bAlquiler)
		{
			bAlquiler = false;
			formulario.getElementsByClassName("selectDivAlquiler")[0].firstChild.focus();
		}
		formulario.getElementsByClassName("selectDivAlquiler")[0].firstChild.classList.add("is-invalid");
		aError.push("Debe seleccionar un alquiler en activo");
	}
	else
	{
		formulario.getElementsByClassName("selectDivAlquiler")[0].firstChild.classList.remove("is-invalid");
	}


	//****Fecha de devolución

	var fecha = formulario.txtFechaDevolucion.value.trim();
	if(oExpRegValidarFecha.test(fecha) == false)
	{
		if(bAlquiler)
		{
			bAlquiler = false;
			formulario.txtFechaDevolucion.focus();
		}
		claseError(formulario, 0);
		aError.push("Debe introducir una fecha válida");
	}
	else
	{
		quitarError(formulario, 0);
	}

	//***Motivo de la devolución
	var motivo = formulario.txtMotivoDevolucion.value.trim();
	if(motivo == "")
	{
		if(bAlquiler)
		{
			bAlquiler = false;
			formulario.getElementsByTagName("TEXTAREA")[0].focus();
		}
		formulario.getElementsByTagName("TEXTAREA")[0].classList.add("is-invalid");
		aError.push("Debe introducir algún motivo");
	}
	else
	{
		formulario.getElementsByTagName("TEXTAREA")[0].classList.remove("is-invalid");
	}



	if(aError.length>0){ // Este If muestra los mensajes de error de la validación. 
						 //	Los mete en un Div y los manda a MostrarMensaje
		DeMensajesADiv(aError);
	}

	return bAlquiler;
}

function anadirDevolucion() 
{
	var sMensaje = "";
	formulario = document.frmDevolucion;
	if(validarDevolucion(formulario))
			{
			var idAlquiler = formulario.selectAlquiler.value;
			var fechaAlquiler = formulario.txtFechaDevolucion.value.trim();
			var sMotivo = formulario.txtMotivoDevolucion.value.trim();

			var oDevolucion = new Devolucion(idAlquiler, fechaAlquiler, sMotivo);
			var bAltaDevolucion = oGestion.altaDevolucion(oDevolucion);

			if (bAltaDevolucion) 
			{
				actualizaCombos("alquileresNoFinalizados");
				sMensaje = "Devolucion registrada";
				mostrarMensaje(sMensaje, true);
				document.frmDevolucion.reset();			
			}
			else
			{
				sMensaje = "Se ha producido un error inexperado";
				mostrarMensaje(sMensaje);
				claseError(document.frmDevolucion, 0);
			}
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
	var oFormulario = document.getElementById("frmListarDevolucion");

	crearCabecera(oFormulario,fila,0,"ID-Alquiler");
	crearCabecera(oFormulario,fila,1,"Fecha de devolución");
	crearCabecera(oFormulario,fila,2,"Motivo");

	

	var body = oTabla.appendChild(oGestion.sRowHTMLDevoluciones());

	return oTabla;

				/********************/

}
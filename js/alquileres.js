//Validamos el formulario una vez rellenado

var oBtnAnadirAlquiler = document.frmAltaAlquiler.btnAltaAlquiler;
oBtnAnadirAlquiler.addEventListener("click", anadirAlquiler, false);

function validarAlquiler(formulario)
{
	var bAlquiler = true;
	var aError = [];  

	//ID
	var idAlquiler = formulario.txtIDAlquiler.value.trim();
	if(oExpRegValidarIdAlquiler.test(idAlquiler) == false)
	{
		if(bAlquiler)
		{
			bAlquiler = false;
			formulario.txtIDAlquiler.focus();
		}
		claseError(formulario, 0);
		aError.push("ID incorrecto");
	}
	else
	{
		quitarError(formulario, 0);
	}


	//fecha inicio
	var fechaAlquiler = formulario.txtFechaIniAlquiler.value.trim();
	// if(oExpRegValidarFecha.test(fechaAlquiler) == false)
	// {
	// 	if(bAlquiler)
	// 	{
	// 		bAlquiler = false;
	// 		formulario.txtFechaIniAlquiler.focus();
	// 	}
	// 	claseError(formulario, 1);
	// 	aError.push("Fecha de inicio incorrecta");
	// }
	// else
	// {
	// 	quitarError(formulario, 1);
	// }

	//fecha final
	var fechaAlquilerFin = formulario.txtFechaFinAlquiler.value.trim();
	// if(oExpRegValidarFecha.test(fechaAlquilerFin) == false)
	// {
	// 	if(bAlquiler)
	// 	{
	// 		bAlquiler = false;
	// 		formulario.txtFechaFinAlquiler.focus();
	// 	}
	// 	claseError(formulario, 2);
	// 	aError.push("Fecha de finalización incorrecta");
	// }
	// else
	// {
	// 	quitarError(formulario, 2);
	// }

	//IMPORTE
	var importeAlquiler = formulario.txtImporteAlquiler.value.trim();
	if(oExpRegValidarImporte.test(importeAlquiler) == false)
	{
		if(bAlquiler)
		{
			bAlquiler = false;
			formulario.txtImporteAlquiler.focus();
		}
		claseError(formulario, 3);
		aError.push("Importe incorrecto");
	}
	else
	{
		quitarError(formulario, 3);
	}

	return bAlquiler;
}

function anadirAlquiler() 
{
	var sMensaje = "";
	formulario = document.frmAltaAlquiler;

	if(validarAlquiler(formulario))
	{
		var idAlquiler = formulario.txtIDAlquiler.value.trim();
		var fechaAlquiler = formulario.txtFechaIniAlquiler.value.trim();
		var fechaAlquilerFin = formulario.txtFechaFinAlquiler.value.trim();
		var importeAlquiler = formulario.txtImporteAlquiler.value.trim();
		var dniCliente = formulario.selectCliente.value;
		var dniEmpleado = formulario.selectEmpleado.value;
		var idMaquina = formulario.selectMaquina.value;

		var oAlquiler = new Alquiler(idAlquiler, fechaAlquiler, fechaAlquilerFin, importeAlquiler, dniCliente, idMaquina, dniEmpleado);
		var bAltaAlquiler = oGestion.altaAlquiler(oAlquiler);

		if (bAltaAlquiler) 
		{
			actualizaCombos("alquileres");
			sMensaje = "Alquiler dado de alta";
			mostrarMensaje(sMensaje);
			document.frmAltaAlquiler.reset();			
		}
		else
		{
			sMensaje = "Alquiler ya existente";
			mostrarMensaje(sMensaje);
			claseError(document.frmAltaAlquiler, 0);
		}
	} 
}

function camposFormModificarAlquileres()
{
	var idAlquilerMod = document.getElementById("selectModificarAlquileres").firstChild.value;
	var antiguoAlquiler = oGestion.buscarAlquiler(idAlquilerMod);
	var selectClienteMod =  document.getElementById("selectCliente");

	CamposFormulario = document.getElementById("frmModAlquilerSeleccionado").elements;

	CamposFormulario[0].value = antiguoAlquiler.idAlquiler;
    CamposFormulario[1].value = antiguoAlquiler.fechaInicio;
    CamposFormulario[2].value = antiguoAlquiler.fechaFinal;
    CamposFormulario[3].value = antiguoAlquiler.importe;
    CamposFormulario[4].value = antiguoAlquiler.dniCliente;
    CamposFormulario[5].value = antiguoAlquiler.idMaquina;
    CamposFormulario[6].value = antiguoAlquiler.dniEmpleado;

    if(antiguoAlquiler.estado)
    {
    	document.getElementById("estadoAlquiler").checked = true;
	}
	else
	{
		document.getElementById("estadoAlquiler").checked = false;
	}
	CamposFormulario[7].value = antiguoAlquiler.estado;
}

function modificarAlquileres()
{	
	formulario=document.frmModAlquilerSeleccionado;
	if(validarAlquiler(formulario))
	{
		var idAlquiler = formulario.txtIDAlquiler.value.trim();
		var fechaAlquiler = formulario.txtFechaIniAlquiler.value.trim();
		var fechaAlquilerFin = formulario.txtFechaFinAlquiler.value.trim();
		var importeAlquiler = formulario.txtImporteAlquiler.value.trim();
		var dniCliente = formulario.selectCliente.value;
		var dniEmpleado = formulario.selectEmpleado.value;
		var idMaquina = formulario.selectMaquina.value;
		var estadoAlquiler = formulario.estadoAlquiler.checked;

		var oAlquiler = new Alquiler(idAlquiler, fechaAlquiler, fechaAlquilerFin, importeAlquiler, dniCliente, idMaquina, dniEmpleado);
		oAlquiler.estado=estadoAlquiler;
		var alquileraModificar = document.getElementById("selectModificarAlquileres").firstChild.value;

		if(oGestion.modificarAlquileres(alquileraModificar,oAlquiler))
		{
	    	actualizaCombos("alquileres");
	    	mostrarMensaje("Alquiler actualizado",true);
	   }
	}
}


function tablaAlquileres()
{	
	var oTabla = document.createElement("TABLE");
	oTabla.setAttribute("class", "table table-striped");
	oTabla.id = "tablaListada";

	var header = oTabla.createTHead();
	var fila = header.insertRow(0);
	fila.insertCell(-1).appendChild(document.createTextNode("ID"));
	fila.insertCell(-1).appendChild(document.createTextNode("Fecha Inicio"));
	fila.insertCell(-1).appendChild(document.createTextNode("Fecha Fin"));
	fila.insertCell(-1).appendChild(document.createTextNode("Importe"));
	fila.insertCell(-1).appendChild(document.createTextNode("Cliente"));
	fila.insertCell(-1).appendChild(document.createTextNode("Maquina"));
	fila.insertCell(-1).appendChild(document.createTextNode("Empleado"));
	fila.insertCell(-1).appendChild(document.createTextNode("Estado"));

	var body = oTabla.appendChild(oGestion.sRowHTMLAlquileres());

	return oTabla;	
}
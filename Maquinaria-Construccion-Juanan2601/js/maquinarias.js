//Validamos el formulario una vez rellenado

var oBtnAnadirMaquinaria = document.frmAltaMaquina.btnAltaMaquina;
oBtnAnadirMaquinaria.addEventListener("click", anadirMaquinaria, false);

var oBtnEliminarMaquinaria = document.frmBajaMaquina.btnEliminarMaquina;
oBtnEliminarMaquinaria.addEventListener("click", eliminarMaquinaria, false);

function validarMaquina(formulario)
{
	var bMaquina = true;
	var aError = []; 

	//MODELO
	var modMaquina = formulario.txtModeloMaquina.value.trim();
	if(oExpRegValidarMod.test(modMaquina) == false)
	{
		if(bMaquina)
		{
			bMaquina = false;
			formulario.txtModeloMaquina.focus();
		}
		claseError(formulario, 0);
		aError.push("Modelo incorrecto");
	}
	else
	{
		quitarError(formulario, 0);
	}

	//ID
	var idMaquina = formulario.txtIDMaquina.value.trim();
	if(oExpRegValidarIdMaquina.test(idMaquina) == false)
	{
		if(bMaquina)
		{
			bMaquina = false;
			formulario.txtIDMaquina.focus();
		}
		claseError(formulario, 1);
		aError.push("ID incorrecta");
	}
	else
	{
		quitarError(formulario, 1);
	}

	//NOMBRE
	var nomMaquina = formulario.txtNombreMaquina.value.trim();
	if(oExpRegValidarNombre.test(nomMaquina) == false)
	{
		if(bMaquina)
		{
			bMaquina = false;
			formulario.txtNombreMaquina.focus();
		}
		claseError(formulario, 2);
		aError.push("El nombre no es válido");
	}
	else
	{
		quitarError(formulario, 2);
	}

	//DESCRIPCION
	var descMaquina = formulario.txtDecMaquina.value.trim();
	if(oExpRegValidarDescripcion.test(descMaquina) == false)
	{
		if(bMaquina)
		{
			bMaquina = false;
			formulario.txtDecMaquina.focus();
		}
		claseError(formulario, 3);
		aError.push("La descripción no es válida");
	}
	else
	{
		quitarError(formulario, 3);
	}

	//ALQUILER
	var alquilerMaquina = formulario.txtPrecioMaquina.value.trim();
	if(oExpRegValidarPrecioAlq.test(alquilerMaquina) == false)
	{
		if(bMaquina)
		{
			bMaquina = false;
			formulario.txtPrecioMaquina.focus();
		}
		claseError(formulario, 4);
		aError.push("No es un precio válido");
	}
	else
	{
		quitarError(formulario, 4);
	}

	if(aError.length>0){ // Este If muestra los mensajes de error de la validación. 
						 //	Los mete en un Div y los manda a MostrarMensaje
		DeMensajesADiv(aError);
	}
	return bMaquina;
}

function anadirMaquinaria() 
{
	var sMensaje = "";

	if(validarMaquina(document.frmAltaMaquina))
	{
		var modMaquina = document.frmAltaMaquina.txtModeloMaquina.value.trim();
		var idMaquina = document.frmAltaMaquina.txtIDMaquina.value.trim();
		var nomMaquina = document.frmAltaMaquina.txtNombreMaquina.value.trim();
		var descMaquina = document.frmAltaMaquina.txtDecMaquina.value.trim();
		var alquilerMaquina = document.frmAltaMaquina.txtPrecioMaquina.value.trim();
		var averiaMaquina = document.frmAltaMaquina.txtAveriaMaquina.value.trim();

		var oMaquina = new Maquina(modMaquina,idMaquina, nomMaquina, descMaquina, alquilerMaquina, averiaMaquina);

		var bAltaMaquina = oGestion.altaMaquina(oMaquina);

		if (bAltaMaquina) 
		{
			sMensaje = "Máquina dado de alta";
			mostrarMensaje(sMensaje);
			document.frmAltaMaquina.reset();
			actualizaCombos("maquinas");
		}
		else
		{
			sMensaje = "Máquina ya existente";
			mostrarMensaje(sMensaje);
			claseError(document.frmAltaMaquina, 0);
		}
	} 
}

function eliminarMaquinaria()
{
    var maquinaEliminar = document.getElementById("selectMaquina").value;
    if(oGestion.eliminarMaquina(maquinaEliminar))
    	mostrarMensaje("Maquina eliminada",true);
    else
    	mostrarMensaje("Maquina no existe",false);
    actualizaCombos("maquinas");
}


function camposFormModificarMaquina()
{
	var idMaquinaModificar = document.getElementById("selectModificarMaquina").firstChild.value;
	var antiguaMaquina = oGestion.buscarMaquina(idMaquinaModificar);

	CamposFormulario = document.getElementById("frmModMaquinaSeleccionada").getElementsByTagName("input");

	CamposFormulario[0].value = antiguaMaquina.sModelo;
    CamposFormulario[1].value = antiguaMaquina.iIdMaquina;
    CamposFormulario[2].value = antiguaMaquina.sNombreMaquina;
    CamposFormulario[3].value = antiguaMaquina.sDescMaquina;
    CamposFormulario[4].value = antiguaMaquina.iAlquiler;
    CamposFormulario[5].value = antiguaMaquina.sAveria;
}

function modificarMaquina()
{	
	formulario=document.frmModMaquinaSeleccionada;
	if(validarMaquina(formulario)){

		var modMaquina = formulario.txtModeloMaquina.value.trim();
		var idMaquina = formulario.txtIDMaquina.value.trim();
		var nomMaquina = formulario.txtNombreMaquina.value.trim();
		var descMaquina = formulario.txtDecMaquina.value.trim();
		var alquilerMaquina = formulario.txtPrecioMaquina.value.trim();
		var averiaMaquina = formulario.txtAveriaMaquina.value.trim();

		var oMaquina = new Maquina(modMaquina,idMaquina, nomMaquina, descMaquina, alquilerMaquina, averiaMaquina);
		var maquinaaModificar = document.getElementById("selectModificarMaquina").firstChild.value;

		if(oGestion.modificarMaquina(maquinaaModificar,oMaquina)){
	    	actualizaCombos("maquinas");
	    	mostrarMensaje("Maquina actualizada");
	   }
	}
}

function tablaMaquinas()
{		
	var oTabla = document.createElement("TABLE");
	oTabla.setAttribute("class", "table table-striped");
	oTabla.id = "tablaListada";

	var header = oTabla.createTHead();
	var fila = header.insertRow(0);
	fila.insertCell(-1).appendChild(document.createTextNode("Modelo"));
	fila.insertCell(-1).appendChild(document.createTextNode("Id. Maquina"));
	fila.insertCell(-1).appendChild(document.createTextNode("Nombre"));
	fila.insertCell(-1).appendChild(document.createTextNode("Descripción"));
	fila.insertCell(-1).appendChild(document.createTextNode("Precio del Alquiler"));
	fila.insertCell(-1).appendChild(document.createTextNode("Avería"));
	fila.insertCell(-1).appendChild(document.createTextNode("Estado"));

	var body = oTabla.appendChild(oGestion.sRowHTMLMaquinas());

	return oTabla;	
}
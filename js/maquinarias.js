//Validamos el formulario una vez rellenado

var oBtnAnadirMaquinaria = document.frmAltaMaquina.btnAltaMaquina;
oBtnAnadirMaquinaria.addEventListener("click", anadirMaquinaria, false);

var oBtnEliminarMaquinaria = document.frmBajaMaquina.btnEliminarMaquina;
oBtnEliminarMaquinaria.addEventListener("click", eliminarMaquinaria, false);

function validarMaquina()
{
	var bMaquina = true;
	var sError = ""; 

	//MODELO
	var modMaquina = document.frmAltaMaquina.txtModeloMaquina.value.trim();
	if(oExpRegValidarMod.test(modMaquina) == false)
	{
		if(bMaquina)
		{
			bMaquina = false;
			document.frmAltaMaquina.txtModeloMaquina.focus();
		}
		claseError(document.frmAltaMaquina, 0);
		sError += "Modelo incorrecto<br>";
	}
	else
	{
		quitarError(document.frmAltaMaquina, 0);
	}

	//ID
	var idMaquina = document.frmAltaMaquina.txtIDMaquina.value.trim();
	if(oExpRegValidarIdMaquina.test(idMaquina) == false)
	{
		if(bMaquina)
		{
			bMaquina = false;
			document.frmAltaMaquina.txtIDMaquina.focus();
		}
		claseError(document.frmAltaMaquina, 1);
		sError += "ID incorrecta<br>";
	}
	else
	{
		quitarError(document.frmAltaMaquina, 1);
	}

	//NOMBRE
	var nomMaquina = document.frmAltaMaquina.txtNombreMaquina.value.trim();
	if(oExpRegValidarNombre.test(nomMaquina) == false)
	{
		if(bMaquina)
		{
			bMaquina = false;
			document.frmAltaMaquina.txtNombreMaquina.focus();
		}
		claseError(document.frmAltaMaquina, 2);
		sError += "El nombre no es válido<br>";
	}
	else
	{
		quitarError(document.frmAltaMaquina, 2);
	}

	//DESCRIPCION
	var descMaquina = document.frmAltaMaquina.txtDecMaquina.value.trim();
	if(oExpRegValidarDescripcion.test(descMaquina) == false)
	{
		if(bMaquina)
		{
			bMaquina = false;
			document.frmAltaMaquina.txtDecMaquina.focus();
		}
		claseError(document.frmAltaMaquina, 3);
		sError += "La descripción no es válida<br>";
	}
	else
	{
		quitarError(document.frmAltaMaquina, 3);
	}

	//ALQUILER
	var alquilerMaquina = document.frmAltaMaquina.txtPrecioMaquina.value.trim();
	if(oExpRegValidarPrecioAlq.test(alquilerMaquina) == false)
	{
		if(bMaquina)
		{
			bMaquina = false;
			document.frmAltaMaquina.txtPrecioMaquina.focus();
		}
		claseError(document.frmAltaMaquina, 4);
		sError += "No es un precio válido<br>";
	}
	else
	{
		quitarError(document.frmAltaMaquina, 4);
	}
	return bMaquina;
}

function anadirMaquinaria() 
{
	var sMensaje = "";

	if(validarMaquina())
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
    	mostrarMensaje("Maquina eliminada");
    else
    	mostrarMensaje("Maquina no existe");
    actualizaCombos("maquinas");
}
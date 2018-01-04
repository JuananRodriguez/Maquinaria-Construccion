//Validamos el formulario una vez rellenado

var oBtnAnadirCliente = document.frmAltaCliente.btnAnadirCliente;
oBtnAnadirCliente.addEventListener("click", anadirCliente, false);

var oBtnEliminarCliente = document.frmBajaCliente.btnEliminarCliente;
oBtnEliminarCliente.addEventListener("click", eliminarCliente, false);

function validarClientes()
{
	var bCliente = true;
	var sError = ""; 

	//DNI
	var dniCliente = document.frmAltaCliente.txtDNICliente.value.trim();
	if(oExpRegValidarDni.test(dniCliente) == false)
	{
		if(bCliente)
		{
			bCliente = false;
			document.frmAltaCliente.txtDNICliente.focus();
		}
		claseError(document.frmAltaCliente, 0);
		sError += "DNI incorrecto<br>";
	}
	else
	{
		quitarError(document.frmAltaCliente, 0);
	}

	//NOMBRE
	var nombreCliente = document.frmAltaCliente.txtNombreCliente.value.trim();
	if(oExpRegValidarNombre.test(nombreCliente) == false)
	{
		if(bCliente)
		{
			bCliente = false;
			document.frmAltaCliente.txtNombreCliente.focus();
		}
		claseError(document.frmAltaCliente, 1);
		sError += "Nombre incorrecto<br>";
	}
	else
	{
		quitarError(document.frmAltaCliente, 1);
	}

	//APELLIDOS
	var apellidoCliente = document.frmAltaCliente.txtApellidoCliente.value.trim();
	if(oExpRegValidarApellidos.test(apellidoCliente) == false)
	{
		if(bCliente)
		{
			bCliente = false;
			document.frmAltaCliente.txtApellidoCliente.focus();
		}
		claseError(document.frmAltaCliente, 2);
		sError += "Apellidos incorrectos<br>";
	}
	else
	{
		quitarError(document.frmAltaCliente, 2);
	}

	//TELEFONO
	var telClientes = document.frmAltaCliente.txtTelefonoCliente.value.trim();
	if(oExpRegValidarTelefono.test(telClientes) == false)
	{
		if(bCliente)
		{
			bCliente = false;
			document.frmAltaCliente.txtTelefonoCliente.focus();
		}
		claseError(document.frmAltaCliente, 3);
		sError += "Teléfono incorrecto<br>";
	}
	else
	{
		quitarError(document.frmAltaCliente, 3);
	}

	//CP
	var cpCliente = document.frmAltaCliente.txtCPostalCliente.value.trim();
	if(oExpRegValidarCP.test(cpCliente) == false)
	{
		if(bCliente)
		{
			bCliente = false;
			document.frmAltaCliente.txtCPostalCliente.focus();
		}
		claseError(document.frmAltaCliente, 6);
		sError += "Código postal incorrecto<br>";
	}
	else
	{
		quitarError(document.frmAltaCliente, 6);
	}
	return bCliente;
}

function anadirCliente() 
{
	var sMensaje = "";

	if(validarClientes())
	{
		var dniCliente = document.frmAltaCliente.txtDNICliente.value.trim();
		var nombreCliente = document.frmAltaCliente.txtNombreCliente.value.trim();
		var apellidoCliente = document.frmAltaCliente.txtApellidoCliente.value.trim();
		var telClientes = document.frmAltaCliente.txtTelefonoCliente.value.trim();
		var dirCliente = document.frmAltaCliente.txtDireccionCliente.value.trim();
		var localidadCliente = document.frmAltaCliente.txtLocalidadCliente.value.trim();
		var cpCliente = document.frmAltaCliente.txtCPostalCliente.value.trim();

		var oCliente = new Cliente(dniCliente,nombreCliente, apellidoCliente, telClientes, dirCliente, localidadCliente, cpCliente);

		var bAltaCliente = oGestion.altaCliente(oCliente);

		if (bAltaCliente) 
		{
			sMensaje = "Cliente dado de alta";
			mostrarMensaje(sMensaje);
			document.frmAltaCliente.reset();
			actualizaCombos("clientes");
		}
		else
		{
			sMensaje = "Cliente ya existente";
			mostrarMensaje(sMensaje);
			claseError(document.frmAltaCliente, 0);
		}

	} 
}

function eliminarCliente()
{
    var clienteEliminar = document.getElementById("selectCliente").value;
    if(oGestion.eliminarCliente(clienteEliminar))
    	mostrarMensaje("Cliente eliminado");
    else
    	mostrarMensaje("Cliente no existe");
    actualizaCombos("clientes");
}
//Validamos el formulario una vez rellenado

var oBtnAnadirCliente = document.frmAltaCliente.btnAnadirCliente;
oBtnAnadirCliente.addEventListener("click", anadirCliente, false);

var oBtnEliminarCliente = document.frmBajaCliente.btnEliminarCliente;
oBtnEliminarCliente.addEventListener("click", eliminarCliente, false);

function validarClientes(formulario)
{
	var bCliente = true;
	var aError = []; 

	//DNI
	var dniCliente = formulario.txtDNICliente.value.trim();
	if(oExpRegValidarDni.test(dniCliente) == false)
	{
		if(bCliente)
		{
			bCliente = false;
			formulario.txtDNICliente.focus();
		}
		claseError(formulario, 0);
		aError.push("DNI incorrecto");
	}
	else
	{
		quitarError(formulario, 0);
	}

	//NOMBRE
	var nombreCliente = formulario.txtNombreCliente.value.trim();
	if(oExpRegValidarNombre.test(nombreCliente) == false)
	{
		if(bCliente)
		{
			bCliente = false;
			formulario.txtNombreCliente.focus();
		}
		claseError(formulario, 1);
		aError.push("Nombre incorrecto");
	}
	else
	{
		quitarError(formulario, 1);
	}

	//APELLIDOS
	var apellidoCliente = formulario.txtApellidoCliente.value.trim();
	if(oExpRegValidarApellidos.test(apellidoCliente) == false)
	{
		if(bCliente)
		{
			bCliente = false;
			formulario.txtApellidoCliente.focus();
		}
		claseError(formulario, 2);
		aError.push("Apellidos incorrectos");
	}
	else
	{
		quitarError(formulario, 2);
	}

	//TELEFONO
	var telClientes = formulario.txtTelefonoCliente.value.trim();
	if(oExpRegValidarTelefono.test(telClientes) == false)
	{
		if(bCliente)
		{
			bCliente = false;
			formulario.txtTelefonoCliente.focus();
		}
		claseError(formulario, 3);
		aError.push("Teléfono incorrecto");
	}
	else
	{
		quitarError(formulario, 3);
	}

	//CP
	var cpCliente = formulario.txtCPostalCliente.value.trim();
	if(oExpRegValidarCP.test(cpCliente) == false)
	{
		if(bCliente)
		{
			bCliente = false;
			formulario.txtCPostalCliente.focus();
		}
		claseError(formulario, 6);
		aError.push("Código postal incorrecto");
	}
	else
	{
		quitarError(formulario, 6);
	}
	if(aError.length>0){ // Este If muestra los mensajes de error de la validación. 
						 //	Los mete en un Div y los manda a MostrarMensaje
		DeMensajesADiv(aError);
	}
	return bCliente;
}

function anadirCliente() 
{
	var sMensaje = "";
	formulario = document.frmAltaCliente;

	if(validarClientes(formulario))
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
			actualizaCombos("clientes");
			sMensaje = "Cliente dado de alta";
			mostrarMensaje(sMensaje,true);
			document.frmAltaCliente.reset();			
		}

		else
		{
			sMensaje = "Cliente ya existente";
			mostrarMensaje(sMensaje,false);
			claseError(document.frmAltaCliente, 0);
		}
	} 
}

function eliminarCliente()
{
    var clienteEliminar = document.getElementById("selectCliente").value;
    //alert(clienteEliminar);

    if(oGestion.eliminarCliente(clienteEliminar)){
    	actualizaCombos("clientes");
    	mostrarMensaje("Cliente eliminado",true);
    }
    else
    	mostrarMensaje("Cliente no existe",false);
}

function camposFormModificarCliente()
{
	var dniClienteModificar = document.getElementById("selectModificarCliente").firstChild.value;
	var antiguoCliente = oGestion.buscarCliente(dniClienteModificar);

	CamposFormulario = document.getElementById("frmModClienteSeleccionado").getElementsByTagName("input");

	CamposFormulario[0].value = antiguoCliente.dniCliente;
    CamposFormulario[1].value = antiguoCliente.nombreCliente;
    CamposFormulario[2].value = antiguoCliente.apellidoCliente;
    CamposFormulario[3].value = antiguoCliente.telClientes;
    CamposFormulario[4].value = antiguoCliente.dirCliente;
    CamposFormulario[5].value = antiguoCliente.localidadCliente;
    CamposFormulario[6].value = antiguoCliente.cpCliente;

}

function modificarCliente()
{	
	formulario=document.frmModClienteSeleccionado;
	if(validarClientes(formulario)){
		var dniCliente = formulario.txtDNICliente.value.trim();
		var nombreCliente = formulario.txtNombreCliente.value.trim();
		var apellidoCliente = formulario.txtApellidoCliente.value.trim();
		var telClientes = formulario.txtTelefonoCliente.value.trim();
		var dirCliente = formulario.txtDireccionCliente.value.trim();
		var localidadCliente = formulario.txtLocalidadCliente.value.trim();
		var cpCliente = formulario.txtCPostalCliente.value.trim();

		var oCliente = new Cliente(dniCliente,nombreCliente, apellidoCliente, telClientes, dirCliente, localidadCliente, cpCliente);

		var clienteaModificar = document.getElementById("selectModificarCliente").firstChild.value;

		if(oGestion.modificarCliente(clienteaModificar,oCliente)){
	    	actualizaCombos("clientes");
	    	mostrarMensaje("Cliente actualizado",true);
	   }
	}
}

function tablaClientes()
{	
	var oTabla = document.createElement("TABLE");
	oTabla.setAttribute("class", "table table-striped");
	oTabla.id = "tablaListada";

	var header = oTabla.createTHead();
	var fila = header.insertRow(0);
	fila.insertCell(-1).appendChild(document.createTextNode("DNI"));
	fila.insertCell(-1).appendChild(document.createTextNode("Nombre"));
	fila.insertCell(-1).appendChild(document.createTextNode("Apellidos"));
	fila.insertCell(-1).appendChild(document.createTextNode("Teléfono"));
	fila.insertCell(-1).appendChild(document.createTextNode("Direccion"));
	fila.insertCell(-1).appendChild(document.createTextNode("Localidad"));
	fila.insertCell(-1).appendChild(document.createTextNode("C.Postal"));

	var body = oTabla.appendChild(oGestion.sRowHTMLClientes());

	return oTabla;	
}


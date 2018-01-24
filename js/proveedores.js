//Validamos el formulario una vez rellenado

var oBtnAnadirProveedor = document.frmAltaProveedor.btnAnadirProveedor;
oBtnAnadirProveedor.addEventListener("click", anadirProveedor, false);

var oBtnEliminarProveedor = document.frmBajaProveedor.btnEliminarProveedor;
oBtnEliminarProveedor.addEventListener("click", eliminarProveedor, false);

function validarProveedores(formulario)
{
	var bValido = true;
	var aError = []; 

	//DNI
	var dniProveedor = formulario.txtDNIProveedor.value.trim();
	if(oExpRegValidarDni.test(dniProveedor) == false)
	{
		if(bValido)
		{
			bValido = false;
			formulario.txtDNIProveedor.focus();
		}
		claseError(formulario, 1);
		aError.push("DNI incorrecto");
	}
	else
	{
		quitarError(formulario, 1);
	}

	//NOMBRE
	var nombreProveedor = formulario.txtNombreProveedor.value.trim();
	if(oExpRegValidarNombre.test(nombreProveedor) == false)
	{
		if(bValido)
		{
			bValido = false;
			formulario.txtNombreProveedor.focus();
		}
		claseError(formulario, 2);
		aError.push("Nombre incorrecto");
	}
	else
	{
		quitarError(formulario, 2);
	}

	//APELLIDOS
	var apellidoProveedor = formulario.txtApellidoProveedor.value.trim();
	if(oExpRegValidarApellidos.test(apellidoProveedor) == false)
	{
		if(bValido)
		{
			bValido = false;
			formulario.txtApellidoProveedor.focus();
		}
		claseError(formulario, 3);
		aError.push("Apellidos incorrectos");
	}
	else
	{
		quitarError(formulario, 3);
	}

	//TELEFONO
	var telProovedor = formulario.txtTelefonoProveedor.value.trim();
	if(oExpRegValidarTelefono.test(telProovedor) == false)
	{
		if(bValido)
		{
			bValido = false;
			formulario.txtTelefonoProveedor.focus();
		}
		claseError(formulario, 5);
		aError.push("Teléfono incorrecto");
	}
	else
	{
		quitarError(formulario, 5);
	}

	//CP
	var cpProveedor = formulario.txtCPostalProveedor.value.trim();
	if(oExpRegValidarCP.test(cpProveedor) == false)
	{
		if(bValido)
		{
			bValido = false;
			formulario.txtCPostalProveedor.focus();
		}
		claseError(formulario, 8);
		aError.push("Código postal incorrecto");
	}
	else
	{
		quitarError(formulario, 8);
	}
	if(aError.length>0){ // Este If muestra los mensajes de error de la validación. 
						 //	Los mete en un Div y los manda a MostrarMensaje
		DeMensajesADiv(aError);
	}
	return bValido;
}

function anadirProveedor() 
{
	var sMensaje = "";
	formulario = document.frmAltaProveedor;

	if(validarProveedores(formulario))		
	{
		var dni = formulario.txtDNIProveedor.value.trim();
		var nombre = formulario.txtNombreProveedor.value.trim();
		var apellido = formulario.txtApellidoProveedor.value.trim();
		var empresa = formulario.txtEmpresa.value.trim();
		var telefono = formulario.txtTelefonoProveedor.value.trim();
		var direccion = formulario.txtDireccionProveedor.value.trim();
		var localidad = formulario.txtLocalidadProveedor.value.trim();
		var cPostal = formulario.txtCPostalProveedor.value.trim();

		var oProveedor = new Proveedor(dni,nombre, apellido,empresa, telefono, direccion, localidad, cPostal);

		var bAltaProveedor = oGestion.altaProveedor(oProveedor);
		
		if (bAltaProveedor) 
		{
			actualizaCombos("proveedores");
			sMensaje = "Proveedor dado de alta";
			mostrarMensaje(sMensaje,true);
			formulario.reset();			
		}

		else
		{
			sMensaje = "Provedor ya existente";
			mostrarMensaje(sMensaje,false);
			claseError(formulario, 0);
		}
	}

}

function eliminarProveedor()
{
    var provedorEliminar = document.getElementById("selectProveedores").value;
    //alert(clienteEliminar);

    if(oGestion.eliminarProveedor(provedorEliminar)){
    	actualizaCombos("proveedores");
    	mostrarMensaje("Proveedor eliminado",true);
    }
    else
    	mostrarMensaje("Proveedor no existe",false);
}

function camposFormModificarProveedor()
{
	var dniProveedorModificar = document.getElementById("selectModificarProveedor").firstChild.value;
	var antiguoProveedor = oGestion.buscarProveedor(dniProveedorModificar);

	CamposFormulario = document.getElementById("frmModProveedorSeleccionado").getElementsByTagName("input");

	CamposFormulario[0].value = antiguoProveedor.dni;
    CamposFormulario[1].value = antiguoProveedor.nombre;
    CamposFormulario[2].value = antiguoProveedor.apellido;
    CamposFormulario[3].value = antiguoProveedor.empresa;
    CamposFormulario[4].value = antiguoProveedor.telefono;
    CamposFormulario[5].value = antiguoProveedor.direccion;
    CamposFormulario[6].value = antiguoProveedor.localidad;
    CamposFormulario[7].value = antiguoProveedor.cPostal;

}

function modificarProveedor()
{	
	formulario=document.frmModClienteSeleccionado;
	if(validarClientes(formulario)){
		var dni = formulario.txtDNICliente.value.trim();
		var nombre = formulario.txtNombreCliente.value.trim();
		var apellido = formulario.txtApellidoCliente.value.trim();
		var empresa = formulario.txtEmpresa.value.trim();
		var telefono = formulario.txtTelefonoCliente.value.trim();
		var direccion = formulario.txtDireccionCliente.value.trim();
		var localidad = formulario.txtLocalidadCliente.value.trim();
		var cPostal = formulario.txtCPostalCliente.value.trim();

		var oProveedor = new Proveedor(dni,nombre, apellido,empresa, telefono, direccion, localidad, cPostal);

		var proveedoraModificar = document.getElementById("selectModificarProveedor").firstChild.value;

		if(oGestion.modificarProveedor(proveedoraModificar,oProveedor)){
	    	actualizaCombos("proveedores");
	    	mostrarMensaje("Proveedor actualizado",true);
	   }
	}
}

function tablaProveedores()
{	
	var oTabla = document.createElement("TABLE");
	oTabla.setAttribute("class", "table table-striped");
	oTabla.id = "tablaListada";

	var header = oTabla.createTHead();
	var fila = header.insertRow(0);
	fila.insertCell(-1).appendChild(document.createTextNode("DNI"));
	fila.insertCell(-1).appendChild(document.createTextNode("Nombre"));
	fila.insertCell(-1).appendChild(document.createTextNode("Apellidos"));
	fila.insertCell(-1).appendChild(document.createTextNode("Empresa"));
	fila.insertCell(-1).appendChild(document.createTextNode("Teléfono"));
	fila.insertCell(-1).appendChild(document.createTextNode("Direccion"));
	fila.insertCell(-1).appendChild(document.createTextNode("Localidad"));
	fila.insertCell(-1).appendChild(document.createTextNode("C.Postal"));
	fila.insertCell(-1).appendChild(document.createTextNode("Estado"));

	var body = oTabla.appendChild(oGestion.sRowHTMLProveedores());

	return oTabla;	
}


//Validamos el formulario una vez rellenado

var oBtnAnadirEmpleado = document.frmAltaEmpleado.btnAnadirEmpleado;
oBtnAnadirEmpleado.addEventListener("click", anadirEmpleado, false);

var oBtnEliminarEmpleado = document.frmBajaEmpleado.btnEliminarEmpleado;
oBtnEliminarEmpleado.addEventListener("click", eliminarEmpleado, false);

function validarEmpleados(formulario)
{
	var bEmpleado = true;
	var sError = ""; 

	//CODIGO


	//DNI
	var dniEmpleado = formulario.txtDNIEmpleado.value.trim();
	if(oExpRegValidarDni.test(dniEmpleado) == false)
	{
		if(bEmpleado)
		{
			bEmpleado = false;
			formulario.txtDNIEmpleado.focus();
		}
		claseError(formulario, 0);
		sError += "DNI incorrecto<br>";
	}
	else
	{
		quitarError(formulario, 0);
	}

	//NOMBRE
	var nombreEmpleado = formulario.txtNombreEmpleado.value.trim();
	if(oExpRegValidarNombre.test(nombreEmpleado) == false)
	{
		if(bEmpleado)
		{
			bEmpleado = false;
			formulario.txtNombreEmpleado.focus();
		}
		claseError(formulario, 1);
		sError += "Nombre incorrecto<br>";
	}
	else
	{
		quitarError(formulario, 1);
	}

	//APELLIDOS
	var apellidoEmpleado = formulario.txtApellidoEmpleado.value.trim();
	if(oExpRegValidarApellidos.test(apellidoEmpleado) == false)
	{
		if(bEmpleado)
		{
			bEmpleado = false;
			formulario.txtApellidoEmpleado.focus();
		}
		claseError(formulario, 2);
		sError += "Apellidos incorrectos<br>";
	}
	else
	{
		quitarError(formulario, 2);
	}

	//TELEFONO
	var telEmpleado = formulario.txtTelefonoEmpleado.value.trim();
	if(oExpRegValidarTelefono.test(telEmpleado) == false)
	{
		if(bEmpleado)
		{
			bCliente = false;
			formulario.txtTelefonoEmpleado.focus();
		}
		claseError(formulario, 3);
		sError += "Teléfono incorrecto<br>";
	}
	else
	{
		quitarError(formulario, 3);
	}

	//CP
	var cpEmpleado = formulario.txtCPostalEmpleado.value.trim();
	if(oExpRegValidarCP.test(cpEmpleado) == false)
	{
		if(bEmpleado)
		{
			bEmpleado = false;
			formulario.txtCPostalEmpleado.focus();
		}
		claseError(formulario, 6);
		sError += "Código postal incorrecto<br>";
	}
	else
	{
		quitarError(formulario, 6);
	}
	return bEmpleado;
}

function anadirEmpleado() 
{
	var sMensaje = "";
	formulario = document.frmAltaEmpleado;

	if(validarEmpleados(formulario))
	{
		var codEmpleado = document.frmAltaEmpleado.txtCodEmpleado.value.trim();
		var dniEmpleado = document.frmAltaEmpleado.txtDNIEmpleado.value.trim();
		var nombreEmpleado = document.frmAltaEmpleado.txtNombreEmpleado.value.trim();
		var apellidoEmpleado = document.frmAltaEmpleado.txtApellidoEmpleado.value.trim();
		var telEmpleado = document.frmAltaEmpleado.txtTelefonoEmpleado.value.trim();
		var dirEmpleado = document.frmAltaEmpleado.txtDireccionEmpleado.value.trim();
		var localidadEmpleado = document.frmAltaEmpleado.txtLocalidadEmpleado.value.trim();
		var cpEmpleado = document.frmAltaEmpleado.txtCPostalEmpleado.value.trim();

		var oEmpleado = new Empleado(codEmpleado, dniEmpleado, nombreEmpleado, apellidoEmpleado, telEmpleado, dirEmpleado, localidadEmpleado, cpEmpleado);

		var bAltaEmpleado = oGestion.altaEmpleado(oEmpleado);

		if (bAltaEmpleado) 
		{
			actualizaCombos("empleados");
			sMensaje = "Empleado dado de alta";
			mostrarMensaje(sMensaje);
			document.frmAltaEmpleado.reset();			
		}
		else
		{
			sMensaje = "Empleado ya existente";
			mostrarMensaje(sMensaje);
			claseError(document.frmAltaEmpleado, 0);
		}
	} 
}

function eliminarEmpleado()
{
    var empleadoEliminar = document.getElementById("selectEmpleado").value;

    if(oGestion.eliminarEmpleado(empleadoEliminar))
    {
    	actualizaCombos("empleados");
    	mostrarMensaje("Empleado eliminado");
    }
    else
    	mostrarMensaje("Empleado no existe");
}

function camposFormModificarEmpleado()
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

function modificarEmpleado()
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
	    	mostrarMensaje("Cliente actualizado");
	   }
	}
}

function tablaEmpleados()
{	
	// var oTabla = document.createElement("TABLE");
	// oTabla.setAttribute("table", "table-striped");
	// oTabla.id = "tablaListada";

	var sTabla = "<table id='tablaListada' class='table table-striped'>"+
    "<thead>"+
      "<tr>"+
        "<th>DNI</th>"+
        "<th>Nombre</th>"+
        "<th>Apellidos</th>"+
        "<th>Teléfono</th>"+
        "<th>Direccion</th>"+
        "<th>Localidad</th>"+
        "<th>C.Postal</th>"+
      "</tr>"+
    "</thead>"+
    "<tbody>";

    sTabla += oGestion.sRowHTMLEmpleados();

    sTabla += "</tbody>"+
  "</table>"+
"</div>";
	return sTabla;
}
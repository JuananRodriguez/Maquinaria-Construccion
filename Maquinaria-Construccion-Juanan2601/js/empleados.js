//Validamos el formulario una vez rellenado

var oBtnAnadirEmpleado = document.frmAltaEmpleado.btnAnadirEmpleado;
oBtnAnadirEmpleado.addEventListener("click", anadirEmpleado, false);

var oBtnEliminarEmpleado = document.frmBajaEmpleado.btnEliminarEmpleado;
oBtnEliminarEmpleado.addEventListener("click", eliminarEmpleado, false);

function validarEmpleados(formulario)
{
	var bEmpleado = true;
	var aError = [];  

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
		aError.push("DNI incorrecto");
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
		aError.push("Nombre incorrecto");
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
		aError.push("Apellidos incorrectos");
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
		aError.push("Teléfono incorrecto");
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
	return bEmpleado;
}

function anadirEmpleado() 
{
	var sMensaje = "";
	formulario = document.frmAltaEmpleado;

	if(validarEmpleados(formulario))
	{
		var dniEmpleado = document.frmAltaEmpleado.txtDNIEmpleado.value.trim();
		var nombreEmpleado = document.frmAltaEmpleado.txtNombreEmpleado.value.trim();
		var apellidoEmpleado = document.frmAltaEmpleado.txtApellidoEmpleado.value.trim();
		var telEmpleado = document.frmAltaEmpleado.txtTelefonoEmpleado.value.trim();
		var dirEmpleado = document.frmAltaEmpleado.txtDireccionEmpleado.value.trim();
		var localidadEmpleado = document.frmAltaEmpleado.txtLocalidadEmpleado.value.trim();
		var cpEmpleado = document.frmAltaEmpleado.txtCPostalEmpleado.value.trim();

		var oEmpleado = new Empleado(dniEmpleado, nombreEmpleado, apellidoEmpleado, telEmpleado, dirEmpleado, localidadEmpleado, cpEmpleado);

		var bAltaEmpleado = oGestion.altaEmpleado(oEmpleado);

		if (bAltaEmpleado) 
		{
			actualizaCombos("empleados");
			actualizaCombosTodos("empleados");
			sMensaje = "Empleado dado de alta";
			mostrarMensaje(sMensaje, true);
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
    	actualizaCombosTodos("empleados");
    	mostrarMensaje("Empleado eliminado",true);
    }
    else
    	mostrarMensaje("Empleado no existe",false);
}

function camposFormModificarEmpleado()
{
	var dniEmpleadoModificar = document.getElementById("selectModificarEmpleado").firstChild.value;
	var antiguoEmpleado = oGestion.buscarEmpleado(dniEmpleadoModificar);

	CamposFormulario = document.getElementById("frmModEmpleadoSeleccionado").getElementsByTagName("input");

	CamposFormulario[0].value = antiguoEmpleado.dniEmpleado;
    CamposFormulario[1].value = antiguoEmpleado.nombreEmpleado;
    CamposFormulario[2].value = antiguoEmpleado.apellidoEmpleado;
    CamposFormulario[3].value = antiguoEmpleado.telEmpleado;
    CamposFormulario[4].value = antiguoEmpleado.dirEmpleado;
    CamposFormulario[5].value = antiguoEmpleado.localidadEmpleado;
    CamposFormulario[6].value = antiguoEmpleado.cpEmpleado;

}

function modificarEmpleado()
{	
	formulario=document.frmModEmpleadoSeleccionado;
	if(validarEmpleados(formulario)){
		var dniEmpleado = formulario.txtDNIEmpleado.value.trim();
		var nombreEmpleado = formulario.txtNombreEmpleado.value.trim();
		var apellidoEmpleado = formulario.txtApellidoEmpleado.value.trim();
		var telEmpleados = formulario.txtTelefonoEmpleado.value.trim();
		var dirEmpleado = formulario.txtDireccionEmpleado.value.trim();
		var localidadEmpleado = formulario.txtLocalidadEmpleado.value.trim();
		var cpEmpleado = formulario.txtCPostalEmpleado.value.trim();

		var oEmpleado = new Empleado(dniEmpleado,nombreEmpleado, apellidoEmpleado, telEmpleados, dirEmpleado, localidadEmpleado, cpEmpleado);

		var EmpleadoaModificar = document.getElementById("selectModificarEmpleado").firstChild.value;

		if(oGestion.modificarEmpleado(EmpleadoaModificar,oEmpleado))
		{
	    	actualizaCombos("empleados");
	    	actualizaCombosTodos("empleados");
	    	mostrarMensaje("Empleado actualizado",true);
	   }
	}
}

function tablaEmpleados()
{	
	/*Creamos la Tabla*/
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
	var oFormulario = document.getElementById("frmListarEmpleado");

	crearCabecera(oFormulario,fila,0,"DNI");
	crearCabecera(oFormulario,fila,1,"Nombre");
	crearCabecera(oFormulario,fila,2,"Apellidos");
	crearCabecera(oFormulario,fila,3,"Telefono");
	crearCabecera(oFormulario,fila,4,"Direccion");
	crearCabecera(oFormulario,fila,5,"Localidad");
	crearCabecera(oFormulario,fila,6,"C.Postal");

	/*Finalmente creamos la cabecera de Estado, que tiene la 
	función ordenarActivos (js/filtros.js)*/
	var enlaceOrden = document.createElement("A");
	enlaceOrden.href="#";
	enlaceOrden.appendChild(document.createTextNode("Estado"));
	enlaceOrden.addEventListener("click", function(){ordenarActivos(oFormulario)}, false);

	fila.insertCell(-1).appendChild(enlaceOrden);

	var body = oTabla.appendChild(oGestion.sRowHTMLEmpleados());

	return oTabla;	
}
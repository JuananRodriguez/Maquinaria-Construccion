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
		claseError(formulario, 0);
		aError.push("DNI incorrecto");
	}
	else
	{
		quitarError(formulario, 0);
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
		claseError(formulario, 1);
		aError.push("Nombre incorrecto");
	}
	else
	{
		quitarError(formulario, 1);
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
		claseError(formulario, 2);
		aError.push("Apellidos incorrectos");
	}
	else
	{
		quitarError(formulario, 2);
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
		claseError(formulario, 4);
		aError.push("Teléfono incorrecto");
	}
	else
	{
		quitarError(formulario, 4);
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
		claseError(formulario, 7);
		aError.push("Código postal incorrecto");
	}
	else
	{
		quitarError(formulario, 7);
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
    var provedorEliminar = document.getElementById("selectProveedor").value;
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

    if(antiguoProveedor.estado)
    {
    	document.getElementById("estadoProveedor").checked = true;
	}
	else
	{
		document.getElementById("estadoProveedor").checked = false;
	}

    CamposFormulario[8].value = antiguoProveedor.estado;
}

function modificarProveedor()
{	
	formulario=document.frmModProveedorSeleccionado;
	if(validarProveedores(formulario)){
		var dni = formulario.txtDNIProveedor.value.trim();
		var nombre = formulario.txtNombreProveedor.value.trim();
		var apellido = formulario.txtApellidoProveedor.value.trim();
		var empresa = formulario.txtEmpresaProveedor.value.trim();
		var telefono = formulario.txtTelefonoProveedor.value.trim();
		var direccion = formulario.txtDireccionProveedor.value.trim();
		var localidad = formulario.txtLocalidadProveedor.value.trim();
		var cPostal = formulario.txtCPostalProveedor.value.trim();
		var estadoProveedor = formulario.estadoProveedor.checked;

		var oProveedor = new Proveedor(dni,nombre, apellido,empresa, telefono, direccion, localidad, cPostal);
		oProveedor.estado=estadoProveedor;
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
	oTabla.setAttribute("name","tablaListada");

	/*Cramos el Header y la Fila Principal*/
	var header = oTabla.createTHead();
	var fila = header.insertRow(0);

	/*Creamos las Celdas, con la Función crearCabecera (js/funciones.js)
	Las celdas estas contienen un A con un event que llaman a la 
	función Ordenar Fila (js/filtros.js)*/
	var oFormulario = document.getElementById("frmListarProveedor");

	crearCabecera(oFormulario,fila,0,"DNI");
	crearCabecera(oFormulario,fila,1,"Nombre");
	crearCabecera(oFormulario,fila,2,"Apellidos");
	crearCabecera(oFormulario,fila,3,"Empresa");
	crearCabecera(oFormulario,fila,4,"Teléfono");
	crearCabecera(oFormulario,fila,5,"Direccion");
	crearCabecera(oFormulario,fila,6,"Localidad");
	crearCabecera(oFormulario,fila,7,"C.Postal");

	/*Finalmente creamos la cabecera de Estado, que tiene la 
	función ordenarActivos (js/filtros.js)*/
	var enlaceOrden = document.createElement("A");
	enlaceOrden.href="#";
	enlaceOrden.appendChild(document.createTextNode("Estado"));
	enlaceOrden.addEventListener("click", function(){ordenarActivos(oFormulario)}, false);

	fila.insertCell(-1).appendChild(enlaceOrden);

	var body = oTabla.appendChild(oGestion.sRowHTMLProveedores());

	return oTabla;		
}

	

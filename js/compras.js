var oBtnComprar = document.frmComprar.btnComprar;
oBtnComprar.addEventListener("click", anadirCompra, false);

var oBtnVender = document.frmVenta.btnVender;
oBtnVender.addEventListener("click", anadirVenta, false);


function validarTransaccion(formulario,tipo){

	var bCompra = true;
	var aError = [];  

	//ID de Transacción
	var idCompra = formulario.txtIDComprar.value.trim();
	if(oExpRegValidarIdTransaccion.test(idCompra) == false)
	{
		if(bCompra)
		{
			bCompra = false;
			formulario.txtIDComprar.focus();
		}
		claseError(formulario, 0);
		aError.push("Id no válido");
	}
	else
	{
		quitarError(formulario, 0);
	}
	//------

	//FECHA 
	var fecha = formulario.txtFechaComprar.value;
	if(fecha == "")
	{
		if(bCompra)
		{
			bCompra = false;
			formulario.txtFechaComprar.focus();
		}
		claseError(formulario, 1);
		aError.push("Debe introducir una fecha");
	}
	else
	{
		quitarError(formulario, 1);
	}
	//------

	//Precio
	var precio = parseFloat(formulario.txtCoste.value.trim());
	if(oExpRegValidarPrecio.test(precio) == false)
	{
		if(bCompra)
		{
			bCompra = false;
			formulario.txtCoste.focus();
		}
		claseError(formulario, 2);
		aError.push("El coste no es válido");
	}
	else
	{
		quitarError(formulario, 2);
	}
	//------

	//Proveedor
	if(tipo=="compra")
	if(formulario.getElementsByClassName("selectDivProveedor")[0].firstChild.selectedIndex == 0)
	{
		if(bCompra)
		{
			bCompra = false;
			formulario.getElementsByClassName("selectDivProveedor")[0].firstChild.focus();
		}
		formulario.getElementsByClassName("selectDivProveedor")[0].firstChild.classList.add("is-invalid");
		aError.push("Debe seleccionar un Proveedor");
	}
	else
	{
		formulario.getElementsByClassName("selectDivProveedor")[0].firstChild.classList.remove("is-invalid");
	}
	//------

	//Cliente
	if(tipo=="venta")
	if(formulario.getElementsByClassName("selectDivCliente")[0].firstChild.selectedIndex == 0)
	{
		if(bCompra)
		{
			bCompra = false;
			formulario.getElementsByClassName("selectDivCliente")[0].firstChild.focus();
		}
		formulario.getElementsByClassName("selectDivCliente")[0].firstChild.classList.add("is-invalid");
		aError.push("Debe seleccionar un Cliente");
	}
	else
	{
		formulario.getElementsByClassName("selectDivCliente")[0].firstChild.classList.remove("is-invalid");
	}
	//-------

	//Empleado	
	if(formulario.getElementsByClassName("selectDivEmpleado")[0].firstChild.selectedIndex == 0)
	{
		if(bCompra)
		{
			bCompra = false;
			formulario.getElementsByClassName("selectDivEmpleado")[0].firstChild.focus();
		}
		formulario.getElementsByClassName("selectDivEmpleado")[0].firstChild.classList.add("is-invalid");
		aError.push("Debe seleccionar un Empleado");
	}
	else
	{
		formulario.getElementsByClassName("selectDivEmpleado")[0].firstChild.classList.remove("is-invalid");
	}
	//------

	//Maquina	
	if(formulario.getElementsByClassName("selectDivMaquina")[0].firstChild.selectedIndex == 0)
	{
		if(bCompra)
		{
			bCompra = false;
			formulario.getElementsByClassName("selectDivMaquina")[0].firstChild.focus();
		}
		formulario.getElementsByClassName("selectDivMaquina")[0].firstChild.classList.add("is-invalid");
		aError.push("Debe seleccionar un Máquina");
	}
	else
	{
		formulario.getElementsByClassName("selectDivMaquina")[0].firstChild.classList.remove("is-invalid");
	}
	//------

	if(aError.length>0){ // Este If muestra los mensajes de error de la validación. 
						 //	Los mete en un Div y los manda a MostrarMensaje
		DeMensajesADiv(aError);
	}

	//-------

	return bCompra;
}

function anadirCompra() 
{	

	var sMensaje = "";
	formulario = document.frmComprar;

	if(validarTransaccion(formulario,"compra"))		
	{
		var iId = formulario.txtIDComprar.value.trim();
		//console.log(Date.parse(formulario.txtFechaComprar.value));
		var fecha = new Date(formulario.txtFechaComprar.value);

		var sEmpleado = document.getElementById("frmComprar").getElementsByClassName("selectDivEmpleado")[0].firstChild.value;
		var sProveedor = document.getElementById("frmComprar").getElementsByClassName("selectDivProveedor")[0].firstChild.value;
		var iMaquina = parseInt(document.getElementById("frmComprar").getElementsByClassName("selectDivMaquina")[0].firstChild.value);

		var fCoste = parseFloat(formulario.txtCoste.value.trim());

		var oCompra = new Compra(iId,fecha,fCoste,iMaquina,sEmpleado,sProveedor);

		var bAltaCompra = oGestion.altaCompra(oCompra);
		
		if (bAltaCompra) 
		{
			sMensaje = "Compra realizada";
			mostrarMensaje(sMensaje,true);
			formulario.reset();			
		}

		else
		{
			sMensaje = "Hay una transaccion con el mismo id";
			mostrarMensaje(sMensaje,false);
			claseError(formulario, 0);
		}
	}

}

function anadirVenta() 
{	

	var sMensaje = "";
	formulario = document.frmVenta;

	if(validarTransaccion(formulario,"venta"))		
	{
		var iId = formulario.txtIDComprar.value.trim();
		//console.log(Date.parse(formulario.txtFechaComprar.value));
		var fecha = new Date(formulario.txtFechaComprar.value);

		var sEmpleado = document.getElementById("frmVenta").getElementsByClassName("selectDivEmpleado")[0].firstChild.value;
		var sCliente = document.getElementById("frmVenta").getElementsByClassName("selectDivCliente")[0].firstChild.value;
		var iMaquina = parseInt(document.getElementById("frmVenta").getElementsByClassName("selectDivMaquina")[0].firstChild.value);

		var fCoste = parseFloat(formulario.txtCoste.value.trim());

		var oVenta = new Venta(iId,fecha,fCoste,iMaquina,sEmpleado,sCliente);

		var bAltaVenta = oGestion.altaVenta(oVenta,iMaquina);
		
		if (bAltaVenta) 
		{
			sMensaje = "Venta realizada";
			mostrarMensaje(sMensaje,true);
			formulario.reset();			
		}

		else
		{
			sMensaje = "Hay una transaccion con el mismo id";
			mostrarMensaje(sMensaje,false);
			claseError(formulario, 0);
		}
	}

}

function tablaTransacciones()
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
	var oFormulario = document.getElementById("frmListarCompras");

	crearCabecera(oFormulario,fila,0,"ID-Transaccion");
	crearCabecera(oFormulario,fila,1,"Fecha");
	crearCabecera(oFormulario,fila,2,"Valor");
	crearCabecera(oFormulario,fila,3,"Id. Máquina");
	crearCabecera(oFormulario,fila,4,"DNI Empleado");
	crearCabecera(oFormulario,fila,5,"DNI Proveedor/Cliente");


	/*Finalmente creamos la cabecera de Estado, que tiene la 
	función ordenarActivos (js/filtros.js)*/
	var enlaceOrden = document.createElement("A");
	enlaceOrden.href="#";
	enlaceOrden.appendChild(document.createTextNode("Tipo"));
	enlaceOrden.addEventListener("click", function(){ordenarTransacciones(oFormulario)}, false);

	fila.insertCell(-1).appendChild(enlaceOrden);

	var body = oTabla.appendChild(oGestion.sRowHTMLTransacciones());

	return oTabla;		
}



var oBtnComprar = document.frmComprar.btnComprar;
oBtnComprar.addEventListener("click", anadirCompra, false);

var oBtnVender = document.frmVenta.venderMaquina;
oBtnVender.addEventListener("click", venderCompra, false);


function validarCompra(formulario){

	var bCompra = true;
	var aError = [];  

	//DNI
	var idCompra = formulario.txtIDComprar.value.trim();
	if(oExpRegValidarId.test(idCompra) == false)
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
	if(document.getElementById("frmComprar").getElementsByClassName("selectDivProveedor")[0].firstChild.selectedIndex == 0)
	{
		if(bCompra)
		{
			bCompra = false;
			document.getElementById("frmComprar").getElementsByClassName("selectDivProveedor")[0].firstChild.focus();
		}
		document.getElementById("frmComprar").getElementsByClassName("selectDivProveedor")[0].firstChild.classList.add("is-invalid");
		aError.push("Debe seleccionar un Proveedor");
	}
	else
	{
		document.getElementById("frmComprar").getElementsByClassName("selectDivProveedor")[0].firstChild.classList.remove("is-invalid");
	}
	//------

	//Empleado	
	if(document.getElementById("frmComprar").getElementsByClassName("selectDivEmpleado")[0].firstChild.selectedIndex == 0)
	{
		if(bCompra)
		{
			bCompra = false;
			document.getElementById("frmComprar").getElementsByClassName("selectDivEmpleado")[0].firstChild.focus();
		}
		document.getElementById("frmComprar").getElementsByClassName("selectDivEmpleado")[0].firstChild.classList.add("is-invalid");
		aError.push("Debe seleccionar un Empleado");
	}
	else
	{
		document.getElementById("frmComprar").getElementsByClassName("selectDivEmpleado")[0].firstChild.classList.remove("is-invalid");
	}
	//------

	//Maquina	
	if(document.getElementById("frmComprar").getElementsByClassName("selectDivMaquina")[0].firstChild.selectedIndex == 0)
	{
		if(bCompra)
		{
			bCompra = false;
			document.getElementById("frmComprar").getElementsByClassName("selectDivMaquina")[0].firstChild.focus();
		}
		document.getElementById("frmComprar").getElementsByClassName("selectDivMaquina")[0].firstChild.classList.add("is-invalid");
		aError.push("Debe seleccionar un Máquina");
	}
	else
	{
		document.getElementById("frmComprar").getElementsByClassName("selectDivMaquina")[0].firstChild.classList.remove("is-invalid");
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

	if(validarCompra(formulario))		
	{
		var iId = parseInt(formulario.txtIDComprar.value.trim());
		//console.log(Date.parse(formulario.txtFechaComprar.value));
		var fecha = formulario.txtFechaComprar.value;

		var sEmpleado = document.getElementById("frmComprar").getElementsByClassName("selectDivEmpleado")[0].firstChild.value;
		var sProveedor = document.getElementById("frmComprar").getElementsByClassName("selectDivProveedor")[0].firstChild.value;
		var iMaquina = parseInt(document.getElementById("frmComprar").getElementsByClassName("selectDivMaquina")[0].firstChild.value);

		var fCoste = parseFloat(formulario.txtCoste.value.trim());

		var oCompra = new Compra(iId,fecha,sEmpleado,sProveedor,iMaquina,fCoste);

		var bAltaCompra = oGestion.altaCompra(oCompra);
		
		if (bAltaCompra) 
		{
			sMensaje = "Compra realizada";
			mostrarMensaje(sMensaje,true);
			formulario.reset();			
		}

		else
		{
			sMensaje = "Hay una compra con el mismo id";
			mostrarMensaje(sMensaje,false);
			claseError(formulario, 0);
		}
	}

}

function venderCompra(){
	
   formulario = document.frmVenta;
   if(validarVenta(formulario))		
	{
		var iId = parseInt(document.getElementById("selectCompra").value);
		var fecha = formulario.txtFechaVenta.value;
		var fPrecio =parseFloat(formulario.txtPrecio.value.trim());
	    if(oGestion.venderCompra(iId))
	    {
	    	actualizaCombos("compras");
	    	mostrarMensaje("Venta Realizada",true);
	    }
	    else
	    	mostrarMensaje("La venta no se ha podido realizar",false);
	}

    function validarVenta(formulario){

    	var bCompra = true;
		var aError = []; 
    	//Compra	
		if(document.getElementById("frmVenta").getElementsByClassName("selectDivCompra")[0].firstChild.selectedIndex == 0)
		{
			if(bCompra)
			{
				bCompra = false;
				document.getElementById("frmVenta").getElementsByClassName("selectDivCompra")[0].firstChild.focus();
			}
			document.getElementById("frmVenta").getElementsByClassName("selectDivCompra")[0].firstChild.classList.add("is-invalid");
			aError.push("Debe seleccionar una Venta");
		}
		else
		{
			document.getElementById("frmVenta").getElementsByClassName("selectDivCompra")[0].firstChild.classList.remove("is-invalid");
		}
		//------

		//FECHA 
		var fecha = formulario.txtFechaVenta.value;
		if(fecha == "")
		{
			if(bCompra)
			{
				bCompra = false;
				formulario.txtFechaVenta.focus();
			}
			claseError(formulario, 0);
			aError.push("Debe introducir una fecha");
		}
		else
		{
			quitarError(formulario, 0);
		}
		//------

		//Precio
		var precio = parseFloat(formulario.txtPrecio.value.trim());
		if(oExpRegValidarPrecio.test(precio) == false)
		{
			if(bCompra)
			{
				bCompra = false;
				formulario.txtPrecio.focus();
			}
			claseError(formulario, 1);
			aError.push("El coste no es válido");
		}
		else
		{
			quitarError(formulario, 1);
		}
		//------

		if(aError.length>0){ // Este If muestra los mensajes de error de la validación. 
						 //	Los mete en un Div y los manda a MostrarMensaje
		DeMensajesADiv(aError);
		}

		//-------

		return bCompra;
    }

}

function tablaCompras()
{	
	var oTabla = document.createElement("TABLE");
	oTabla.setAttribute("class", "table table-striped");
	oTabla.id = "tablaListada";

	var header = oTabla.createTHead();
	var fila = header.insertRow(0);
	fila.insertCell(-1).appendChild(document.createTextNode("ID"));
	fila.insertCell(-1).appendChild(document.createTextNode("Fecha"));
	fila.insertCell(-1).appendChild(document.createTextNode("Fecha de Venta"));
	fila.insertCell(-1).appendChild(document.createTextNode("Empleado"));
	fila.insertCell(-1).appendChild(document.createTextNode("Proveedor"));
	fila.insertCell(-1).appendChild(document.createTextNode("Máquina"));
	fila.insertCell(-1).appendChild(document.createTextNode("Coste"));
	fila.insertCell(-1).appendChild(document.createTextNode("Beneficio"));
	fila.insertCell(-1).appendChild(document.createTextNode("Estado"));

	var body = oTabla.appendChild(oGestion.sRowHTMLCompras());

	return oTabla;	
}



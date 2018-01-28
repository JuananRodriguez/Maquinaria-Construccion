//Validamos el formulario una vez rellenado

var oBtnAnadirAlquiler = document.frmAltaAlquiler.btnAltaAlquiler;
oBtnAnadirAlquiler.addEventListener("click", anadirAlquiler, false);

function validarAlquiler(formulario)
{
	var bAlquiler = true;
	var aError = [];  

	//ID
	var idAlquiler = formulario.txtIDAlquiler.value.trim();
	if(oExpRegValidarIdAlquiler.test(idAlquiler) == false)
	{
		if(bAlquiler)
		{
			bAlquiler = false;
			formulario.txtIDAlquiler.focus();
		}
		claseError(formulario, 0);
		aError.push("ID incorrecto");
	}
	else
	{
		quitarError(formulario, 0);
	}


	//fecha inicio
	var fechaAlquiler = formulario.txtFechaIniAlquiler.value.trim();
	if(fechaAlquiler == "")
	{
		if(bAlquiler)
		{
			bAlquiler = false;
			formulario.txtFechaIniAlquiler.focus();
		}
		claseError(formulario, 1);
		aError.push("Fecha de inicio incorrecta");
	}
	else
	{
		quitarError(formulario, 1);
	}

	//fecha final
	var fechaAlquilerFin = formulario.txtFechaFinAlquiler.value.trim();
	if(fechaAlquilerFin == "" )
	{
		if(bAlquiler)
		{
			bAlquiler = false;
			formulario.txtFechaFinAlquiler.focus();
		}
		claseError(formulario, 2);
		aError.push("Fecha de finalización incorrecta");
	}
	else
	{
		quitarError(formulario, 2);
	}

	//Cliente
	if(formulario.getElementsByClassName("selectDivCliente")[0].firstChild.selectedIndex == 0)
	{
		if(bAlquiler)
		{
			bAlquiler = false;
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
		if(bAlquiler)
		{
			bAlquiler = false;
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
		if(bAlquiler)
		{
			bAlquiler = false;
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

	//IMPORTE
	var importeAlquiler = formulario.txtImporteAlquiler.value.trim();
	if(oExpRegValidarImporte.test(importeAlquiler) == false)
	{
		if(bAlquiler)
		{
			bAlquiler = false;
			formulario.txtImporteAlquiler.focus();
		}
		claseError(formulario, 3);
		aError.push("La fecha de inicio no puede ser posterior a la de fin");
	}
	else
	{
		quitarError(formulario, 3);
	}

	if(aError.length>0){ // Este If muestra los mensajes de error de la validación. 
						 //	Los mete en un Div y los manda a MostrarMensaje
		DeMensajesADiv(aError);
	}

	return bAlquiler;
}

function calcularImporteAlquiler(){
	var formulario = document.frmAltaAlquiler;
	if(formulario.selectMaquina.selectedIndex!=0)
		//if(formulario.txtFechaIniAlquiler.value.trim()!="")
		//	if(formulario.txtImporteAlquiler.value.trim()!="")
				{		
					var oMaquina = oGestion.buscarMaquina(formulario.selectMaquina.value);
					var precioAlquiler = oMaquina.iAlquiler;
					var fechaInicio = new Date (formulario.txtFechaIniAlquiler.value.trim());
					//console.log(fechaInicio);
					var fechaFin = new Date(formulario.txtFechaFinAlquiler.value.trim());
					var importe = calcularImporte(precioAlquiler, fechaInicio, fechaFin);
					formulario.txtImporteAlquiler.value=importe;
				}
}


function calcularImporteAlquilerMod(){
	var formulario = document.frmModAlquilerSeleccionado;
	if(formulario.selectMaquina.selectedIndex!=0)
		//if(formulario.txtFechaIniAlquiler.value.trim()!="")
		//	if(formulario.txtImporteAlquiler.value.trim()!="")
				{		
					var oMaquina = oGestion.buscarMaquina(formulario.selectMaquina.value);
					var precioAlquiler = oMaquina.iAlquiler;
					var fechaInicio = new Date (formulario.txtFechaIniAlquiler.value.trim());
					//console.log(fechaInicio);
					var fechaFin = new Date(formulario.txtFechaFinAlquiler.value.trim());
					var importe = calcularImporte(precioAlquiler, fechaInicio, fechaFin);
					formulario.txtImporteAlquiler.value=importe;
				}
}


function anadirAlquiler() 
{
	var sMensaje = "";
	var formulario = document.frmAltaAlquiler;

	
		var importeAlquiler = parseFloat(formulario.txtImporteAlquiler.value.trim());

		if(validarAlquiler(formulario))
		{
			var idAlquiler = formulario.txtIDAlquiler.value.trim();
			var fechaAlquiler = new Date(formulario.txtFechaIniAlquiler.value.trim());
			var fechaAlquilerFin = new Date(formulario.txtFechaFinAlquiler.value.trim());
			
			var dniCliente = formulario.selectCliente.value;
			var dniEmpleado = formulario.selectEmpleado.value;
			var idMaquina = formulario.selectMaquina.value;

			var oAlquiler = new Alquiler(idAlquiler, fechaAlquiler, fechaAlquilerFin, importeAlquiler, dniCliente, idMaquina, dniEmpleado);
			var bAltaAlquiler = oGestion.altaAlquiler(oAlquiler);

			if (bAltaAlquiler) 
			{
				sMensaje = "Alquiler dado de alta";
				mostrarMensaje(sMensaje,true);
				document.frmAltaAlquiler.reset();			
			}
			else
			{
				sMensaje = "Alquiler ya existente";
				mostrarMensaje(sMensaje,false);
				claseError(document.frmAltaAlquiler, 0);
			}

		}

} 


function camposFormModificarAlquileres()
{
	var idAlquilerMod = document.getElementById("selectModificarAlquileres").firstChild.value;
	var antiguoAlquiler = oGestion.buscarAlquiler(idAlquilerMod);
	var selectClienteMod =  document.getElementById("selectCliente");

	CamposFormulario = document.getElementById("frmModAlquilerSeleccionado").elements;

	CamposFormulario[0].value = antiguoAlquiler.idAlquiler;
    CamposFormulario[1].valueAsDate = antiguoAlquiler.fechaInicio;
    CamposFormulario[2].valueAsDate = antiguoAlquiler.fechaFinal;
    CamposFormulario[3].value = antiguoAlquiler.importe;
    CamposFormulario[4].value = antiguoAlquiler.dniCliente;
    CamposFormulario[5].value = antiguoAlquiler.idMaquina;
    CamposFormulario[6].value = antiguoAlquiler.dniEmpleado;

    if(antiguoAlquiler.estado)
    {
    	document.getElementById("estadoAlquiler").checked = true;
	}
	else
	{
		document.getElementById("estadoAlquiler").checked = false;
	}
	CamposFormulario[7].value = antiguoAlquiler.estado;
}

function modificarAlquileres()
{	

	var idAlquilerMod = document.getElementById("selectModificarAlquileres").firstChild.value;
	var antiguoAlquiler = oGestion.buscarAlquiler(idAlquilerMod);

	formulario=document.frmModAlquilerSeleccionado;
	if(validarAlquiler(formulario))
	{
		antiguoAlquiler.idAlquiler = formulario.txtIDAlquiler.value.trim();
		antiguoAlquiler.fechaInicio = new Date(formulario.txtFechaIniAlquiler.value);
		antiguoAlquiler.fechaFinal = new Date(formulario.txtFechaFinAlquiler.value);
		antiguoAlquiler.importe = parseFloat(formulario.txtImporteAlquiler.value.trim());
		antiguoAlquiler.dniCliente = formulario.selectCliente.value;
		antiguoAlquiler.dniEmpleado = formulario.selectEmpleado.value;
		antiguoAlquiler.idMaquina = formulario.selectMaquina.value;
		antiguoAlquiler.estado = formulario.estadoAlquiler.checked;
		
    	actualizaCombos("alquileres");
    	mostrarMensaje("Alquiler actualizado",true);
    	document.getElementById('frmModAlquilerSeleccionado').style.display="none";
	   
	}
}


function tablaAlquileres()
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
	var oFormulario = document.getElementById("frmListarAlquiler");

	crearCabecera(oFormulario,fila,0,"ID");
	crearCabecera(oFormulario,fila,1,"Fecha Inicio");
	crearCabecera(oFormulario,fila,2,"Fecha Fin");
	crearCabecera(oFormulario,fila,3,"Importe");
	crearCabecera(oFormulario,fila,4,"Cliente");
	crearCabecera(oFormulario,fila,5,"Maquina");
	crearCabecera(oFormulario,fila,6,"Empleado");

	/*Finalmente creamos la cabecera de Estado, que tiene la 
	función ordenarActivos (js/filtros.js)*/
	var enlaceOrden = document.createElement("A");
	enlaceOrden.href="#";
	enlaceOrden.appendChild(document.createTextNode("Estado"));
	enlaceOrden.addEventListener("click", function(){ordenarActivos(oFormulario)}, false);

	fila.insertCell(-1).appendChild(enlaceOrden);

	var body = oTabla.appendChild(oGestion.sRowHTMLAlquileres());

	return oTabla;	

				/********************/	
}
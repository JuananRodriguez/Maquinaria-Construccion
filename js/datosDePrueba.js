datosDePrueba();


function loadXMLDoc(filename)
{
	if (window.XMLHttpRequest)
	  {
	  	xhttp=new XMLHttpRequest();
	  }
	else // code for IE5 and IE6
	  {
	  	xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xhttp.open("GET",filename,false);
	
	xhttp.send();
	
	return xhttp.responseXML;
}

/************* Añade Datos de Prueba **************/
function datosDePrueba(){
	var oXML = loadXMLDoc("datos.xml");

	cargarClientes();
	cargarEmpleados();
	cargarProveedores();
	cargarMaquinaria();

	function cargarClientes(){
		aClientes = oXML.getElementsByTagName("cliente");
		for (var i = 0; i < aClientes.length; i++) {
			var dni = aClientes[i].getElementsByTagName("dni")[0].textContent;
			var nombre = aClientes[i].getElementsByTagName("nombre")[0].textContent;
			var apellidos = aClientes[i].getElementsByTagName("apellidos")[0].textContent;
			var telefono = parseInt(aClientes[i].getElementsByTagName("tlf")[0].textContent);
			var direccion = aClientes[i].getElementsByTagName("direccion")[0].textContent;
			var localidad = aClientes[i].getElementsByTagName("localidad")[0].textContent;
			var codPostal = aClientes[i].getElementsByTagName("codPostal")[0].textContent;

			oGestion.altaCliente(new Cliente(dni,nombre,apellidos,telefono,direccion,localidad,codPostal));
		}
	}

	function cargarEmpleados(){
		aEmpleados = oXML.getElementsByTagName("empleado");
		for (var i = 0; i < aEmpleados.length; i++) {
			var dni = aEmpleados[i].getElementsByTagName("dni")[0].textContent;
			var nombre = aEmpleados[i].getElementsByTagName("nombre")[0].textContent;
			var apellidos = aEmpleados[i].getElementsByTagName("apellidos")[0].textContent;
			var telefono = parseInt(aEmpleados[i].getElementsByTagName("tlf")[0].textContent);
			var direccion = aEmpleados[i].getElementsByTagName("direccion")[0].textContent;
			var localidad = aEmpleados[i].getElementsByTagName("localidad")[0].textContent;
			var codPostal = aEmpleados[i].getElementsByTagName("codPostal")[0].textContent;

			oGestion.altaEmpleado(new Empleado(dni,nombre,apellidos,telefono,direccion,localidad,codPostal));
		}
	}

	function cargarProveedores(){
		aProveedores = oXML.getElementsByTagName("proveedor");
		for (var i = 0; i < aProveedores.length; i++) {
			var dni = aProveedores[i].getElementsByTagName("dni")[0].textContent;
			var nombre = aProveedores[i].getElementsByTagName("nombre")[0].textContent;
			var apellidos = aProveedores[i].getElementsByTagName("apellidos")[0].textContent;
			var empresa = aProveedores[i].getElementsByTagName("empresa")[0].textContent;
			var telefono = parseInt(aProveedores[i].getElementsByTagName("tlf")[0].textContent);
			var direccion = aProveedores[i].getElementsByTagName("direccion")[0].textContent;
			var localidad = aProveedores[i].getElementsByTagName("localidad")[0].textContent;
			var codPostal = aProveedores[i].getElementsByTagName("codPostal")[0].textContent;

			oGestion.altaProveedor(new Proveedor(dni,nombre,apellidos,empresa,telefono,direccion,localidad,codPostal));
		}
	}

	function cargarMaquinaria(){
		aMaquinaria = oXML.getElementsByTagName("maquina");
		for (var i = 0; i < aMaquinaria.length; i++) {
			var modelo = aMaquinaria[i].getElementsByTagName("modelo")[0].textContent;
			var id = parseInt(aMaquinaria[i].getElementsByTagName("id")[0].textContent);
			var nombre = aMaquinaria[i].getElementsByTagName("nombre")[0].textContent;
			var descripcion = aMaquinaria[i].getElementsByTagName("descripcion")[0].textContent;
			var precio = parseInt(aMaquinaria[i].getElementsByTagName("precio")[0].textContent);
			var averia = aMaquinaria[i].getElementsByTagName("averia")[0].textContent;

			oGestion.altaMaquina(new Maquina(modelo,id,descripcion,precio,averia));
		}
	}



	// oGestion.altaEmpleado(new Empleado("48954566V","DOS", "Rodriguez Martinez", 685097696, "C/Paris", "Montequinto", "41089"));

	// oGestion.altaProveedor(new Proveedor("48954566V","DOS", "Rodriguez Martinez","empresa", 685097696, "C/Paris", "Montequinto", "41089"));
	// oGestion.altaProveedor(new Proveedor("48951566V","DOS", "Rodriguez Martinez","empresa", 685097696, "C/Paris", "Montequinto", "41089"));

	// oGestion.altaCliente(new Cliente("48959266V","UNO", "Rodriguez Martinez", 685097696, "C/Paris", "Montequinto", "41089"));
	// oGestion.altaCliente(new Cliente("48954566V","DOS", "Rodriguez Martinez", 685097696, "C/Paris", "Montequinto", "41089"));
	// oGestion.altaCliente(new Cliente("48955436V","TRES", "Rodriguez Martinez", 685097696, "C/Paris", "Montequinto", "41089"));

	// oGestion.altaMaquina(new Maquina("ROBOCOCA","200", "ROBOCOCA 2000", "oh blanca navidad", 75, "ninguna"));
}
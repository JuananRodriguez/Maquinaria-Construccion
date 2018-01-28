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
	cargarAlquileres();
	cargarCompras();
	cargarVentas();
	cargarDevoluciones();

	function cargarDevoluciones(){
		aDevolucion = oXML.getElementsByTagName("devoluciones")[0].children;
		for (var i = 0; i < aDevolucion.length; i++) {
			var id = aDevolucion[i].getElementsByTagName("id")[0].textContent;
			var fechaDevolucion = new Date(aDevolucion[i].getElementsByTagName("fechaDevolucion")[0].textContent);
			var motivo = aDevolucion[i].getElementsByTagName("motivo")[0].textContent;
			

			oGestion.altaDevolucion(new Devolucion(id,fechaDevolucion,motivo));
		}

	}

	function cargarClientes(){
		aClientes = oXML.getElementsByTagName("clientes")[0].children;
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
		aEmpleados = oXML.getElementsByTagName("empleados")[0].children;
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
		aProveedores = oXML.getElementsByTagName("proveedores")[0].children;
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
		aMaquinaria = oXML.getElementsByTagName("maquinaria")[0].children;
		for (var i = 0; i < aMaquinaria.length; i++) {
			var modelo = aMaquinaria[i].getElementsByTagName("modelo")[0].textContent;
			var id = parseInt(aMaquinaria[i].getElementsByTagName("id")[0].textContent);
			var nombre = aMaquinaria[i].getElementsByTagName("nombre")[0].textContent;
			var descripcion = aMaquinaria[i].getElementsByTagName("descripcion")[0].textContent;
			var precio = parseFloat(aMaquinaria[i].getElementsByTagName("precio")[0].textContent);
			var averia = aMaquinaria[i].getElementsByTagName("averia")[0].textContent;

			oGestion.altaMaquina(new Maquina(modelo,id,nombre,descripcion,precio,averia));
		}
	}

	function cargarAlquileres(){
		aAlquiler = oXML.getElementsByTagName("alquileres")[0].children;
		for (var i = 0; i < aAlquiler.length; i++) {
			var id = aAlquiler[i].getElementsByTagName("id")[0].textContent;
			var fechaInicio = new Date(aAlquiler[i].getElementsByTagName("fechaInicio")[0].textContent);
			var fechaFinal = new Date(aAlquiler[i].getElementsByTagName("fechaFinal")[0].textContent);
			var importe = parseFloat(aAlquiler[i].getElementsByTagName("importe")[0].textContent);
			var cliente = aAlquiler[i].getElementsByTagName("cliente")[0].textContent;
			var idMaquina =  parseInt(aAlquiler[i].getElementsByTagName("idMaquina")[0].textContent);
			var empleado = aAlquiler[i].getElementsByTagName("empleado")[0].textContent;

			oGestion.altaAlquiler(new Alquiler(id,fechaInicio,fechaFinal,importe,cliente,idMaquina,empleado));
		}
	}

	function cargarCompras(){
		aCompra = oXML.getElementsByTagName("compras")[0].children;
		for (var i = 0; i < aCompra.length; i++) {
			var id = aCompra[i].getElementsByTagName("id")[0].textContent;
			var fecha = new Date(aCompra[i].getElementsByTagName("fecha")[0].textContent);
			var coste = parseFloat(aCompra[i].getElementsByTagName("coste")[0].textContent);
			var idMaquina = parseInt(aCompra[i].getElementsByTagName("idMaquina")[0].textContent);
			var empleado = aCompra[i].getElementsByTagName("empleado")[0].textContent;
			var proveedor =  aCompra[i].getElementsByTagName("proveedor")[0].textContent;

			oGestion.altaCompra(new Compra(id,fecha,coste,idMaquina,empleado,proveedor));
		}
	}

	function cargarVentas(){
		aVenta = oXML.getElementsByTagName("ventas")[0].children;
		for (var i = 0; i < aVenta.length; i++) {
			var id = aVenta[i].getElementsByTagName("id")[0].textContent;
			var fecha = new Date(aVenta[i].getElementsByTagName("fecha")[0].textContent);
			var coste = parseFloat(aVenta[i].getElementsByTagName("coste")[0].textContent);
			var idMaquina = parseInt(aVenta[i].getElementsByTagName("idMaquina")[0].textContent);
			var empleado = aVenta[i].getElementsByTagName("empleado")[0].textContent;
			var cliente =  aVenta[i].getElementsByTagName("cliente")[0].textContent;

			oGestion.altaCompra(new Venta(id,fecha,coste,idMaquina,empleado,cliente));
		}
	}



}
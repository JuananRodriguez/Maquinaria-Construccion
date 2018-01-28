//Creamos el objeto Proveedor

function Proveedor(dni,nombre, apellido,empresa, telefono, direccion, localidad, cPostal) 
{	
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.empresa=empresa;
    this.telefono = telefono;
    this.direccion =  direccion;
    this.localidad = localidad;
    this.cPostal = cPostal;
    this.estado = true;
}

//METODOS:
Proveedor.prototype.sRowHTML = function() 
{ 
	var fila = document.createElement("TR");

	fila.insertCell(-1).appendChild(document.createTextNode(this.dni));
	fila.insertCell(-1).appendChild(document.createTextNode(this.nombre));
	fila.insertCell(-1).appendChild(document.createTextNode(this.apellido));
	fila.insertCell(-1).appendChild(document.createTextNode(this.empresa));
	fila.insertCell(-1).appendChild(document.createTextNode(this.telefono));
	fila.insertCell(-1).appendChild(document.createTextNode(this.direccion));
	fila.insertCell(-1).appendChild(document.createTextNode(this.localidad));
	fila.insertCell(-1).appendChild(document.createTextNode(this.cPostal));
	fila.dataset.cero=this.dni.substr(0,7);
	fila.dataset.uno=this.nombre;
	fila.dataset.dos=this.apellido;
	fila.dataset.tres=this.empresa;
	fila.dataset.cuatro=this.telefono;
	fila.dataset.cinco=this.direccion;
	fila.dataset.seis=this.localidad;
	fila.dataset.siete=this.cPostal;
	if(this.estado)
	{
		fila.insertCell(-1).appendChild(document.createTextNode("Activo"));
		fila.classList.add("table-success");
	}
		
	else
	{
		fila.insertCell(-1).appendChild(document.createTextNode("Inactivo"));
		fila.classList.add("table-danger");
	}

	return fila;
}

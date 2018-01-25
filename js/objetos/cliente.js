//Creamos el objeto Cliente

function Cliente(dniCliente,nombreCliente, apellidoCliente, telClientes, dirCliente, localidadCliente, cpCliente) 
{
    this.dniCliente = dniCliente;
    this.nombreCliente = nombreCliente;
    this.apellidoCliente = apellidoCliente;
    this.telClientes = telClientes;
    this.dirCliente =  dirCliente;
    this.localidadCliente = localidadCliente;
    this.cpCliente = cpCliente;
}

//METODOS:
Cliente.prototype.sRowHTML = function() 
{ 
	var fila = document.createElement("TR");

	fila.insertCell(-1).appendChild(document.createTextNode(this.dniCliente));
	fila.insertCell(-1).appendChild(document.createTextNode(this.nombreCliente));
	fila.insertCell(-1).appendChild(document.createTextNode(this.apellidoCliente));
	fila.insertCell(-1).appendChild(document.createTextNode(this.telClientes));
	fila.insertCell(-1).appendChild(document.createTextNode(this.dirCliente));
	fila.insertCell(-1).appendChild(document.createTextNode(this.localidadCliente));
	fila.insertCell(-1).appendChild(document.createTextNode(this.cpCliente));

	return fila;
}

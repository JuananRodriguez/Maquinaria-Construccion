//Creamos el objeto Alquiler

function Alquiler(idAlquiler,fechaInicio, fechaFinal, importe, dniCliente, idMaquina, dniEmpleado) 
{
    this.idAlquiler = idAlquiler;
    this.fechaInicio = fechaInicio;
    this.fechaFinal = fechaFinal;
    this.importe = importe;
    this.dniCliente =  dniCliente;
    this.idMaquina = idMaquina;
    this.dniEmpleado = dniEmpleado;
    this.estado = true;
}

//METODOS:
Alquiler.prototype.sRowHTML = function() 
{ 
	var fila = document.createElement("TR");

	fila.insertCell(-1).appendChild(document.createTextNode(this.idAlquiler));
	fila.insertCell(-1).appendChild(document.createTextNode(this.fechaInicio));
	fila.insertCell(-1).appendChild(document.createTextNode(this.fechaFinal));
	fila.insertCell(-1).appendChild(document.createTextNode(this.importe));
	fila.insertCell(-1).appendChild(document.createTextNode(this.dniCliente));
	fila.insertCell(-1).appendChild(document.createTextNode(this.idMaquina));
	fila.insertCell(-1).appendChild(document.createTextNode(this.dniEmpleado));
	if(this.estado==true)
		fila.insertCell(-1).appendChild(document.createTextNode("Activo"));
	else
		fila.insertCell(-1).appendChild(document.createTextNode("Terminado"));
	return fila;
}

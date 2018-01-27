//Creamos el objeto Devolucion

function Devolucion(idAlquiler,fechaDevolucion, sMotivo) 
{
    this.idAlquiler = idAlquiler;
    this.fechaDevolucion = fechaDevolucion;
    this.sMotivo = sMotivo;
}

//METODOS:
Devolucion.prototype.sRowHTML = function() 
{ 
	var fila = document.createElement("TR");

	fila.insertCell(-1).appendChild(document.createTextNode(this.idAlquiler));
	fila.insertCell(-1).appendChild(document.createTextNode(this.fechaDevolucion));
	fila.insertCell(-1).appendChild(document.createTextNode(this.sMotivo));
	return fila;
}
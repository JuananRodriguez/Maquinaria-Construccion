//Creamos el objeto Devolucion

function Devolucion(idAlquiler,fechaDevolucion) 
{
    this.idAlquiler = idAlquiler;
    this.fechaDevolucion = fechaDevolucion;
}

//METODOS:
Devolucion.prototype.sRowHTML = function() 
{ 
	var fila = document.createElement("TR");

	fila.insertCell(-1).appendChild(document.createTextNode(this.idAlquiler));
	fila.insertCell(-1).appendChild(document.createTextNode(this.fechaDevolucion));
	return fila;
}
//Creamos el objeto Devolucion

function Devolucion(idAlquiler,fechaDevolucion, sMotivo) 
{
    this.idAlquiler = idAlquiler;
    this.fechaDevolucion = new Date(fechaDevolucion);
    this.sMotivo = sMotivo;
}

//METODOS:
Devolucion.prototype.sRowHTML = function() 
{ 
	var fila = document.createElement("TR");

	fila.insertCell(-1).appendChild(document.createTextNode(this.idAlquiler));
	fila.insertCell(-1).appendChild(document.createTextNode(new Date(this.fechaDevolucion).toLocaleDateString('es-ES')));
	fila.insertCell(-1).appendChild(document.createTextNode(this.sMotivo));

	fila.dataset.cero=this.idAlquiler;
	fila.dataset.uno=this.fechaDevolucion.getTime();
	fila.dataset.dos=this.sMotivo;

	return fila;
}
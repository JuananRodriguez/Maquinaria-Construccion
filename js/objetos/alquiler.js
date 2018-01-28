//Creamos el objeto Alquiler

function Alquiler(idAlquiler,fechaInicio, fechaFinal, importe, dniCliente, idMaquina, dniEmpleado) 
{
    this.idAlquiler = idAlquiler;
    this.fechaInicio =  new Date(fechaInicio);
    this.fechaFinal =  new Date(fechaFinal);
    this.importe = parseFloat(importe);
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
	fila.insertCell(-1).appendChild(document.createTextNode(new Date(this.fechaInicio).toLocaleDateString('es-ES')));
	fila.insertCell(-1).appendChild(document.createTextNode(new Date(this.fechaFinal).toLocaleDateString('es-ES')));
	fila.insertCell(-1).appendChild(document.createTextNode(this.importe.toLocaleString('de-DE', {  style: 'currency', currency: 'EUR'  })));
	fila.insertCell(-1).appendChild(document.createTextNode(this.dniCliente));
	fila.insertCell(-1).appendChild(document.createTextNode(this.idMaquina));
	fila.insertCell(-1).appendChild(document.createTextNode(this.dniEmpleado));
	fila.dataset.cero=this.idAlquiler.substr(2);
	fila.dataset.uno=this.fechaInicio.getTime();
	fila.dataset.dos=this.fechaFinal.getTime();
	fila.dataset.tres=this.importe;
	fila.dataset.cuatro=this.dniCliente.substr(0,7);;
	fila.dataset.cinco=this.idMaquina;
	fila.dataset.seis=this.dniEmpleado.substr(0,7);;

	if(this.estado==true)
	{
		fila.insertCell(-1).appendChild(document.createTextNode("Activo"));
		fila.classList.add("table-success");
	}
	else
	{
		fila.insertCell(-1).appendChild(document.createTextNode("Terminado"));
		fila.classList.add("table-danger");
	}
	//console.log(fila);
	return fila;
}

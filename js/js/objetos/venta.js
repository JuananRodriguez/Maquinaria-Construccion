class Venta extends Transaccion
{	
	constructor(sId,fecha,fCoste,iMaquina,sEmpleado,sCliente)
	{
		super(sId,fecha,sEmpleado,iMaquina,fCoste);
		this.cliente = sCliente;
	}
	
}

//METODOS:
Venta.prototype.sRowHTML = function() {

	var fila = document.createElement("TR");

	fila.insertCell(-1).appendChild(document.createTextNode(this.id));
	fila.insertCell(-1).appendChild(document.createTextNode(this.fecha.toLocaleString('ca-ES')));
	fila.insertCell(-1).appendChild(document.createTextNode(this.valor.toLocaleString('de-DE', {  style: 'currency', currency: 'EUR'  })));
	fila.insertCell(-1).appendChild(document.createTextNode(this.maquina));
	fila.insertCell(-1).appendChild(document.createTextNode(this.empleado));
	fila.insertCell(-1).appendChild(document.createTextNode(this.cliente));
	fila.insertCell(-1).appendChild(document.createTextNode("VENTA"));
	fila.classList.add("table-success");
	return fila;
}
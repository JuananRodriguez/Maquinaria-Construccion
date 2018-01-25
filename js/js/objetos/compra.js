class Compra extends Transaccion
{	
	constructor(sId,fecha,fCoste,iMaquina,sEmpleado,sProveedor)
	{
		super(sId,fecha,sEmpleado,iMaquina,fCoste);
		this.proveedor = sProveedor;
	}
	
}

//METODOS:
Compra.prototype.sRowHTML = function() {

	var fila = document.createElement("TR");

	fila.insertCell(-1).appendChild(document.createTextNode(this.id));
	fila.insertCell(-1).appendChild(document.createTextNode(this.fecha.toLocaleString('ca-ES')));
	fila.insertCell(-1).appendChild(document.createTextNode(this.valor.toLocaleString('de-DE', {  style: 'currency', currency: 'EUR'  })));
	fila.insertCell(-1).appendChild(document.createTextNode(this.maquina));
	fila.insertCell(-1).appendChild(document.createTextNode(this.empleado));
	fila.insertCell(-1).appendChild(document.createTextNode(this.proveedor));
	fila.insertCell(-1).appendChild(document.createTextNode("COMPRA"));
	fila.classList.add("table-danger");

	return fila;
}

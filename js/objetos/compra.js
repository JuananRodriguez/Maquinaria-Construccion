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
	fila.insertCell(-1).appendChild(document.createTextNode(new Date(this.fecha).toLocaleDateString('es-ES')));
	fila.insertCell(-1).appendChild(document.createTextNode(this.valor.toLocaleString('de-DE', {  style: 'currency', currency: 'EUR'  })));
	fila.insertCell(-1).appendChild(document.createTextNode(this.maquina));
	fila.insertCell(-1).appendChild(document.createTextNode(this.empleado));
	fila.insertCell(-1).appendChild(document.createTextNode(this.proveedor));
	fila.insertCell(-1).appendChild(document.createTextNode("COMPRA"));

	fila.dataset.cero=this.id.substr(2);
	fila.dataset.uno=this.fecha.getTime();
	fila.dataset.dos=this.valor;
	fila.dataset.tres=this.maquina;
	fila.dataset.cuatro=this.empleado.substr(0,7);
	fila.dataset.cinco=this.proveedor.substr(0,7);

	fila.classList.add("table-danger");

	return fila;
}

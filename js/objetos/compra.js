function Compra(iId,fecha,sEmpleado,sProveedor,iMaquina,fCoste)
{	
	this.id = iId;
	this.fecha = fecha;
	this.fechaV = "Ninguna";
	this.empleado = sEmpleado;
	this.proveedor = sProveedor;
	this.maquina = iMaquina;
	this.coste = fCoste;
	this.venta = 0.0;
	this.estado = true;
}

//METODOS:
Compra.prototype.sRowHTML = function() {

	var fila = document.createElement("TR");

	fila.insertCell(-1).appendChild(document.createTextNode(this.id));
	fila.insertCell(-1).appendChild(document.createTextNode(this.fecha));
	fila.insertCell(-1).appendChild(document.createTextNode(this.fechaV));
	fila.insertCell(-1).appendChild(document.createTextNode(this.empleado));
	fila.insertCell(-1).appendChild(document.createTextNode(this.proveedor));
	fila.insertCell(-1).appendChild(document.createTextNode(this.maquina));
	fila.insertCell(-1).appendChild(document.createTextNode(this.coste));
	fila.insertCell(-1).appendChild(document.createTextNode(this.venta));

	if(!this.estado){
		fila.insertCell(-1).appendChild(document.createTextNode("Vendido"));
		fila.classList.add("table-success");
	}
	else{
		fila.insertCell(-1).appendChild(document.createTextNode("Adquirido"));
		fila.classList.add("table-danger");
	}

	return fila;
}

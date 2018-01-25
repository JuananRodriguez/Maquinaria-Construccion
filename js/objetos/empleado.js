function Empleado(dniEmpleado, nombreEmpleado, apellidoEmpleado, telEmpleado, dirEmpleado, localidadEmpleado, cpEmpleado)
{
		this.dniEmpleado = dniEmpleado;
		this.nombreEmpleado = nombreEmpleado;
		this.apellidoEmpleado = apellidoEmpleado;
		this.telEmpleado = telEmpleado;
		this.dirEmpleado = dirEmpleado;
		this.localidadEmpleado = localidadEmpleado;
		this.cpEmpleado = cpEmpleado;
		this.estado = true;
}

//METODOS:
Empleado.prototype.sRowHTML = function() {

	var fila = document.createElement("TR");

	fila.insertCell(-1).appendChild(document.createTextNode(this.dniEmpleado));
	fila.insertCell(-1).appendChild(document.createTextNode(this.nombreEmpleado));
	fila.insertCell(-1).appendChild(document.createTextNode(this.apellidoEmpleado));
	fila.insertCell(-1).appendChild(document.createTextNode(this.telEmpleado));
	fila.insertCell(-1).appendChild(document.createTextNode(this.dirEmpleado));
	fila.insertCell(-1).appendChild(document.createTextNode(this.localidadEmpleado));
	fila.insertCell(-1).appendChild(document.createTextNode(this.cpEmpleado));
	if(this.estado){
		fila.insertCell(-1).appendChild(document.createTextNode("Activo"));
		fila.classList.add("table-success");
	}
	else{
		fila.insertCell(-1).appendChild(document.createTextNode("Inactivo"));
		fila.classList.add("table-danger");
	}

	return fila;
}

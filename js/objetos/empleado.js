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
	if(this.estado)
		fila.insertCell(-1).appendChild(document.createTextNode("Activo"));
	else
		fila.insertCell(-1).appendChild(document.createTextNode("Inactivo"));

	return fila;
}



// class Empleado{

// 	contructor(codEmpleado, dniEmpleado, nombreEmpleado, apellidoEmpleado, telEmpleado, dirEmpleado, localidadEmpleado, cpEmpleado)
// 	{
// 		this.codEmpleado = codEmpleado;
// 		this.dniEmpleado = dniEmpleado;
// 		this.nombreEmpleado = nombreEmpleado;
// 		this.apellidoEmpleado = apellidoEmpleado;
// 		this.telEmpleado = telEmpleado;
// 		this.dirEmpleado = dirEmpleado;
// 		this.localidadEmpleado = localidadEmpleado;
// 		this.cpEmpleado = cpEmpleado;
// 	}

// 	sRowHTML() 
// 	{ 
// 		var sRow = "";
// 		sRow +="<td>"+this.codEmpleado+"</td>";
// 		sRow +="<td>"+this.dniEmpleado+"</td>";
// 		sRow +="<td>"+this.nombreEmpleado+"</td>";
// 		sRow +="<td>"+this.apellidoEmpleado+"</td>";
// 		sRow +="<td>"+this.telEmpleado+"</td>";
// 		sRow +="<td>"+this.dirEmpleado+"</td>";
// 		sRow +="<td>"+this.localidadEmpleado+"</td>";
// 		sRow +="<td>"+this.cpEmpleado+"</td>";

// 		return sRow;
// 	}
// }
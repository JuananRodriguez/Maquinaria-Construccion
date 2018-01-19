function Empleado(codEmpleado, dniEmpleado, nombreEmpleado, apellidoEmpleado, telEmpleado, dirEmpleado, localidadEmpleado, cpEmpleado)
{
    this.codEmpleado = codEmpleado;
		this.dniEmpleado = dniEmpleado;
		this.nombreEmpleado = nombreEmpleado;
		this.apellidoEmpleado = apellidoEmpleado;
		this.telEmpleado = telEmpleado;
		this.dirEmpleado = dirEmpleado;
		this.localidadEmpleado = localidadEmpleado;
		this.cpEmpleado = cpEmpleado;
}

//METODOS:
Empleado.prototype.sRowHTML = function() 
{ 
	var sRow = "";
		sRow +="<td>"+this.codEmpleado+"</td>";
		sRow +="<td>"+this.dniEmpleado+"</td>";
		sRow +="<td>"+this.nombreEmpleado+"</td>";
		sRow +="<td>"+this.apellidoEmpleado+"</td>";
		sRow +="<td>"+this.telEmpleado+"</td>";
		sRow +="<td>"+this.dirEmpleado+"</td>";
		sRow +="<td>"+this.localidadEmpleado+"</td>";
		sRow +="<td>"+this.cpEmpleado+"</td>";

		return sRow;
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
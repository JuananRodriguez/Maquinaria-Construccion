//Creamos el objeto Cliente

function Cliente(dniCliente,nombreCliente, apellidoCliente, telClientes, dirCliente, localidadCliente, cpCliente) 
{
    this.dniCliente = dniCliente;
    this.nombreCliente = nombreCliente;
    this.apellidoCliente = apellidoCliente;
    this.telClientes = telClientes;
    this.dirCliente =  dirCliente;
    this.localidadCliente = localidadCliente;
    this.cpCliente = cpCliente;
}

//METODOS:
Cliente.prototype.sRowHTML = function() 
{ 
	var sRow = "";
	sRow +="<td>"+this.dniCliente+"</td>";
	sRow +="<td>"+this.nombreCliente+"</td>";
	sRow +="<td>"+this.apellidoCliente+"</td>";
	sRow +="<td>"+this.telClientes+"</td>";
	sRow +="<td>"+this.dirCliente+"</td>";
	sRow +="<td>"+this.localidadCliente+"</td>";
	sRow +="<td>"+this.cpCliente+"</td>";

	return sRow;
}

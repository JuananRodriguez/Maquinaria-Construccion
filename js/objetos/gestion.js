//Objeto GESTION. ES LA CLASE QUE CONTENDRÁ TODOS LOS DATOS DE LA APLICACIÓN

function Gestion() 
{
	this.empleados = [];
    this.clientes = [];
    this.maquinas = [];
    this.proveedores = [];
    this.transacciones = [];
    this.alquileres = [];
    this.devoluciones = [];
}

//MÉTODOS SOBRE PROVEEDORES
Gestion.prototype.altaProveedor = function(oProveedor) 
{
	var bInsertado = false;
		if (this.buscarProveedor(oProveedor.dni)==null)
		{
			bInsertado = true;
			this.proveedores.push(oProveedor);
		}
	return bInsertado;
};

Gestion.prototype.buscarProveedor = function(sNif) 
{
		var oProveedor = null;
		var i = 0;
		
		while (i < this.proveedores.length && oProveedor == null)
		{
			if (this.proveedores[i].dni == sNif)
			{
				oProveedor = this.proveedores[i];
			}
			i++;
		}
		return oProveedor;
};

Gestion.prototype.eliminarProveedor = function(sNif) 
{
	var bEliminado = false;
		
	if (this.buscarProveedor(sNif)!=null)
	{
		oProveedor = this.buscarProveedor(sNif);
		oProveedor.estado=false;
		// var pos = this.proveedores.indexOf(oProveedor);
		// this.proveedores.splice(pos, 1);
		bEliminado = true;
	}
	return bEliminado;
};

Gestion.prototype.modificarProveedor = function(sNif,oProveedorActualizado) 
{
	var bActualizado = false;
		
	if (this.buscarProveedor(sNif)!=null)
	{
		oProveedor = this.buscarProveedor(sNif);
		var pos = this.proveedores.indexOf(oProveedor);
		if(sNif == oProveedorActualizado.dni || this.buscarProveedor(oProveedorActualizado.dni)==null){
			this.proveedores.splice(pos, 1, oProveedorActualizado);
			bActualizado = true;
		 }
	}
	return bActualizado;
};

Gestion.prototype.sRowHTMLProveedores = function() 
{	
	var oBody = document.createElement("TBODY");

	for (var i=0; i<this.proveedores.length;i++)
		oBody.appendChild(this.proveedores[i].sRowHTML());

	return oBody;
}

//MÉTODOS SOBRE EMPLEADOS
Gestion.prototype.altaEmpleado = function(oEmpleado) 
{
	var bInsertado = false;
		if (this.buscarEmpleado(oEmpleado.dniEmpleado)==null)
		{
			bInsertado = true;
			this.empleados.push(oEmpleado);
		}
	return bInsertado;
};

Gestion.prototype.buscarEmpleado = function(sNif) 
{
		var oEmpleado = null;
		var i = 0;
		
		while (i < this.empleados.length && oEmpleado == null)
		{
			if (this.empleados[i].dniEmpleado == sNif)
			{
				oEmpleado = this.empleados[i];
			}
			i++;
		}
		return oEmpleado;
};

Gestion.prototype.eliminarEmpleado = function(sNif) 
{
	var bEliminado = false;
		
	if (this.buscarEmpleado(sNif)!=null)
	{
		oEmpleado = this.buscarEmpleado(sNif);
		oEmpleado.estado=false;
		//var pos = this.empleados.indexOf(oEmpleado);
		//this.empleados.splice(pos, 1);
		bEliminado = true;
	}
	return bEliminado;
};

Gestion.prototype.modificarEmpleado = function(sNif,oEmpleadoActualizado) 
{
	var bActualizado = false;
		
	if (this.buscarEmpleado(sNif)!=null)
	{
		oEmpleado = this.buscarEmpleado(sNif);
		var pos = this.empleados.indexOf(oEmpleado);
		if(sNif == oEmpleadoActualizado.dniEmpleado || this.buscarEmpleado(oEmpleadoActualizado.dniEmpleado)==null){
			this.empleados.splice(pos, 1, oEmpleadoActualizado);
			bActualizado = true;
		 }
	}
	return bActualizado;
};

Gestion.prototype.sRowHTMLEmpleados = function() 
{	
	var oBody = document.createElement("TBODY");

	for (var i=0; i<this.empleados.length;i++)
		oBody.appendChild(this.empleados[i].sRowHTML());

	return oBody;
}


//METODOS SOBRE CLIENTES
Gestion.prototype.altaCliente = function(oCliente) 
{
	var bInsertado = false;
		
		if (this.buscarCliente(oCliente.dniCliente)==null)
		{
			bInsertado = true;
			this.clientes.push(oCliente);
		}
	return bInsertado;
};

Gestion.prototype.buscarCliente = function(sNif) 
{
		var oCliente = null;
		var i = 0;
		
		while (i < this.clientes.length && oCliente == null)
		{
			if (this.clientes[i].dniCliente == sNif)
			{
				oCliente = this.clientes[i];
			}
			i++;
		}
		return oCliente;
};

Gestion.prototype.eliminarCliente = function(sNif) 
{
	var bEliminado = false;
		
	if (this.buscarCliente(sNif)!=null)
	{
		oCliente = this.buscarCliente(sNif);
		oCliente.estado=false;
		// var pos = this.clientes.indexOf(oCliente);
		// this.clientes.splice(pos, 1);
		bEliminado = true;
	}
	return bEliminado;
};

Gestion.prototype.modificarCliente = function(sNif,oClienteActualizado) 
{
	var bActualizado = false;
		
	if (this.buscarCliente(sNif)!=null)
	{
		oCliente = this.buscarCliente(sNif);
		var pos = this.clientes.indexOf(oCliente);
		if(sNif == oClienteActualizado.dniCliente || this.buscarCliente(oClienteActualizado.dniCliente)==null){
			this.clientes.splice(pos, 1, oClienteActualizado);
			bActualizado = true;
		 }
	}
	return bActualizado;
};

Gestion.prototype.sRowHTMLClientes = function() 
{	
	var oBody = document.createElement("TBODY");

	for (var i=0; i<this.clientes.length;i++)
		oBody.appendChild(this.clientes[i].sRowHTML());

	return oBody;
}


//METODOS SOBRE MAQUINARIA
Gestion.prototype.altaMaquina = function(oMaquina) 
{
	var bInsertado = false;
		
		if (this.buscarMaquina(oMaquina.iIdMaquina)==null)
		{
			bInsertado = true;
			this.maquinas.push(oMaquina);
		}
	return bInsertado;
};

Gestion.prototype.buscarMaquina = function(iId) 
{
		var oMaquina = null;
		var i = 0;
		
		while (i < this.maquinas.length && oMaquina == null)
		{
			if (this.maquinas[i].iIdMaquina == iId)
				oMaquina = this.maquinas[i];	
			i++;
		}
		return oMaquina;
};

Gestion.prototype.eliminarMaquina = function(iId) 
{
	var bEliminado = false;
		
	if (this.buscarMaquina(iId)!=null)
	{
		oMaquina = this.buscarMaquina(iId);
		oMaquina.estado = false;
		// var pos = this.maquinas.indexOf(oMaquina);
		// this.maquinas.splice(pos, 1);
		bEliminado = true;
	}
	return bEliminado;
};

Gestion.prototype.modificarMaquina = function(iId,oMaquinaActualizada) 
{
	var bActualizado = false;
	oMaquina = this.buscarMaquina(iId);	
	if (oMaquina!=null)
	{		
		var pos = this.maquinas.indexOf(oMaquina);
		if(iId == oMaquinaActualizada.iIdMaquina || this.buscarMaquina(oMaquinaActualizada.iIdMaquina)==null){
			this.maquinas.splice(pos, 1, oMaquinaActualizada);
			bActualizado = true;
		 }
	}
	return bActualizado;
};

Gestion.prototype.sRowHTMLMaquinas = function() 
{	
	var oBody = document.createElement("TBODY");

	for (var i=0; i<this.maquinas.length;i++)
		oBody.appendChild(this.maquinas[i].sRowHTML());

	return oBody;
}

//METODOS SOBRE TRANSACCIONES
Gestion.prototype.altaCompra =function(oCompra)
{
	var bInsertado = false;

	if (this.buscarTransaccion(oCompra.id)==null) 
	{
 			bInsertado = true;
			this.transacciones.push(oCompra);
	}
	return bInsertado;
}

Gestion.prototype.altaVenta =function(oCompra,sId)
{
	var bInsertado = false;

	if (this.buscarTransaccion(oCompra.id)==null) 
	{
			var oMaquina = this.buscarMaquina(sId);
			oMaquina.estado = false;
 			bInsertado = true;
			this.transacciones.push(oCompra);
	}
	return bInsertado;
}

Gestion.prototype.buscarTransaccion = function(iId)
{
	var oCompra = null;
	var i = 0;
	while (i < this.transacciones.length && oCompra == null)
		{
			if (this.transacciones[i].id == iId)
				oCompra = this.transacciones[i];	
			i++;
 		}
 	return oCompra;
}

Gestion.prototype.sRowHTMLTransacciones = function()
{
	var oBody = document.createElement("TBODY");
 
	for (var i=0; i<this.transacciones.length;i++)
		oBody.appendChild(this.transacciones[i].sRowHTML());

	return oBody;
}

//METODOS SOBRE ALQUILERES
Gestion.prototype.altaAlquiler = function(oAlquiler)
{
	var bInsertado = false;
		if (this.buscarAlquiler(oAlquiler.idAlquiler)==null)
		{
			bInsertado = true;
			this.alquileres.push(oAlquiler);
		}
return bInsertado;
}

Gestion.prototype.buscarAlquiler = function(id) 
{
		var oAlquiler = null;
		var i = 0;
		
		while (i < this.alquileres.length && oAlquiler == null)
		{
			if (this.alquileres[i].idAlquiler == id)
			{
				oAlquiler = this.alquileres[i];
			}
			i++;
		}
		return oAlquiler;
}

Gestion.prototype.modificarAlquileres = function(sId,oAlquilerActualizado) 
{
	var bActualizado = false;
		
	if (this.buscarAlquiler(sId)!=null)
	{
		oAlquiler = this.buscarAlquiler(sId);
		var pos = this.alquileres.indexOf(oAlquiler);
		if(sId == oAlquilerActualizado.idAlquiler || this.buscarAlquiler(oAlquilerActualizado.idAlquiler)==null){
			this.alquileres.splice(pos, 1, oAlquilerActualizado);
			bActualizado = true;
		 }
	}
	return bActualizado;
};


Gestion.prototype.sRowHTMLAlquileres = function() 
{	
	var oBody = document.createElement("TBODY");

	for (var i=0; i<this.alquileres.length;i++)
		oBody.appendChild(this.alquileres[i].sRowHTML());

	return oBody;
}

//METODOS SOBRE DEVOLUCIONES
Gestion.prototype.altaDevolucion = function(oDevolucion)
{
	var bInsertado = false;
		if (this.buscarDevolucion(oDevolucion.idAlquiler)==null)
		{
			bInsertado = true;
			this.devoluciones.push(oDevolucion);
			oAlquiler = this.buscarAlquiler(oDevolucion.idAlquiler);
			oAlquiler.estado = false;
			this.modificarAlquileres(oDevolucion.idAlquiler, oAlquiler);
		}
return bInsertado;
}

Gestion.prototype.buscarDevolucion = function(id) 
{
		var oDevolucion = null;
		var i = 0;
		
		while (i < this.devoluciones.length && oDevolucion == null)
		{
			if (this.devoluciones[i].idAlquiler == id)
			{
				oDevolucion = this.devoluciones[i];
			}
			i++;
		}
		return oDevolucion;
}

Gestion.prototype.sRowHTMLDevoluciones= function() 
{	
	var oBody = document.createElement("TBODY");

	for (var i=0; i<this.devoluciones.length;i++)
		oBody.appendChild(this.devoluciones[i].sRowHTML());

	return oBody;
}
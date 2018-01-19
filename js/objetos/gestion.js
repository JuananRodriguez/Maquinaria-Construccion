//Objeto GESTION. ES LA CLASE QUE CONTENDRÁ TODOS LOS DATOS DE LA APLICACIÓN

function Gestion() 
{
	this.empleados = [];
    this.clientes = [];
    this.maquinas = [];
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
		var pos = this.empleados.indexOf(oEmpleado);
		this.empleados.splice(pos, 1);
		bEliminado = true;
	}
	return bEliminado;
};

Gestion.prototype.modificarEmpleado = function(sNif,oEmpleadoActualizado) 
{
	var bActualizado = false;
		
	if (this.buscarEmpleado(sNif)!=null)
	{
		oEmpleado = this.buscarCliente(sNif);
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
	var sRow = "";

	for (var i=0; i<this.empleados.length;i++){
		sRow += "<tr>";
		sRow += this.empleados[i].sRowHTML();
		sRow += "</tr>";
	}	
	return sRow;
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
		var pos = this.clientes.indexOf(oCliente);
		this.clientes.splice(pos, 1);
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
	var sRow = "";

	for (var i=0; i<this.clientes.length;i++){
		sRow += "<tr>";
		sRow += this.clientes[i].sRowHTML();
		sRow += "</tr>";
	}	
	return sRow;
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
		var pos = this.maquinas.indexOf(oMaquina);
		this.maquinas.splice(pos, 1);
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
	var sRow = "";

	for (var i=0; i<this.maquinas.length;i++){
		sRow += "<tr>";
		sRow += this.maquinas[i].sRowHTML();
		sRow += "</tr>";
	}	
	return sRow;
}
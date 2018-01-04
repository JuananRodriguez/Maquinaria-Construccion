//Objeto GESTION. ES LA CLASE QUE CONTENDRÁ TODOS LOS DATOS DE LA APLICACIÓN

function Gestion() 
{
    this.clientes = [];
    this.maquinas = [];
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
				oCliente = this.clientes[i];	
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
		var pos = this.clientes.indexOf(oCliente.dniCliente);
		this.clientes.splice(pos, 1);
		bEliminado = true;
	}
	return bEliminado;
};

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
		var pos = this.maquinas.indexOf(oMaquina.iIdMaquina);
		this.maquinas.splice(pos, 1);
		bEliminado = true;
	}
	return bEliminado;
};
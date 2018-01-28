//Creamos el objeto Maquinaria

function Maquina(sModelo,iIdMaquina, sNombreMaquina, sDescMaquina, iAlquiler, sAveria) 
{
    this.sModelo = sModelo;
    this.iIdMaquina = iIdMaquina;
    this.sNombreMaquina = sNombreMaquina;
    this.sDescMaquina = sDescMaquina;
    this.iAlquiler =  parseFloat(iAlquiler);
    this.sAveria = sAveria;
    this.estado = true;
}

//METODOS: 

Maquina.prototype.sRowHTML = function() 
{ 
	var fila = document.createElement("TR");

	fila.insertCell(-1).appendChild(document.createTextNode(this.sModelo));
	fila.insertCell(-1).appendChild(document.createTextNode(this.iIdMaquina));
	fila.insertCell(-1).appendChild(document.createTextNode(this.sNombreMaquina));
	fila.insertCell(-1).appendChild(document.createTextNode(this.sDescMaquina));
	fila.insertCell(-1).appendChild(document.createTextNode(this.iAlquiler.toLocaleString('de-DE', {  style: 'currency', currency: 'EUR'  })));
	fila.insertCell(-1).appendChild(document.createTextNode(this.sAveria));
	fila.dataset.cero=this.sModelo;
	fila.dataset.uno=this.iIdMaquina;
	fila.dataset.dos=this.sNombreMaquina;
	fila.dataset.tres=this.sDescMaquina;
	fila.dataset.cuatro=this.iAlquiler;
	fila.dataset.cinco=this.sAveria;
	
	if(this.estado)
	{
		fila.insertCell(-1).appendChild(document.createTextNode("Activo"));
		fila.classList.add("table-success");
	}
	else
	{
		fila.insertCell(-1).appendChild(document.createTextNode("Inactivo"));
		fila.classList.add("table-danger");
	}

	return fila;
}

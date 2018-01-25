//Creamos el objeto Maquinaria

function Maquina(sModelo,iIdMaquina, sNombreMaquina, sDescMaquina, iAlquiler, sAveria) 
{
    this.sModelo = sModelo;
    this.iIdMaquina = iIdMaquina;
    this.sNombreMaquina = sNombreMaquina;
    this.sDescMaquina = sDescMaquina;
    this.iAlquiler =  iAlquiler;
    this.sAveria = sAveria;
}

//METODOS: 

Maquina.prototype.sRowHTML = function() 
{ 
	var fila = document.createElement("TR");

	fila.insertCell(-1).appendChild(document.createTextNode(this.sModelo));
	fila.insertCell(-1).appendChild(document.createTextNode(this.iIdMaquina));
	fila.insertCell(-1).appendChild(document.createTextNode(this.sNombreMaquina));
	fila.insertCell(-1).appendChild(document.createTextNode(this.sDescMaquina));
	fila.insertCell(-1).appendChild(document.createTextNode(this.iAlquiler));
	fila.insertCell(-1).appendChild(document.createTextNode(this.sAveria));

	return fila;
}

//Creamos el objeto Maquinaria

function Maquina(sModelo,iIdMaquina, sNombreMaquina, sDescMaquina, iAlquiler, sAveria) 
{
    this.sModelo = sModelo;
    this.iIdMaquina = iIdMaquina;
    this.sNombreMaquina = sNombreMaquina;
    this.sDescMaquina = sDescMaquina;
    this.iAlquiler =  iAlquiler;
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
	fila.insertCell(-1).appendChild(document.createTextNode(this.iAlquiler));
	fila.insertCell(-1).appendChild(document.createTextNode(this.sAveria));
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

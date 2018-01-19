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
	var sRow = "";
	sRow +="<td>"+this.sModelo+"</td>";
	sRow +="<td>"+this.iIdMaquina+"</td>";
	sRow +="<td>"+this.sNombreMaquina+"</td>";
	sRow +="<td>"+this.sDescMaquina+"</td>";
	sRow +="<td>"+this.iAlquiler+"</td>";
	sRow +="<td>"+this.sAveria+"</td>";

	return sRow;
}
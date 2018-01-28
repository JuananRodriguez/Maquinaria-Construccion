function Transaccion (sId,dFecha,sEmpleado,iMaquina,fCoste) {
	this.id = sId;
    this.fecha = new Date(dFecha);
	this.empleado = sEmpleado;
	this.maquina = iMaquina;
	this.valor = fCoste;
}
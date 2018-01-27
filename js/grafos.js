document.querySelector("#mostrarEstadisticas").addEventListener("click", mostrarEstadisticas, false);



function grafoBalanceAlquiler(){
    var alquilerTrue =  totalImporteAlquileresActivos();
    var alquilerFalse= totalImporteAlquileresFinalizados();
    var total = parseInt(alquilerTrue) + parseInt(alquilerFalse);

    var arrayEtiquetas=["€ Alquileres por Finalizar","€ Alquileres Finalizados","€ en Total"];
    var arrayDatos=[alquilerTrue,alquilerFalse,total];
    insertarGrafoBar("Balance por Alquileres",arrayEtiquetas,arrayDatos);    
}


function grafoBalanceTransacciones(){
    var gastoCompras =  totalImporteCompras();
    var beneficioVentas= totalImporteVentas();
    var neto = totalImporteVentas() - totalImporteCompras();

    var arrayEtiquetas=["Ingresos por Ventas","Gasto en Compras","Beneficio"];
    var arrayDatos=[beneficioVentas,gastoCompras,neto];
    insertarGrafoBar("Balance por Transacciones",arrayEtiquetas,arrayDatos);    
}



function grafoMaquinaria(){
    var total=oGestion.maquinas.length;
    var activos=0;
    var inactivos=0;
    var alquiladas=maquinasAlquiladasActivas().length;
    var porAlquilar=maquinasNoAlquiladasActivas().length;

    for (var i = 0; i < oGestion.maquinas.length; i++) {
        if(oGestion.maquinas[i].estado)
            activos++;
        else
            inactivos++;
    }

    var arrayEtiquetas=["Activas","Inactivas o Borradas","Alquiladas","Sin Alquilar","Totales Registradas"];
    var arrayDatos=[activos,inactivos,alquiladas,porAlquilar,total]
    insertarGrafoBar("Maquinaria Registrada",arrayEtiquetas,arrayDatos);    
}

function grafoEmpleados(){
    var total=oGestion.empleados.length;
    var activos=0;
    var inactivos=0;

    for (var i = 0; i < oGestion.empleados.length; i++) {
        if(oGestion.empleados[i].estado)
            activos++;
        else
            inactivos++;
    }
    var arrayEtiquetas=["Activos","Inactivos o Borrados","Totales Registrados"];
    var arrayDatos=[activos,inactivos,total]
    insertarGrafoBar("Empleados",arrayEtiquetas,arrayDatos);    
}


function grafoProveedores(){
    var total=oGestion.proveedores.length;
    var activos=0;
    var inactivos=0;

    for (var i = 0; i < oGestion.proveedores.length; i++) {
        if(oGestion.proveedores[i].estado)
            activos++;
        else
            inactivos++;
    }
    var arrayEtiquetas=["Activos","Inactivos o Borrados","Totales Registrados"];
    var arrayDatos=[activos,inactivos,total]
    insertarGrafoBar("Proveedores",arrayEtiquetas,arrayDatos);    
}


function grafoClientes(){
    var total=oGestion.clientes.length;
    var activos=0;
    var inactivos=0;

    for (var i = 0; i < oGestion.clientes.length; i++) {
        if(oGestion.clientes[i].estado)
            activos++;
        else
            inactivos++;
    }
    var arrayEtiquetas=["Activos","Inactivos o Borrados","Totales Registrados"];
    var arrayDatos=[activos,inactivos,total]
    insertarGrafoBar("Clientes",arrayEtiquetas,arrayDatos);    
}

/*Funciones para crear las gráficas*/

function insertarGrafoBar(titulo,arrayEtiquetas,arrayDatos){
    
oDatos= {
            labels: arrayEtiquetas,
            datasets: [{
            label: titulo,
            data: arrayDatos,
            backgroundColor: [               
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(54, 162, 235, 0.5)',                
                'rgba(153, 102, 255, 0.5)'

            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255,99,132,1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',                
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
};

oOptions = {scales: {yAxes: [{ticks: {beginAtZero:true}}]}}; 

var oCanvas = document.createElement("CANVAS");
var pieChart = new Chart(oCanvas, {type: 'bar',data: oDatos, options:oOptions});

var oDiv = document.createElement("DIV");
// oDiv.setAttribute("class", "");

//titulo = document.createTextNode(titulo);
tituloH2 = document.createElement("H2");
tituloH2.textContent=titulo
oDiv.appendChild(tituloH2);
oDiv.appendChild(oCanvas);
oDiv.setAttribute("class", "col-md-6 mt-5");


var contenedor = document.getElementById("grafos");
contenedor.appendChild(oDiv);
contenedor.insertBefore(document.createElement("BR"), oDiv);
}

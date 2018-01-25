//Transforma un array dado en un objeto Div con diferentes texto separados por br
function DeMensajesADiv(arrayMensajes){
    var oTexto=document.createElement("DIV");

        for(var i=0;i<arrayMensajes.length; i++){
            var sTexto = document.createTextNode(arrayMensajes[i]);
            oTexto.appendChild(sTexto);
            var oSalto=document.createElement("BR");
            oTexto.appendChild(oSalto);
        }

        mostrarMensaje(oTexto);
}

//Activa la clase error en formularios//
function claseError(oForm, iDiv) 
{
    //var oDiv = oForm.querySelectorAll("div")[iDiv];
    //oDiv.classList.add("has-danger");

    var oInput = oForm.querySelectorAll("input")[iDiv];
    oInput.classList.add("is-invalid");
}

//Desactiva la clase error en formularios//
function quitarError(oForm, iDiv) 
{
    //var oDiv = oForm.querySelectorAll("div")[iDiv];
    //oDiv.classList.remove("has-danger");

    var oInput = oForm.querySelectorAll("input")[iDiv];
    oInput.classList.remove("is-invalid");
}

//Mostrar mensajes
function mostrarMensaje(sTexto,boolean) //El primer parámetro puede ser un String o un Nodo tipo Div
{
    oMensaje = document.querySelector("#mensajes");
    //oMensaje.classList.add("transicionMensaje");
    oAlerta = document.createElement("DIV");
    oAlerta.classList.add("alert");
    if(boolean)
        oAlerta.classList.add("alert-success");
    else
        oAlerta.classList.add("alert-danger");
    if(sTexto.nodeName!="DIV"){
        oTexto = document.createTextNode(sTexto);
        oAlerta.appendChild(oTexto);
    }

    else{
        oAlerta.appendChild(sTexto);
    }
    oMensaje.insertBefore(oAlerta, oMensaje.firstChild);
    setTimeout(function(){oAlerta.classList.add("transicionAlerta");},100);
    setTimeout(function(){oMensaje.lastChild.classList.remove("transicionAlerta");},4450);
    setTimeout(function(){oMensaje.removeChild(oMensaje.lastChild);},4500);
}

//RELLENAR COMBOS

function actualizaCombos(sTipo, bTodos) 
{
    var capaSelect = "";
    var idSelect = "";
    var arrayDatos = [];

    switch(sTipo) 
    {
        case "proveedores":
            capaSelect = "selectDivProveedor";
            idSelect = "selectProveedor";
            arrayDatos = obtenerActivos(oGestion.proveedores);
            break;
        case "empleados":
            capaSelect = "selectDivEmpleado";
            idSelect = "selectEmpleado";
            arrayDatos = obtenerActivos(oGestion.empleados);
            break;
        case "clientes":
            capaSelect = "selectDivCliente";
            idSelect = "selectCliente";
            arrayDatos = obtenerActivos(oGestion.clientes);             
            break;
        case "maquinas":
            capaSelect = "selectDivMaquina";
            idSelect = "selectMaquina";
            arrayDatos = oGestion.maquinas;
            break;
        case "compras":
            capaSelect = "selectDivCompra";
            idSelect = "selectCompra";
            arrayDatos = oGestion.transacciones;           
        case "alquileres":
            capaSelect = "selectDivAlquiler";
            idSelect = "selectAlquiler";
            arrayDatos = oGestion.alquileres;
            break;
    }

    function devolverValue(array,i,tipo) 
    {
        var oValores = [];
        switch(tipo) 
        {   
            case "proveedores":
                oValores[0] = array[i].dni;
                oValores[1] = array[i].nombre;
                oValores[2] = array[i].apellido;
                break;
            case "empleados":
                oValores[0] = array[i].dniEmpleado;
                oValores[1] = array[i].nombreEmpleado;
                oValores[2] = array[i].apellidoEmpleado;
                break;
            case "clientes":
                oValores[0] = array[i].dniCliente;
                oValores[1] = array[i].nombreCliente;
                oValores[2] = array[i].apellidoCliente;
                break;
            case "maquinas":
                oValores[0] = array[i].iIdMaquina;
                oValores[1] = array[i].sNombreMaquina;
                oValores[2] = array[i].sModelo;
                break;
            case "compras":
                oValores[0] = array[i].id;
                oValores[1] = array[i].fecha;
                oValores[2] = array[i].maquina;
            case "alquileres":
                oValores[0] = array[i].idAlquiler;
                oValores[1] = array[i].idMaquina;
                oValores[2] = array[i].dniCliente;
                break;
        }
        return oValores;
    }

    if (document.getElementById(idSelect) != null) 
    {
        var oCapaSelect = document.getElementsByClassName(capaSelect);
        for (var i=0; i<oCapaSelect.length; i++)
                oCapaSelect[i].firstChild.remove();
    }

    var oSelect = document.createElement("select");
    oSelect.setAttribute("id", idSelect);
    oSelect.setAttribute("class", "form-control");

    if (arrayDatos.length == 0) 
    {
        var oOption = document.createElement("option");
        var oTextNode = document.createTextNode("La lista no contiene elementos");
        oOption.appendChild(oTextNode);
        oSelect.appendChild(oOption);
    }
    else 
    {   
        var oOption = document.createElement("option");
        var oTextNode = document.createTextNode("Selecciona un elemento del listado...");
        oOption.appendChild(oTextNode);
        oSelect.appendChild(oOption);

        for (var i = 0; i < arrayDatos.length; i++) 
        {
            var arrayValores = devolverValue(arrayDatos,i,sTipo);
            var oOption = document.createElement("option");
            oOption.value = arrayValores[0];
            if(sTipo=="clientes"|| sTipo=="empleados"|| sTipo=="proveedores"|| sTipo=="alquileres")
            {
                var oTextNode = document.createTextNode(arrayValores[0] + " - " + arrayValores[1] +" "+ arrayValores[2]);
            }
            else if(sTipo=="maquinas")
                var oTextNode = document.createTextNode(" Id: " +arrayValores[0] + " - " + arrayValores[1] +". Mod: "+ arrayValores[2]);
            else
                var oTextNode = document.createTextNode(" Id: " +arrayValores[0] + " Fch: " + arrayValores[1] +" Maq: "+ arrayValores[2]);

            oOption.appendChild(oTextNode);
            oSelect.appendChild(oOption);
        }
    }
    var oCapaSelect = document.getElementsByClassName(capaSelect);

    for (var i=0; i<oCapaSelect.length; i++)
    {
        oSelectClonado=oSelect.cloneNode(true);
        oCapaSelect[i].appendChild(oSelectClonado);
    }
}


function obtenerActivos(arrayPersonas)
{
    var arrayFiltrado = [];

    for (var i = 0; i < arrayPersonas.length; i++) {
        if(arrayPersonas[i].estado)
            arrayFiltrado.push(arrayPersonas[i]);
    }

    return arrayFiltrado;
}

    
function crearCabecera(oFormulario,fila,col,descripcion)
{
    enlace = document.createElement("A");
    enlace.href="#";
    enlace.appendChild(document.createTextNode(descripcion));
    enlace.addEventListener("click", function(){ordenarFila(oFormulario,col)},false);

    fila.insertCell(-1).appendChild(enlace);

}

function actualizaCombosTodos(sTipo) 
{
    var capaSelect = "";
    var idSelect = "";
    var arrayDatos = [];

    switch(sTipo) 
    {
        case "proveedores":
            capaSelect = "selectDivProveedor";
            idSelect = "selectProveedor";
            arrayDatos = obtenerActivos(oGestion.proveedores);
            break;
        case "empleados":
            capaSelect = "selectDivEmpleadoTodos";   
            idSelect = "selectEmpleadoTodos";
            arrayDatos = oGestion.empleados;
            
            break;
        case "clientes":
            capaSelect = "selectDivCliente";
            idSelect = "selectCliente";
            arrayDatos = obtenerActivos(oGestion.clientes);             
            break;
        case "maquinas":
            capaSelect = "selectDivMaquina";
            idSelect = "selectMaquina";
            arrayDatos = oGestion.maquinas;
            break;
        case "compras":
            capaSelect = "selectDivCompra";
            idSelect = "selectCompra";
            arrayDatos = obtenerActivos(oGestion.compras);           
        case "alquileres":
            capaSelect = "selectDivAlquiler";
            idSelect = "selectAlquiler";
            arrayDatos = oGestion.alquileres;
            break;
    }

    function devolverValueTodos(array,i,tipo) 
    {
        var oValores = [];
        switch(tipo) 
        {   
            case "proveedores":
                oValores[0] = array[i].dni;
                oValores[1] = array[i].nombre;
                oValores[2] = array[i].apellido;
                break;
            case "empleados":
                oValores[0] = array[i].dniEmpleado;
                oValores[1] = array[i].nombreEmpleado;
                oValores[2] = array[i].apellidoEmpleado;
                break;
            case "clientes":
                oValores[0] = array[i].dniCliente;
                oValores[1] = array[i].nombreCliente;
                oValores[2] = array[i].apellidoCliente;
                break;
            case "maquinas":
                oValores[0] = array[i].iIdMaquina;
                oValores[1] = array[i].sNombreMaquina;
                oValores[2] = array[i].sModelo;
                break;
            case "compras":
                oValores[0] = array[i].id;
                oValores[1] = array[i].fecha;
                oValores[2] = array[i].maquina;
            case "alquileres":
                oValores[0] = array[i].idAlquiler;
                oValores[1] = array[i].idMaquina;
                oValores[2] = array[i].dniCliente;
                break;
        }
        return oValores;
    }

    if (document.getElementById(idSelect) != null) 
    {
        var oCapaSelect = document.getElementsByClassName(capaSelect);
        for (var i=0; i<oCapaSelect.length; i++)
                oCapaSelect[i].firstChild.remove();
    }

    var oSelect = document.createElement("select");
    oSelect.setAttribute("id", idSelect);
    oSelect.setAttribute("class", "form-control");

    if (arrayDatos.length == 0) 
    {
        var oOption = document.createElement("option");
        var oTextNode = document.createTextNode("La lista no contiene elementos");
        oOption.appendChild(oTextNode);
        oSelect.appendChild(oOption);
    }
    else 
    {   
        var oOption = document.createElement("option");
        var oTextNode = document.createTextNode("Selecciona un elemento del listado...");
        oOption.appendChild(oTextNode);
        oSelect.appendChild(oOption);

        for (var i = 0; i < arrayDatos.length; i++) 
        {
            var arrayValores = devolverValueTodos(arrayDatos,i,sTipo);
            var oOption = document.createElement("option");
            oOption.value = arrayValores[0];
            if(sTipo=="clientes"|| sTipo=="empleados"|| sTipo=="proveedores"|| sTipo=="alquileres")
            {
                var oTextNode = document.createTextNode(arrayValores[0] + " - " + arrayValores[1] +" "+ arrayValores[2]);
            }
            else if(sTipo=="maquinas")
                var oTextNode = document.createTextNode(" Id: " +arrayValores[0] + " - " + arrayValores[1] +". Mod: "+ arrayValores[2]);
            else
                var oTextNode = document.createTextNode(" Id: " +arrayValores[0] + " Fch: " + arrayValores[1] +" Maq: "+ arrayValores[2]);

            oOption.appendChild(oTextNode);
            oSelect.appendChild(oOption);
        }
    }
    var oCapaSelect = document.getElementsByClassName(capaSelect);

    for (var i=0; i<oCapaSelect.length; i++)
    {
        oSelectClonado=oSelect.cloneNode(true);
        oCapaSelect[i].appendChild(oSelectClonado);
    }
}
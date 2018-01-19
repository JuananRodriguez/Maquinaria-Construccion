
//Activa la clase error en formularios
function claseError(oForm, iDiv) 
{
    var oDiv = oForm.querySelectorAll("div")[iDiv];
    oDiv.classList.add("has-danger");

    var oInput = oForm.querySelectorAll("input")[iDiv];
    oInput.classList.add("form-control-danger");
}

//Desactiva la clase error en formularios
function quitarError(oForm, iDiv) 
{
    var oDiv = oForm.querySelectorAll("div")[iDiv];
    oDiv.classList.remove("has-danger");

    var oInput = oForm.querySelectorAll("input")[iDiv];
    oInput.classList.remove("form-control-danger");
}

//Mostrar mensajes
function mostrarMensaje(sTexto) 
{
  
  // alert(sTexto);
  //   if (iCodigoError == 0) {
  //       toastr.success(sTexto);
  //   }
  //   else {
  //       toastr.error(sTexto);
  //   }
   
}

//RELLENAR COMBOS

function actualizaCombos(sTipo) 
{
    var capaSelect = "";
    var idSelect = "";
    var arrayDatos = [];

    switch(sTipo) 
    {
        case "empleados":
            capaSelect = "selectDivEmpleado";
            idSelect = "selectEmpleado";
            arrayDatos = oGestion.empleados;
            break;
        case "clientes":
            capaSelect = "selectDivCliente";
            idSelect = "selectCliente";
            arrayDatos = oGestion.clientes;
            break;
        case "maquinas":
            capaSelect = "selectDivMaquina";
            idSelect = "selectMaquina";
            arrayDatos = oGestion.maquinas;
            break;
    }

    function devolverValue(array,i,tipo) 
    {
        var oValores = [];
        switch(tipo) 
        {
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
            if(sTipo=="clientes"||sTipo=="empleados")
            {
                var oTextNode = document.createTextNode(arrayValores[0] + " - " + arrayValores[1] +" "+ arrayValores[2]);
            }
            else
                var oTextNode = document.createTextNode(" Id: " +arrayValores[0] + " - " + arrayValores[1] +". Mod: "+ arrayValores[2]);

            oOption.appendChild(oTextNode);
            oSelect.appendChild(oOption);
        }
    }
    var oCapaSelect = document.getElementsByClassName(capaSelect);

    for (var i=0; i<oCapaSelect.length; i++){
        oSelectClonado=oSelect.cloneNode(true);
        oCapaSelect[i].appendChild(oSelectClonado);
    }
}
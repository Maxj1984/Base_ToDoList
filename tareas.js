document.addEventListener('DOMContentLoaded', function() {

     
//captura el evento clic del boton agregar tarea y abre el modal para dicha accion
    $('#btnAgregarTarea').click(function() {
      LimpiarFormulario();
      $("#ModalAgregar").modal();
    });

    function guardar(){
        //almacena el valor de cada campo en el modal, para luego insertarlo en la tabla
        var _tarea = document.getElementById("tarea").value;
        var _descrip = document.getElementById("descripcion").value;
        var _categ = document.getElementById("categoria").value;
        var _priorid = document.getElementById("prioridad").value;
        
        //inserta el valor de las filas, al final agrega un cuadro de selección para determinar el estado de la tarea
        var fila="<tr><td>"+_tarea+"</td><td>"+_descrip+"</td><td class='' type='number'>"+_categ+"</td><td id='prior_tar' type='number' class='text-right' style='color: white;'>"+_priorid+"</td></tr>" +" <td class='text-right'><select class='form-select' aria-label='Default select example' name='estado' id='estado'><option selected>elige una opción.....</option><option class='opcion_est' value='pendiente'>Pendiente</option><option value='Completado'>Completado</option><option value='cancelado'>Cancelado</option></select></td>";

        var btn = document.createElement("TR");
        btn.innerHTML=fila;
        document.getElementById("List_Tareas").appendChild(btn);
      }

    //Boton que agrega la tarea al detalle de la tabla
    $('#btnAgregarItem').click(function() {
      guardar();
      cambiarColor();
      
      $("#ModalAgregar").modal('hide');
      
    });
    ColorEstado();
//permite limpiar los campos del modal agregar tarea, para que no muestre contenido utilizado
    function LimpiarFormulario() {
      $('#tarea').val('');
      $('#descripcion').val('');
      $('#categoria').val('');
      $('#prioridad').val('');
    }

    function cambiarColor(){
        let td = document.getElementsByClassName('text-right');
        for(let i = 0; i < td.length; i++){
            if(td[i].innerHTML === 'Alta'){
                td[i].style.backgroundColor = 'red';
            }else if(td[i].innerHTML === 'Media'){
                td[i].style.backgroundColor = 'yellow';
                td[i].style.color = 'black';
            }else if(td[i].innerHTML === 'Baja'){
                td[i].style.backgroundColor = 'orange';
            }
        }
    }
    

        function ColorEstado(){
            let td = document.getElementsByClassName('opcion_est');
            for(let i = 0; i < td.length; i++){
                if(td[i].innerHTML === 'Pendiente'){
                    td[i].style.backgroundColor = 'yellow';
                }else if(td[i].innerHTML === 'Completado'){
                    td[i].style.backgroundColor = 'green';
                    td[i].style.color = 'black';
                }else if(td[i].innerHTML === 'Cancelado'){
                    td[i].style.backgroundColor = 'Red';
                }
            } 

    }

});
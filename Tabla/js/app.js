function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";
    var nombre = document.getElementById("nombre_row" + no);
    var precio = document.getElementById("precio_row" + no);
    var cantidad = document.getElementById("cantidad_row" + no);
    var fecha = document.getElementById("fecha_row" + no)
    var nombre_data = nombre.innerHTML;
    var precio_data = precio.innerHTML;
    var cantidad_data = cantidad.innerHTML;
    var fecha_data = fecha.innerHTML;
    nombre.innerHTML = "<input type='text' id='nombre_text" + no + "' value='" + nombre_data + "'>";
    precio.innerHTML = "<input type='text' id='precio_text" + no + "' value='" + precio_data + "'>";
    cantidad.innerHTML = "<input type='text' id='cantidad_text" + no + "' value='" + cantidad_data + "'>";
    fecha.innerHTML = "<input type='text' id='fecha_text" + no + "' value='" + fecha_data + "'>";
}

function save_row(no) {
    var nombre_val = document.getElementById("nombre_text" + no).value;
    var precio_val = document.getElementById("precio_text" + no).value;
    var cantidad_val = document.getElementById("cantidad_text" + no).value;
    var fecha_val = document.getElementById("fecha_text" + no).value;
    document.getElementById("nombre_row" + no).innerHTML = nombre_val;
    document.getElementById("precio_row" + no).innerHTML = precio_val;
    document.getElementById("cantidad_row" + no).innerHTML = cantidad_val;
    document.getElementById("fecha_row" + no).innerHTML = fecha_val;
    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var new_nombre = document.getElementById("new_nombre").value;
    var new_precio = document.getElementById("new_precio").value;
    var new_cantidad = document.getElementById("new_cantidad").value;
    var new_fecha = document.getElementById("new_fecha").value;
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='nombre_row" + table_len + "'>" + new_nombre + "</td><td id='precio_row" + table_len + "'>" + new_precio + "</td><td id='cantidad_row" + table_len + "'>" + new_cantidad + "</td><td id='fecha_row" + table_len + "'>" + new_fecha + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";
    document.getElementById("new_nombre").value = "";
    document.getElementById("new_precio").value = "";
    document.getElementById("new_cantidad").value = "";
    document.getElementById("new_fecha").value = "";
}
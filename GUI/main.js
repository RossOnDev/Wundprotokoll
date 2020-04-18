async function savedata() {
    var size = document.getElementById("size").value;
    var name = document.getElementById("name").value;

    //send to python
    let list = await eel.savedata(size, name)();
    let index = 0;
    document.getElementById("tbody").innerHTML = "";
    list.forEach(loadList);
}

function loadList(item, index){
    let data = item.split(",");
    document.getElementById("tbody").innerHTML += "<tr><td class='table-data text-align-center'>" + index + "</td><td class='table-data'>" + data[1] + "</td><td class='table-data text-align-center'>" + data[0] + "</td><td class='table-data text-align-center'>" + data[2] + "%</td></tr>";
     document.getElementById("size").value = "";
     document.getElementById("name").value = "";
}
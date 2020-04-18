function savedata() {
    var size = document.getElementById("size").value;
    var name = document.getElementById("name").value;

    //send to python
    var list = eel.savedata(size, name);
    list.forEach(loadList);
}

function loadList(item, index){
    document.getElementById("tbody").innerHTML += "<tr>" + index + "</tr><tr>" + item;
}
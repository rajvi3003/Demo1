function addItem() {
    var x = document.createElement("li");
    x.className = "todoEle";
    var d = document.createElement("div");
    d.className = "text";
    var btn = document.createElement("button");
    btn.className = "delButt";
    btn.id = `button_${uid}`;
    uid += 1;
    btn.innerHTML = "delete";
    btn.onclick = deleteItem;
    d.innerHTML = document.getElementById("inputId").value;
    x.appendChild(d);
    x.appendChild(btn);
    document.getElementById("listId").appendChild(x);
}
var uid = 1;

function deleteItem() {
    console.log(this.id);
    var parentele = document.getElementById(this.id).parentElement;
    parentele.remove();

}
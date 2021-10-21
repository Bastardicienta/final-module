var list = document.getElementById("items-list")

function callItem(){
    $.get("https://immense-plateau-68535.herokuapp.com/list", function(data){
        console.log(data);
        for(let i = 0; i<data.data.length; i++){
            var items = document.createElement("div");
            items.innerHTML=data.data[i];
            console.log(data.data[i]);
            items.classList.add("item");
            list.appendChild(items);
        }
    });
}

function addItem(){
    let item = document.getElementById("add-item").value;
    $.post("https://immense-plateau-68535.herokuapp.com/add",{
        todoitem: item + " - Yuly"},
    function(data){
       console.log(data)
       callItem();
    }); 
}
function historyFunction(){
    history.back();
}

function addtocart(){
    var a = document.getElementById("add_to_cart").innerText;
    if(a == "Add to Cart"){
        var x = document.getElementById("add_to_cart");
        x.innerText = "Buy Now";
        var y = document.getElementById("product_details");
        y.style.display = "none";
    }
    else{
        var x = document.getElementById("add_to_cart");
        x.innerText = "Add to Cart";
        var y = document.getElementById("product_details");
        y.style.display = "block";
    }
}

var acc = document.getElementsByClassName("accordin");
var i;
for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var panel =  this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }
        else{
            panel.style.display = "block";
        }
    });
}

var b = document.getElementById("price").innerText;
var b = b.replace("$" , " ");
var b = 140;

function qtydecrease(){
    var a = document.getElementById("qty").innerText;
    var a = Number(a);
    a = a-1;
    if(a==0){
        var x =  document.getElementById("add_to_cart");
        x.innerText = "Buy Now";
        var y = document.getElementById("product_details");
        y.style.display = "none";
        clear();
    }
    var c = b*a;
    var d = document.getElementById("qty");
    d.innerText = a.toString();

    var e =  document.getElementById("price");
    e.innerText = "$" + c.toString();
}

function qtyincrease(){
    var a = document.getElementById("qty").innerText;
    var a = Number(a);
    a = a+1;

    a <= a;

    var c = b*a;
    var d = document.getElementById("qty");
    d.innerText = a.toString();

    var e =  document.getElementById("price");
    e.innerText = "$" + c.toString();
}
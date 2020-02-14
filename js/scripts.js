function greeting(){
var name=prompt("que producto desea comprar?");
var productos=["papas","flores","agua"];
var cos=[5000,50000,25000];
var indix=productos.indexOf(name)
if(indix== -1)
    { alert("este producto no existe")}
else 
{
    var cpro=cos[indix];
   if(cpro>=50000)
   {iva=" y tiene iva.";
    cosr=(cos[1]*1.19);
    alert("este producto tiene un costo de "+Intl.NumberFormat().format(cosr)+iva)
}
   else{iva=" no tiene iva."
   alert("este producto tiene un costo de "+Intl.NumberFormat().format(cpro)+iva)
}
    
}
        
}

greeting();
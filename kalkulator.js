function oblicz(){
	var a = document.getElementById("a").value;
	a = parseFloat(a);

	document.getElementById("p100").innerHTML = a ;
	document.getElementById("p90").innerHTML = a*0.9 ;
    document.getElementById("p89").innerHTML = a*0.9 ;
    document.getElementById("p75").innerHTML = a*0.75 ;
    document.getElementById("p74").innerHTML = a*0.75 ;
    document.getElementById("p50").innerHTML = a*0.5 ;
    document.getElementById("p49").innerHTML = a*0.5 ;
    document.getElementById("p30").innerHTML = a*0.3 ;
    document.getElementById("p29").innerHTML = a*0.3 ;
    document.getElementById("p0").innerHTML = 0 ;
    

 }
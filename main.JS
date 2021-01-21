function getpara1(){
    var inputs=[];

    for ( var i = 1; i<=6;i++) {
        inputs.push(document.getElementById("para_1_txt_".i).value);

        inputs.join(".");

        document.getElementById("para_1").innerHTML=inputs.join(".");
        
    }
}
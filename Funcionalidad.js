
    $("#encrip").click(function(){
       data = encriptarCadenas();
       $("#mensajeinp").val(data);
    });

    $("#desencrip").click(function(){
        data = desencriptarCadenas();
        $("#mensajeinp").val(data);
    });


    function encriptarCadenas(){
        data = $("#mensajeinp").val();
        data = data.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
        return data;
    }
        
    
 function desencriptarCadenas(){
    data = $("#mensajeinp").val();
        data = data.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    return data;
}



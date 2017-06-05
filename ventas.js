module.exports={
    sendMessage:function (mesagge) {
      //console.log('desde el servidor: '+mesagge);
      //dato = procesar(mesagge);
      dato=hex_to_ascii(mesagge.toString('hex'));
      console.log('desde el servidor: ' + dato);
    }
}
 
function hex_to_ascii(message)  
 {  

    var hex  = message.toString();  
    var str = '';  
    for (var n = 0; n < hex.length; n += 2) {  
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));  
    }  
    var expresionRegular = /\s* \s*/;
    var res = str.split(expresionRegular);

    return res;  
 } 

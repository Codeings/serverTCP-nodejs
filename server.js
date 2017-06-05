var net = require('net');
var venta=require('./ventas.js');

//'connection' listener
var server = net.createServer(function(c) {

//mensaje de conexion
  console.log('Servidor Conectado');

//mensaje de bienvenida al conectarse
  c.write('Bienvenido\r\n',c.address());

//captura de datos
  c.on('data',function(data){
	//console.log(data);
  //c.write(data);

  venta.sendMessage(data);
  });

//error de conexion
c.on('error', function(err){
  // handle errors here
  console.log(err);
});

//desconexion de servidor
  c.on('end', function() {
    console.log('Servidor Desconectado');
  });

});

//servidor escuchando
server.listen(6969, function() { 
  console.log('Servidor Arrancado');
});

function hex_to_ascii(str1)  
 {  
    var hex  = str1.toString();  
    var str = '';  
    for (var n = 0; n < hex.length; n += 2) {  
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));  
    }  
    return str;  
 }  



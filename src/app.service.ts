import { Injectable } from '@nestjs/common';

const fs = require('fs');

@Injectable()
export class AppService {
  /* getMessage(): any {
    try {
      var bd: any = fs.readFileSync('bd.json', 'utf-8');
    } catch (error) {
      return "base de datos, no encontrada, esto se puede solucionar agregando el archivo bd.json en la raiz del proyecto "
    }
    return bd
  } */
  writeMessage(body: Body): any {
    try {
      
      //validaciones
      if (body['message'] == undefined) return "formato incorrecto, enviame un json con la parametro message"
      if (body['message'].length == 0) return "el mensaje no puede venir vacio"
      
      //lectura del fichero
      var bd: any = JSON.parse(fs.readFileSync('bd.json', 'utf-8'));
      
      //escritura del mensaje
      bd.push({ "id": bd.length+1, "message": body['message'], "createAt": new Date('2/1/22') })
      fs.writeFile('bd.json', JSON.stringify(bd), (err) => {
        if (err) throw "error escribiendo datos";
        console.log('mensaje guardado');
      });
    } catch (error) {
      return "Error escribiendo los datos"
    }
    return bd

  }
}

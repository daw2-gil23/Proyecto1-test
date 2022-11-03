
import { dades } from "./dades.js"

export const validaNouUsuari = (usuari)=>{
    var igual
    const dadesUsuari=[]

    dadesUsuari.nick=usuari.nick
    dadesUsuari.pass=usuari.pass

    //Si el nick del usuario es menor a 3 o mayor a 10 entrara dentro del if y se enviara un mensaje de error
    if((dadesUsuari.nick).length<3||(dadesUsuari.nick).length>10){
        //enviara que ha dado error y un mensaje
        return{
            error: true,
            missatge:"El nick no és correcte"             
        }
        
    }

    //Si la contraseña del usuario es menor a 3 o mayor a 10 entrara dentro del if y se enviara un mensaje de error
    if((dadesUsuari.pass).length<3||(dadesUsuari.pass).length>10){
        //enviara que ha dado error y un mensaje
        return{
            error: true,
            missatge:"La contrasenya no és correcte"              
        }
        
    }

    //Convertimos el nick en mayusculas para compararlo mejor
    let nickm=dadesUsuari.nick.toUpperCase()

    //Este bucle lo que hace es moverse por la array dades 
    for(let indice=0;indice<dades.length;indice++){
        //Este if comparara el array dades que se convierte en mayusculas con el nick que ha puesto el usuario convertido en mayusculas si coincide entra dentro del if
        if(dades[indice].nick.toUpperCase()==nickm){
        //Esta variable sirve para saber si es igual o no 
        igual=1  
        }
    }
    //Si han coincidido entrara en el if sino ira al else 
    if(igual==1){
        //enviara que ha dado error y un mensaje de que ya existe el usuario
        return{
            error: true,
            missatge:"Aquest usuari ja existeix"              
        }                    
    }else{
        //enviara que no ha dado error y un mensaje de que se ha creado el usuario
        return{
            error: false,   
            missatge:"L’usuari amb nick: " +dadesUsuari.nick+ " s’ha creat correctament"          
        }    
    } 

}    

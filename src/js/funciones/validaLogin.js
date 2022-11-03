import { dades } from "./dades.js"


export const validaLogin = (usuari) =>{
            var igual=0

            //Convetimos el nick todo en minisculas
            const nick=usuari.nick
            const password=usuari.pass

            const nickmayusculas= usuari.nick.toUpperCase()
            //Este bucle lo que hace es moverse por la array dades 
            for(let indice=0;indice<dades.length;indice++){
                //Este if comparara el array dades que se convierte en mayusculas con el nick que ha puesto el usuario en el login convertido en mayusculas si coinciden entrara dentro del if
                if(dades[indice].nick.toUpperCase()==nickmayusculas){
                    //Esta variable sirve para saber si es igual o no 
                    igual=1  
                    //Esta variable sirve para guardar el numero donde coincide con el nick que ha puesto el usuario
                    var numero=indice
                }
            }
            //si es igual es 1 entrara en el if por que signfica que el nick que ha puesto el usuario existe en la base de datos
            //si no es igual entrara en el else
            if(igual==1){
                //Este if sirve para ver si la contrasña que esta gurdada en el array dades es igual a la que ha puesto el usuario
                //si es igual entrara dentro del if sino ira al else
                if(dades[numero].pass==password){
                    //enviara que no ha dado error y un mensaje de un hola al usuario
                    return  {
                        error: false,
                        missatge: "Hola " + nick

                    }
                }else{  
                    //enviara que ha dado error y un mensaje de que la contraseña es incorrecta
                    return  {
                        error: true,
                        missatge: "Contrasenya incorrecta"
                    }    
                }                         
            }else{
                //enviara que ha dado error y un mensaje de que el usuario no existe en la base de datos
                return  {
                    error: true,
                    missatge: "Aquest usuari no existeix"
                }   
            }    
}

export const edat = (fecha) => {

            //creamos un objeto del tipo Date con la fecha de nacimiento
            let nacimiento=new Date(fecha)

            if(isNaN(nacimiento)){
                return{
                    error: true,
                    missatge: "El format no és correcte"
                }
            }

            //miramos el tipo que es, es decir, si es un string, int..
            console.log(typeof nacimiento)

            //Creamos un objeto del tipo Date para guardar la fecha de hoy
            let hoy = new Date()
            //Restamos los años para saber la edad
            let edad = hoy.getFullYear() - nacimiento.getFullYear()
            //Restamos los meses
            let diferenciaMeses = hoy.getMonth() - nacimiento.getMonth()

            //Hacemos esto para saber exactamente la edad. Es decir si restar los años te dira la edad que tienes o la que vas a tener
            //Lo que hacemos es restamos los meses y si sale un numero negativo significa que aun te queda meses para cumplir la edad que te dice restando los años asi que restamos un año
            //Si restamos los meses y da cero pero los dias sale negativo significa que aun te quedan dias asi que restamos un año
            //Ejemplo si yo naci el 27/11/2003 y hoy es 24/10/2022
            //Si restamos los años en teoria tengo 19 años pero en verdad tengo 18 por que aun no he cumplido los 19.
            if (diferenciaMeses < 0 ||(diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())
            ) {
                edad --
            }

            return edad
}
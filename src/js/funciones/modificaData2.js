
export const modificaData2 = (tiempo) =>{

            //miramos si se ha pasado bien la variable tiempo
            console.log("modifica2 : " + tiempo)

            //creamos un objeto del tipo Date con la fecha tiempo
            let tiempoActual = new Date(tiempo)

            //Hacemos esto para si el numero es menor a 10 se añada un 0 al principio
            //El padstart lo que hace es añadirte en el valor que pongas en la longitud que le digas.
            //Ejemplo: si es enero (1) saldar 01 pero si es diciembre(12) saldra 12 sin 0 
            //Esto pasa por que hemos dicho que la longitud sea 2. Enero es un numero asi que se rellanara con 0 en cambio diciembre son dos numeros asi que no hara nada
            let mes= String(tiempoActual.getMonth() + 1).padStart(2, '0')
            let dia = String(tiempoActual.getDate()).padStart(2, '0')
            let hora = String(tiempoActual.getHours()).padStart(2, '0')
            let min = String(tiempoActual.getMinutes()).padStart(2, '0')
            let seg = String(tiempoActual.getSeconds() ).padStart(2, '0')

            //Cogemos los valores y los ponemos en el formato que ha dicho el anunciado
            let tiempoActualFormato = tiempoActual.getFullYear() + "/" + mes + "/" + dia + " " + hora + ":" + min + ":" + seg

            //Devolvemos la fecha en la forma del anunciado
            return(tiempoActualFormato)
}
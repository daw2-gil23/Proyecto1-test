
export const modificaData2 = (tiempo) =>{

            //miramos si se ha pasado bien la variable tiempo
            console.log("modifica2 : " + tiempo)

            //creamos un objeto del tipo Date con la fecha tiempo
            let tiempoActual = new Date(tiempo)

            //Cogemos los valores y los ponemos en el formato que ha dicho el anunciado
            let tiempoActualFormato = tiempoActual.getFullYear() + "/" + (tiempoActual.getMonth() + 1) + "/" + tiempoActual.getDate() + " " + tiempoActual.getHours() + ":" + tiempoActual.getMinutes() + ":" + tiempoActual.getSeconds() 
            console.log(tiempoActualFormato)

            //Devolvemos la fecha en la forma del anunciado
            return(tiempoActualFormato)
}
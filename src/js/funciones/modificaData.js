
export const modificaData = (tiempo) =>{
            //creamos un objeto del tipo Date con la fecha tiempo
            let tiempoActual = new Date(tiempo)

            //devuelve el año del objeto tiempoActual y la guardamos en dia
            let anyo = tiempoActual.getFullYear()
            //devuelve el mes del objeto tiempoActual y la guardamos en dia
            let mes  = tiempoActual.getMonth()

            //Hacemos esto para si el numero es menor a 10 se añada un 0 al principio
            //El padstart lo que hace es rellenar la variable con lo que pongamos hasta alcanzar una longitud dada. 
            //Ejemplo: si es dia 1 saldar 01 pero si es dia 12 saldra 12 sin 0 
            //Esto pasa por que hemos dicho que la longitud sea 2. El dia 1 es un numero asi que se rellanara con 0 en cambio El dia 12 son dos numeros asi que no hara nada
            let dia = String(tiempoActual.getDate()).padStart(2, '0')
            let hora = String(tiempoActual.getHours()).padStart(2, '0')
            let min = String(tiempoActual.getMinutes()).padStart(2, '0')
            let seg = String(tiempoActual.getSeconds() ).padStart(2, '0')

            //getMonth() devuelve el numero del dia que es. Para saber el nombre ahi que crear una array con los nombres de los meses
            const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"
            ];

            //Devolvemos los valores con la estructura dicha en el anunciado. Como el mes nos da el numero del mes que es, solamente ahi que ponerlo en la array para que coga de la array el numero que este en la variable mes
            return(dia + " " + mesesNombres[mes] +   " -  " + anyo + " " + hora + ":" + min + ":" + seg);
}
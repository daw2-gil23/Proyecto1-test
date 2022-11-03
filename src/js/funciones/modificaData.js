
export const modificaData = (tiempo) =>{
            //creamos un objeto del tipo Date con la fecha tiempo
            let tiempoActual = new Date(tiempo)

            //devuelve el dia del objeto tiempoActual y la guardamos en dia
            let dia = tiempoActual.getDate()
            //devuelve el mes del objeto tiempoActual y la guardamos en mes
            let mes = tiempoActual.getMonth()
            //devuelve el año del objeto tiempoActual y la guardamos en dia
            let anyo = tiempoActual.getFullYear()
            //devuelve la hora del objeto tiempoActual y la guardamos en dia
            let hora = tiempoActual.getHours()
            //devuelve los minutos del objeto tiempoActual y la guardamos en dia
            let minutos = tiempoActual.getMinutes()
            //devuelve los segundos del objeto tiempoActual y la guardamos en dia
            let segundos = tiempoActual.getSeconds()

            //getMonth() devuelve el numero del dia que es. Para saber el nombre ahi que crear una array con los nombres de los meses
            const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"
            ];

            //Devolvemos los valores con la estructura dicha en el anunciado. Como el mes nos da el numero del mes que es, solamente ahi que ponerlo en la array para que coga de la array el numero que este en la variable mes
            return(dia + " " + mesesNombres[mes] +   " - " + anyo + " " + hora + ":" + minutos + ":" + segundos);
}
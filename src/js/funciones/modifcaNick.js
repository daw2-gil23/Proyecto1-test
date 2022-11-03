
export const modificaNick = (nick) =>{
        //Quitamos del nombre que nos pasan los espacios de detras y de delante
        let nombre=nick.trim()

        //Sustituimos los espacios con una _
        let nombrefinal = nombre.replaceAll(" ", "_").toUpperCase()

        //Devolvemos el nombre sin espacios y con _ en vez de espacios
        return (nombrefinal)
}
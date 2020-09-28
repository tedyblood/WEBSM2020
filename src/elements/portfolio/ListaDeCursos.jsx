import React, {useContext} from 'react'
import  { queryContext }  from "../../services/Consulta_API";



export default function ListaDeCursos() {

    let posts = useContext(queryContext)
    

    return (
        <div>
            Hola
            {console.log(posts)}
        </div>
    )
}

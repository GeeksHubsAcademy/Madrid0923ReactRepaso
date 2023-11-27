
import { useState, useEffect} from 'react'
import "./Home.css"

//RDX

import { useSelector } from 'react-redux'
import { searchData } from '../searchSlice'
import { bringMovies } from '../../services/apiCalls'
export const Home = () => {

    //Instancio Redux en modo lectura

    const criterioBusqueda = useSelector(searchData)

    useEffect(()=>{

        if(criterioBusqueda.criteria !== ""){
            bringMovies(criterioBusqueda.criteria)
                .then(
                    result => {
                        console.log(result.data.results)
                    }
                )
                .catch(error => console.log(error))
        }


    }, [criterioBusqueda])

    return(
        <div className="homeDesign">


        </div>
    )
}
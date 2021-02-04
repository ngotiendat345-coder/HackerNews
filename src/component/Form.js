import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {CHANGE_QUERY} from '../redux/constants/actionType'
import {getData} from '../redux/action/action'

function Form(){
    const {query,page} = useSelector(state=>state)
    console.log(query)
    const dispatch= useDispatch()
    return(
        <form className="search-form" onSubmit={(e)=>{
            e.preventDefault()
            dispatch(getData(query,page))
        }}>
            <h2>search hacker news</h2>
            <input type="text" className="form-input" value={query} onChange={(e)=>{
                dispatch({type:CHANGE_QUERY,payload:e.target.value})
            }}/>
            <button className="btn_search" type="submit"><i className="fas fa-search"></i></button>
        </form>

    )
}

export default Form;
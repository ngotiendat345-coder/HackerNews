import React from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {INCREASE_PAGE,DECREASE_PAGE,} from '../redux/constants/actionType'
//import {getData} from '../redux/action/action'

function Button(){
    const {loading,page,totalPage} = useSelector(state=>state)
    const dispatch = useDispatch()
    return(
        <div className="btn-container">
            <button onClick={()=>{
                dispatch({type:DECREASE_PAGE})
            }} disabled={loading}
            >prev</button>
            <p>{page + 1} of {totalPage}</p>
            <button onClick={()=>{
                dispatch({type:INCREASE_PAGE})
            }} disabled={loading}
            >next</button>
        </div>
    )
}

export default Button
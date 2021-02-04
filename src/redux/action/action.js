import {REQUEST_API,REQUEST_API_SUCCESS,INCREASE_PAGE,DECREASE_PAGE,CHANGE_QUERY,API_ENDPOINT} from '../constants/actionType'

// fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)

export const getData=(query,page)=>{
    return async (dispatch) =>{
        dispatch({type:REQUEST_API})
        try{
            const response = await fetch(`${API_ENDPOINT}query=${query}&page=${page}`)
            const data = await response.json()
            dispatch({
                type:REQUEST_API_SUCCESS,
                payload:{
                    stories:data.hits,
                    query:query,
                    totalPage:data.nbPages
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }
}
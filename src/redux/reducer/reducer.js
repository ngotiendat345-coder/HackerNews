import {REQUEST_API,REQUEST_API_SUCCESS,REMOVE_STORY,INCREASE_PAGE,DECREASE_PAGE,CHANGE_QUERY} from '../constants/actionType'
const initState={
    page:0,
    totalPage:0,
    stories:[],
    query:'react',
    loading:true
}
// const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'
// fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)

const reducer=(state=initState,action)=>{
    switch(action.type){
        case REQUEST_API:
            return {...state,loading:true}
        case REQUEST_API_SUCCESS:
            const {query,stories,totalPage} = action.payload
            return {...state,loading:false,stories:stories,totalPage:totalPage,query:query}
        case REMOVE_STORY:
            const newStories = state.stories.filter((item)=>{
                if(item.objectID!==action.payload){
                    return item
                }
            })
            return {...state,stories:newStories}
        case CHANGE_QUERY:
            return {...state,query:action.payload}
        case INCREASE_PAGE:
            let newPagePlus = state.page + 1;
            if(newPagePlus > state.totalPage-1){
                newPagePlus = 0
            }
            return {...state,page:newPagePlus}
        case DECREASE_PAGE:
            let newPageMinus = state.page - 1;
            if(newPageMinus <0){
                newPageMinus = state.totalPage - 1
            }
            return {...state,page:newPageMinus}
        default:return state;
    }
}

export default reducer;
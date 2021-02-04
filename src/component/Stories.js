import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getData} from '../redux/action/action'
import {REMOVE_STORY} from '../redux/constants/actionType'
function Stories(){

    const dispatch = useDispatch()
    const {page,loading,stories,query} = useSelector(state=>state)
    console.log(stories)
    useEffect(()=>{
        dispatch(getData(query,page))
    },[page])

    if(loading){
        return <div className="loading">

        </div>
    }
    return(
        <section className="stories">
            {stories.map((item)=>{
                const {title,author,points,num_comments,url,objectID} = item
                return (
                    <article className="story" key={objectID}>
                        <h4 className="title">{title}</h4>
                        <p className="info">{points} points by <span>{author} | </span> {num_comments} comments</p>
                        <div>
                            <a href={url} class="read-link" target="_blank" rel="noopener noreferrer">read more</a>
                            <button class="remove-btn"
                                onClick={()=>{
                                    dispatch({type:REMOVE_STORY,payload:objectID})
                                }}
                            >remove</button>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default Stories;
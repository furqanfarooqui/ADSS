import React, { useState, useEffect } from 'react'
import Post from '../../components/Post'
import { callData } from '../../config/firebase';
import './index.css';

function AllPosts() {

  useEffect(async() => {
    const data = await callData()
    console.log("Copy data Allpost ===>", data)
    setData(data)
  }, [])

  const [data, setData] = useState([])
  
  const [post, setPost] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [editIndex, setIndex] = useState()

  const del = (index) =>{
    //to delete the post
    console.log("Index", index)

    //code to delete
    const tempPost = [...post]
    tempPost.splice(index, 1)
    setPost(tempPost)
  }

  const edit = (index) =>{
    //to edit the post
    console.log(index)

    setIsEdit(true)
    setIndex(index)
  }

  const update = () =>{
    const tempPost = [...post]
    console.log(tempPost[editIndex].title)
    tempPost[editIndex].title = title    
    tempPost[editIndex].body = body
    setPost(tempPost)
    setIsEdit(false)
  }

  return (
  <div className='grid-container'>
    {data.map((item,index) => {
          return  <div className='item'>
            
            <Post item={item} del={()=>del(index)} edit={()=>edit(index)}/>
            {
              isEdit && editIndex === index &&
              <div>
                <p>Edit Title</p>
                <input onChange = {(e) => setTitle(e.target.value)}  placeholder={item.title} ></input><br/>
                <p>Edit Body</p>
                <input onChange = {(e) => setBody(e.target.value)} placeholder={item.body}></input><br/>
                <button onClick={update}>update</button>
              </div>
            }
            </div>
        })}
  </div>
  )
}

export default AllPosts

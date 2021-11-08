import React, { useState, useEffect } from 'react'
import Post from '../../components/Post'
import { callData, updateData, deleteData } from '../../config/firebase';
import './index.css';

function AllPosts({searchedItem}) {
  console.log("Allposts: ", searchedItem)

  useEffect(async() => {
    const data = await callData(searchedItem)
    setData(data)
  }, [searchedItem])

  const [data, setData] = useState([])
  const [post, setPost] = useState([])
  
  const [isEdit, setIsEdit] = useState(false)
  const [editIndex, setIndex] = useState()

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()

  const edit = (index) =>{
    //to edit the post
    console.log(index)
    setIsEdit(true)
    setIndex(index)
  }

  const del = (index) =>{
    //to delete the post
    console.log("Index", index)

    //code to delete
    const tempPost = [...data]
    tempPost.splice(index, 1)
    setPost(tempPost)

    //firebase function
    deleteData()
  }

  const update = () =>{
    const tempPost = [...data]
    console.log(tempPost[editIndex].title)
    tempPost[editIndex].title = title    
    tempPost[editIndex].description = description    
    tempPost[editIndex].price = price
    setPost(tempPost)
    setIsEdit(false)

    //firebase function
    updateData()
  }

  return (
  <div className='grid-container'>
    {data.map((item,index) => {
          return  <div className='item'>
            
            <Post item={item} del={()=>del(index)} edit={()=>edit(item.createdAt)}/>
            {
              isEdit && editIndex === index &&
              <div>
                <p>Edit Title</p>
                <input onChange = {(e) => setTitle(e.target.value)}  placeholder={item.title} ></input><br/>
                <p>Edit Descrpition</p>
                <input onChange = {(e) => setDescription(e.target.value)}  placeholder={item.description} ></input><br/>
                <p>Edit Price</p>
                <input onChange = {(e) => setPrice(e.target.value)}  placeholder={item.price} ></input><br/>

                <button onClick={update}>update</button>
              </div>
            }
            </div>
        })}
  </div>
  )
}

export default AllPosts

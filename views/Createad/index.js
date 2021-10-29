import { useState } from 'react'
import { storeData } from '../../config/firebase'
import "./index.css"

function CreateAd( {setAllPost, user} )  {

  let createdAt = Date(Date.now()).slice(0, 25)

  const [post, setPost] = useState({
    uid: user.uid,
    userName: user.fullName,
    title: "",
    description: "",
    price: "",
    images: [],
    createdAt: createdAt
  })

  const submit = () =>{
    console.log("During storage data from createpost", post.images.length)

    storeData(post)
    setAllPost()
  }

  const onChangeValues = (key, e) =>{
      const value = key  === "images" ? e.target.files : e.target.value
      setPost({ ...post, [key]: value})
      console.log("data from onchange", post)
  }
  
  //back to dashboard
  const back = () =>{
    setAllPost()
  } 

  console.log("data from createpost", post.images.length)

  return <div className='body'>
      <div className='card'>

        <p>TITLE</p>
        <input onChange={e => onChangeValues("title", e)}placeholder="Title" /><br />

        <p>Description</p>
        <input onChange={e => onChangeValues("description", e)}placeholder="Describe the product" type="string"/><br />

        <p>Images</p>
        <input onChange={e => onChangeValues("images", e)} type="file" ></input><br />

        <p>Price</p>
        <input onChange={e => onChangeValues("price", e)}placeholder="Enter an amount" type="number"/><br/>

    <button onClick={submit}>Submit</button><br/>
    <button onClick={back}>Back</button>
    </div>
  </div>
}

export default CreateAd
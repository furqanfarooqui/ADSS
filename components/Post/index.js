
function post ({item},del, edit) {
    console.log("item ====> ", item)
    
    return <div>
        <h2 className="just">Post By {item.userName}</h2>
        <h3 className="just">User Id: {item.uid}</h3>
        <h1 className="just">Product Name: {item.title}</h1>
        <br/>
        <h2 className="just">Descrption: {item.description}</h2>
        
        <img height="100" width="100" src={item.images[0]} ></img>

        <h3 className="just">Price: {item.price}/-</h3>
        
        <button onClick={del}>Delete</button>
        <button onClick={edit}>Edit</button>

        <p>Created At: {item.createdAt}</p>
        
    </div>
}

export default post

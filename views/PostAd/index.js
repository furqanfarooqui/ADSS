export default function PostAd() {

  const submitAd = () => {

  }

  return <div>
    <h2> Ad Post Form </h2>
    <input placeholder="title" />
    <input placeholder="description" />
    <input placeholder="price" />
    <input type="file" multiple />

    <button onClick={submitAd}>Submit Ad</button>
  </div>
}
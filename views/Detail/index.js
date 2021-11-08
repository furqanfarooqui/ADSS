import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleAd } from '../../config/firebase'

export default function Detail() {
  const { adId } = useParams()
  const [ ad, setAd ] = useState({})

  useEffect(async () => {
    const adData = await getSingleAd(adId)
    setAd(adData)
  }, [])

  const { title, images } = ad

  return <div>
    <h2> Detail </h2>
    <h3>{title}</h3>
    {images && images.map(item => {
      return <img width="100" src={item} />
    })}
  </div>
}
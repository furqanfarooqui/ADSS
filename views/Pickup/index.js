import { useEffect } from 'react'
import CustomButton from '../../components/CustomButton'

function Pickup({ changeScreen }) {

  useEffect(() => {
    const onClick = () => {
      console.log('wow')
    }
    document.addEventListener('click', onClick)

    return () => {
      //unmounting work
      document.removeEventListener('click', onClick)
    }
  }, [])


  return (
    <div style={{ background: 'gray', height: 100 }}>
      <h1>Pick Up</h1>

      <CustomButton changeScreen={changeScreen} title='Go to Destination' />
    </div>
  )
}

export default Pickup
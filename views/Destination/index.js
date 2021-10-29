import CustomButton from '../../components/CustomButton'
import './index.css'

function Destination() {
  return (
    <div style={{ background: 'pink', height: 100 }}>
      <h1>Destination</h1>

      <CustomButton title='Go to Payment Method' />
    </div>
  )
}

export default Destination
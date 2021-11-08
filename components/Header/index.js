import { updateTheme } from '../../store/actions/themeAction'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
  const themeColor = useSelector(state => state.theme)
  const dispatch = useDispatch()
  const onColorSelect = (theme) => {
    //action
    //dispatch: to pass the data from action to the reducer
    dispatch(updateTheme(theme))
  }

  return <div style={{ background: 'gray', height: 50 }}>
    <div onClick={() => onColorSelect('red')} style={{ display: 'inline-block', background: 'red', width: 30, height: 30 }}></div>
    <div onClick={() => onColorSelect('green')} style={{ display: 'inline-block', background: 'green', width: 30, height: 30 }}></div>
    <div onClick={() => onColorSelect('blue')} style={{ display: 'inline-block', background: 'blue', width: 30, height: 30 }}></div>
  </div>
}

export default Header
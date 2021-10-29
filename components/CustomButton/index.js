// function CustomButton(props) {
function CustomButton({ bgColor, title, changeScreen }) {
  //Destructuring
  //object ke ander se keys nikal ker unko variable bana dena

  // const { bgColor, title } = props
  return <button
    onClick={changeScreen}
    style={{ background: bgColor || 'blue', color: 'white', width: 100, height: 70 }}>
    {title}
  </button>
}

export default CustomButton

/*
  How to change the state from child to parent:
  1. Create a function in parent that will change the state
  2. Pass that function to the Child component via props
  3. Call that function in the Child component
*/
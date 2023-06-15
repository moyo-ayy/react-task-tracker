import Button from "./Button"

const Header = ({title}) => {
  const onClick = () => {
    console.log('click')
  }

  const onDoubleClick = () => {
    console.log('Double Click')
  }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button onClick={onClick} onDoubleClick={onDoubleClick}/>
    </header>
  )
}

export default Header
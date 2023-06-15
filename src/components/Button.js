const Button = ({onClick,onDoubleClick}) => {
  return (
    <button className="btn" onClick={onClick} onDoubleClick={onDoubleClick}
    >Add</button>
  )
}

export default Button
type Props = {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>{text}</h6>
      </button>

      <div className="btn-icon-container"></div>
    </div>
  )
}

export default Button

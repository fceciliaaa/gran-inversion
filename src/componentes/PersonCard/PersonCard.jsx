
const PersonCard = (props) => {
  return(
    <>
      <h1>{props.lastName} {props.firstName} </h1>
      <p> {props.age} </p>
      <p> {props.hairColor} </p>
    </>
  )
}

export default PersonCard;
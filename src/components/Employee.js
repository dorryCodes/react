function Employee (props){
  return (
    <>
      <h3>Here is employee {props.name}</h3>
      <p>{props.role ? props.role: 'No role'}</p>
    </>
  )
}

export default Employee
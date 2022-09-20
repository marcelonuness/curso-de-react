const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>idade: {age}</p>
        <p>profissão: {job}</p>
        {age >= 18 ? (<p>pode tirar carteira de motorista!</p>) : (<p>não pode tirar carteira de motorista</p>)}
    </div>
  )
}

export default UserDetails
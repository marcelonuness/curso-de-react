const Challenge = () => {
    
    const n1 = 5
    const n2 = 6
    const soma = (x,y) => {
        return x + y
    }

    return (
        <div>
            <h1>o primeiro número é: {n1}</h1>
            <h2>o segundo número é: {n2}</h2>
            <h3>a soma dos numeros é: {soma(n1,n2)}</h3>            
        </div>
    )
}

export default Challenge
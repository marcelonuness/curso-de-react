const TemplateExpressions = () => {
    const name = "Marcelo Henrique"
    const data = {
        age: 20,
        job: "desenvolvimento de software"
    }
    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>
                vi que tem {data.age} de idade e trabalha com {data.job}
            </p>
        </div>
    )
}

export default TemplateExpressions
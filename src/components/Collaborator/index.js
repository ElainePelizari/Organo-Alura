import './Collaborator.css'

const Collaborator = ({ nome, cargo, imagem, colorFundo }) => {
    return (

        <div className="collaborator">
            <div className='cabecalho' style={{ backgroundColor: colorFundo }}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4> {nome} </h4>
                <h5> {cargo} </h5>
            </div>
        </div>
    )
}

export default Collaborator
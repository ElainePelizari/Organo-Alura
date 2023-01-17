import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {

    return (
        <section className="team" style={{ backgroundColor: props.colorSecondary }}>
            <h3 style={{ borderColor: props.colorPrimary}}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map( collaborator => 
                    <Collaborator 
                        key={collaborator.nome}
                        nome={collaborator.nome} 
                        cargo={collaborator.cargo}
                        imagem={collaborator.imagem}
                    ></Collaborator>
                )}
            </div>
        </section>
    )
}

export default Team
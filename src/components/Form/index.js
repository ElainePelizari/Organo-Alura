import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'


const Form = (props) => {

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [team, setTeam] = useState('')
    
    const save = (event) => {
        event.preventDefault()
        props.addNewCollaborator({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            team: team

        })
    }

    return (
        <section className="form">
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <TextField
                    label="Nome"
                    placeholder="Digite seu nome"
                    required={true}
                    value={nome}
                    changeValue={value => setNome(value)}
                />
                <TextField 
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    required={true}
                    value={cargo}
                    changeValue={value => setCargo(value)}
                />
                <TextField 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    changeValue={value => setImagem(value)}
                />
                <DropdownList 
                    label="Time" 
                    itens={teams}
                    required={true}
                    value={team}
                    changeValue={value => setTeam(value)}
                ></DropdownList>
                <Button>Criar card</Button>
            </form>
        </section>
    )

}

export default Form
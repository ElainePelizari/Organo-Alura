import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    const save = (event) => {
        event.preventDefault()
        props.addNewCollaborator({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
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
                    itens={props.teams}
                    required={true}
                    value={time}
                    changeValue={value => setTime(value)}
                ></DropdownList>
                <Button>Criar card</Button>
            </form>
        </section>
    )

}

export default Form
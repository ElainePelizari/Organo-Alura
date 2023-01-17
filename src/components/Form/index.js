import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'

const teams = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
]

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropdownList label="Time" itens={teams}></DropdownList>
                <Button>Criar card</Button>
            </form>
        </section>
    )

}

export default Form
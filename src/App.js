import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

    const teams = [
      {
        name: 'Programação',
        colorPrimary: '#57C278',
        colorSecondary: '#D9F7E9',
      },
      {
          name: 'Front-End',
          colorPrimary: '#82CFFA',
          colorSecondary: '#E8F8FF',
      },
      {
          name: 'Data Sciense',
          colorPrimary: '#A6D157',
          colorSecondary: '#F0F8E2',
      },
      {
          name: 'Devops',
          colorPrimary: '#E06B69',
          colorSecondary: '#FDE7E8',
      },
      {
          name: 'UX e Design',
          colorPrimary: '#D86EBF',
          colorSecondary: '#FAE9F5',
      },
      {
          name: 'Mobile',
          colorPrimary: '#FEBA05',
          colorSecondary: '#FFF5D9',
      },
      {
          name: 'Inovação e Gestão',
          colorPrimary: '#FF8A29',
          colorSecondary: '#FFEEDF',
      }
  ]

  const [collaborators, setCollaborators] = useState([])

  const addNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Form
        teams={teams.map(team => team.name)}
        addNewCollaborator={collaborator => addNewCollaborator(collaborator)}
      ></Form>

      {teams.map(team => <Team 
          key={team.name} 
          name={team.name} 
          colorPrimary={team.colorPrimary} 
          colorSecondary={team.colorSecondary}
          collaborators={collaborators.filter(collaborator => collaborator.time === team.name)}
        ></Team>)}
    </div>
  );
}

export default App;

import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [collaborators, setCollaborators] = useState([])

  const addNewCollaborator = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Form
        addNewCollaborator={collaborator => addNewCollaborator(collaborator)}
      ></Form>
    </div>
  );
}

export default App;

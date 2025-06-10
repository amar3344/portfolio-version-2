import './App.css';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';

const myDetails = {
  "basic_info": {
    "name": "Amar Kumar Reddy",
      "titles": ["Front-end Developer", "Dev Team lead", "Mobile App Developer", "Web App Developer", "MERN Stack Developer"]
  },
}

function App() {
  return (
    <BrowserRouter>
      <Header sharedData={myDetails.basic_info} />
    </BrowserRouter>
  );
}

export default App;

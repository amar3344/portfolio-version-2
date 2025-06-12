import './App.css';
import Header from './components/header/Header';
import About from "./components/about/About";
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

const myDetails = {
  "basic_info": {
    "name": "Amar Kumar Reddy",
      "titles": ["Front-end Developer", "Dev Team lead", "Mobile App Developer", "Web App Developer", "MERN Stack Developer"]
  },
}

const resumeData = {
    "basic_info": {
      "description_header": "Hi",
      "description": "👋 I'm Amar kumar Reddy. Fictional person for preview purposes :) I'm working with newest front-end frameworks like ReactNative, React and Node/Express. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜",
      "section_name": {
        "about": "About me",
        "projects": "Projects",
        "skills": "Skills",
        "experience": "Experience"
      }
    },
  }


function App() {
  return (
    <BrowserRouter>
      <Header sharedData={myDetails.basic_info} />
      <About resumeBasicInfo={resumeData.basic_info} />
      <Projects resumeBasicInfo={resumeData.basic_info} />
      <Skills/>
      <Experience />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

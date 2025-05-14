import './App.css';
import { HashRouter as Router, Routes, Route }  from 'react-router-dom';
import { Home } from './Pages/home';
import { Services } from './Pages/services';
import { About } from './Pages/about';
import { Projects } from './Pages/projects';
import { Contact } from './Pages/contact';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Router>
    )
}

export default App


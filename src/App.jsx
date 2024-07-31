import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Contact, Home } from './pages';


function App() {
    return (
        <main>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact/:id" element={<Contact />} />
                </Routes>
            </Router>
        </main>
    );
}

export default App;

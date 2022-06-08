import './App.css';
import Layout from './components/Layout'
import Home from './components/Home'
import Quiz from './components/Quiz'
import PageNotFound from './components/PageNotFound'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

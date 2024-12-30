import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import { useState } from 'react';

function App() {
    const [coinCount, setCoinCount] = useState(0);
    return (
        <>
            <Header coinCount={coinCount} setCoinCount={setCoinCount}></Header>
            <Players coinCount={coinCount} setCoinCount={setCoinCount}></Players>
            <Footer></Footer>
        </>
    );
}

export default App;



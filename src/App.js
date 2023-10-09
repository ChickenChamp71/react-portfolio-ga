import React, { useEffect } from 'react';
import Container from './components/Container';

function App() {

    const makeAPICall = async () => {
        try {
            const response = await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSf1XaEdUL4RVONh9bzPDyq3GoOmiXB1PeoUXlez5gtcMBqt1A/formResponse', {mode:'cors'});
            const data = await response.json();
            console.log({ data });
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        makeAPICall();
    }, []);

    return (<Container />)
}

export default App;
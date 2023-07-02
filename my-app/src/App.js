import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Container from './Container';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <Sidebar />
                <Container />
            </div>
        </div>
    );
};

export default App;
import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className = "App_header">
                <h1>Talech Task</h1>
            </header>
            <div>
                <Product_Fields />
            </div>
        </div>
    );
}

export default App;

class Product_Fields extends React.Component {
    render() {
        return (
            <div>
                <table className="App_table">
                    <tr>
                        <th>Name</th>
                        <th>EAN</th>
                        <th>Type</th>
                        <th>Wight(g)</th>
                        <th>Color</th>
                        <th>Active</th>
                    </tr>
                </table>
            </div>
            
        );
    }
}
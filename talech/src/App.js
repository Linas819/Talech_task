import React from 'react';
import './App.css';

function App()
{
    return (
        <div className="App">
            <header className = "App_header">
                <h1>Talech Task</h1>
            </header>
            <div>
                <Table />
            </div>
        </div>
    );
}

export default App;

class Table extends React.Component {
    render()
    {
        return (
            <div>
                <table className="App_table">
                    <tr>
                        <th>Name</th>
                        <th>EAN</th>
                        <th>Type</th>
                        <th>Weight (g)</th>
                        <th>Color</th>
                        <th>Active</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Sugar</th>
                        <th>555</th>
                        <th>Sweet</th>
                        <th>100</th>
                        <th>White</th>
                        <th> <CheckBox /> </th>
                        <th> <Button_view /> <Button_edit /> <Button_delete /></th>
                    </tr>
                </table>
            </div>
        );
    }
}
class Button_view extends React.Component {
    render() {
        return (
            <input type="button" value="VIEW" />
        );
    }
}
class Button_edit extends React.Component {
    render() {
        return (
            <input type="button" value="EDIT" />
        );
    }
}
class Button_delete extends React.Component
{
    render()
    {
        return (
            <input type="button" value="DELETE"/> 
        );
    }
}

class CheckBox extends React.Component 
{
    render() 
    {
        return (
            <input name="Active" type="checkbox" />
        );
    }
}
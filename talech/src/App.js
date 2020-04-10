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
                        <Item name="Sugar" ean="555" type="Sweet" weight="100" color="white"/>
                    </tr>
                </table>
            </div>
        );
    }
}
class Item extends React.Component {
    render() {
        return [
            <th>{this.props.name}</th>,
            <th>{this.props.ean}</th>,
            <th>{this.props.type}</th>,
            <th>{this.props.weight}</th>,
            <th>{this.props.color}</th>,
            <th> <CheckBox /> </th>,
            <th> <Button_view /> <Button_edit /> <Button_delete /></th>
        ]
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
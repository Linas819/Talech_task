import React from 'react';
import './App.css';

function App()
{
    return (
        <div className="App">
            <header>
                <h1>Talech Task</h1>
            </header>
            <body>
                <Table />
            </body>
        </div>
    );
}

export default App;

class Table extends React.Component {
    render()
    {
        return (
            <center>
                <table className="App_table">
                    <tr>
                        <th className="App_table_row">Name</th>
                        <th className="App_table_row">EAN</th>
                        <th className="App_table_row">Type</th>
                        <th className="App_table_row">Weight (g)</th>
                        <th className="App_table_row">Color</th>
                        <th className="App_table_row">Active</th>
                        <th></th>
                    </tr>
                    <Item name="Sugar" ean="555" type="Sweet" weight="100" color="white"/>
                </table>
            </center>
        );
    }
}
class Item extends React.Component {
    render() {
        return (
            <tr>
                <th className="App_table_row">{this.props.name}</th>
                <th className="App_table_row">{this.props.ean}</th>
                <th className="App_table_row">{this.props.type}</th>
                <th className="App_table_row">{this.props.weight}</th>
                <th className="App_table_row">{this.props.color}</th>
                <th className="App_table_row"> <CheckBox /> </th>
                <th className="App_table_row"> <Button_view /> <Button_edit /> <Button_delete /></th>
            </tr>
        );
    }
}
class Button_view extends React.Component {
    render() {
        return (<input type="button" value="VIEW" className="App_button_view"/>);
    }
}
class Button_edit extends React.Component {
    render() {
        return (<input type="button" value="EDIT" className="App_button_edit" />);
    }
}
class Button_delete extends React.Component
{
    render()
    {
        return (<input type="button" value="DELETE" className="App_button_delete" />);
    }
}

class CheckBox extends React.Component 
{
    render() 
    {
        return (<input name="Active" type="checkbox" checked />);
    }
}
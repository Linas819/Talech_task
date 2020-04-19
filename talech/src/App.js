import React from 'react';
import './App.css';

function App()
{
    return (
        <div className="App">
            <header>
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
            <center>
                <table className="App_table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>EAN</th>
                            <th>Type</th>
                            <th>Weight (g)</th>
                            <th>Color</th>
                            <th>Active</th>
                            <th></th>
                        </tr>
                        {GetData()}
                    </tbody>
                </table>
            </center>
        );
    }
}
function GetData() {
    var word = "Sugar 555 Sweet 100 White";
    var sentance = word.split(" ");
    return (
        <Item name={sentance[0]} ean={sentance[1]} type={sentance[2]} weight={sentance[3]} color={sentance[4]} />
    );
}
class Item extends React.Component {
    render() {
        const properties = [this.props.name, this.props.ean, this.props.type, this.props.weight, this.props.color]
        return (
            <tr>
                {
                    properties.map(properties => <th>{properties}</th>)
                }
                <th> <CheckBox /> </th>
                <th><Button_view /><Button_edit /><Button_delete /></th>
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
        return (<input name="Active" type="checkbox" checked/>);
    }
}
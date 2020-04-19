import React from 'react';
import './App.css';
import { object } from 'prop-types';

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
                            <th>Weight (g/l)</th>
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
    var result_Items = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--)
        result_Items.push(localStorage.getItem(keys[i]));
    console.log(result_Items);
    return [
        result_Items.map(result_Items => <Item data={result_Items} />)
    ];
}
class Item extends React.Component {
    render() {
        var word = this.props.data;
        var properties = word.split(" ");
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
        return (<input name="Active" type="checkbox"/>);
    }
}
import React from 'react';
import './App.css';

function App() {

    const names = ["Dimych", "Sveta", "Katya"]

    const liElements = names.map((n, index) => <li key={index}>{n}</li>)


    const users = [{id: 1, name: "Dimych"}, {id: 2, name: "Sveta"}, {id: 3, name: "Katya"}]

    const liElements2 = users.map((u) => <li key={u.id}>{u.id} - {u.name}</li>)

    return (
        <div className="App">
            <ul>
                {liElements}
                {liElements2}
            </ul>
        </div>
    );
}

export default App;

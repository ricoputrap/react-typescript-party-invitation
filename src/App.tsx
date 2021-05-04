import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([{
    name: "Steven",
    url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    age: 20,
    note: "Can't eat ebi."
  }])
  return (
    <div className="App">
      <h1>People Invited to My Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import { Button } from './components/button';
import { StateItem } from './components/state';
import './App.css';

function App() {
  const [states, setStates] = useState([]);
  const [isWaitingForClick, setIsWaitingForClick] = useState(false);
  const [newStateValue, setNewStateValue] = useState(''); 

  const handleNewClick = () => {
    const stateValue = prompt("Please enter the state's value", '');
    if (stateValue) {
      setNewStateValue(stateValue);
      setIsWaitingForClick(true);
    }
  };

  const handleAreaClick = (e) => {
    if (isWaitingForClick) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newStateObject = {
        value: newStateValue,
        x_coord: x - 27.5,
        y_coord: y - 27.5,
        connections: [],
        connectionsValue: [],
        initial: false,
        final: false
      };

      setStates([...states, newStateObject]); // Agregar el nuevo estado a la lista
      setIsWaitingForClick(false); // Desactivar la espera de un nuevo click
    }
  };

  return (
    <>
      <h1>Automaton Drawer</h1>
      <nav>
        <Button className='nav-button clear' clickHandler={() => {}} value='Clear' />
        <Button className='nav-button' clickHandler={handleNewClick} value='New' />
        <Button className='nav-button' clickHandler={() => {}} value='Link' />
        <Button className='nav-button' clickHandler={() => {}} value='Delete' />
        <Button className='nav-button' clickHandler={() => {}} value='Regular expression' />
        <Button className='nav-button' clickHandler={() => {}} value='Transition table' />
        <Button className='nav-button' clickHandler={() => {}} value='Convert to AFD' />
      </nav>
      <div
        id="items-area"
        className="items-area"
        onClick={handleAreaClick}
      >
        {states.map((state, index) => (
          <StateItem
            key={index}
            type="button"
            value={state.value}
            className='state-item'
            x_value={state.x_coord}
            y_value={state.y_coord}
          >
            {console.log(states)}
          </StateItem>
        ))}
      </div>
    </>
  );
}

export default App;

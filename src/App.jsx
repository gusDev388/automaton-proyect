import { useState, useRef } from 'react';
import { Button } from './components/button';
import { StateItem } from './components/state';
import { StatusMenu } from './components/status';
import './App.css';

function App() {
  const [states, setStates] = useState([])
  const [isWaitingForClick, setIsWaitingForClick] = useState(false)
  const [newStateValue, setNewStateValue] = useState('')
  const [newKeyValue, setNewKeyValue] = useState('')
  const [clickedState, setClickedState] = useState({
    value: 'None',
    x_coord: 0,
    y_coord: 0,
    connections: [],
    initial: false,
    final: false, 
  })
  const [draggedState, setDraggedState] = useState(null)
  const [hasInitial, setHasInitial] = useState(false)
  const containerRef = useRef(null)


  const overStateHandler = (e, state) =>{
    setClickedState(state)
  }

  const setAsInitial = (clickedState) =>{
    if (hasInitial == false){
      const updateInitial = states.map((state) =>
        state.key === clickedState.key ? {...state, initial: true} : state
      )
      setStates(updateInitial)
      setHasInitial(true)
      console.log(states)
    }else{
      const updateInitial = states.map((state) => {
        if (state.initial === true){
          return { ...state, initial: false }
        }
        if (state.key === clickedState.key){
          return { ...state, initial: true }
        }
        return state
      })
      setStates(updateInitial)
      setHasInitial(true)
    }  
  }

  const setAsFinal = (clickedState) =>{
    const updateFinal = states.map((state) => {
      if(state.key === clickedState.key){
        if(state.final){
          alert(`Removed status of final to: ${clickedState.value}`)
          return {...state, final: false}
        }
        else{
          return {...state, final: true}
        }
      }
      return state
    })
    setStates(updateFinal)
  }

  const onDragStart = (e, state) => {
    setDraggedState(state)
  }

  const onDragOver = (e) => {
    e.preventDefault()
  }

  const onDrop = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const updatedStates = states.map((state) =>
      state.key === draggedState.key ? { ...state, x_coord: x - 27.5, y_coord: y - 27.5 } : state
    )

    setStates(updatedStates)
    setDraggedState(null)
  }

  const handleNewClick = () => {
    const stateValue = prompt("Please enter the state's value", '')
    let timesRepeatedState = 0
    for (let state of states){
      timesRepeatedState = stateValue == state.value ? timesRepeatedState + 1 : timesRepeatedState
    }
    let repeatedStateFlag = timesRepeatedState >= 1
    console.log(repeatedStateFlag)
    setNewStateValue(stateValue);
    setNewKeyValue(repeatedStateFlag ? `${stateValue}(${timesRepeatedState})` : stateValue)
    setIsWaitingForClick(true);
  }

  const handleAreaClick = (e) => {
    if (isWaitingForClick) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const newStateObject = {
        value: newStateValue,
        x_coord: x - 27.5,
        y_coord: y - 27.5,
        connections: [],
        initial: false,
        final: false, 
        key : newKeyValue
      };

      setStates([...states, newStateObject])
      setIsWaitingForClick(false)
    }
  };

  const clearHandler = () =>{
    setStates([])
    setNewStateValue('')
    setNewKeyValue('')
    setIsWaitingForClick(false)
    setClickedState({
      value: 'None',
      x_coord: 0,
      y_coord: 0,
      connections: [],
      initial: false,
      final: false, 
    })
  }


  return (
    <>
      <h1>Automaton Drawer</h1>
      <nav>
        <Button className='nav-button clear' clickHandler={clearHandler} value='Clear' />
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
        ref = {containerRef}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {states.map((state, index) => (
          <StateItem
            key={index}
            value={state.value}
            id = {state.key}
            className='state-item'
            x_value={state.x_coord}
            y_value={state.y_coord}
            onMouseOver = {(e) => overStateHandler(e, state)}
            onDragStart = {(e) => onDragStart(e,state)}
            draggable
          >
            {console.log(states)}
          </StateItem>
        ))}
      </div>
      <div className='tables-wrapper'>
        <StatusMenu
          clickedState = {clickedState}
          setInitial = {(e) => setAsInitial(clickedState)}
          setFinal = {(e) => setAsFinal(clickedState)}
        >
        </StatusMenu>
      </div>
      <footer>
        asd
      </footer>
    </>
  );
}

export default App;

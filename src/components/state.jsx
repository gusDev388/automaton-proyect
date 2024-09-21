import { useState, useEffect } from "react";

export const StateItem = ({ state, value, id, className, x_value, y_value, onMouseOver, onDragStart}) => {
  const [typeOfState, setTypeOfState] = useState({
    initial: false,
    final: false
  })

  useEffect(() => {
    if (state.initial !== typeOfState.initial || state.final !== typeOfState.final) {
      setTypeOfState(prevState => ({
        ...prevState,
        initial: state.initial,
        final: state.final
      }));
    }
  }, [state.initial, state.final]);

  const borderStyle = typeOfState.final ? 'double' : 'solid';


  return (
    <div
      id = {id}
      className={className}
      onClick={onMouseOver}
      style={{
        position: 'absolute',
        left: `${x_value}px`,
        top: `${y_value}px`,
        width: '65px',
        height: '65px',
        borderRadius: '50%',
        border: `4px ${borderStyle} white`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        cursor: 'grab',
        fontSize: 'large',
        fontWeight: 'bold'
      }}
      draggable
      onDragStart={onDragStart}
    >
      {value}
    </div>
  );
};
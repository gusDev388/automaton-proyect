export const StateItem = ({ value, className, x_value, y_value, onMouseOver, onDragStart}) => {
  return (
    <div
      id = {value}
      className={className}
      // onAuxClick={onMouseOver}
      onClick={onMouseOver}
      style={{
        position: 'absolute',
        left: `${x_value}px`,
        top: `${y_value}px`,
        width: '55px',
        height: '55px',
        borderRadius: '50%',
        border: '2px solid white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}
      draggable
      onDragStart={onDragStart}
    >
      {value}
    </div>
  );
};
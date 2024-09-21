export const StatusMenu = ({clickedState, setInitial, setFinal}) =>{
    let btnSetInitClass = 'btnInitial'
    let buttonMessage = 'Set as'
    if(clickedState.initial){
        btnSetInitClass = 'btnInitial disabled'
    }
    if(clickedState.final){
        buttonMessage = 'Remove'
    }
    return(
        <div className="context-menu">
            <h3>
                Selected State: 
            </h3>
            <div 
                style={{
                    width: '55px',
                    height: '55px',
                    borderRadius: '50%',
                    border: '2px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                }}
            >
                {clickedState.value}
            </div>
            <button className={btnSetInitClass} onClick={setInitial}>
                <img src="src/assets/initial.svg" alt="" className="icon" />
                Set as Initial
            </button>
            <button className="btnFinal" onClick={setFinal}>
                <img src="src/assets/final.svg" alt="" className="icon" />
                {buttonMessage} Final
            </button>
            <h3>
                Connected to: 
            </h3>
            <h3>
                {clickedState.connections}
            </h3>
        </div>
    )
}
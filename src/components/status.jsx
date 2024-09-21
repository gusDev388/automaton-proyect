import { useState } from "react"

export const StatusMenu = ({clickedState, setInitial, setFinal}) =>{
    // let btnSetInitClass = 'btnInitial'
    // let buttonMessage = 'Set as'
    // if(clickedState.initial){
    //     btnSetInitClass = 'btnInitial disabled'
    // }
    // if(clickedState.final){
    //     buttonMessage = 'Remove'
    // }
    const [isInitial, setIsInitial] = useState(clickedState.isInitial)
    const [isFinal, setIsFinal] = useState(clickedState.isInitial)

    let btnSetInitClass = isInitial ? 'btnInitial disabled' : 'btnInitial'
    let buttonMessage = isFinal ? 'Remove' : 'Set as'
    
    const handleSetInitial = () =>{
        setIsInitial(true)
        setInitial()
    }

    const handleSetFinal = () =>{
        setIsFinal(!isFinal)
        setFinal()
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
            <button className={btnSetInitClass} onClick={handleSetInitial}>
                <img src="src/assets/initial.svg" alt="" className="icon" />
                Set as Initial
            </button>
            <button className="btnFinal" onClick={handleSetFinal}>
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
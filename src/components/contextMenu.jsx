export const Menu = ({setAsInitial, setAsFinal, state }) =>{
    return(
        <div className="context-menu">
            <ul>
                <li>
                    {state.value}
                </li>
                <li onClick={setAsInitial}>
                    <img src="src/assets/flag-start.svg" alt="" className="icon"/>
                    <span>Set state as initial</span>
                </li>
                <li onClick={setAsFinal}>
                    <img src="src\assets\flag-finish.svg" alt="" className="icon"/>
                    <span>Set state as final</span>
                </li>
            </ul>
        </div>
    )
}
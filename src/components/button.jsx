export const Button = ({className, clickHandler, value}) =>{
    return (
        <input type="button" value={value} className={className} onClick={clickHandler} />
    )
}
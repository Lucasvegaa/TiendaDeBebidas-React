
export const ItemCount = ({ max, min = 0, counter, setCounter }) => {

    const handlerSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    const handlerRestar = () => {
        counter > min && setCounter(counter - 1)
    }
    return (
        <div>
            <button className="btn btn-outline-primary" onClick={handlerRestar}>-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-primary" onClick={handlerSumar}>+</button>
        </div>
    )
}
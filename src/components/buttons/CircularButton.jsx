import './button.css';

// Going with the styles components approach
export function CircularButton({ color, value, callback }) {
    return (<>
        <button onClick={callback} className={`rounded-circle button-size ${color}-button`}>{value}</button>
    </>);
}
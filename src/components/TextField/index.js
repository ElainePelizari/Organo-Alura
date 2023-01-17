import './TextField.css'

const TextField = (props) => {

    const placeholderModify = `${props.placeholder}...`

    const getValue = (event) => {
        props.changeValue(event.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input 
                value={props.value} 
                onChange={getValue} 
                required={props.required} 
                placeholder={placeholderModify}
            />
        </div>
    )
}

export default TextField
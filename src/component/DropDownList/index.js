import './style.css'

export const DropDownList = ({ options, header, setSelectedValue }) => {
    return (
        <div>
            <h3 style={{ fontWeight: 'bold', fontSize: 18 }}>{header}: </h3>
            <select name="taskClass" id="taskClass" style={{ fontSize: 18 }} onChange={(e)=>setSelectedValue(e.target.value)}>
                <optgroup>
                    {
                        options.map((option, index) => {
                            return <option key={index} className="option-task">
                                {option}
                            </option>
                        })
                    }
                </optgroup>
            </select>
        </div>
    )
}

export default DropDownList;
import React from 'react';

const CheckBox = props => {
    return (
    <div className="checkbox col-sm-4">
        <label>
            <input name={props.name} type="checkbox" onChange={props.onChange} />{props.label}
        </label>        
    </div>
    );
}

export default CheckBox;
import React from 'react';

const TextBox = props => {
    return (        
        <div className="form-group">
            <div className="col-sm-4">
                <label htmlFor={props.name} className="form-label">{props.label}</label>
            </div>
            <div className="col-sm-10">
                <input name={props.name} type="text" className="form-control" placeholder={props.placeholder} onChange={props.onChange}/>
            </div>        
        </div>
    );
}

export default TextBox;
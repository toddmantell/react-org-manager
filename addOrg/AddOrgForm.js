import React from 'react';
import TextBox from '../common/Textbox';
import CheckBox from '../common/CheckBox';

const AddOrgForm = props => {
    return (
        <form>
            <div className="row">
                <TextBox name="orgFullName" label="Enter Org Full Name" placeholder="Fullname" onChange={props.updateOrgState}/>
            </div>
            <div className="row">                
                <TextBox name="orgShortName" label="Enter Org Short Name" placeholder="Shortname" onChange={props.updateOrgState}/>
            </div>
            <div className="row">
                <CheckBox name="isActive" label="Is This Org Active?" onChange={props.updateOrgState}/>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <input type="submit" id="submit" className="btn btn-primary" onClick={props.onSave} />
                </div>
            </div>
        </form>
    );
};

export default AddOrgForm;
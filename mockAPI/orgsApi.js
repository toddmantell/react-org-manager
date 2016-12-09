import delay from './delay';

const orgs = [
        {"orgId": 1, "orgFullName": "Denver1 Health Organization", "orgShortName": "Denver Health", "isActive": true},
        {"orgId": 2, "orgFullName": "Great State Healthsystem", "orgShortName": "Great State", "isActive": false},
        {"orgId": 3, "orgFullName": "State University Of New York Healthsystem", "orgShortName": "SUNY", "isActive": true},
        {"orgId": 4, "orgFullName": "University Of Saskatchewan Healthsystem", "orgShortName": "Saskatchewan", "isActive": true},
        {"orgId": 5, "orgFullName": "University Of Alabama Birmingham", "orgShortName": "Alabama", "isActive": true},
        {"orgId": 6, "orgFullName": "Loyola University Healthsystem", "orgShortName": "Loyola", "isActive": false},
        {"orgId": 7, "orgFullName": "New Haven Health", "orgShortName": "New Haven", "isActive": true},
        {"orgId": 8, "orgFullName": "Barnes Jewish Hospital", "orgShortName": "Barnes", "isActive": false},
        {"orgId": 9, "orgFullName": "University Of California, San Diego", "orgShortName": "UCSD", "isActive": true},
        {"orgId": 10, "orgFullName": "Boston Medical", "orgShortName": "Boston", "isActive": true}        
    ];

class OrgsAPI {
    static getAllOrgs() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {                
                resolve(Object.assign([], orgs));
            }, delay);
        });
    }
    static addOrg(org) {
        const newOrg = Object.assign({}, org); //create fresh copy to avoid manipulating object passed in
        newOrg.orgId = assignId();

        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                orgs.push(newOrg);
                resolve(newOrg);
            }, delay);            
        });        
    }
    static updateOrg(org) {

    }
}

function assignId() {    
    return orgs.length + 1;    
}

export default OrgsAPI;
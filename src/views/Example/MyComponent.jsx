import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
   
    state = {
        arrJobs: [
            { id: "abcjob1", title: "developer", salary: '500' } , 
            { id: "abcjob2", title: "tester", salary: '400' } , 
            { id: "abcjob3", title: "PM", salary: '1000' } , 
        ]
    };
 
    
    //re render
    render() {
        // console.log("calll render :", this.state);
        
        return (
            <>
                <AddComponent/>
                
                <ChildComponent
                    jobs = {this.state.arrJobs}
                />
               
            </>
        );
    }
}
                                
export default MyComponent 
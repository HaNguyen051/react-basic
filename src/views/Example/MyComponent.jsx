import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
   
    state = {
        firstName: "", 
        lastName: "",
        arrJobs: [
            { id: "abcjob1", title: "developer", salary: '500 $' } , 
            { id: "abcjob2", title: "tester", salary: '400 $' } , 
            { id: "abcjob3", title: "PM", salary: '1000 $' } , 
        ]
    };
    handleChangeFirstName = (event) => {
        this.setState({
            firstName : event.target.value
        })
    }
     handleChangeLastName = (event) => {
        this.setState({
            lastName : event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(">>> check data input : "  ,this.state)
    }
    //re render
    render() {
        // console.log("calll render :", this.state);
        
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input
                        type="text"
                        name="firstname" //id-attribute frontend ko can cai nay
                        value={this.state.firstName}
                        onChange={(event) => {this.handleChangeFirstName(event)}}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br/>
                    <input
                        type="text"
                        name="lastname"
                        value={this.state.lastName}
                        onChange={(event) => { this.handleChangeLastName(event) }} /><br /><br />
                    <input type="submit"  onClick={(event) => {this.handleSubmit(event)}} />
                </form>
                <ChildComponent
                    name={this.state.firstName}
                    age={'25'}
                    address={"Ha noi"}
                    jobs = {this.state.arrJobs}
                />
               
            </>
        );
    }
}
                                
export default MyComponent 
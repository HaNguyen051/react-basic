import React from 'react';

class ChildComponent extends React.Component {
   
    state = {
        firstName: "", 
        lastName: "" ,
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
        // let name = this.props.name; 
        // let age = this.props.age; 
        //(Destructuring assigment)cu phap js do thi.props la 1 object do ten bien bang dung ten key
        const  { name, age , address , jobs} = this.props; 
        console.log("check props :", this.props);
        return (
            
            <>
                <div className='job-list'>
                    {
                       jobs.map((item) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
             
                <div>Child Component name: {name} - Tuổi : {age} - Address : {address}</div>
            </>
        );
    }
}
                                
export default ChildComponent
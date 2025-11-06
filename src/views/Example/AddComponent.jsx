
import React from "react"; 


class AddComponent extends React.Component {
    state = { 
        title: "", 
        salary: "",
    };
    handleChangeTitle = (event) => {
        this.setState({
            title : event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary : event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(">>> check data input : ", this.state); 

        if (!this.state.title || !this.state.salary)
        {
            alert("Missing required params"); 
            return; 
        }
        
        this.props.addNewJob(
            {id : Math.floor(Math.random() * 1001) , title: this.state.title , salary : this.state.salary}
        )
        this.setState({
            title: "", 
            salary :""
        })

        }
    render() {
        return (
            <form>
                    <label htmlFor="fname">Job Title:</label><br/>
                    <input
                        type="text"
                        name="title" //id-attribute frontend ko can cai nay
                        value={this.state.title}
                        onChange={(event) => {this.handleChangeTitle(event)}}
                    /><br />
                    <label htmlFor="lname">Salary:</label><br/>
                    <input
                        type="number"
                        name="salary"
                        value={this.state.salary}
                        onChange={(event) => { this.handleChangeSalary(event) }} /><br /><br />
                    <input type="submit"  onClick={(event) => {this.handleSubmit(event)}} />
                </form>
        )
    }

}
export default AddComponent; 
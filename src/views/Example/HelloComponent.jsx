import React from "react";

class HelloComponent extends React.Component {
    /*
     JSX => return a block (1 element html out side)
     React.Fragment help you no need return 1 element 
     Or <> </> : this is shortcut 
     state  : ko cần refesh trang browser tự cập nhật state
     */

    //key:value  => this.obj.key => value || this.obj["key"] => value
    state = {
        name: "Hane",
        address: "Bắc Ninh"
    }

    handleOnChangeName = (name) => {
        this.setState({name : name.target.value})
    }
    
    render() { 
        return (
            <>
                <div>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                </div>
                <div className="first">
                    Hello , my name is {this.state.name}
                </div>
                <div className="second">My Address : { this.state.address}</div>
            </>
        )
    }
}
export default HelloComponent
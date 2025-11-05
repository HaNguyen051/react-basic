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
        name: "",
        address: "Bắc Ninh"
    }

    handleOnChangeName = (event) => {
       
        //nen dung setState ko nen this.state.name = event.target.value (bad code)
        this.setState(
            {   
                //merge voi state(ghi de)
                name: event.target.value, 
                // address : this.state.address
             })
    }
    handleClickButton = () => {
        return alert("em yeu anh"); 
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
                <div className="second">My Address : {this.state.address}</div>
                <div className="third">
                    <button
                        onClick={ ()=> this.handleClickButton()}
                    >
                    Click me
                    </button>
                </div>
            </>
        )
    }
}
export default HelloComponent
import React from 'react';

class ChildComponent extends React.Component {
   state  = {
       showJob: false , 
    }
    handleSetShow = () => {
        this.setState({ showJob: !this.state.showJob }); 
        
    }
    handleSetHide = () => {
        this.setState({showJob : !this.state.showJob })
    }
    //re render
    render() {
        // console.log("calll render :", this.state);
        // let name = this.props.name;
        // let age = this.props.age;
        //(Destructuring assigment)cu phap js do thi.props la 1 object do ten bien bang dung ten key
        const { jobs } = this.props;
        let { showJob } = this.state; 
        let check = showJob === true ? 'showJob = true' : 'showJob = false'
        console.log(">>check condition : " , check)
        console.log("check props :", this.props);
        return (
            <>  
                
                {showJob === false
                    ?
                    <div><button onClick={() => this.handleSetShow()}>Show</button></div>
               
                     :
                    <>  
                        <div className='job-list'>
                            {
                                jobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}$
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleSetHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}


// {/* //arrow function no hook => stateless

// // const ChildComponent = (props) => {
// //     console.log(">>>check child props" , props);
// //    const  {jobs} = props;
// //         return (
// //             <>
// //                 <div className='job-list'>
// //                     {
// //                         jobs.map((item, index) => {
// //                             if (item.salary >= 500)
// //                             {
// //                                 return (
// //                                 <div key={item.id}>
// //                                     {item.title} - {item.salary}$
// //                                 </div>
// //                                 )
// //                             }
                           
// //                         })
// //                     }
// //                 </div>
// //             </>
// //         );
    
// // } */}
                                
export default ChildComponent
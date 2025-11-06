import React from 'react';

// class ChildComponent extends React.Component {
   

//     //re render
//     render() {
//         // console.log("calll render :", this.state);
//         // let name = this.props.name;
//         // let age = this.props.age;
//         //(Destructuring assigment)cu phap js do thi.props la 1 object do ten bien bang dung ten key
//         const  { name, age , address , jobs} = this.props;
//         console.log("check props :", this.props);
//         return (
            
//             <>
//                 <div className='job-list'>
//                     {
//                        jobs.map((item) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
             
//                 <div>Child Component name: {name} - Tuổi : {age} - Address : {address}</div>
//             </>
//         );
//     }
// }

const ChildComponent = (props) => {
    console.log(">>>check child props" , props);
   const  {jobs} = props;
        return (
            <>
                <div className='job-list'>
                    {
                       jobs.map((item , index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        );
    
}
                                
export default ChildComponent
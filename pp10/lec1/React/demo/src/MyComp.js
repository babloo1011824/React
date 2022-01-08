//function based component
// let MyComp=()=>{
//     return (<div>
            
                
//            <h1>This is MyComp</h1>
           
//         <ul>
//             <li>hii this is babloo</li>
//         <ol>
           
//             <li>
//                 this is demo react
//             </li>
//         </ol>

//         </ul>
//         <p>hello world</p>
//         <p>gjygygjuyg</p>

//     </div>
     
//     );
// }


//class based component
import React from "react";


class MyComp extends React.Component {
    state={
        SomeNumber:0,

    };
    render=()=>{
        return(
            <div>
                <button onClick = { ()=>{
                    this.setState({
                        SomeNumber:this.state.SomeNumber+1
                    })
                }}>
                    increment
                </button>
                
            
                <button onClick= { ()=>{
                    this.setState({
                        SomeNumber:this.state.SomeNumber-1
                    })
                }}>decrement</button>
                <h1>{this.state.SomeNumber}</h1>
                
            </div>
        );
    };
}
export default MyComp;



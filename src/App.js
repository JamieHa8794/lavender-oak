import React, {Component} from 'react';

import Nav from './Nav'

class App extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Nav/>
                <hr/>
            </div>
        )
    }
    
}


// const mapStateToProps = (state) =>{
//     return {
//         state
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return{

//     }
// }


// const App = connect(mapStateToProps)(_App);

export default App;
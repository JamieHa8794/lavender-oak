import React from 'react';
import {connect} from 'react-redux'

const Users = ({users}) =>{
    return(
        <div>
            <ul>
                {users.map((user, idx) =>{
                    return(
                        <li key={idx}>
                            {user.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return state
}

// const mapDispatchToProps = () =>{
    
// }

export default connect(mapStateToProps)(Users)
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {faker} from '@faker-js/faker'


const MyProfile = ({users}) =>{
    if(!users){
        return(
        <div>
            Whoops.. no users here
        </div>)
    }
    return(
        <div>
            <ul>
                {users.map(user=>{
                    return(
                        <div>
                            {user.firstName}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }



export default connect(mapStateToProps)(MyProfile)
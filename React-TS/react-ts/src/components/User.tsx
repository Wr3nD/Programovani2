import React from "react"
import "./User.css"

export interface UserInterface {
    name: string;
    age: string;
    job: string;
    deleteUser: ()=> void
  }

const User: React.FC<UserInterface> = ({name,age,job, deleteUser}) => {
    return(
        <div className="card">
            <div className="row">
                <h2>Name: </h2>
                <p>{name}</p>
            </div>
            <hr />
            {age &&(
            <>
            <div className="row">
                <h2>Age: </h2>
                <p>{age}</p>
            </div>
            <hr />
            </>
            )}
            <div className="row">
                <h2>Job: </h2>
                <p>{job}</p>
            </div>
            <button className="deleteBtn" onClick={deleteUser}>Delete User</button>

        </div>
    )
}

export default User
import React, { useState } from 'react';

function LoginForm({Login, error}) {

    const [details, setDetails] = useState({uname: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }


    /*upon loading of the loginform this will show to catch the details of the user*/

    return (
        <form onSubmit={submitHandler}>
            
            <div className="form-inner">
                
                <h1 id="una">WELCOME FANS</h1>
                
                {(error != "") ? ( <div className="error">{error}</div> ) : ""}
               

                <div className="form-group">
                    <label htmlfor="uname">USER NAME:</label>
                    <input type="uname" name="uname" id="uname" onChange={e => setDetails({...details, uname: e.target.value})} value={details.uname}/>
                </div>

                <div className="form-group">
                    <label htmlfor="password">PASSWORD:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>

                <input type="submit" value="LOGIN"/>

                <div>
                    <h4>Created by: Colata, Ronald P.</h4>
                </div>
                
                
            </div>
        </form>
       
    )
}

export default LoginForm
// import { useState } from "react";

// const Login = () => {
//     const [userName, setUserName] = useState("");
//     const [userPassword, setUserPassword] = useState("");

//     const handleSubmit = () => {
//         alert("submit form");
//     }
//     const handleChange = evt => {
//         console.log(evt.target.name);
//         if (evt.target.name == 'username') {
//             setUserName(evt.target.value);
//         }

//         if (evt.target.name == 'password') {
//             setUserPassword(evt.target.value);
//         }
//     }
//     return (
//         <>
//             <form action="" method="post" name="login" onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email: </label>
//                     <input type="text" name="username" value={userName} onChange={(event) => handleChange(event) }/>
//                 </div>
//                 <div>
//                     <label>Password: </label>
//                     <input type="password" name="password" value={userPassword} onChange={(event) => handleChange(event) }/>
//                 </div>

//                 <button>Đăng nhập</button>
//             </form>
//         </>
//     );
// }

// export default Login;

import {useState} from 'react'
const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        alert("submit form");
    }

    const handleChange = (evt) => {
        //console.log(evt.target.value);
        console.log(evt.target.name);
        if (evt.target.name == 'username') {
            setUsername(evt.target.value);
        }

        if (evt.target.name == 'password') {
            setPassword(evt.target.value);
        }
        
    }

    return (
        <>
            <form name="login" method="post" action="" onSubmit={handleSubmit}>
                <div>
                    <label>Username/Email</label>
                    <input type="text" name="username" value={username} onChange={(event) => handleChange(event) } />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(event) => handleChange(event) } />
                </div>

                <button>Login</button>

            </form>
        </>
    );
}

export default Login;
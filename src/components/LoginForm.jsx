import { useState } from "react";
import axios from "axios";

const projectId = "3306d195-bb58-400f-ac88-7d83648f631f"

const LoginForm = () => {
   const [username,setUserName] = useState('')
   const [password,setPassword] = useState('')
   const [error,setError] = useState('')

   const handleSubmit = async(e) => {
    e.preventDefault()

    const authObject = { 'Project-ID' : projectId,'User-Name' : username ,'User-Secret' : password}

   try {
        await axios.get('https://api.chatengine.io/chats', { headers : authObject })

        localStorage.setItem('username', username)
        localStorage.setItem('password', password)

        window.location.reload()
        setError('')

   } catch (error) {
        setError('oops...wrong credentials')
   }
   }

   return (
    <div className="wrapper">
        <div className="form">
            <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required/>
                    <div align='center'>
                        <button type="submit" className="button">
                            <span>
                                Start chatting
                            </span>
                        </button>
                    </div>
                </form> 
            <h1>{error}</h1>          
        </div>
    </div>
   )
}

export default LoginForm
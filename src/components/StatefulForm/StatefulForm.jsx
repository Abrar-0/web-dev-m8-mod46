import { useState } from 'react';

const StatefulForm = () => {
    
    const[email, setEmail] = useState(null);
    const[password, setPassword] = useState(null);
    const[name, setName] = useState(null);
    const[error,setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length<6){
            setError('Password should be longer')
        }
        else{
            setError('')
            console.log(name,email,password)
        }
    }

    const handleEmail = e =>{
        // console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    const handleName = e =>{
        setName(e.target.value)
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleName} type="text" name="name" />
          <br />
          <input onChange={handleEmail} type="email" name="email" id="" />
          <br />
          <input onChange={handlePassword} type='password' name='password' required/>
          <br />
          <input type="submit" value="Submit" />
          {
            error && <p>{error}</p>
          }
        </form>
      </div>
    );
};

export default StatefulForm;

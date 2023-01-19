import React,{useState} from "react";

function SignUp() {
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();

  function handleSubmit(e){
   e.preventDefault();
   localStorage.setItem('name' , name);
   localStorage.setItem('email' , email);
   localStorage.setItem('password' , password);
  }


  return (
    <form className="my-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" placeholder="Name" className="form-control" onChange={(e) => e.target.value == "" ? null : setName(e.target.value)}/>
      </div>
      <div className="form-group">
        <input type="email" placeholder="Email" className="form-control" onChange={(e) => e.target.value == "" ? null : setEmail(e.target.value)}/>
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          onChange={(e) => e.target.value == "" ? null : setPassword(e.target.value)}/>
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Confirm-password"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUp;

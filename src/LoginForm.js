import React from "react";
import ReactDOM from 'react-dom';


class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {game:this.formatter() };
  }

  signup(){
    const name = document.getElementById("name").value;
    const usename = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(name,usename,password);
    fetch("/signup",{ method: "POST", body: JSON.stringify({name,usename,password}),headers:{JSON}}).
      then(res => res.text()).
      then(text => alert(text))
  }

  formatter(){
    const data = (
      <div >
        <input id="name" name="name" placeholder="Name" required/>
				<input id="username" name="username" placeholder="Username" required/>
				<input id="password" type="password" name="password" placeholder="Password" required/>
				<input type="submit" value="Sign Up" onClick={this.signup.bind(this)}/>
      </div>
    );
    return data;
  }

  render(){
    return this.state.game;
  }
}

export default LoginForm;

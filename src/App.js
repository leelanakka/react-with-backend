import React from "react";
import LoginForm from "./LoginForm";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  transfer() {
    const name = document.getElementById("name").value;
    console.log(name);
    fetch("/transfer", { method: "POST", body: name })
      .then(res => res.text())
      .then(text => {
        console.log(text);
        alert(text);
      });
  }
  render() {
    return (
      <div >
        <LoginForm props=" " />
      </div>
    );
  }
}

export default App;

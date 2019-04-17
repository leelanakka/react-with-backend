import React from "react";
import ReactDOM from "react-dom";
import { domainToUnicode } from "url";

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
      <form>
        Name:
        <input id="name" type="text" name="name" />
        <input
          type="submit"
          value="Submit"
          onClick={this.transfer.bind(this)}
        />
      </form>
    );
  }
}

export default App;

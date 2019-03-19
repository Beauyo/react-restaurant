import React, { Component } from 'react';
import MenuForm from "./components/MenuForm";
import MenuList from "./components/MenuList";
import { Container, } from "semantic-ui-react";
import axios from "axios";

class App extends Component {
  state ={ Menus: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        debugger
        this.setState({ menus: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  addItem = (name) => {
   axios.post("/api/menus")
    .then ( res => {
      const { menus, } = this.state;
      this.setState({ menus: [...menus, res.data], })
    })
  }

  updateMenu = (id) => {
    // make api call to update Menu
  }

  deleteMenu = (id) => {
    // make api call to delete Menu
    // remove it from state
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
      <h1>Menu List</h1>
       <MenuForm addItem={this.addItem} />
       <br />
       <br />
       <MenuList
       Menus={this.state.Menus}
       updateMenu={this.updateMenu}
       deleteMenu={this.deleteMenu}
      />
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Main from './components/main';
import Footer from './components/footer';
import HeaderMain from './components/header';
import { Grid, Cell , Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMain/>
        <Grid className="appGrid" >
          <Cell col={12}>
            <Main/>         
          </Cell>
        </Grid>
        <Footer/> 
      </div>
    );
  }
}

export default App;

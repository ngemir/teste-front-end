import React from 'react';
import Busca from './Busca';
// import Resultado from './Resultado';

export default class App extends React.Component{
  render() {
    return(
    <div id="interface">
      <Busca/>
      {/* <Resultado/> */}
    </div>
    );
  }
}

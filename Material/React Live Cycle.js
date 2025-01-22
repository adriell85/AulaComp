// React Live Cycle::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// componentDidMount::::::::::::::::::::::::::::::::::

class Example extends React.Component {
  componentDidMount() {
    console.log('Componente montado!');
  }

  render() {
    return <div>Hello, World!</div>;
  }
}

// é igual á ============================


import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    console.log('Componente montado!');
  }, []); // Array vazio: executa apenas na montagem.

  return <div>Hello, World!</div>;
}



// componentDidUpdate:::::::::::::::::::::::::::::::


class Example extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      console.log('O valor mudou!', this.props.value);
    }
  }

  render() {
    return <div>Valor: {this.props.value}</div>;
  }
}

// é igual á ============================


import React, { useEffect } from 'react';

function Example({ value }) {
  useEffect(() => {
    console.log('O valor mudou!', value);
  }, [value]); // Executa apenas quando `value` mudar.

  return <div>Valor: {value}</div>;
}



// componentWillUnmount:::::::::::::::::::::::::::::



class Example extends React.Component {
  componentWillUnmount() {
    console.log('Componente desmontado!');
  }

  render() {
    return <div>Goodbye, World!</div>;
  }
}

// é igual a========================================

import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    console.log('Componente montado!');
    
    return () => {
      console.log('Componente desmontado!');
    };
  }, []); // Array vazio: limpeza ocorre na desmontagem.

  return <div>Goodbye, World!</div>;
}






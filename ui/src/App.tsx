import React from 'react';
import './App.css';
import styled from 'styled-components';
import Editor from './Editor';
import TopBar from './TopBar';


function App() {
  
  return (
    <Container>
      <TopBar/>
      <Editor/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  `

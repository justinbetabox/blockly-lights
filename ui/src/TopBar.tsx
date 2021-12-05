import styled from 'styled-components';
import Blockly from 'blockly';
import 'blockly/python';
import 'fetch';

function TopBar(){
	function sayhello(){
		let code = (Blockly as any).Python.workspaceToCode(Blockly.getMainWorkspace());
		
    alert(code);
	}
	return (
		<Container>
      		<AppTitle>Blockly Lights</AppTitle>
          		<Controls>
                <form onSubmit={sayhello}>
                  <label>Your Name:</label>
                  <input type="text"/>
                  <RunButton type="submit">Submit!</RunButton>
                </form>
            		
          		</Controls>
    	</Container>
	);
}

export default TopBar;

const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1rem;
  background-color: black;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 28px;
  margin: 0;
`;


const Controls = styled.div`
  margin-left: 2rem;
`;

const RunButton = styled.button`
  display: block;
  background-color: black;
  color: white;
  border: 1px solid white;
  font-size: 14px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover, &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
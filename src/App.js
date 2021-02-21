import logo from './logo.svg';
import styled from "styled-components";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button style={{backgroundColor: "red"}}>Click Me!</Button>
        <Button>Click Me!</Button>
        <Button style={{backgroundColor: "blue"}}>Click Me!</Button> */}

        <Button type = "danger">Click Me!</Button>
        <Button type = "primary">Click Me!</Button>
        <Button>Click Me!</Button>
        <StyledButton>Click Me Too!</StyledButton>
        <DangerButton>Warning!</DangerButton>

      </header>
    </div>
  );
}

const StyledButton = styled.button`
  --normal-background: green;
  --hover-background: darkgreen;
  --active-background: lightgreen;
  font-size: 20px;
  color: white;
  background-color: var(--normal-background);
  border: none;
  border-radius: ${props => props.borderRadius || 5}px;
  padding: 10px;
  outline: none;
  margin: 10px;

  &:hover {
    background-color: var(--hover-background);
  }
  
  &:active {
    background-color: var(--active-background);
  }
`;

const DangerButton = styled(StyledButton)`
  --normal-background: red;
  --hover-background: darkred;
  --active-background: pink;
`;

// const defaultButtonStyle = {
//   fontSize: 20,
//   color: "white",
//   backgroundColor: "green",
//   border: "none",
//   borderRadius: 5,
//   padding: 10,
//   outline: "none",
//   margin: 10,
// };

function Button(props) {
  // const buttonStyle = {...defaultButtonStyle, ...props.style};
  const buttonStyle = {};

  if(props.type === "primary") {
    buttonStyle["--normal-background"] = "blue";
    buttonStyle["--hover-background"] = "darkblue";
    buttonStyle["--active-background"] = "lightblue";
  } else if (props.type === "danger") {
    buttonStyle["--normal-background"] = "red";
    buttonStyle["--hover-background"] = "darkred";
    buttonStyle["--active-background"] = "pink";
  }
  buttonStyle["--border-radius"] = "20px";

  return <StyledButton borderRadius = "30" style={buttonStyle}>{props.children}</StyledButton>
}

export default App;

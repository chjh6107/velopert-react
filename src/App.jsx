import Hello from './components/Hello'

function App() {
  const name='react';
  const style={
    backgroundColor:'black',
    color:'aqua',
    fontSize:24,
    display:'flex'
  };
  return (
    <Hello name="react"/>
  )
}

export default App;

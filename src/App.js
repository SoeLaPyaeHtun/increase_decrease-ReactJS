import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const forClick = {
    'cursor': 'pointer',
    
  }
  console.log(count)

  return (
   <>
   <div style={
    {
      'width': '100%',
      'height': '100%',
     
      'margin': 'auto',
      'padding': '10px',
      'position': 'relative'
      
    }
   }>
      <div onClick={ () => setCount(count - 1) } style={ {
        'width': '50%',
        'height': '100%',
        'background': 'red',
        'float': 'left',
        'cursor': 'pointer',
        'color': "white",
        "textAlign":'center',
        'fontSize': '300px'
       
      } }>{count}</div>
       {/* <h1 style={
        {
          
        }
       }>{ count }</h1> */}
      <div onClick={ () => setCount(count + 1) } style={ {
        'margin-left': '50%',
        'height': '100%',
        'background': 'black',
        'cursor': 'pointer',
        'color': 'white',
        'textAlign':'center',
        'fontSize': '300px'
      } } >{count}</div>
      </div>
   </>
  );
}

export default App;

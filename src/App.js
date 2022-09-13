import { useState } from 'react';
import './App.css';
import Users from './Users/Users';

function App() {
  const [isLoading,setIsLoading] = useState(true) 



  return (
    <div className="App">
      <header className="App-header">
        <Users />
      </header>
    </div>
  );
}

export default App;

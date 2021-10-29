import { useState } from 'react' //hooks (built in functions)
import Auth from './views/Auth';
import Dashboard from './views/Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState("")

  const updateUser = (objUser) => {
    setUser(objUser)
  }

  return (
    <div className="App">
      <header className="">
        { user ?
          <Dashboard user={user}/>
          :
          <Auth updateUser={updateUser}/>
        }        
      </header>
    </div>
  );
}

export default App;

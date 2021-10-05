
import './App.css';
import Nav from './components/Nav'
import Home from './screens/Home/Home'
import EditPost from './screens/EditPost/EditPost'
import CreatePost from './screens/CreatePost';
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/editpost/:id'>
        <EditPost />
      </Route>

      <Route path='/createpost'>
        <CreatePost />
      </Route>

    </div>
  );
}

export default App;

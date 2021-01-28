import './App.css';
import { AddToDo } from './components/AddToDo';
import { ListToDo } from './components/ListToDo';

function App() {
  return (
    <div className="App">
     <AddToDo></AddToDo>
     <ListToDo></ListToDo>
    </div>
  );
}

export default App;

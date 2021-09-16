//import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <h1>TODO LIST</h1>
      <TaskList name='Todo List #1' tasks={['buy the milk', 'call mum', 'do react stuff']}/>
      <TaskList name='Todo List #2' tasks={['AWI Project', 'finish coding']}/>
      <TaskList name='Todo List #3' tasks={['Web Project', 'Another thing to do']}/>
  </div>, document.getElementById('content')
  );
}

export default App;

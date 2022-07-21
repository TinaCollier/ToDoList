

function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Meet at 9:00a.m. with Nancy',
      isCompleted: false,
    },
    {
      text: 'Team planning at 10:00a.m.',
      isCompleted: false,
    },
    {
      text: 'Lunch with Steve',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="main">
      <Day />
      <div className="app">

        <div className="todo-list" >
          {todos.map((todo, i) => (
            <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

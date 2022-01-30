import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList/TodoList'
import { makeStyles } from '@mui/styles'
import { Typography } from "@mui/material"

const useStyles = makeStyles({
  app_title: {
    textAlign: 'center',
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" className={classes.app_title}>Todo Stream</Typography>
        <hr />
        <TodoList />
      </header>
    </div>
  );
}

export default App;

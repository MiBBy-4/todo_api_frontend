import React, {Component} from "react"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { Grid } from "@mui/material"

class TodoForm extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      api_url: props.api_url,
      task: "",

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTaskChange = this.handleTaskChange.bind(this)
  }

  handleSubmit(event)
  {
    event.preventDefault()
    this.formSubmit(event.target)
  }

  async formSubmit(formData)
  {
    var data = new FormData(formData)
    await fetch(this.state.api_url, {
      method: 'POST',
      mode: 'cors',
      body: data
    }).then(response => response.json())
    .then(response => this.props.updateTodoList(response))
  }

  handleTaskChange(event)
  {
    this.setState({
      task: event.target.value
    })
  }

  render()
  {
    return(
      <Grid container>
        <Grid xs></Grid>
        <Grid xs={10}>
          <form onSubmit={this.handleSubmit} id='todo_form' autoComplete='off'> 
            <Grid container>
              <Grid xs={10}>
                <TextField id='task_input' label='Your task' variant='outlined' type='text' name='todo[task]' onChange={this.handleTaskChange} fullWidth/>
              </Grid>
              <Grid xs={2}>
                <Button variant='contained' color='primary' type='submit' style={{height: "100%"}}> Add task </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid xs></Grid>
      </Grid>
    )
  }
}

export default TodoForm;
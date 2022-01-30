import React, {Component} from "react"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { Grid } from "@mui/material"
import { TextareaAutosize } from "@mui/material"

class TodoForm extends Component
{
  constructor(props)
  {
    super(props)
    let defaultTask = ""
    let defaultBody = ""
    this.state = {
      api_url: props.api_url,
      task: '',
      body: '',
      defaultTaskValue: defaultTask,
      defaultBodyValue: defaultBody,

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTaskChange = this.handleTaskChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
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
    this.setState({
      task: this.state.defaultTaskValue,
      body: this.state.defaultBodyValue
    })
  }

  handleTaskChange(event)
  {
    this.setState({
      task: event.target.value
    })
  }

  handleBodyChange(event)
  {
    this.setState({
      body: event.target.value
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
              <Grid item xs={12}>
                <TextField id='task_input' label='Your task' variant='outlined' type='text' name='todo[task]' onChange={this.handleTaskChange} fullWidth value={this.state.task}/>
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize id='body_input' label='Task body' variant='outlined' type='text' name='todo[body]' style={{ width: '99.5%', marginTop: '5px' }} minRows={3} placeholder='Describe your todo item.' value={this.state.body} onChange={this.handleBodyChange}/>
              </Grid>
              <Grid item xs={2}>
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
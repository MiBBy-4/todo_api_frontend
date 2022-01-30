import React, {Component} from "react"
import { Grid, Typography } from "@mui/material"
import Paper from "@mui/material/Paper"
import { makeStyles } from '@mui/styles'
import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { textAlign } from "@mui/system"

const useStyles = makeStyles({
  root: {
    height: 'auto',
    padding: '2em',
    margin: '1em'
  },
  paper: {
    margin: '1em',
    padding: '2em',
    textAlign: 'justify'
  },
  heading: {
    textAlign: 'center',

  },
  todo_body:{
    padding: '1em',
  },
  divider:{
    width: '25%',
    margin: '1em'
  }
})

export default function TodoItem(props) {
  const classes = useStyles()
  function handleDelete()
  {
    props.deleteItem(props.item)
  }
  return(
    <Grid container spacing={0}>
      <Grid item xs={1}></Grid> 
      <Grid item xs={10}>
        <Paper elevation={10} className = {classes.paper}>
          <Typography variant='h4' className={classes.heading}>
            {props.item.task}
          </Typography>
          <hr className={classes.divider} style={{ marginLeft: '37.5%' }}/>
          <div className={classes.todo_body} >
            <Typography variant='body1'>
              {props.item.body}
            </Typography>
          </div>
          <hr className={classes.divider} style={{ marginLeft: '37.5%' }}/>
          <Button variant="contained" color="secondary" size="small" startIcon={<DeleteIcon />} onClick={handleDelete}> Delete task </Button>
        </Paper>
      </Grid>
    </Grid>
  )
}
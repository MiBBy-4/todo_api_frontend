import React, {Component} from "react"
import { Grid } from "@mui/material"
import Paper from "@mui/material/Paper"
import { makeStyles } from '@mui/styles'
import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles({
  root: {
    height: '3em',
    padding: '2em',
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
      <Grid item xs={9}>
        <Paper elevation={3} className = {classes.root}>
          {props.item.task}
          <hr />
          <Button variant="contained" color="secondary" size="small" startIcon={<DeleteIcon />} onClick={handleDelete}> Delete task </Button>
        </Paper>
      </Grid>
    </Grid>
  )
}
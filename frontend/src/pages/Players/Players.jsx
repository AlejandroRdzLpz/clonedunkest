import React, {useContext, useEffect, useState} from 'react';
import decode from 'jwt-decode'
import Avatar from '@material-ui/core/Avatar';
import {Grid, Button, Paper, Typography, TextField} from '@material-ui/core'
import Add from '@material-ui/icons/Add';
import { Row, Item, Column } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { AuthContext } from '../../context/AuthContext.js'
import {ball} from '../../api/api'

export const Players = () => {
  const { isAuth } = useContext(AuthContext)

  const [playerList, setPlayerList] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
      ball.players(search)
      .then(data => {
      setPlayerList(data.data.data)
    })
  }, [search])

  

  return (
    <Grid container style={{marginTop: '10px'}} >
      <Grid item xs={1} sm={3} />
      <Grid item container xs={10} sm={6} >
        <Paper style={{width: '100%', borderRadius: '12%'}}>
          <TextField
            id="outlined-full-width"
            label="Player search..."
            style={{ margin: 8 }}
            placeholder="Search your Player!"
            helperText="Type the first name of your favourite player"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(e) => setSearch(e.target.value)}
          />
          {playerList.map(player => {
            return (
              <Typography>{player.first_name}</Typography>
            )
          } )}
        </Paper>
      </Grid>
      <Grid item xs={1} sm={3} />
    </Grid>
  )
};
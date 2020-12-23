import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { AccountCircleRounded, LockRounded } from "@material-ui/icons/";
import { Grid, Button, Card } from "@material-ui/core";
import { Link, Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'
import { auth } from '../../api/api.js'
import './Login.css'


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
	},
}));

export default function Login() {
	const { logIn, isAuth } = useContext(AuthContext)
  const [ email, setEmail ] = useState('')
  const [password, setPassword] = useState('')
	const [error, setError] = useState(null)
	
	const handleForm = async (e) => {
    try {
      e.preventDefault()
      const body = { email, password }
      const response = await auth.login(body)
      const token = response.data.payload
      logIn(token)
    } catch (error) {
      setError(error.response.data.error)
      setTimeout(() => {
        setError(null)
      }, 15000)
    }
  }

  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <Input
              id="email"
              name="email"
							onChange={(e) => setEmail(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircleRounded />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              type="password"
							onChange={(e) => setPassword(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <LockRounded />
                </InputAdornment>
              }
            />
            <Button
              position="start"
              style={{ backgroundColor: "#f27900", margin: "30px 0px" }}
							onClick={handleForm}
            >
              Log In!
            </Button>
					<Card className={classes.margin} style={{ textAlign: 'center', margin: '3% 0', padding: '2%', display: 'flex', flexDirection: 'row', justifyContent: 'center', fontFamily: 'Roboto, sans-serif' }}>
              Dont have an account? <Link to="/signup" style={{ marginLeft: '2%' }}> Sign up </Link>
          </Card>
          {
            error &&
            	<Card className={classes.margin} style={{ textAlign: 'center', margin: '5% 0', padding: '5%', color: 'red' }}>
                { error }
              </Card>
          }
					</FormControl>
        </Grid>
      </Grid>
			{ isAuth && <Redirect to="/" /> }
    </div>
  );
}

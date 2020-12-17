import 'date-fns';
import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {Grid, Button, Card} from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Link, Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'
import { auth } from '../../api/api.js'
import './Signup.css'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Signup() {
  const { isAuth } = useContext(AuthContext)
  const [ email, setEmail ] = useState('')
  const [password, setPassword] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
	const [error, setError] = useState(null)
  const [birth_date, setBirthDate] = useState(new Date('2014-08-18T21:11:54'));
  const history = useHistory()

  const handleForm = async (e) => {
    try {
      e.preventDefault()
      const body = { email, password, first_name, last_name, birth_date }
      const response = await auth.signup(body)
      if(response) history.push('/user')
      
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
  			style={{ minHeight: '90vh' }}
			>
  			<Grid item xs={10} sm={2} >
					<FormControl className={classes.margin}>
						<InputLabel htmlFor="first_name">First Name</InputLabel>
						<Input
							id="first_name" name="first_name" required onChange={(e) => setFirstName(e.target.value)}
						/>
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="last_name">Last Name</InputLabel>
						<Input
							id="last_name" name="last_name" required onChange={(e) => setLastName(e.target.value)}
						/>
					</FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.margin}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="birth_date"
              name="birth_date"
              label="Birth Date"
              value={birth_date}
              onChange={(e) => setBirthDate(e.target.value)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="email">E-mail</InputLabel>
						<Input
							id="email" name="email" required type="email" onChange={(e) => setEmail(e.target.value)}
						/>
					</FormControl>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="password">Password</InputLabel>
						<Input
							id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleForm} style={{backgroundColor: '#f27900', margin: '30px 0px'}}>Sign Up!</Button>
            <Card className={classes.margin} style={{ textAlign: 'center', margin: '3% 0', padding: '2%', display: 'flex', flexDirection: 'row', justifyContent: 'center', fontFamily: 'Roboto, sans-serif' }}>
              Have an account? <Link to="/login" style={{ marginLeft: '2%' }}>Log In</Link>
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
      { isAuth && <Redirect to="/user" /> }
		</div>
  );
}
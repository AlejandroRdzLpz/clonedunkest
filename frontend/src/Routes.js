  import {
    Switch,
    Route
  } from 'react-router-dom'
  
  import {
    Login,
    Signup,
		User,
		NotFound
  } from './pages/index.js'
  
  
  const Routes = () => (
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/user" component={User}/>
        <Route component={NotFound}/>
      </Switch>
  )
  
  export default Routes
import {
  PrivateRoute
} from './components/PrivateRoute'
  
  import {
    Switch,
    Route
  } from 'react-router-dom'
  
  import {
    Login,
    Signup,
    User,
    Players,
		NotFound
  } from './pages/index.js'
  
  
  const Routes = () => (
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/players" component={Players}/>
        <PrivateRoute exact path="/" component={User}/>
        <PrivateRoute exact path="/:id" component={User}/>
        <Route component={NotFound}/>
      </Switch>
  )
  
  export default Routes
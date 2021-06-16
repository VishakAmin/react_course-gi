import { Fragment, Component } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css'

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
  constructor(){
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: ""
    }
  }
  componentDidUpdate(prevProps, prevState ){

    if(prevState.searchTerm !== this.state.searchTerm)
    {
      this.setState({
      filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)) 
    })
    }
  }
  searchChangeHandler(event) {
      this.setState({searchTerm: event.target.value})
  }


  render(){
    return (
      <Fragment>
        <input type='search' className={classes.finder} onChange={this.searchChangeHandler.bind(this)} />
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );    
  }
}


export default UserFinder;
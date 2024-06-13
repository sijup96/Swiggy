import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
componentDidUpdate(){}
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <UserContext.Consumer>
          {({loggedUser})=><h2 className="text-xl font-bold">{loggedUser}</h2>}
        </UserContext.Consumer>
        <img src={avatar_url}></img>
        <h2>Name:{name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}
export default UserClass;

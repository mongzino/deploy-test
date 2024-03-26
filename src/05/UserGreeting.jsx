import "./userGreeting.css";
import PropTypes from "prop-types";

export default function UserGreeting(props) {
  const userMessage = (
    <h2 className="userMessage">welcome {props.username}님</h2>
  );
  const guestMessage = <h2 className="guestMessage"> you have to login</h2>;

  return (props.isLoggedIn && userMessage) || guestMessage;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

import React from "react"
import { useNavigate } from "react-router-dom";
type props = {
  loggedIn: boolean
  username: string
  setLoggedIn: (arg: boolean) => void
}
const Home = (props: props) => {
  const { loggedIn, username, setLoggedIn } = props
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (loggedIn) {
      localStorage.removeItem("user")
      setLoggedIn(false)
    } else {
      navigate("/login")
    }
  }

  return <div className="mainContainer">
    <div className={"titleContainer"}>
      <div>Welcome!</div>
    </div>
    <div>
      This is the home page.
    </div>
    <div className={"buttonContainer"}>
      <input
        className={"inputButton"}
        type="button"
        onClick={onButtonClick}
        value={loggedIn ? "Log out" : "Log in"} />
      {(loggedIn ? <div>
        Your username address is {username}
      </div> : <div />)}
    </div>
  </div>
}

export default Home
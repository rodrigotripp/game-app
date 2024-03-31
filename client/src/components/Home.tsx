import React from "react"
import Grid from './Grid';

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
      <div className="text-3xl font-bold text-orange-800 underline">Welcome!</div>
    </div>
    <div>
      <Grid/>
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
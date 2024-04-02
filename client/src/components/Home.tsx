import Grid from './Grid';
import { useNavigate } from "react-router-dom";
import Nav from './Nav';

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

  return (
    <div className="mainContainer">
      <Nav onButtonClick={onButtonClick} username={username} loggedIn={loggedIn}></Nav>
      { loggedIn ? <Grid/> : '' }
    </div>
  )
}

export default Home
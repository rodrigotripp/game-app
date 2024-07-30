import Grid from './Grid';
import { useNavigate } from "react-router-dom";
import Nav from './Nav';
import { useEffect, useState } from 'react';
import { dataType } from '../types';
import withLoading from '../hoc/withLoader';

type props = {
  loggedIn: boolean
  username: string
  setLoggedIn: (arg: boolean) => void
}
const Home = (props: props) => {
  const { loggedIn, username, setLoggedIn } = props;
  const [data, setData] = useState<dataType>({
    games: [],
    providers: [],
    groups: []
  });
  const [isLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3080/all")
      .then(r => r.json())
      .then(r => {
        setData(r);
      });
  },[isLoading]);

  const onButtonClick = () => {
    if (loggedIn) {
      localStorage.removeItem("user")
      setLoggedIn(false)
    } else {
      navigate("/login")
    }
  }

  const GridWithLoading = withLoading(Grid) 

  return (
    <div className="mainContainer">
      <Nav onButtonClick={onButtonClick} username={username} loggedIn={loggedIn}></Nav>
      { loggedIn ? <GridWithLoading isLoading={isLoading} {...data}/> : '' }
    </div>
  )
}

export default Home
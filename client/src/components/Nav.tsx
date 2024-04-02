import './../styles/nav.css';

type props = {
  username: string
  onButtonClick: () => void
  loggedIn: boolean
}
const Nav = ({
  username,
  onButtonClick,
  loggedIn
}: props) => {
  return (
    <nav>
      <div className={"titleContainer"}>
        {loggedIn ? 'Welcome!' : ''}
      </div>
      <div>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? "Log out" : "Log in"} />
        {(
          loggedIn ?
            <div>
              <h2><span>{username}</span></h2>
            </div>
            : ''
        )}
      </div>
    </nav>
  )
}

export default Nav;
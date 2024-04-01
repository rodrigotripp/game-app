
## Available Scripts for # Finnplay test task for front-end developer
In the project directory, you can run:

### `npm run install-all`
### `npm run start`

### 
- username:`player1` password:`player1`
- username:`player2` password:`player2`

# Finnplay test task for front-end developer

## Task
You need to develop an application that allows users to filter games by multiple criteria.

## Description
The application consists of a server and a client parts. The server implements an API to communicate with the client (authenticate users, transfer data, ...).
A user should log in as `player` they will see an interface with a list of games and a game filter.

## Pages
#### Login
Two users are allowed:
- `player1:player1`
- `player2:player2`

#### Player view
The page displays the list of games and the game filter. If a filter is configured, only games that match the filter criteria should be displayed, otherwise all games should be displayed. `Games that don't belong to any group shouldn't be displayed at all, even if the filter is not configured`

##### Possible actions
1. Set filter
2. Set sorting
3. Set number of columns in the game list (hidden on mobile, always 2 columns)
4. Reset filter

##### Filter criteria
- the name of a game (input field)
- game provider (multiple checkbox)
- game groups (multiple checkbox)

## Requirements
1. Client-side should be written using React. You can use any starter kit if you want, like [Create React App](https://create-react-app.dev/) or [Vite](https://vitejs.dev/)
2. You can use CSS or SCSS for styles
3. Interface should be responsive. Mobile breakpoint is `428px`
4. Filtration should be implemented on the client
5. Please, do not use any UI libraries for React, except [react-select](https://react-select.com/)
6. Server-side should be written on Node.js using any framework you like.
7. User sessions should be stored on the server (in memory)
9. No database is required. Keep all data in memory
10. Using TypeScript will be considered a plus
11. Post your code to github or bitbucket. Add readme how to run the application


**Initial data is in `data.json` file**
**Link to the design `https://www.figma.com/file/totoTYpycpBnizdqV7nEUu/gamelist_2?node-id=0%3A1`**

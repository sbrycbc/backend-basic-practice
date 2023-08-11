This project will allow you to practice setting up a server that will handle simple requests in Express.js.

## What you will be doing

You will be setting up a server with four **endpoints** using the Express.js framework.

The endpoints will only respond to **GET** requests, and send a **string** as a response.

## Tasks

### Task 1 - Getting ready

1. Install the express.js npm package `npm i express`
2. Create the file `server.js`

### Task 2 - Setting up your server

Use the following code to setup your server

```js
import express from "express";

const app = express();

const server = app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});
```

### Task 3 - GET '/hello'

Create an endpoint that will respond to the path `/hello`

- It should send a **response** with a string. Use the following string;

```text
Hello to you too!
```

### Task 4 - GET '/time'

Create an endpoint that will respond to the path `/time`.

- It should return a `response` with the current time and date

### Task 5 - GET '/random'

Create an endpoint that will respond to the path `/random`.

- It should send a **response** with the random number

### Task 6 - GET '/fact'

Create an endpoint that will respond to the path `/fact`.

- It should send a **response** with a string. Use the following string;

```text
JavaScript was created in about 10 days!
```

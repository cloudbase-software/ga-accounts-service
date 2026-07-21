import express from "express"; // we need the express package because that provides the router object

const Router = express.Router(); // create a new router object

Router.route("/accounts") // define an endpoint for "/accounts" 
  .get((req, res) => { // tell it what to do when a user sends a GET request to /accounts
    res.send(
      "🤖 Accounts Route with GET method - this endpoint will get all of the accounts from the database"
    );
  })
  .post((req, res) => { // tell it what to do when a user sends a POST request to /accounts
    res.send(
      "🤖 Accounts Route with POST method - this endpoint will create a new account in the database"
    );
  });

export default Router;
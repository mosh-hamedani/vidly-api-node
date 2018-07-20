## Introduction

This project is the backend of Vidly, an imaginary video rental app. I've used Vidly as an example in several of my online programming courses, such as:

- https://codewithmosh.com/p/mastering-react
- https://codewithmosh.com/p/the-complete-node-js-course
- https://codewithmosh.com/p/asp-net-mvc

This is the implementation of Vidly in Node.js.

## Setup

Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

### Install MongoDB

To run this project, you need to install the latest version of MongoDB Community Edition first.

https://docs.mongodb.com/manual/installation/

Once you install MongoDB, make sure it's running.

### Install the Dependencies

Next, from the project folder, install the dependencies:

    npm i

### Environment Variables

Now, you need to set an environment variable. We use this environment variable to store the private key used for JWT authentication.

On Mac:

    export vidly_jwtPrivateKey=1234

On Windows:

    set vidly_jwtPrivateKey=1234

You can use any values instead of "1234".

### Populate the Database

    node seed.js

### Run the Tests

You're almost done! Run the tests to make sure everything is working:

    npm test

All tests should pass.

### Start the Server

    node index.js

This will launch the Node server on port 3900. If that port is busy, you can set a different point in config/default.json.

Open up your browser and head over to:

http://localhost:3900/api/genres

You should see the list of genres. That confirms that you have set up everything successfully.

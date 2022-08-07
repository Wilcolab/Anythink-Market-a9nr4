# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

The first thing you'll need to do after cloning the repo is to install [docker](https://docs.docker.com/get-docker/)

You can verify docker is ready by running the following commands in your terminal: `docker -v` and `docker-compose -v`.

Then, **run `docker-compose up` from the project root directory** to load Anythink's backend and frontend.

If Docker is working correctly, the backend should be running and able to connect to your local database.

You can test this by **pointing your browser** to [http://localhost:3000/api/ping](http://localhost:3000/api/ping)

To **check the frontend** and make sure it’s **connected to the backend**. you can do this by pointing your browser to  [http://localhost:3001/register](http://localhost:3001/register) to **create a new user**.

If everything is working properly, you should be ableto create a new user.

**Note:** the port number 3000 and 3001 for the backend and the frontend assume that you do not have any previous localhost processes running on your computer. You can read through the terminal logs for a `Listening to ${port}` for the port number of  the backend. The frintend will usually be after that of the backend. 

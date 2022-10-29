# spotify-auth-bff

## 👋 Welcome to spotify-auth-bff
This application made in node + express.js aims to authenticate to Spotify services, see the API documentation here: [Spotify Developer Documentation]('https://developer.spotify.com/documentation/')


### Initial setup


First fork this application on your github. in sequence clone your repository example:

```
git clone https://github.com/ArielBetti/spotify-auth-bff
```

Set the environment variables, create a `.env` file in the project root


```
CLIENT_ID='my_spotify_client_id'
CLIENT_SECRET='my_spotify_secret_key'
REDIRECT_FRONT_END='my_frontend_auth_page'
REDIRECT_URI='http://localhost:8080/callback'
PORT=8080
```

Then inside the project directory download the packages

```
// On npm
npm install

// On yarn
yarn

```

Run the project default port is `8080`

```
// On yarn
yarn start

// On npm
npm run start

```

### On your front-end

You need to pass to your frontend the url of your backend with the login endpoint.
In this example I will use HTML.

```html
<a href="http://localhost:8080/login">
  On Spotify login
</a>
```

After authentication you will be redirected to the callback url passed in your environment variables with the information needed to authenticate to Spotify services

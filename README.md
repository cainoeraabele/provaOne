# First Move

### Build and Run the application

#### Prerequisites

* Node JS
* Mongo DB up and running on the default port (27017) and using the default database (test)
* ElasticSearch server up and running on the default port (9200)

#### Run the application

```
$> npm install
$> node initData.js
$> node .
```

Browse the following address: `http://localhost:3000`

You can register a new account or sign in with the following credentials: foo@bar.org / foobar

Note: `The initData.js` script will populate Mongo DB and ElasticSearch with some data so you can use the application.

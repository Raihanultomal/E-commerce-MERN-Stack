# E-commerce MERN stack project

## Basic setup

    1. Course plan
    2. Environment setup
    3. Create express server
    4. HTTP request & response

    <!--morgan er maddhome server e kono error thakle seta consol e dekhabe or server er kichu information dibe -->
    5. nodemon and morgan
    6. API testing with postman (get,post,put,delete)
    7. Middleware
    <!-- Middleware ekti important tools, eta onek use kora hoy. jemon kono user login kina eta amra isLoggedIn namer middleware function create er maddhome check korte pari -->

    8. Express error handling Middleware
    9. How to handle HTTP errors
    10. How to secure API (npm-> xss-clean, express-rate-limit)
    11. .gitignore and .env (npm i dotenv)
    <!-- .env file e secret key gulo rakha hoy. jemon amader project kon PORT e run korbe seta amra kaw k janate naw chete pari. emon onek kichui .env port e rekhe kaj kora jay-->

    12. MVC Architecture
    13. connect to mongodb database
    14. Schema and model for user
    15. Create seed route for testing
    <!-- seed er maddhome kichu dummy data niye kaj kora hoy. jokhn database connect thake tokhn onek data thake. kono problem hole seta handle korar jonne full database e kaj kora kothin. ei jonne seeds er madhome amra chaile check korte pari kono somossa ache kina -->

    16. GET /api/users ei address e gele admin shob users k dekhte parbe.
    Middleware = isAdmin, getAllUser, searchByName+ pagination functionality

    17. responseHandler controller for error or success.
    18. GET api/users/:id (get a single user by id)

    19. How to create services in the backend
    <!-- ekhane servicess bolte amra same request onek jaygay use kortesi. seta na kore amra ekta services folder e rakhte pari & proijon moto call korte pari -->

    20. DELETE api/users/:id -> delete a single user by id

## npm installing comand for server:

    npm init -y
    npm i express
    npm i --save-dev nodemon
    npm i --save-dev morgan
    npm i body-parser
    npm i http-errors
    npm i dotenv
    npm i mongoose
    npm i bcrypt  (bcrypt er maddhome password encoding and decoding kora hoy)

## Step 1:

    =>npm init install kora hoyece "npm init -y" er maddhome
    =>express install kora hoyeche. npm i express
    => npm i --save-dev nodemon

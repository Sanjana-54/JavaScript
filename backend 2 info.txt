1.generate package.json
2.create express server
3.install mongoose and coonect to MongoDB server

REST API-MongoDB native driver->DBserver
REST API-Mongoose ODM tool->DBserver (object document mapping)
4.Build USER REST API
    -create
    -read all users
    -read users by id
    -update user by id
    -delete user by id

5.create schema and model of resource(user) | schema-structure of doc
6.define routes


-handling unavailable resources
-validators during updation
-hashing statement
-unique fields

-refined version of error handling middleware

//STATUS CODES 

//200 -- success
//201 -- created
//400 -- bad request (client side mistakes)
//401 -- unauthorized
//404 -- not found
//500 -- server error

user authentication(login)
-submit credentials & get tokens
public routes-
private routes-


encoding & diff.hashing 


XSS-
CSRF-


http only 

application level middleware---


*to access cookies property of request object we need cookie parser middleware.Otherwise req.cookie is undefined
if token is undefined


installed libraries for this
    *bcryptjs
    *cookie-parser
    *express
    *jsonwebtoken
    *mongoose
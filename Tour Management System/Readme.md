# Backend  :- npm run start-dev
               http://localhost:4000

1) Main file :- app.js
2) npm init :- create package.json file
3) npm install :- To install all dependencies

## controllers :- 
## models
## routes
## utils



### Dependencies

  1) bcryptjs :- JavaScript library used for hashing passwords and comparing hashed passwords.To enhance security, particularly in user authentication systems.bcryptjs is a crucial library for securing passwords.It ensure that passwords are stored securely and can be verified efficiently, enhancing the security of your application’s authentication system.  

   #### Generating Salts: genSaltSync, genSalt
   #### Hashing Passwords: hashSync, hash
   #### Comparing Passwords: compareSync, compare
   #### Getting Rounds: getRounds


  2) cookie-parser :- cookie-parser is a convenient middleware for handling cookies in Express applications. It simplifies the process of parsing cookies from incoming requests and setting cookies in responses. By using cookie-parser, you can easily manage cookies, enhancing the functionality and security of your web applications.

  #### Initialization: cookieParser(secret, options)
  #### Reading Cookies: req.cookies, req.signedCookies
  #### Setting Cookies: res.cookie(name, value, options)
  #### Clearing Cookies: res.clearCookie(name, options)

  3) cors :- lets your website ask for data from other websites safely.You want your frontend website to get data from your backend server. To make this work safely, you need to set up CORS on your backend server.
  
  Ex :- Your frontend website at http://frontend.com
        Your backend server at http://api.com

   #### Important CORS Methods
    1) Access-Control-Allow-Origin: Specifies which origins can access the resource.
    2) Access-Control-Allow-Methods: Defines which HTTP methods are permitted when accessing the resource.
    3) Access-Control-Allow-Headers: Lists the HTTP headers that can be used during the actual request.
    4) Access-Control-Allow-Credentials: Indicates if credentials like cookies can be sent with the request.
    5) Access-Control-Expose-Headers: Specifies which headers can be exposed to the client.
    6) Access-Control-Max-Age: Sets the duration for which the results of a preflight request can be cached by the browser.

  4) dotenv :- dotenv is a module that loads environment variables from a .env file into process.env, which helps manage configuration variables in a simple and secure way.
    
   #### Security: -
                  Keeps sensitive data like API keys and database credentials out of your source code.
   #### Convenience:-
                Simplifies configuration management across different environments (development, testing, production).

  5) express :- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building server-side applications, handling routes, managing middleware, and interacting with databases.

   #### Key Features of Express
   1) Routing:- Defines URL endpoints (routes) to handle HTTP requests.
   2) Middleware:- Functions that execute during the request-response cycle.
   3) Template Engines:- Supports various template engines like Pug, EJS, and Handlebars.
   4) Static Files:- Serves static files like HTML, CSS, and JavaScript.
   5) Error Handling:- Provides a mechanism for handling errors.

  
  6) jsonwebtoken :- JSON Web Token (JWT) is a compact, URL-safe means of securely transmitting information between parties as a JSON object. It consists of three parts: a header, a payload, and a signature. JWTs are often used for authentication and information exchange in web applications, allowing servers to verify the authenticity of requests and securely transmit data without needing to store session state on the server. They are signed using a secret key or a public/private key pair, ensuring that the information is trusted and not tampered with.

  7) mongodb :- MongoDB is a popular NoSQL database management system that stores data in flexible, JSON-like documents. It is known for its scalability, performance, and ease of use.
  
  8) mongoose :- Mongoose is a Node.js library that provides a schema-based solution to model application data and interact with MongoDB databases efficiently.

   #### key features 

    1) Schema Definition: Define MongoDB document structure and data types.
    2) Validation: Ensure data meets specific requirements before saving.
    3) Query Building: Fluent API for building MongoDB queries.
    4) Middleware: Execute logic before or after database operations.
    5) Population: Reference and populate data across different collections.
    6) Virtual: Define computed properties not stored in the database.
    7) Plugins: Extend functionality with reusable schema, methods, and middleware.

    
   
 9) nodemon :-  this use to automatically update node server when any changes is done we don't need to start      server manually again and again soo rather than node app.js we use // nodemon app.js
                     to use nodemon add this inside script :- "start": "nodemon app.js"
                     




# Frontend :- npm start
              http://localhost:3000/home

 ## React use libraries

  1) axios: A popular HTTP client for making asynchronous HTTP requests from browsers or Node.js. It supports promises and can intercept requests and responses.

  2) bootstrap: A front-end framework for developing responsive and mobile-first websites using HTML, CSS, and JavaScript components.

  3) react: A JavaScript library for building user interfaces, focusing on component-based development for creating interactive UIs.

  4) react-dom: Provides DOM-specific methods for React, enabling React to interact with the browser's DOM.

  5) react-responsive-masonry: A responsive masonry layout component for React applications, which arranges elements optimally based on screen size.implements a responsive masonry grid layout. It automatically adjusts the layout based on the available space, providing an optimal arrangement of items across different screen sizes.

  6) react-router-dom: A routing library for React applications that enables navigation and routing between different components/pages in a single-page application (SPA).

  7) react-scripts: Provides scripts and configuration used by Create React App (CRA) for building and running React applications.

  8) react-slick: React carousel/slider component based on Slick carousel, providing customizable settings for sliding elements. popular jQuery carousel library. It offers a customizable and responsive carousel/slider solution for displaying images, videos, or any content in a slide-based format

  9) reactstrap: React components library built with Bootstrap, offering pre-styled components like buttons, forms, modals, etc., for rapid UI development.

  10) remixicon: A set of open-source, customizable, and modern icons (in SVG format) for use in web projects.

  11) slick-carousel: The jQuery-based carousel/slider library, which react-slick might depend on for functionality.

  12) web-vitals: A JavaScript library that measures and reports key performance metrics for a web page, such as CLS (Cumulative Layout Shift), FID (First Input Delay), and LCP (Largest Contentful Paint).

  13) Hooks :- Hooks are functions that enable functional components in React to use state, lifecycle methods, and other React features without writing a class. They allow you to reuse stateful logic across multiple components.

    i) useState: Allows functional components to manage local state.
    ii) useEffect: Performs side effects in functional components, similar to lifecycle methods.
    iii) useContext: Allows functional components to consume React context.
    iv) useRef: that returns a mutable ref object whose .current property can hold a mutable value across renders without causing re-renders.
    v) Custom hooks: Reusable functions that encapsulate complex stateful logic.
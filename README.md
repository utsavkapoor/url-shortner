<!DOCTYPE html>
<html>

   <head>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
      <link href="/public/style.css" rel="stylesheet" type="text/css">
   </head>

   <body>
      <div class="container">
         <h1>FreeCodeCamp API Basejump: URL Shortener Microservice</h1>
        <h4>User Stories:</h4>
        <ol>
          <li>I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.</li>
          <li>If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead</li>
          <li>When I visit that shortened URL, it will redirect me to my original link.</li>
        </ol>
        <h1>Example creation</h1>
        <h3>Usage</h3>
        <h4><span>https://ukapoor-url-shortner.glitch.me/new/https://www.google.com</span></h4>
        <h3>Output</h3>
        <h4><span>{ "original_url":"https://www.google.com", "short_url":"https://ukapoor-url-shortner.glitch.me/d1ja" }</span></h4>
        <h1>Example Usage</h1>
        <h3>Usage</h3>
        <h4><span>https://ukapoor-url-shortner.glitch.me/d1ja</span></h4>
        <h3>Output</h3>
        <h4><span>https://www.google.com</span></h4>
      </div>
   </body>

</html>

# Blinx Boilerplate


### About

This is a starter boilerplate app using the following technologies:

 * Blinx
 * Blinx Router
 * Blinx Extensions.
 * Handlebars
 * Webpack


### Prerequisites 

Make sure that [Node.js](https://nodejs.org/en/) is intalled using command
```
  node -v
```
If not installed, visit the [https://nodejs.org/en/](https://nodejs.org/en/) to download.


Webpack 
```
  npm install webpack -g
```


Http server
```
  npm install http-sever
```


### Intallation

```
  git clone https://github.com/blinxjs/blinx-boilerplate.git
```

Once cloned, cd to the directory and run
```
  npm install
```

To transpile the code use command
```
  node run dev
```

To keep transpilation process running in watch mode, use command
```
  node run dev:watch
```

To serve the project files, run http-server in root directory using command
```
  http-server
```
By default this should be serving on localhost:8080.
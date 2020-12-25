# node-express-docker ⚙️
This is a simple Express server, ready to be packaged up into a Docker container.

## Table of contents
- [About](#about)
- [Installation](#installation)
- [Links and resources](#links-and-resources)
- [License](#license)

## About
This repository is intended for JavaScript developers who are new to Docker and would like to try it out.
Everything in this project is setup in a way that it can be packaged into a container right away.

## Installation
Here's a quick guide on how to clone and use this Express project.

- Clone project
  ```
  $ git clone https://github.com/ez-javascript/node-express-docker
  ```
- Install all required packages
  ```
  $ npm install
  ```
- Build Docker image
  ```
  $ docker build -t <Your name>/node-express-docker .
  ```
- Run Docker container
  ```
  $ docker run -p 80:80 -d <Your name>/node-express-docker
  ```

## Links and resources
- [Official documentation](https://docs.docker.com)
- [Official GitHub page](https://github.com/docker)
- [Docker Playground](https://www.docker.com/play-with-docker)
- [StackOverflow: Questions tagged "Docker"](https://stackoverflow.com/questions/tagged/docker)
- [GitHub Gist](https://gist.github.com/ez-javascript)
- [@ez.javascript on Medium](https://medium.com/@ez-javascript)
- [@ez.javascript on Instagram](https://www.instagram.com/ez.javascript)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

&copy; 2020 [@ez.javascript](https://github.com/ez-javascript)

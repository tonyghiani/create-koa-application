# Create Koa Application
[![npm version](https://img.shields.io/npm/v/create-koa-application.svg)](https://www.npmjs.com/package/create-koa-application) [![license](https://img.shields.io/github/license/marcoantonioghiani01/create-koa-application.svg)](https://github.com/marcoantonioghiani01/create-koa-application/blob/master/LICENSE) 
> A structured boilerplate to create your Node app with Koa.js.

## Welcome to Koa.js

Create Koa Application is a cli tool to bootstrap a Koa.js application with a good environment preset and an alternative folder structure.

<p align='center'>
  <img src='https://unpkg.com/create-koa-application@1.0.5/assets/creation.svg' width='600' alt=''>
</p>

## Table of contents

* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [Project structure](#project-structure)
* [Contributors](#contributors)
* [License](#license)

## Requirements

 * **[Node](https://nodejs.org/) 8 or later.**
 * [Npm](https://www.npmjs.com/)

## Installation

#### npm

To install globally the tool:

```bash
npm install -g create-koa-application
```

#### npx

Alternatively, you can use it with **npx** to create a new project:

```bash
npx create-koa-application <project-name>
```

## Usage

Create a new application running on your terminal:

### Installed Globally

```bash
create-koa-application <project-name>
```
### npm

```bash
npm init koa-application <project-name>
```

### yarn

```bash
yarn create koa-application <project-name>
```

After your project is correctly initialized

## Project structure

```
<project-name>
├── node_modules
├── index.js
├── server.js
├── package.json
├── package-lock.json
├── README.md
├── .env.example
├── .eslintrc.js
├── .eslintignore
├── .gitignore
├── .huskyrc
├── .prettierrc
├── .prettierignore
├── .prettierignore
├── api
│   ├── users
│   │   ├── index.js
│   │   ├── user.routes.js
│   │   └── user.controller.js
│   ├── otherApiFolder
│   ├── ...
│   └── index.js
├── config
│   ├── components
│   │   ├── database.config.js
│   │   └── server.config.js
│   └── index.js
└── middleware
    └── error.middleware.js
└── utils
    └── generateId.util.js
```

## Contributors

* Marco Antonio Ghiani - [GitHub](https://github.com/marcoantonioghiani01) - [LinkedIn](https://www.linkedin.com/in/marcoantonioghiani/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/marcoantonioghiani01/create-koa-application/blob/master/LICENSE) file for details.

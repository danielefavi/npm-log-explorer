Log Explorer: a simple tool to explore and visualize your logs
===============================================================

## What is it?

**Log Explorer** is a NPM package that allows you to explore your logs through a web interface.

It is a simple tool that can be used to quickly analyze your logs and find the information you need.

## How to use it?

### Installation

Install the package globally:

```bash
npm install -g npm-log-explorer
```

### Usage

Run the following command in the directory where your logs are located:

```bash
log-explorer
```

This will start a web server on port 4321. You can then access the web interface at http://localhost:4321

If you want to use another port, you can specify it as an argument:

```bash
log-explorer --port 1234
```

### Help

You can get help on the command line by running:

```bash
log-explorer --help
```
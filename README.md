# Webpack API boilerplate

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

To create a new Serverless project.

```bash
$ serverless install --url https://github.com/seanrkerr/webpack-api-boilerplate --name my-project
```

Enter the new directory

```bash
$ cd my-project
```

Install the Node.js packages

```bash
$ yarn
```

### Usage

To run a function on your local

```bash
$ sls invoke local --function hello
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

```bash
$ yarn offline
```

Run your integration tests

\*Start each process in a separate command window

```bash
$ yarn offline
$ yarn test
```

Deploy your project

```bash
$ sls deploy
```

Deploy a single function

```bash
$ sls deploy function --function hello
```

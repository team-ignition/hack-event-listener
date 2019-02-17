[![codecov](https://codecov.io/gh/Frontier-project/trlListener/branch/master/graph/badge.svg?token=bUNoF09zxo)](https://codecov.io/gh/Frontier-project/trlListener)

## Intro

This service is responsible of pushing to a queue the events of The Frontier Smart Contracts. It include the following functionalities:

- **Event listening**: Checking for the different Smart Contracts fron an Ethereum node
- **RabbitMq interface**: Notifying of any changes (Events) on the different Smart contracts

## Dependencies

It requires a **full Ethereum node** to be running, with websocket interface opened. The selected network can be selected by the used. In order to install a node, see [Geth](https://github.com/ethereum/go-ethereum/wiki/geth) or [Parity](https://github.com/paritytech/parity). A faster dev option (by default) is using [Infura](https://infura.io/) websocket interface (unstable).

It also requires a `RabbitMq` server running.

## Config

The following params can be changed from `./config`

| Param        | Description                              | Default               |
| ------------ | ---------------------------------------- | --------------------- |
| `node_uri`   | Web socket address of your Ethereum node | `ws://localhost:8546` |
| `rabbit.uri` | URI of the running MongoDB               | `amqp://localhost`    |

## Install

It can be installed by simply running

```shell
$ npm install
```

## Run

The service can be started by running:

```shell
$ npm start
```

It can also be runned using `docker-composer`with the rest of Frontier Services using the [docker-composer scripts](https://github.com/Frontier-project/InternalScripts).

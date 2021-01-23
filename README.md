# Optimism Hardhat example

> Example using [Hardhat](https://hardhat.org/) toolchain to deploy to [Optimism](https://optimism.io/) L2

## Getting started

Clone repository:

```bash
git clone git@github.com:miguelmota/hardhat-optimism-example.git
cd hardhat-optimism-example/
```

Install dependencies:

```bash
npm install
```

Set up environment variables in `.env` (use your own):

```bash
PRIVATE_KEY=0x754fde3f5e60ef2c7649061e06957c29017fe21032a8017132c0078e37f6193a
L2_NODE_URL=https://kovan.optimism.io
```

Build contract OVM bytecode:

```bash
npm run build
```

Deploy to L2:

```bash
npm run deploy
```

## License

[MIT](LICENSE)

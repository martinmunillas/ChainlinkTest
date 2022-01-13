require("ts-node/register");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "^0.8.10",
    },
  },
};

const cuid = require('cuid');

const serial = () => {
  const id = cuid();
  return id;
}

module.exports = {serial}
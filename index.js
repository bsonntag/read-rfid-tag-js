var cardReader = require('card-reader');

function readRfidTag(reader) {
  return cardReader.issueCommand(reader, 'FFCA000000')
    .then(_parseTag);
}

function _parseTag(buffer) {
  var response = buffer.toString('hex');
  if(_isResponseOk(response)) {
    return response.slice(0, -4);
  }
}

function _isResponseOk(response) {
  return (response.substr(-4) === '9000');
}

module.exports = readRfidTag;

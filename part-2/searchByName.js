const clients = require('./clients.json')
const input = process.argv[2]

console.log('Finding clients with name ' + input + '...')

const searchByName = function (input) {
  if (!input) {
    throw new Error('please enter an input agrgument')
  } else {
    var matchedPerson = clients
        .filter(function (clients) {
          return clients.rep_name.toLowerCase().startsWith(input.toLowerCase())
        })
        .map(function (clients) {
          return {'id': clients.id, 'rep_name': clients.rep_name, 'company': clients.company, 'state': clients.phone}
        })
    return matchedPerson
  }
}

console.log(searchByName(input))

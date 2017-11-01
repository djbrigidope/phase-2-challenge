const clients = require('./clients.json');
const input = process.argv[2]

console.log('Finding clients in state: ' + input);

const searchByState = function(input){
  if(!input){
    throw new Error("please enter full name of State")
  } else {
      var matchedState = clients
        .filter(function(clients){
          return clients.state.toLowerCase().startsWith(input.toLowerCase());
        })
        .map(function(clients){
          return {'id': clients.id, 'rep_name':clients.rep_name, 'company': clients.company, 'city': clients.city, 'state': clients.state}
        })
    return matchedState
  }
}

console.log(searchByState(input));

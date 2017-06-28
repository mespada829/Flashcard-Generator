const inquirer = require ('inquirer');
const fs  = require ('fs');

console.log('- Basic Cards -')

var Basiccards = [{
        type: 'input',
        name: 'answer',
        message: 'Who is Clark Kent?'
    }

];

inquirer.prompt(Basiccards).then(function(answers) {
    console.log(JSON.stringify(answers, null, '  '));
});



modules.exports = BasicCard.js;


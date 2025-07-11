import createPrompt = require('prompt-sync');
import { studentRegister } from './SignupLogin';
import { data } from './dataStore';

function main() {
  const prompt = createPrompt();
  let input = prompt('press q to exit\n');
  console.log(input);

  while (input !== 'q') {
    if (input === 'register') {
      let email = prompt('what is you email\n');
      let name = prompt('what is you name\n');
      let classroom = Number(prompt('what is you classroom\n'));
      let password = prompt('what is you password\n');
      studentRegister(email, password, name, classroom);
      console.log(data);
    }

    input = prompt('press q to exit');
  }
}

main();

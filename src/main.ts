import createPrompt = require('prompt-sync');

function main() {
    const prompt = createPrompt();
    let input = prompt('press q to exit');
    console.log(input);
    //
    //
    //while (input !== 'q') {
    //    if (input === 'register') {
    //        let a = prompt("what do you want");
    //    }
    //
    //
    //    input = prompt("press q to exit");
    //}
}


main();


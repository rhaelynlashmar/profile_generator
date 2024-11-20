const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("So, what's name? Or prefered name? shortened and nicknames count! ", (name) => {
  console.log(`Nice to meet you, ${name}`);

  rl.question(`Okay, ${name}, what's your all-time favorite hobby? `, (hobby) => {
    console.log("interesting!");

    rl.question("And what kind of music do you typically listen to? ", (music) => {
      console.log(`${music}, hmm that can say a lot about a person`);

      rl.question("So, what is your favourite kind of food to eat? ", (food) => {
        console.log("Yum!");

        rl.question(`Would you say that you have a favorite ${food} restaurant? `, (restaurant) => {
          console.log("I'll have to go there sometime!");

          rl.question("What is your superpower? In a few words, tell us what you're amazing at! ", (talent) => {
            console.log("Good for you!");

            rl.question("Last question! if you could have ANY supernatural superpower, what would it be!? ", (superpower) => {
              console.log(`${superpower}!? wow! Veeery interesting!`);

              console.log("Thanks for your answers, now it feels like we know you better! Goodbye!")

              rl.close();
            }); 
          });
        });
      });
    });
  });
});


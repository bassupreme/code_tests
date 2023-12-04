class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    });
}

// setup prompt per prendere un nome in input
const prompt = require('prompt-sync')();

// Ask for a user name until github returns a valid user
async function demoGithubUser() {

	// qui ci dovrebbe stare il while del quale parlano nel sito ma non
	// lo metto perchè non ho la propmpt api con la quale immettere del testo
	// => capire l'equivalente in node.js

	let user;

	while (true) {
		const name = prompt('What is your name?');
		console.log(`Hey there ${name}`);

		try {
			user = await loadJson(`https://api.github.com/users/${name}`)
			break;
		} catch(err) {
			if (err instanceof HttpError && err.response.status == 404) {
				console.log("No such user.");
			} else {
				throw err;
			}
		}

	}

	console.log(`Full name: ${user.name}.`);
}

demoGithubUser();

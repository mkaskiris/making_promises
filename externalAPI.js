import fetch from "node-fetch";

const url = "https://api.github.com/users/getfutureproof"
fetch(url).then(resp => resp.json()).then(r => r.public_repos).then(console.log)



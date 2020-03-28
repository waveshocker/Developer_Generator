const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

let data = {};

let questions = [
    {
        message: 'What is your github username?',
        name: 'username',
    }

]

function writeToFile(fileName, data) {
}

function init() {
    inquirer
    .prompt(questions)
    .then(function ({username}) {
        const queryURL = `htts://api.github.com/users/${username}`;

        axios
            .get(queryURL)
            .then((res) => {
                data.username = username;
                data.numOfRepo = res.data.public_repos;
                data.name = res.data.name
                data.followers = res.data.followers;
                data.following = res.data.following;
                data.portPic = res.data.avatar_url;
                data.location = res.data.location;
                data.blog = res.data.blog; 
                data.company = res.data.company
                data.bio = res.data.bio
                
                console.log(data);
            })
    })
}
    



init();

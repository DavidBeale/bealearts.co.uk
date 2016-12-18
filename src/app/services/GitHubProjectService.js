import fetch from 'isomorphic-fetch';

export default class GitHubProjectsService
{
    getProfessionalProjects() {
        return getProjects.call(this, 'bealearts');
    }

    getPersonalProjects() {
        return getProjects.call(this, 'davidbeale');
    }
}


function getProjects(user) {
    return Promise.race([
        fetch(`https://api.github.com/users/${user}/repos?type=owner&sort=updated`),
        new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('Request Timeout')), 5000);
        })
    ])
        .then(checkStatus)
        .then(response => response.json())
        .then(filter)
        .then(assemble);
}


function filter(repos) {
    return repos.filter(repo => repo.fork === false);
}

function assemble(repos) {
    return repos.map(repoDtoToDomain);
}


function repoDtoToDomain(repo) {
    return {
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language
    };
}


function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

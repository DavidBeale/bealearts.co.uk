import personal from './mock-personal.json';
import professional from './mock-professional.json';

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
    return Promise.resolve(user === 'davidbeale' ? personal : professional)
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
        url: repo.html_url
    };
}

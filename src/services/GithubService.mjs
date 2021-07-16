import fetch from 'isomorphic-fetch';

export async function getProfessionalProjects() {
  return getProjects('bealearts');
}

export async function getPersonalProjects() {
  return getProjects('davidbeale');
}


export async function getProjects(user) {
  const response = await Promise.race([
    fetch(`https://api.github.com/users/${user}/repos?type=owner&sort=updated`),
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Request Timeout')), 5000);
    })
  ]);

  if (!response.ok) {
    throw new Error(`${response.status}:${response.statusText}`);
  }

  const result = await response.json();
  const projects = result
    .filter(repo => repo.fork === false)
    .map(repo => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language
    }));

  return projects;
}

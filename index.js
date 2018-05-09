const userName = ''

function getIssues(data) {
  fetch(`https://api.github.com/repos/${userName}/javascript-fetch-lab/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
      } )
    })
}

function showIssues(json) {
}

function createIssue() {
    const token = ' 04ae7bc8f20238e70725123a0916a5951ab1bfe0 ';
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`https://api.github.com/repos/${userName}/javascript-fetch-lab/issues`, { //define username
    method: 'post',
    headers: {
      'Authorization': `token ${token}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}


function showResults(json) {
}

function forkRepo() {
  https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks
    token = ' 04ae7bc8f20238e70725123a0916a5951ab1bfe0 ';
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${token}`
  }
}).then(resp => {
    let repo = new Repo(resp);
    showForkedRepo(repo);
  })
}

function showForkedRepo(repo) {
  $('#results').append(repo.template())
}



function getToken() {
  const token = ' 04ae7bc8f20238e70725123a0916a5951ab1bfe0 ';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
  return ''


const postData = {
  body: 'Great stuff'
};

fetch('https://api.github.com/repos/:your_ghname/:your_repo/commits/:sha/comments', {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => console.log(res));
}

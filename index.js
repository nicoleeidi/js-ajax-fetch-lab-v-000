
function getIssues(data) {
  fetch(`https://api.github.com/repos/nicoleeidi/javascript-fetch-lab/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++){
    
          showIssue(data[i]);

        }
      } )
    })
}

function showIssue(issue) {
element= `<li>title:${issue}.title ,body:${issue}.body</li>`//what goes here?)
  $('#issues').append(element)
}

function createIssue() {
    const token = 'f74e4a377e2005a8969df3758de127d0571eee8c';
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`https://api.github.com/repos/nicoleeidi/javascript-fetch-lab/issues`, {
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

    token = 'f74e4a377e2005a8969df3758de127d0571eee8c';
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
  const token = 'f74e4a377e2005a8969df3758de127d0571eee8c';

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

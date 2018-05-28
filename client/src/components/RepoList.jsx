import React from 'react';

const RepoList = (props) => {
console.log('this props from RepoList -> ', props.repos)
return (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
      { props.repos.map((item, i)=>(
        <div key={item._id}>
          <div key={i +'-'+ item.login + '-' + item._id} >{item.login}</div>
          <div key={i +'-'+ item.url + '-' + item._id}>{item.url}</div>
          <div key={i +'-'+ item.repoName + '-' + item._id} >{item.repoName}</div>
          <div key={i +'-'+ item.stargazers_count + '-' + item._id} >{item.stargazers_count}</div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default RepoList;
//
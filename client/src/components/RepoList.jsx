import React from 'react';

const RepoList = (props) => {
console.log('this props from RepoList -> ', props.repos)
return (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
      { props.repos.map((item, i)=>(
        <div>
          <div key={`i-${item.name}`} >{item.name}</div>
       
          <div key={`i-${item.bio}`} >{item.bio}</div>
      
          <div key={`i-${item.repos_url}`} >{item.repos_url}</div>
      
          <div key={`i-${item.followers_url}`} >{item.followers_url}</div>
        </div>
        
      ))}
    </div>
  </div>
  )
}

export default RepoList;
//
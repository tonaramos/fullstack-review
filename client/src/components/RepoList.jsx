import React from 'react';

const RepoList = (props) => (


  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
      { props.repos.map((item, i)=>(
        <div>
          <div key="i" >{item.value}</div>
        </div>  
      ))}
    </div>
  </div>
)

export default RepoList;
//
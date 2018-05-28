import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
     this.get = this.get.bind(this);
  }

  addRepoToState(newRepo) {
    let tempState = this.state;
    tempState.repos.push(newRepo);
    this.setState(tempState);
  }

  search (term, ) {
    let temp = this;
    let termJSON = JSON.stringify({value: term});
    $.ajax({
      type: 'POST',
      url: "http://127.0.0.1:1128/Repo",
      data: termJSON,
      contentType: 'application/json',
      success: (stuff)=>{
        temp.get()
      },
      error: (err)=>{
        console.error('search POST error',err);
      }
    });
  }

  get () {
    $.ajax({
      type: 'GET',
      url: "http://127.0.0.1:1128/Repos",
      dataType: 'json',
      success: (data)=>{
        this.setState({repos:data})
      },
      error: (err)=>{
        console.error(' client ajax get error', err);
      }
    });
  }

  render () {
    console.log('the state.repos from index.js', this.state.repos);
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
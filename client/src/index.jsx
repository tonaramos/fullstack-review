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

  search (term, ) {
    let termJSON = JSON.stringify({value: term});
    $.ajax({
      type: 'POST',
      url: "http://127.0.0.1:1128/Repos",
      data: termJSON,
      contentType: 'application/json',
      success: function (stuff) {
        // console.log('reseiving as success from the ajax post rec-->', stuff);
        let newData = JSON.parse(stuff);
        console.log('newData->>>>>', newData.content)
        this.setState({repos:[newData.content]})     ///------------temporarily added shell array
      }.bind(this),
      error: function (err){
        console.error('search POST error',err);
      }
    });
  }

  get () {
    $.ajax({
      type: 'GET',
      url: "http://127.0.0.1:1128/Repos",
      dataType: 'application/json',
      success: function (data) {
        //nothing yet
      }.bind(this),
      error: function (err){
        console.error(' client ajax get error', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
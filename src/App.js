import React, {Component} from 'react';
import './App.css';
import Questions from './questions';
import Question from './question';

class App extends Component {

  constructor(props ) {
    super(props);
    this.state ={
      data = [...]
    }
}

  
  getQuestion(id) {
    return this.state.data.find(q => q.id === Number(id));
  }

  render (){
    return (
    <React.Fragment>
      <h1> Question</h1>
      <Router>
        <Questions path="/" data ={this.state.data}></Questions>
        <Questions path="/question/:id" 
                    getQuestion={this.getQuestion}></Questions>

      </Router>
    </React.Fragment>
    )
  }
  
}

export default App;

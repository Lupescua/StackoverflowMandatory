import React, {Component} from 'react';
import Link from '@react/router';
import { Router } from "@reach/router";

class Questions extends Component{

constructor (props){
  super(props);
}

render(){
  return (
    <React.Fragment>
    <ol>
      {this.props.data.map( q => <li>
        <Link ></Link>
      </li>)}
    </ol>
    </React.Fragment>
  )
}

}
export default Questions;
import React,{Component} from 'react';
import moment from 'moment';
import './below.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
class Below extends Component{
    render(){
    return(
      <div className="Sp">
        
            
            <input type="text"  onChange={this.props.data}  placeholder="NEWS SEARCH..." ></input>
            <input type="text" placeholder="Date " onFocus={(e) => e.target.type = 'date'} onChange={this.props.to}  max={moment().format("YYYY-MM-DD")}></input> 
            
            <button  onClick={this.props.sear} className="buttonload" ><strong ><i className="fa fa-circle-o-notch fa-spin"></i>Submit</strong></button>
        
      </div>
    );
    }
}
export default Below;
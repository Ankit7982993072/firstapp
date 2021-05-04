import React, { Component } from 'react';
import { FcSearch } from "react-icons/fc";
import moment from 'moment';
import './below.css';
class Below extends Component {
  render() {
    return (
      
        <div className="Sp">


          <input className="Ani" type="text" onChange={this.props.data} placeholder=" SEARCH NEWS..." ></input>


          <input type="text" placeholder="Date " onFocus={(e) => e.target.type = 'date'} onChange={this.props.to} max={moment().format("YYYY-MM-DD")}></input>

          <button onClick={this.props.sear} className="buttonload" ><i className="fa fa-search">Search</i></button>
          <a className="Cov" onClick={this.props.searc}><i className="fa1" className="fa fa-ambulance">COVID-19</i></a>
          <a className="Cov1" onClick={this.props.searS}><i className="fa2" className="fa fa-circle">SPORTS</i></a>

        </div>
       
     
    );
  }
}
export default Below;
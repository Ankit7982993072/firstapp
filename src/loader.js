//import axios from 'axios';
import React, { Component } from 'react';

import './loader.css';
import Header from './header';
import Below from './below';
import moment from 'moment';
//import Foot from './Footer';
import imga from './LOGONEW1.JPG';
import de from './defimage.jpg';
class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      searchData: '',
      datetim: '',
      expanded: false
      //isLoading:false
    };
    this.getArticles = this.getArticles.bind(this);
    this.defaultArticlesS = this.defaultArticlesS.bind(this);
    this.defaultArticlesC = this.defaultArticlesC.bind(this);   
    this.defaultArticles = this.defaultArticles.bind(this);
    this.toggleTitle = this.toggleTitle.bind(this);
  }
  componentDidMount() {
    <h1 className="lato">LATEST NEWS</h1>
    this.defaultArticles();
  }
  toggleTitle(id, x, ele, t, lu) {
    if (document.getElementById(id + '_btn').innerHTML == "Read More") {
      document.getElementById(id).style.height = '600px';
      document.getElementById(id + '_con').style.height = '400px';
      document.getElementById(id + 'para').innerHTML = x;
      document.getElementById(id + 'para').style.padding = '15px';
      document.getElementById(id + 'para').style.backgroundColor = "#ffffe6";
      console.log("if");
      // document.getElementById(id+'_btn').style.marginTop='10px';
      document.getElementById(id + 'det').style.marginTop = '18px';

      document.getElementById(id + '_btn').innerHTML == "Read More" ? document.getElementById(id + '_btn').innerHTML = "Read Less" : document.getElementById(id + '_btn').innerHTML = "";
    }
    else {
      document.getElementById(id).style.height = '400px';
      document.getElementById(id + '_con').style.height = '55%';
      document.getElementById(id + 'para').innerHTML = "";
      console.log("else");
      document.getElementById(id + 'det').style.marginTop = '10px';
      document.getElementById(id + 'para').style.padding = '0px';
      document.getElementById(id + '_btn').innerHTML == "Read Less" ? document.getElementById(id + '_btn').innerHTML = "Read More" : document.getElementById(id + '_btn').innerHTML = "";
    }

    // this.setState({expanded:!(this.state.expanded)});
    // document.getElementById(id).innerHTML=`<div className="container"  >
    //   {ele.article.media.main_image ? <img src={ele.article.media.main_image} alt="Notebook" /> : <img src={de}></img>}

    //   <div className="content"  >
    //     <p>Published: {t}</p>
    //     <h2 >abcd</h2>

    //     <p  class="post__excerpt">
    //       {ele.article.summary} 
    //     </p>
    //   </div>

    // </div>
    // document.getElementById(id + 'para').classList.add(class name) = x;
    // document.getElementById(id + '_btn').innerText == "Read More" ? document.getElementById(id + '_btn').innerText = "Read Less" : document.getElementById(id + '_btn').innerText = "Read More";
    // // // //  if(this.state.expanded)
    // //  {

    // //  }
  }
  defaultArticles = async () => {
    //this.setState({isLoading:true});
    console.log(this.state.searchData);
    console.log(this.state.datetim);

    var defdate = new Date(new Date()).toISOString();
    var defd = new Date(moment.utc(defdate).format('YYYY-MM-DD')).valueOf();

    console.log(defd);
    console.log(moment(defd).valueOf())
    //this.setState({datetim:defdate});
    const response = await fetch(`https://webhose.io/nseFilter?token=525612b2-ec4d-445b-8c3e-33ba527c5c95&size=21&q=Delhi published:>${moment(defd).valueOf()} article.language:english site.type%3Anews`);
    //`${url}?token=${token}&format=json&size=21&article.language:english&q=${topic}`
    const json = await response.json();
    console.log(json);
    this.setState({ data: json });
    console.log(this.state.data.docs[0].article.title)
    //return json ;
  };
  defaultArticlesC = async () => {
    //this.setState({isLoading:true});
    console.log(this.state.searchData);
    console.log(this.state.datetim);

    var defdate = new Date(new Date()).toISOString();
    var defd = new Date(moment.utc(defdate).format('YYYY-MM-DD')).valueOf();

    console.log(defd);
    console.log(moment(defd).valueOf())
    //this.setState({datetim:defdate});
    const response = await fetch(`https://webhose.io/nseFilter?token=525612b2-ec4d-445b-8c3e-33ba527c5c95&size=21&q=COViD_INDIA published:>${moment(defd).valueOf()} article.language:english site.type%3Anews`);
    //`${url}?token=${token}&format=json&size=21&article.language:english&q=${topic}`
    const json = await response.json();
    console.log(json);
    this.setState({ data: json });
    console.log(this.state.data.docs[0].article.title)
    //return json ;
  };
  defaultArticlesS = async () => {
    //this.setState({isLoading:true});
    console.log(this.state.searchData);
    console.log(this.state.datetim);

    var defdate = new Date(new Date()).toISOString();
    var defd = new Date(moment.utc(defdate).format('YYYY-MM-DD')).valueOf();

    console.log(defd);
    console.log(moment(defd).valueOf())
    //this.setState({datetim:defdate});
    const response = await fetch(`https://webhose.io/nseFilter?token=525612b2-ec4d-445b-8c3e-33ba527c5c95&size=21&q=IPL published:>${moment(defd).valueOf()} article.language:english site.type%3Anews`);
    //`${url}?token=${token}&format=json&size=21&article.language:english&q=${topic}`
    const json = await response.json();
    console.log(json);
    this.setState({ data: json });
    console.log(this.state.data.docs[0].article.title)
    //return json ;
  };
  getArticles = async () => {
    console.log(this.state.searchData);
    console.log(this.state.datetim);
    console.log(moment(this.state.datetim).valueOf());
    // var y=(dt===undefined)?new Date():this.state.datetim;
    let response;
    if (this.state.datetim === "") {
      // https://webhose.io/nseFilter?token=9f322961-bbca-4dd1-a676-5239038fbd17&q=Covid%2019
      response = await fetch(`https://webhose.io/nseFilter?token=525612b2-ec4d-445b-8c3e-33ba527c5c95&size=21&q=${this.state.searchData} article.language:english site.type%3Anews`);

    }
    //`${url}?token=${token}&format=json&size=21&article.language:english&q=${topic}`
    else {
      response = await fetch(`https://webhose.io/nseFilter?token=525612b2-ec4d-445b-8c3e-33ba527c5c95&size=21&q=${this.state.searchData} published:>${moment(this.state.datetim).valueOf()} article.language:english site.type%3Anews`);
    }
    const json = await response.json();
    console.log(json);
    this.setState({ data: json });
    console.log(this.state.data.docs[0].article.title)
    //return json ;
    console.log(this.state.data.docs[0].article.published)
  };
  searchChangeHandler = (e) => {
    this.setState({ searchData: e.target.value });
    //console.log(e.target.value);
  };

  setTimer = (e) => {
    console.log(e.target.value);
    var dt = new Date(e.target.value);
    this.setState({ datetim: dt.getTime() });
  }
  render() {
    let text;
    if (this.state.data.docs) {
      text = this.state.data.docs.map((ele, id) => {
        // console.log(ele.article.published);
        var t = moment.utc(ele.article.published).format('DD/MM/YYYY');
        // console.log(t); 

        var su = (ele.article.title);
        var ju = (ele.article.summary);
        var lu = (su.split(" ").splice(0, 11).join(" "));
        var ku = (ju.split(" ").splice(0, 32).join(" "));
        var x = (ele.article.summary);

        return (
          // style={(this.state.expanded)?{height:"auto"}:null}
          <div className="container" id={id} >
            {ele.article.media.main_image ? <img src={ele.article.media.main_image} alt="Notebook" /> : <img src={de}></img>}

            <div className="content" id={id + '_con'} >
              <p>Published: {t}</p>
              <h2 >{lu}</h2>

              <p id={id + 'para'} class="post__excerpt">

              </p>

              {/* <div className="J" >{this.state.expanded?<div className="extra" >{x}<a onClick={this.toggleTitle}>Read less</a></div>:null}</div>
                              <a  target="_blank" onClick={this.toggleTitle}>Read More </a> */}
              <div>
                <a onClick={() => this.toggleTitle(id, x, ele, t, lu)} id={id + '_btn'}>Read More</a>
                <a className="deta" href={ele.article.url} target="_blank" id={id + 'det'}>DETAIL NEWS</a>
              </div>
            </div>

          </div>

        );
      })
    }
    else {
      return (
        <React.Fragment className="start">
          <Header />

          <div className="loader">
            <img src={imga}></img>

          </div>
        </React.Fragment>
      );
    }

    return (
      <div className="f">
        <Header />

        <Below sear={this.getArticles} searc={this.defaultArticlesC} searS={this.defaultArticlesS} to={this.setTimer} data={this.searchChangeHandler} />
        
        <div>{this.state.searchData ? <div className="ico" ><i class="fa fa-globe" >TOP NEWS</i></div> : <h1 className="lato">LATEST NEWS</h1>}</div>
        
        <div className="bel">
          <div className="full">{text}</div>
        </div>


      </div>
    );

  }
}
export default Loader;























//import axios from 'axios';
import React,{Component} from 'react';

import './loader.css';
import Header from './header';
import Below from './below';
import moment from 'moment';
//import Foot from './Footer';
import imga from './LOGONEW1.JPG';
import de from './defimage.jpg';
class Loader extends Component{    
   constructor(props)
   {
       super(props);
       this.state={
           data:{},
           searchData:'',
           datetim:''
           //isLoading:false
       };
       this.getArticles=this.getArticles.bind(this);
       this.defaultArticles=this.defaultArticles.bind(this);
   }
   componentDidMount(){
      <h1 className="lato">LATEST NEWS</h1>
      this.defaultArticles();
   }
   toggleTitle(){
          
   }
   defaultArticles = async () => {
     //this.setState({isLoading:true});
    console.log(this.state.searchData);
    console.log(this.state.datetim);
    
    var defdate=new Date(new Date()).toISOString();
    var defd=new Date(moment.utc(defdate).format('YYYY-MM-DD')).valueOf();
    
    console.log(defd);
    console.log(moment(defd).valueOf())
    //this.setState({datetim:defdate});
    const response = await fetch(`https://webhose.io/nseFilter?token=9f322961-bbca-4dd1-a676-5239038fbd17&size=21&q=Delhi published:>${moment(defd).valueOf()} article.language:english site.type%3Anews`);
            //`${url}?token=${token}&format=json&size=21&article.language:english&q=${topic}`
     const json = await response.json();
     console.log(json);
     this.setState({data:json});
     console.log(this.state.data.docs[0].article.title)
     //return json ;
   };
   getArticles = async () => {
       console.log(this.state.searchData);
       console.log(this.state.datetim);
       console.log(moment(this.state.datetim).valueOf());
      // var y=(dt===undefined)?new Date():this.state.datetim;
      let response;
      if(this.state.datetim==="")
      { 
        // https://webhose.io/nseFilter?token=9f322961-bbca-4dd1-a676-5239038fbd17&q=Covid%2019
       response = await fetch(`https://webhose.io/nseFilter?token=9f322961-bbca-4dd1-a676-5239038fbd17&size=21&q=${this.state.searchData} article.language:english site.type%3Anews`);
       
      }
      //`${url}?token=${token}&format=json&size=21&article.language:english&q=${topic}`
      else{
        response = await fetch(`https://webhose.io/nseFilter?token=9f322961-bbca-4dd1-a676-5239038fbd17&size=21&q=${this.state.searchData} published:>${moment(this.state.datetim).valueOf()} article.language:english site.type%3Anews`); 
      }
      const json = await response.json();
        console.log(json);
        this.setState({data:json});
        console.log(this.state.data.docs[0].article.title)
        //return json ;
        console.log(this.state.data.docs[0].article.published)
      };
     searchChangeHandler=(e)=>{
         this.setState({searchData:e.target.value});
       //console.log(e.target.value);
     };
     
     setTimer=(e)=>{
       console.log(e.target.value);
       var dt=new Date(e.target.value);
       this.setState({datetim:dt.getTime()});
     }
        
     


     
      render(){
          let text;
          if(this.state.data.docs)
          {
            text=this.state.data.docs.map((ele)=>{
               // console.log(ele.article.published);
               var t=  moment.utc(ele.article.published).format('DD/MM/YYYY');
                // console.log(t); 
                var su=(ele.article.title);
                var lu=(su.split(" ").splice(0,11).join(" "));
                return(

                    <div className="container" >
                        {ele.article.media.main_image?<img src={ele.article.media.main_image}  alt="Notebook"/>:<img src={de}></img>}

                          <div className="content">
                              <p>Published: {t}</p>
                              <h2 >{lu}</h2>
                              
                              <a href={ele.article.url} target="_blank" >Read More </a>
                          </div>
                    </div>
                   
                );
            })
          }
          else{
            return(
              <React.Fragment className="start">
              <Header/>

              <div className="loader">
                <img src={imga}></img>
                
              </div>
            </React.Fragment>
            );
          }
          
          return(
          <div className="f">
              <Header/>
              
              <Below  sear={this.getArticles} to={this.setTimer} data={this.searchChangeHandler}/>
              {this.state.searchData?<h1 >TOP NEWS</h1>:<h1 className="lato">LATEST NEWS</h1>}
              <div className="bel">
              <div className="full">{text}</div>
              </div>
              
              
          </div>
      );
      
    }
    }
export default Loader;























import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export class Newscomp extends Component {
     constructor() {
          super();
          this.state = {
               article: [],
               prevCache: [],
               nextPage: null,
               currentIndex: 0,
               loading: true,
               totalResult: 0
          }
          console.log(this.state.loading);
     }

     async componentDidMount() {
          // this.setState({ loading: true });
          this.props.setProgress(10);
          const response = await fetch(`https://newsdata.io/api/1/latest?language=en&apikey=${this.props.apiKey}&q=${this.props.category}`);
          this.props.setProgress(50);
          console.log(this.state.loading);
          const data = await response.json();
          this.props.setProgress(100);
          console.log(data);
          this.setState({
               article: data.results,
               // prevCache: [data],
               nextPage: data.nextPage || null,
               loading: false,
               totalResult: data.results.totalResults
          });
          console.log(this.state.prevCache);
          console.log("This is the current Index ", this.state.currentIndex);
     }

     fetchMoreData = async () => {
          const responseNext = await fetch(`https://newsdata.io/api/1/latest?language=en&apikey=${this.props.apiKey}&q=${this.props.category}&page=${this.state.nextPage}`);
          const dataNext = await responseNext.json();
          console.log(dataNext);
          console.log("fetchMoreData called");
          this.setState({
               article: this.state.article.concat(dataNext.results),
               nextPage: dataNext.nextPage || null,
          });
          console.log("This is the current Index ", this.state.currentIndex);
     }
     titleCase = (str) => {
          let splitStr = str.toLowerCase().split(' ');
          for (let i = 0; i < splitStr.length; i++) {
               splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
          }
          return splitStr.join(' ');
     }

render() {
     return (
          <>
               <h1 className="text-3xl font-bold text-gray-900 text-center my-12">{this.titleCase(this.props.category)}</h1>
               {this.state.loading && <Loader />}
               <InfiniteScroll
                    dataLength={this.state.article.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.article.length !== this.state.totalResult}
                    loader={<Loader />}
                    className='min-h-screen overflow-hidden py-10'>
                    {/* Cards Grid */}

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
                         <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                              {this.state.article.map((element, index) => {
                                   return <NewsItem key={index} title={element.title} description={element.description} imageURL={element.image_url} url={element.link} creator={element.creator} sourceName={element.source_name} pubDate={`${element.pubDate} ${element.pubDateTZ}`} />
                              })}
                         </div>
                    </div>
               </InfiniteScroll>

          </>

     )
}
}

export default Newscomp;




















// handlePrevClick = async () => {
//      this.setState({ loading: true });
//      console.log("Previous button clicked");
//      if (this.state.currentIndex > 0) {
//           this.setState({
//                article: this.state.prevCache[this.state.currentIndex - 1].results,
//                currentIndex: this.state.currentIndex - 1,
//                loading: false
//           });
//      }
//      console.log("This is the current Index ", this.state.currentIndex);
// }

// handleNextClick = async () => {
//      this.setState({ loading: true });
//      const responseNext = await fetch(`https://newsdata.io/api/1/latest?language=enapikey=pub_1a2c39ff05284f89a77d55750d1eada2&q=${this.props.category}&page=${this.state.nextPage}`);
//      const dataNext = await responseNext.json();
//      console.log(dataNext);
//      console.log("Next button clicked");
//      this.setState({
//           article: dataNext.results,
//           prevCache: [...this.state.prevCache, dataNext],
//           nextPage: dataNext.nextPage || null,
//           currentIndex: this.state.currentIndex + 1,
//           loading: false
//      });
//      console.log("This is the current Index ", this.state.currentIndex);
// }

{/* <div className="mb-12">
                         <div className="flex justify-center items-center space-x-4">
                              <button disabled={this.state.currentIndex === 0} onClick={this.handlePrevClick} className={`flex items-center px-6 py-3 text-white rounded-lg transition-colors duration-200 group ${this.state.currentIndex === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-900 text-white'}`}>
                                   <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                   </svg>
                                   Previous
                              </button>

                              <button disabled={this.state.nextPage === null} onClick={this.handleNextClick} className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-200 group">
                                   Next
                                   <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                   </svg>
                              </button>
                         </div>
                    </div> */}
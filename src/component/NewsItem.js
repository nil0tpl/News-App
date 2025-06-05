import React, { Component } from 'react'

export class NewsItem extends Component {
     render() {
          let { title, description, imageURL, url, creator, sourceName, pubDate  } = this.props;
          return (
               <div className='relative'>
               <span className="absolute top-0 right-6 -translate-y-1/2 translate-x-1/2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full z-20">{sourceName}</span>
               <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group relative">
                    <div className="overflow-hidden">
                         <img
                              src={
                                   imageURL == null
                                        ? "https://placehold.co/600x400/gray/black?text=No+Image"
                                        : imageURL
                              }
                              alt="Modern Workspace"
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                         />
                    </div>
                    <div className="p-6">
                         <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                         <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
                         <p className="text-gray-600 mb-4">
                              <small className="text-gray-500">{creator? creator:'Unknown'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{pubDate}</small>
                         </p>
                         <button className="w-[40%] bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                              <a target="_blank" rel="noreferrer" href={url}>
                                   Read More
                              </a>
                         </button>
                    </div>
               </div>
               </div>
          )
     }
}

export default NewsItem;
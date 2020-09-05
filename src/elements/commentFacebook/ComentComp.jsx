import React, { Component} from 'react';
import { FacebookProvider, Comments, CommentsCount } from 'react-facebook';
 
export default class ComentComp extends Component {
  render() {
    return (
        
      <FacebookProvider appId="1070014850028723">          
        <Comments href="https://socialmedia-panama.com" />
        <CommentsCount href="https://socialmedia-panama.com" />
      </FacebookProvider>
    );
  }
}
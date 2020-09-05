import React, { Component} from 'react';
import { FacebookProvider, Like } from 'react-facebook';
 
export default class LikeComp extends Component {
  render() {
    return (
        <>
        <FacebookProvider appId="1070014850028723">
        <Like href="https://socialmedia-panama.com" colorScheme="dark" showFaces share />
      </FacebookProvider>
      </>
    );
  }
}
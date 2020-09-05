import React, { Component} from 'react';
import { FacebookProvider, Share } from 'react-facebook';
 
export default class ShareComp extends Component {
  render() {
    return (
      <FacebookProvider appId="1070014850028723">
        <Share href="https://socialmedia-panama.com">
          {({ handleClick, loading }) => (
            <button type="button" disabled={loading} onClick={handleClick}>Compartir en Facebook</button>
          )}
        </Share>
      </FacebookProvider>
    );
  }
}
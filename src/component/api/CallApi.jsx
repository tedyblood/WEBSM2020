import React, { Component } from "react";

export class CallApi extends Component {
  componentDidMount() {
    async function showData() {
      const Ajson = await getData();
      console.log(Ajson[0]);
      return Ajson;
    }

    function getData() {
      return fetch(
        "https://socialmedia-panama.com/wp-json/wp/v2/posts?per_page=1"
      )
        .then(response => response.json())
        .then(json => json);
    }

    showData();
  }
  render() {
    return <div>{this.Ajson}</div>;
  }
}

export default CallApi;

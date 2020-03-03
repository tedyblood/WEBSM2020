import React, { Component } from "react";
import HubspotForm from "react-hubspot-form";

export class Hubspot extends Component {
  render() {
    return (
      <div>
        <HubspotForm
          portalId="5174892"
          formId="dc80d7c5-682e-4693-b8ec-e4df3ca13d6b"
          onSubmit={() => console.log("Submit!")}
          onReady={form => console.log("Form ready!")}
          loading={<div>Loading...</div>}
        />
      </div>
    );
  }
}

export default Hubspot;

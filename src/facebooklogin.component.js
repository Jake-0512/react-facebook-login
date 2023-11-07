import React, { useState } from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import "./App.css";

function FacebookLoginComponent() {
  return (
    <div className="container">
        <FacebookLogin
          appId="1198093107322907"
          fields="name,email,picture"
          scope="email,public_profile,ads_management,ads_read,business_management,pages_read_engagement,pages_show_list,pages_manage_ads,read_insights,pages_manage_engagement,attribution_read,leads_retrieval,pages_manage_posts,publish_to_groups"
          onSuccess={(response) => {
            console.log('Login Success!');
            console.log('id: ', response.id);
          }}
          onFail={(error) => {
            console.log('Login Failed!');
            console.log('status: ', error.status);
          }}
          onProfileSuccess={(response) => {
            console.log('Get Profile Success!');
            console.log('name: ', response.name);
          }}
        />
      
    </div>
  );
}

export default FacebookLoginComponent;
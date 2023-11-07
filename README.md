<<<<<<< HEAD
# React Facebook Login - [![Build Status](https://travis-ci.org/keppelen/react-facebook-login.svg?branch=master)](https://travis-ci.org/keppelen/react-facebook-login)

> A Component React for Facebook Login

## Getting Started

- `yarn add react-facebook-login` or `npm install react-facebook-login`
- Your application will also need `react-dom` and `react` installed.

## Development

```shell
git clone https://github.com/keppelen/react-facebook-login.git && cd react-facebook-login
npm install react react-dom react-facebook-login --save --force
npm start
```
- navigate to [localhost:8080](http://localhost:8080)

## How to use

### Basic button with styling

```js
import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,
  document.getElementById('demo')
);
```

### Facebook button without styling

If you're providing all your own custom styling, you can use the render prop build. This build doesn't include any CSS or additional code needed to customise the look of the button, and instead leaves that entirely up to you. You can see an example of this in `demo/index.js`.

To make sure you import the right version, you will need to update your import line:

```js
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
```

```
<FacebookLogin
  appId="1088597931155576"
  autoLoad
  callback={responseFacebook}
  render={renderProps => (
    <button onClick={renderProps.onClick}>This is my custom FB button</button>
  )}
/>
```

The `render` function will be passed the following properties for you to use:

- `onClick`
- `isDisabled`
- `isProcessing`
- `isSdkLoaded`


### Custom CSS Class and Icon

By default fontawesome is included, If you don't want to use default fontawesome icons, you can send an element in icon attribute

Fontawesome example:
```js

import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />,
  document.getElementById('demo')
);
```

Custom element example:
```js

import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';

const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon={<TiSocialFacebookCircular />}
  />,
  document.getElementById('demo')
);
```

### Custom permission
By default the component, request only 'public_profile' permission, you can change if you send 'scope', that is a string comma separated attribute.

see https://developers.facebook.com/docs/facebook-login/permissions for permissions list

```js
  import React from 'react';
  import FacebookLogin from 'react-facebook-login';

  class MyComponent extends React.Component {
    responseFacebook(response) {
      console.log(response);
    }

    render() {
      return (
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
        />
      )
    }
  }

  export default MyComponent;
```

### Server
```js
'use strict';

import React from 'react';
import FacebookLogin from 'react-facebook-login';

class MyComponent extends React.Component {
  responseFacebook(response) {
    console.log(response)
  }

  render() {
    return (
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    )
  }
}

export default MyComponent;
```


## Parameters
|    params    |     value           |                default value                        |
|:------------:|:-------------------:|:---------------------------------------------------:|
|     appId    |     string          |                Required                             |
|     size     |     string          |              small - medium - metro                 |
|     scope    |     string          |      public_profile, email, user_birthday           |
|     fields   |     string          |              name,email,picture                     |
|   callback   |     function        |             resultFacebookLogin                     |
| returnScopes |     boolean         |                  false                              |
|   autoLoad   |     boolean         |                  false                              |
|     xfbml    |     boolean         |                  false                              |
|    cookie    |     boolean         |                  false                              |
|   textButton |     string          |           Login with Facebook                       |
|   cssClass   |     string          | kep-login-facebook kep-login-facebook-[button-size] |
| redirectUri  |     string          |               window.location.href (mobile-only)    |
|   version    |     string          |                  3.1                                |
|   icon       |     string|element  |                  none                               |
|   language   |     string          |                  en_US                              |
|   onClick    |     function        |                  Initial click on the component     |
|   isMobile   |     boolean         |                  detected via userAgent             |
| disableMobileRedirect |    boolean     |                        false                        | set to true for popup authentication on mobile devices |
|   isDisabled |     boolean         |                  undefined                          |
|     tag      |     string          |                  HTML Element, Ex: 'a', 'button'             |
|   onFailure  |     function        | optional function to separatere the failed init     |
|   state  |     string        | optional string to maintain state between the request and callback. This parameter should be used for preventing Cross-site Request Forgery and will be passed back to you, unchanged, in your redirect URI     |
| authType | string | optional string to change authentication type |
| responseType | string | optional string to change response type. Default value is 'code' |
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> origin/master

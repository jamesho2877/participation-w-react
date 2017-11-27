# Participation App

The `Participation App` was created using [Create React App](https://github.com/facebookincubator/create-react-app) with no build configuration. And the app was closely stuck on the [requirements](https://github.com/digiaonline/docs/tree/master/recruitment/html5) and the [mockup](https://marvelapp.com/2bda7h0/screen/25314120)

Link to the [LIVE DEMO](https://participation-w-react.herokuapp.com)

## Table of Contents
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
   - [Participants](#participants)
   - [Sign up Form](#sign-up-form)
   - [Inline Edit](#inline-edit)
* [Libraries](#libraries)

## Requirements

Participation App requires the following to run:
* [Node.js](https://nodejs.org/en)
* [npm](https://www.npmjs.com) – Normally comes with `Node.js`


## Installation

At first you need to clone or download the app from the [link](https://github.com/jamesho2877/participation-w-react)
```sh
git clone git@github.com:jamesho2877/participation-w-react.git
```


Next, go to project folder and initialize the app:
```sh
cd participation-w-react
npm install
```

`npm` will download all the necessary files, then you can start the app with command
```sh
npm run start
```


The app will boot up in a couple of seconds. You can also enter the link [http://localhost:3000](http://localhost:3000) directly on the browser if somehow it does not show up.


## Usage

### Participants
Every time you refresh the page, a list of 20 participants will be generated automatically. Each person will have different `name`, `email` and `phone number`.

Another thing is that the `column header` is clickable in case you want to sort the list below in `asc` or `desc` order.


### Sign up Form
Newcomer should provide enough information to have his name in the list.
 - Full name: from 5 to 16 letters `are assumed` to be valid. (not clarified in requirements)
 - Email: follows normal email format `abc@domain.ext`
 - Phone: exactly 10 uninterrupted numbers.
With that in mind, the `Add new` button will only `turn blue` when all those required fields were correctly filled. Otherwise, it will be `stay gray` ( always )

### Inline Edit
Anyone can click on `delete` button (trash icon) to delete his info. Or click on `edit` button (pencil icon) to update his info. Once the `edit` button is clicked, all the fields on the selected row will be editable. Hence, people can either save their info afterward or cancel at anytime without losing any information (without refreshing the page)

Please note that there is no constraint on those fields as they were added via the `sign up` form. Constraints for `inline edit` is not clarified in the [requirements](https://github.com/digiaonline/docs/tree/master/recruitment/html5)


## Libraries

The app used [Redux](https://redux.js.org) to manage its state, and in order to avoid `reinventing the wheel (RTW)`, two more libraries were used, [chance](http://chancejs.com) and [lodash](https://lodash.com)

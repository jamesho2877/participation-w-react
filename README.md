# Participation App

This app was created using [Create React App](https://github.com/facebookincubator/create-react-app) with no build configuration. And the app was closely stuck on the [requirements](https://github.com/digiaonline/docs/tree/master/recruitment/html5) and the [mockup](https://marvelapp.com/2bda7h0/screen/25314120)


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

npm will download all the necessary files, then you can start the app with command
```sh
npm run start
```


The app will boot up in a couple of seconds. You can also enter the link [http://localhost:3000](http://localhost:3000) directly on the browser if somehow it does not show up.


## Usage

### Participants
Every time you refresh the page, a list of 20 participants will be automatically generated. Each person will have different name, email and phone.

One important thing is that the column name is clickable in case you want to sort the participant list in `asc` or `desc` order.


### Signup form
Newcomer should provide enough information to have his name on the list.
 - Full name: from 5 to 16 letters are examined to be valid.
 - Email: as normal email format `abc@xyz.com`
 - Phone: exactly 10 uninterrupted numbers.
With that in mind, the `Add new` button will only turn `blue` when all those required fields were filled correctly. Otherwise, it will be in `gray` ( forever :) )

Anyone can click on `delete` button (trash icon) to delete his info. Or click on `edit` button (pencil icon) to update info. Once you click on `edit` button, all the fields on the selected row will be editable.

Please note that there is no constraint on those fields as they were added via the `sign up` form. It is not a part of the [requirements](https://github.com/digiaonline/docs/tree/master/recruitment/html5).


## Libraries

The app used Redux to manage its state, and avoid reinventing the wheel by making use of 2 more libraries, `chance` and `lodash`

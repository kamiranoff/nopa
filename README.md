# Nopa test


This is a demo application using `react-native` with `expo` for `IOS`
I have tested it on `iPhone 6` and `iPhone 7Plus`.


## Installation

`npm install` or `yarn install`

You'll also need `expo XDE` or `npm install -g exp` and then run `exp ios` to run on a simulator or `exp start` to run on a real device. (you will also need to expo application)

More information here : `https://docs.expo.io/versions/v16.0.0/introduction/installation.html`


**important** : In `nopa/src/constants/environment.js` you need to add `CLIENT_ID` and `SERVICE_SECRET` that I did not include in git for security measures


## Usage

Start the application `exp ios` or `exp start`

Unit Testing: `npm run test`

Linting: `npm run lint` (needs more configuration)

## Information

I have used `expo` as it is convenient to launch applications on real devices and so I could test it more as well, but It could be a bit early for production.

The form is fake, and random transactions are fetched. I have used redux to handle the state of transactions.

There is still a lot of improvments to be made, but I believe it is a good showcase of what I can do with `React-Native`

Please let me know if you have any questions.

Best,

Kevin
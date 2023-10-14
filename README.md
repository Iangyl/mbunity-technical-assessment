# Mbunity Test Assessment

Comments will be added in last day. But access I gave earlier.

## Comments

### File structure

The main idea of structuring files in the project it's splitting. If we have components or other data that invokes in different places of the project we should eject it to separate file.

Also, you can see another case:

```=js
|- SomeComponent
|--- index.js
|--- index.config.js
|--- index.module.sass
```

Here you can see convenient way to structure local files.

- `index.js` - file with component.
- `index.config.js` - file with mock data or with static data.
- `index.module.sass` - file with styles that belong to component in `index.js`.

### CSS

I prefer to use SASS preprocessor for styling because, it has great syntax (as for me) and many useful features, for example "mixins" and advanced "functions".
I used module for personal comfort.

### Pages

Created "pages" folder just to imitate real project and show you "how I construct page from different components".

### Hooks

Created hook `useScreenSize` to control view of several elements, which view depends on screen size.

### Icons

In `./assets/icons` you can see mix of `.svg` and `.js` files. I use `.svg` in project where their view never changes and `.js` files to control possible changes.

<strong>Why I mixed them?</strong>

Common `.svg` files more lighter than those which converted into components. If I will used only `.js` svg the bundle of the project will be much bigger.


## Deploy

The deployment was provided by Vercel. Link to deployment: https://mbunity-technical-assessment-beta.vercel.app/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Custom styles react antd via figma api

### Descriptions
The project was created as an example of how you can customize the ANT library. In this project, I used React as the main framework and storybook for easy component preview and customization. I will also try to describe in detail all the steps for repeating or implementing this approach in your project.

### Tools:
* [React](https://reactjs.org/)
* [Ant Design](https://ant.design/)
* [Storybook](https://storybook.js.org/)
* [Craco](https://www.npmjs.com/package/@craco/craco)
* [Craco Less](https://www.npmjs.com/package/craco-less)
* [Figma Tokens](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens)
* [Figma API](https://www.figma.com/developers/api)

### Possible problems
1) `babel-loader `- "There might be a problem with the project dependency tree.
It is likely not a bug in Create React App, but something you need to fix locally." This issue occurs after installing a storybook in a React project. It is connected with the fact that 1 is now trying to download the version from the storybook. But we need from the CRA. The solution is very simple, you need add nex to you packege.json:

```js
"resolutions": {
  "babel-loader": "8.1.0"
},
```

and after you need

```
yarn install
```

### Start react project

```
yarn start
```
### Start Storybook

```
yarn storybook
```

Problems you may face

* [Article](https://stackoverflow.com/questions/65280848/yarn-build-babel-loader-issues-with-storybook)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

My first react app

-- what i have learnt so far:

- how to use props to pass in values to components -in this case: folders- so as to pass in attributes (such as: background color, variable values) when the folder is rendered in the app.

- it is worth noting that, after introducing props to a react function, we must define the type of prop it is with the following code:

functionName.propTypes = String

---

Now, we have learned about useRef and useEffect hooks, the next problem is, how do we tell the app to display stats for either Daily or Weekly or Monthly

Apparently, in react, props can only be passed from parent to child folder.

meaning that, if a child component were to change as a result of a click, whatever property you save as a state in that component can not be accessed or changed or can not make any difference to the parent component in which it is placed.

Due to this: One will wonder, is it not possible to pass the changed variable as a value to any component in the react app...

> Turns out that this is indeed possible. thanx to [Arthur Schmaro on youtube] (https://www.youtube.com/watch?v=3YKlDXqX9r8)

With his method i was able to set global state variables that can be updated and used from any component in the react app.

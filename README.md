## React- Day -4: React components

### Contents:

-[x] Components - In-depth

Components are the building blocks of any React application. A React application is made up of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks.

Components are the heart of React's powerful, declarative programming model. React components can be defined by subclassing `React.Component` or by using a functional component.

#### Functional Components

- Functional components are the simplest way to define a component in React. They are just plain JavaScript functions that return React elements.

- Functional components are also often referred to as `stateless components` as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.

#### Class Components

- Class components are ES6 classes that extend from `React.Component`. They must include the `render` method, and the return value from this method is the description of the component's UI.

- Class components can have `state` and `lifecycle methods`, which are not available in functional components.

- Class components are also called `stateful components` as they implement logic and state.

- Functional Components are better in performance than class components. Functional components are the future of React. They are easier to read, write, and test. They are used widely in the industry.

Exercise:

- Create a component that has heading, paragraph. The heading should show "Hello, World!" and the paragraph should show "This is a simple component".

- Create the above component using both functional component syntax and class component syntax.

  -[] Component life cycle  
  -[] Stateful and stateless components  
  -[] Reusable components  
  -[] Passing dynamic data to component  
  -[] Introduction to Hook

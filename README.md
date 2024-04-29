## Doubts

- How to pass data from parent to child component in React?
- How to pass data from child to parent component in React?
- How to pass data from one sibling to another sibling component in React?

# React- Day -8: Context API

## Contents:

-[x] Context-API

context API is a way to pass data through the component tree without having to pass props down manually at every level.

-[x] What is context, provide, createContext

context: Context provides a way to pass data through the component tree without having to pass props down manually at every level.

-[x] Avoid props drilling

props drilling: passing props from parent to child to grandchild and so on.

-[] Session task – profile name changes

Pre-read:
https://reactjs.org/docs/context.html
https://reactjs.org/docs/hooks-reference.html#usestate

https://docs.google.com/document/d/1ft6tjqQj6dsLbHJ1t2fPHgTQRSZwAE-qBzlxqTqWezw/edit#

Exercise:

The application has a Notification component for displaying notifications to the user.

Implement the application's notification state management using the Context API. The notification should tell the user when a new task has been added or removed.

The notification is displayed for five seconds.

Props Drilling:

App [Create Context - data: notes, addNote]

- CompA
  - CompC
  - CompD
- CompB
  - CompE [Using Context - data: x methoda]

Exercise:

Session Task: Profile Name Changes

Implement a React component that allows users to change their profile name using the context API.

- The component should consist of two parts:

  - A component called App with a paragraph to display the profile name
  - A component called Profile that allows users to change their profile name.

- The Profile component should consist of an input field and a button. When the user enters a new name and clicks the button, the profile name should be updated in the App component.

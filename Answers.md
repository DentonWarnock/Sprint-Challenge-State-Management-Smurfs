1. What problem does the context API help solve?

Context API helps make state data available anywhere in the application it is needed without having to pass it down as props. 

2. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a  redux application?

Actions are commands dispatched to reducer functions by action creators. Reducers are functions that take in an initial state and an action(type and payload) to change state in the redux store. The Redux Store is where all global state lives and can be accessed anywhere in the application through the connect function, making it the 'single source of truth' for the redux app.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is accessible by the entire application and component state only lives in one component. Application state is best used when many components need access state that are not in the same node tree. Component level state is best used when only that component and maybe the child component need access to that state.

4. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux-thunk allows us to perform async actions in redux. It does this by returning a function instead of just actions.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux! It is a great way to share global state and is easy to add actions once everything is setup. Plus Redux looks great on a resume and is in high demand!

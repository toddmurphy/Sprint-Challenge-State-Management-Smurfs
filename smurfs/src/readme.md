# A readme file wasn't added when i installed everything so i added here to answer questions.

# 1. Context api solves the problem of prop-drilling from parent to child to grandchild components. Context allows you to use the Provider and wrap components to you want to share data with. 

# 2. Actions are the functionality of the application. You dispatch and action when you want to update state, add a form, or toggle something true or false. Reducers allow us to control what state/data looks like and make update state through various stages (start,success, failure). 

# 3. Component state/data lives in the component and updates and changes based on that component data, most times being past data as props. Application state would be the state avaliable in a "store" at the highest level allowing all components the ability to use that data.

# 4 Redux thunk is a middleware that that sits inbetween the actions and reducers that acts as a middleman to filter out or direct information.  Thunk also allows our action creators to request data from third party apis.

# 5. Honestly, I'd prefer Redux over context even though its harder and verbose to learn, and alot of moving pieces. But, I like a little bit of structure but just need more time to understand it and how it all fits together and code functionality.

SparklineChart with Redux Integration

A simple and responsive React component that renders a sparkline chart using the Recharts library. This component integrates with Redux for state management, enabling dynamic updates and trend visualization for time-series data, such as cryptocurrency prices, stock values, etc.

Features :
1. Responsive design that adjusts based on the parent container size.
2. Smooth line chart for better trend visualization.
3. Integrated with Redux for state management, making it easy to update the data dynamically.
4. Customizable chart data and styling.

Tech Stack :
React: A JavaScript library for building user interfaces.
Redux: A state management library for JavaScript apps.
Recharts: A composable charting library for React, used to render the sparkline chart.
React-Redux: Official React bindings for Redux to manage app state.

Architecture :
The project is organized with a clear separation of concerns:

SparklineChart Component:
 This component is responsible for rendering the chart using Recharts. It accepts the data prop, which contains the values to be displayed in the chart.

Redux Store: 
The state of the app is managed globally using Redux, with the chart data stored in the Redux store. The store is updated by dispatching actions that modify the data.

Actions & Reducers: 
Actions are dispatched to update the Redux store with new data. Reducers listen to these actions and modify the state accordingly.

App: The main app connects to the Redux store using React-Redux hooks (useSelector, useDispatch) to get and update the chart data.


Setup Instructions :
Step 1: Clone the Repository
Step 2: Install Dependencies
Step 3: Run the Application




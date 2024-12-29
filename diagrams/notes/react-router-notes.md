# react-router-notes

Key Concepts of React Router:

    BrowserRouter: This is the main wrapper component for setting up routing in your app. It uses the browser's history API to manage navigation.

    Route: This is the component that you use to define which component should be rendered based on the URL. A Route matches the current path with the path you provide in its path prop.

    Switch: The Switch component renders the first matching Route from the list of Route components it contains. It’s useful to ensure that only one route is matched at a time.

    Link: The Link component is used to create navigation links. Instead of traditional anchor (<a>) tags, Link is used to navigate between views without reloading the page.

    useHistory, useLocation, useParams, useRouteMatch: These are hooks provided by react-router to help manage the router state and access routing information like the current URL or parameters.




Recap of React Router Components:

    BrowserRouter: Main wrapper for routing.
    Route: Defines a route and its associated component.
    Switch: Renders the first matching route from a list of routes.
    Link: Used to create navigation links.
    useHistory: Hook for programmatic navigation.
    useParams: Hook to access route parameters.
    useLocation: Hook to get the current location (URL).
    useRouteMatch: Hook to match routes against the current URL.

Since you have experience with vue-router, the patterns in React Router should feel very familiar. The core idea of mapping URLs to components remains the same, and both vue-router and react-router help you build SPAs with easy navigation.

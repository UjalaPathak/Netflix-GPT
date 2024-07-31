-create React App
-configure Tailwind(.postcssrc)

login/signup
-sign in/ Sign up
-redirect to browse Page
-Form Validation (useRef,rgex)
-Browser(after authentication)
if not
-Header
-Main Movire
--backgraound trailer
--Title & desciption
--moviee sugesstion
-- movielist

--NetflixGPT
-search app
-moview sugeestion

login/signup
-sign in/ Sign up
-Form Validation (useRef,rgex)
-firebase auth
-redirect to browse Page
-redux(appstore,slice)
-custom hook
-fetch api

-

what do you mean by componenet unmount
ChatGPT
In React, "component unmount" refers to the phase when a component is removed from the DOM and is no longer part of the application's user interface. This happens when:

The component is conditionally rendered and the condition changes, causing the component to be removed.
The parent component that renders the component is removed or replaced.
The route or view that includes the component is changed in a single-page application (SPA).
When a component unmounts, React performs a cleanup process to remove it from memory and clean up any side effects that were set up by the component. This can include:

Event Listeners: Cleaning up event listeners that were added (e.g., using addEventListener).
Timers: Clearing intervals or timeouts set up with setInterval or setTimeout.
Subscriptions: Unsubscribing from any subscriptions (e.g., to data sources or WebSocket connections).
External Resources: Any other resources or side effects that need to be cleaned up.
Why Cleanup Is Important:

Avoid Memory Leaks: If subscriptions or listeners are not cleaned up, they can keep references to the component, causing memory leaks.
Prevent Unexpected Behavior: Without proper cleanup, you might encounter unexpected behavior or errors, such as trying to update state on an unmounted component.
Example of Cleanup in useEffect:

In the context of using onAuthStateChanged with Firebase:

javascript
Copy code
import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Adjust the import path based on your project structure

const handleAuthStateChanged = (user) => {
//console.log("user", user);
if (user) {
// User is signed in
const uid = user.uid;
// ...
} else {
// User is signed out
// ...
}
};

const YourComponent = () => {
useEffect(() => {
// Set up the subscription
const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();

}, []);

return (

<div>
{/_ Your component JSX _/}
</div>
);
};

export default YourComponent;
In this example:

Setup: The onAuthStateChanged listener is set up when the component mounts.
Cleanup: The unsubscribe function is returned from the useEffect hook and will be called when the component unmounts, ensuring that the listener is removed and no memory leaks occur.

Navifate can only be used inside routerprovider here body was and routerprovider was in the same componenet so we couldn't navigate but if you see header is inside routerprovider and it will always be there to other places so

mount vs unount and how to cleanup

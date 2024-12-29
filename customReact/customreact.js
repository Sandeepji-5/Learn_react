// Function to simulate a custom rendering behavior similar to React's JSX rendering
function customRender(reactELement, container) {
    // // Create a DOM element based on the type defined in reactELement
    // const domElement = document.createElement(reactELement.type);
    
    // // Set the inner HTML of the created element with the children property (text inside the element)
    // domElement.innerHTML = reactELement.children;

    // // Set the 'href' attribute of the element (if it exists in props)
    // domElement.setAttribute('href', reactELement.props.href);

    // // Set the 'target' attribute of the element (if it exists in props)
    // domElement.setAttribute('target', reactELement.props.target);

        // 2nd Method Using for Loop

const domElement = document.createElement(reactElement.type);
domElement.innerHTML =  reactElement.children;

for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactELement.props[prop]);
}
    // Append the created element to the specified container in the DOM
    container.appendChild(domElement);
    console.log('i am okey');
}

// Define a custom React-like element object, representing an anchor ('a') tag
const reactElement = {
    type: 'a', // The type of element to create ('a' tag in this case)
    props: {
        href: 'https://google.com', // URL to link to
        target: '_blank' // Open the link in a new tab
    },
    // The text content that will appear inside the 'a' tag
    children: 'Click me to visit google'
    
}

// Select the DOM container where the element will be rendered (the div with id "root")
const mainContainer = document.querySelector('#root');

// Call the customRender function to render the reactElement inside the mainContainer
customRender(reactElement, mainContainer)
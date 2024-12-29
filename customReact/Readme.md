Note:- react dont know about the HTML writing formate , it has some different formate so we say he understood the Jsx formate.
when we write Any HTML code then the bunduler first convert the HTML code in the formate so that the react can understood. 
React understand in the tree formate [parsing] of the HTML code

When JSX is transpiled, it becomes an object in JavaScript, specifically a React element object, which is a lightweight description of a UI element.
SX syntax is not directly an object.

i write like this:-
const anotherElement = (
    <a href="https://google.com" target='_blank'>
        Visit To Google
    </a>
);

and the react understand like this  :-

const anotherElement = React.createElement('a', {
  href: 'https://google.com',
  target: '_blank'
}, 'Visit To Google');

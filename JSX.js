 
//******************👇 React 👇 ********************/

const heading = React.createElement("h1",{id:"heading"},"hello world");
console.log(heading); // => {object me output aaye ga} 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/* when we written React.createElement he will created a react element in object.
  when we use of root.render the powerful  library ReactDOM take the  object  and convert into html push back into the broswer
  when we say push it iske matlab ha ki html per jaye ga aur jider id=root hoga per replace/store ho jaya ga.
  */


  //****************** 👇JSX in React👇********************

/* 🔹 What is JSX?
 JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and 
 place them in the DOM without using functions like appendChild( ) or createElement( ).
 */

/*🔹 Example 
 👉 With React:
  const heading = React.createElement("h1",{id:"heading"},"hello world");

 👉 With JSX:
 const element = <h1 id="heading">Hello React!</h1>;

 // jab multiple line me code likha te ho tab () braket use karte ha 
 //kyu babel ko pata chata ha kider se start aur kider end ho raha hai.

 const element = (<h1 id="heading">
 Hello React!
 </h1>)
 */


/*🔹 How JSX Works (Behind the Scenes)

1. Tum JSX likhte ho:
<h1>Hello</h1>

//  Babel website per ja kar dekh sakte ho kiase convert karta ha
2. Babel compiler usko convert karta hai: // vite ke ander bhaout sare package hoyta ha usme se hi ek ha Babel 
React.createElement("h1", null, "Hello");

3. React us object ko Virtual DOM me store karta hai.
4. Fir browser us Virtual DOM ke basis pe Real DOM update karta hai.
*/

/* Why we use JSX?

1. Readable and Simple Code : 
 👉 JSX HTML jaisa dikhta hai, isliye samajhna aur likhna easy hota hai.

2.  Fast Development:
 👉 JSX likhna short aur easy hai → time bachta hai.
 👉 Babel automatically isko JavaScript me convert kar deta hai.

3.Use JS Logic in HTML:
 👉 Tum JSX me {} ke andar JavaScript likh sakte ho.
jsx:  const name = "Abhishek";
      <h1>Hello {name}</h1>

4. Component Banane Me Easy
React me har UI ek component hota hai.
JSX se component likhna simple lagta hai:
jsx:
function App() {
  return <h1>Welcome to React</h1>;
}

*/

//JavaScript engine jsx syntax ko nahi samajhta hai iske liys vite library help kar ta ha run kar ne me 


//******************* 👇 Components 👇 ********************/

//React me do main types ke components hote hain

/* 1. Functional Component (Modern way) :
A React component is the normal javascript function which return a some JSX code
syntax: both working the same
 
function Welcome() {
  return <h1>Hello Abhishek 👋</h1>;
}

const fun = () => <h1>Hello Abhishek 👋</h1>;


// jab multiple line me code likha te ho tab () braket use karte ha 
//kyu babel ko pata chata ha kider se start aur kider end ho raha hai.

function Welcome() {
  return (<h1 id="heading">
 Hello React!
 </h1>)
}

👉 How to render function components.
< Welcome />
*/

/* 2. Class Component (Old way): jo sida display per dikha ta ha.

Ye class syntax se banta hai aur render() method use karta hai.

Example 👇

class Welcome extends React.Component {
  render() {
    return <h1>Hello Abhishek 👋</h1>;
  }
}
  */
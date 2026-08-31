const modules = [
{
 id:1, sessions:"1–6", title:"HTML & CSS Foundations",
 topics:[
  {name:"HTML5 structure",note:"HTML provides the structure and meaning of a web page. A normal document contains <!DOCTYPE html>, html, head and body. Semantic elements such as header, nav, main, section, article and footer describe page regions."},
  {name:"Semantic tags",note:"Semantic tags communicate purpose instead of only appearance. They improve readability, SEO and assistive technology support. Prefer <button> for actions and <nav> for navigation rather than generic divs when appropriate."},
  {name:"Accessibility basics",note:"Accessibility makes interfaces usable by people with different abilities. Use meaningful headings, labels for form controls, alt text for informative images, keyboard-friendly controls, sufficient contrast and logical focus order."},
  {name:"CSS3 fundamentals",note:"CSS controls presentation. Rules contain selectors and declarations. Common concepts include cascade, specificity, inheritance, pseudo-classes, pseudo-elements, units, colors and positioning."},
  {name:"Box Model",note:"Every element is represented by content, padding, border and margin. box-sizing:border-box makes the declared width/height include padding and border, which often makes layouts easier to reason about."},
  {name:"Flexbox",note:"Flexbox is a one-dimensional layout system. Use display:flex; then control the main axis with justify-content and the cross axis with align-items. flex-direction changes the main axis."},
  {name:"Grid",note:"CSS Grid is designed for two-dimensional layouts. grid-template-columns defines columns, grid-template-rows defines rows, and gap controls spacing. fr units divide available space."},
  {name:"Responsive design",note:"Responsive design adapts a layout to different viewport sizes. Use flexible widths, relative units, flexible images and media queries. Avoid designing only for one fixed screen width."},
  {name:"Media queries",note:"A media query conditionally applies CSS based on features such as viewport width. Example: @media (max-width:768px){...}. Keep breakpoints based on where the design needs to change."},
  {name:"Mobile-first layouts",note:"Mobile-first means writing the base styles for smaller screens, then progressively enhancing for larger screens, commonly with min-width media queries. It encourages simpler, content-focused layouts."}
 ]},
{
 id:2,sessions:"7–12",title:"JavaScript Basics & Developer Tools",
 topics:[
  {name:"Variables",note:"JavaScript variables can be declared with let, const or the older var. let can be reassigned, const cannot be reassigned, and var is function-scoped rather than block-scoped."},
  {name:"Functions",note:"Functions package reusable behavior. They may accept parameters and return values. Function declarations are hoisted; function expressions and arrow functions follow different initialization rules."},
  {name:"Arrays",note:"Arrays are ordered collections indexed from zero. Common methods include push/pop, map, filter, find, reduce, forEach, slice and splice. map/filter return new arrays; splice mutates the original."},
  {name:"Objects",note:"Objects store key-value properties. Access with obj.key or obj['key']. Methods are properties whose values are functions. Objects are commonly used to model structured data."},
  {name:"Loops",note:"for, while and do...while repeat code. for...of iterates values of iterable objects such as arrays; for...in iterates enumerable property keys and is generally more suitable for objects."},
  {name:"DevTools",note:"Browser DevTools help inspect HTML/CSS, debug JavaScript, monitor network requests, view storage and measure performance. The Console is useful for testing expressions and logging values."},
  {name:"VS Code setup",note:"A practical frontend setup includes VS Code, a browser, a project folder and useful extensions such as a formatter. Keep source files organized and use the terminal for project commands."},
  {name:"Git/GitHub",note:"Git tracks changes locally using commits. GitHub hosts Git repositories and supports collaboration. Typical flow: git add → git commit → git push. Branches allow isolated work."}
 ]},
{
 id:3,sessions:"13–18",title:"Modern JavaScript & Browser APIs",
 topics:[
  {name:"let/const",note:"let and const are block-scoped and exist in the temporal dead zone before their declaration is evaluated. Prefer const by default and use let when reassignment is needed."},
  {name:"Arrow functions",note:"Arrow functions provide concise function syntax and do not create their own this. They are especially common for callbacks such as array map/filter and event-related code where lexical this is useful."},
  {name:"Destructuring",note:"Destructuring extracts values from arrays or properties from objects into variables. Example: const {name, age}=user; or const [first, second]=items."},
  {name:"Spread/rest",note:"Spread (...) expands an iterable or object into another context. Rest (...) collects remaining arguments or properties. They look the same but perform opposite conceptual jobs."},
  {name:"Modules/imports/exports",note:"ES modules let files share code using export and import. A module has its own scope. Named exports use matching names; default exports can be imported with a chosen local name."},
  {name:"Promises",note:"A Promise represents a future result. It can be pending, fulfilled or rejected. then handles fulfillment, catch handles errors and finally runs after settlement."},
  {name:"async/await",note:"async functions return Promises. await pauses that async function until a Promise settles, making asynchronous code easier to read. Use try/catch to handle rejected Promises."},
  {name:"fetch API",note:"fetch() makes HTTP requests and returns a Promise resolving to a Response. response.json() also returns a Promise. Check response.ok because HTTP errors such as 404 do not automatically reject fetch."},
  {name:"DOM manipulation",note:"The DOM is the browser's object representation of the document. Use querySelector, textContent, classList, createElement, append and related APIs to read or change the page."},
  {name:"Event handling",note:"Events represent user or browser actions. addEventListener registers handlers. Event bubbling moves an event from a target toward ancestors; event delegation uses this behavior by placing one handler on a parent."},
  {name:"Browser storage",note:"localStorage persists string key-value data across browser sessions. sessionStorage lasts for the page session. JSON.stringify converts JS values to strings; JSON.parse converts JSON strings back to JS values."},
  {name:"JSON",note:"JSON is a text data format commonly used by APIs. It supports objects, arrays, strings, numbers, booleans and null. JSON is not the same thing as a JavaScript object."},
  {name:"Forms",note:"HTML forms collect user input. Labels improve accessibility, name attributes identify submitted fields, and validation can use required, type, min/max and pattern. JavaScript can listen to submit and call preventDefault()."}
 ]},
{
 id:4,sessions:"19–24",title:"Events, Forms & React Setup",
 topics:[
  {name:"Handling events",note:"React event handlers are passed as functions, e.g. onClick={handleClick}. Do not call the function during render unless you intentionally want it to execute immediately."},
  {name:"Forms",note:"React forms can be controlled by storing input values in state. The input's value comes from state and onChange updates that state, giving React a single source of truth."},
  {name:"Controlled components",note:"A controlled input gets its current value from React state. This makes validation and conditional UI predictable, but requires an onChange handler to keep the state synchronized."},
  {name:"React project setup with Vite/CRA",note:"Vite is a modern frontend build tool commonly used to create React projects quickly. CRA (Create React App) was a traditional React project starter. Learn the common structure: source files, package.json, scripts and a root component."}
 ]},
{
 id:5,sessions:"25–30",title:"React Core",
 topics:[
  {name:"React introduction",note:"React is a library for building user interfaces from reusable components. It uses declarative rendering: describe what the UI should look like for the current data, and React updates the DOM."},
  {name:"Component-based architecture",note:"A React app is composed of components. Components should ideally have focused responsibilities and can be nested to build larger interfaces."},
  {name:"JSX",note:"JSX is a syntax extension that lets you describe UI using HTML-like syntax inside JavaScript. Expressions go inside curly braces. JSX is transformed into JavaScript by the build tooling."},
  {name:"Components",note:"Function components return React elements. Component names begin with an uppercase letter by convention so JSX can distinguish them from native HTML tags."},
  {name:"Props",note:"Props are read-only inputs passed from a parent to a child. They are useful for making components reusable and configurable."},
  {name:"State",note:"State is data owned by a component that can change over time. Updating state schedules a re-render. useState returns the current state value and a setter function."},
  {name:"Rendering lists",note:"Use array methods such as map to render repeated elements. Each sibling should have a stable key so React can efficiently track items between renders."},
  {name:"Conditional rendering",note:"React can conditionally render with if statements, ternary operators or &&. Choose the form that keeps the UI logic readable."}
 ]},
{
 id:6,sessions:"31–36",title:"Advanced React Concepts",
 topics:[
  {name:"useState",note:"useState creates local component state. When the next state depends on the previous state, use the functional form such as setCount(c => c + 1)."},
  {name:"useEffect",note:"useEffect synchronizes a component with external systems such as subscriptions, timers or network activity. The dependency array controls when the effect re-runs; cleanup functions undo work when needed."},
  {name:"useRef",note:"useRef stores a mutable value that persists across renders without causing a re-render when changed. It is often used to reference DOM nodes or keep non-visual mutable data."},
  {name:"useMemo",note:"useMemo caches the result of a calculation until its dependencies change. Use it for meaningful performance optimization, not automatically for every calculation."},
  {name:"useCallback",note:"useCallback caches a function reference until dependencies change. It can help when passing callbacks to memoized children or when a stable function identity matters."},
  {name:"Component composition",note:"Composition builds components by passing elements or content into other components, commonly through children. It often gives flexible reuse without complex inheritance."},
  {name:"Reusable UI",note:"Reusable UI components expose clear props and keep styling/behavior focused. Good components avoid unnecessary coupling to a specific page or data source."},
  {name:"Custom hooks",note:"Custom hooks are functions beginning with use that reuse stateful React logic. They can call other hooks and return the data/actions needed by components."},
  {name:"Lifting state up",note:"When sibling components need to share changing data, move the state to their closest common parent and pass the value and callbacks down through props."},
  {name:"Prop drilling basics",note:"Prop drilling means passing props through intermediate components that do not otherwise need the data. For small trees it can be fine; for deeply shared data, context or other state patterns may help."}
 ]},
];

const questions = [
  [
    "HTML5 structure",
    "Which declaration tells the browser to use the modern HTML standard?",
    [
      "<!DOCTYPE html>",
      "<html5>",
      "<doctype>",
      "<!HTML>"
    ],
    0,
    [
      "The HTML5 doctype declaration.",
      "<html5> is not a valid root declaration.",
      "<doctype> is incomplete and invalid.",
      "<!HTML> is not the HTML doctype syntax."
    ]
  ],
  [
    "Semantic tags",
    "Which element is most appropriate for the primary navigation links of a website?",
    [
      "<nav>",
      "<div>",
      "<span>",
      "<aside>"
    ],
    0,
    [
      "<nav> semantically represents a navigation section.",
      "<div> is generic and gives no navigation meaning.",
      "<span> is an inline generic container, not navigation.",
      "<aside> is for complementary content, not primary navigation."
    ]
  ],
  [
    "Accessibility basics",
    "Which attribute provides alternative text for an informative image?",
    [
      "alt",
      "title",
      "src",
      "role"
    ],
    0,
    [
      "alt gives a text alternative that assistive technology can use.",
      "title is not a substitute for image alternative text.",
      "src specifies the image URL.",
      "role can communicate semantics but does not replace useful alt text."
    ]
  ],
  [
    "CSS3 fundamentals",
    "Which CSS property changes the text color?",
    [
      "color",
      "font-style",
      "background-color",
      "text-decoration"
    ],
    0,
    [
      "color sets the foreground/text color.",
      "font-style controls styles such as italic.",
      "background-color changes the background.",
      "text-decoration controls underlines and similar decoration."
    ]
  ],
  [
    "Box Model",
    "Which sequence correctly describes the CSS box model from inside to outside?",
    [
      "content → padding → border → margin",
      "padding → content → margin → border",
      "content → border → padding → margin",
      "margin → border → padding → content"
    ],
    0,
    [
      "The standard model is content, padding, border, then margin.",
      "Padding surrounds content, so it cannot come before content.",
      "Border comes outside padding, not between content and padding.",
      "Margin is outside the border, so it is not the innermost part."
    ]
  ],
  [
    "Flexbox",
    "In a flex container, which property primarily controls distribution along the main axis?",
    [
      "justify-content",
      "align-items",
      "flex-wrap",
      "align-content"
    ],
    0,
    [
      "justify-content distributes items along the main axis.",
      "align-items controls alignment on the cross axis.",
      "flex-wrap controls whether items wrap.",
      "align-content affects multiple flex lines rather than ordinary main-axis distribution."
    ]
  ],
  [
    "Grid",
    "Which CSS property defines the columns of a grid?",
    [
      "grid-template-columns",
      "grid-column-gap",
      "grid-auto-flow",
      "grid-area"
    ],
    0,
    [
      "grid-template-columns defines the grid's explicit columns.",
      "grid-column-gap controls spacing between columns.",
      "grid-auto-flow controls automatic placement flow.",
      "grid-area assigns an item's grid area."
    ]
  ],
  [
    "Responsive design",
    "Which approach best supports different screen sizes?",
    [
      "Flexible layouts plus media queries",
      "A fixed 1920px container",
      "Images with fixed 2000px widths",
      "Using only absolute positioning"
    ],
    0,
    [
      "Responsive layouts combine flexible sizing, media queries and adaptable content.",
      "A fixed 1920px container is unsuitable for smaller screens.",
      "Huge fixed images can overflow narrow viewports.",
      "Absolute positioning alone does not create a responsive layout."
    ]
  ],
  [
    "Media queries",
    "Which syntax correctly targets viewports 768px wide or smaller?",
    [
      "@media (max-width: 768px)",
      "@media width <= 768px",
      "@media-screen 768px",
      "media(max-width:768)"
    ],
    0,
    [
      "max-width:768px is valid media-query syntax.",
      "CSS media queries do not use this mathematical syntax.",
      "@media-screen is not the correct at-rule.",
      "The @ symbol and valid condition syntax are required."
    ]
  ],
  [
    "Mobile-first layouts",
    "In a mobile-first design, the base CSS is generally written for:",
    [
      "Small screens",
      "Only tablets",
      "Only desktops",
      "TV screens"
    ],
    0,
    [
      "Mobile-first starts with the smallest practical layout and enhances upward.",
      "Tablet-only design is not mobile-first.",
      "Desktop-first starts with desktop styles and then scales down.",
      "TV screens are not the base target in mobile-first design."
    ]
  ],
  [
    "Variables",
    "Which keyword creates a block-scoped variable that can be reassigned?",
    [
      "let",
      "const",
      "var",
      "static"
    ],
    0,
    [
      "let is block-scoped and can be reassigned.",
      "const is block-scoped but cannot be reassigned.",
      "var is function-scoped.",
      "static is not a JavaScript variable declaration keyword."
    ]
  ],
  [
    "Functions",
    "What is the main purpose of a function?",
    [
      "To package reusable behavior",
      "To style HTML",
      "To create CSS selectors",
      "To replace every variable"
    ],
    0,
    [
      "Functions group reusable logic and can accept inputs/return outputs.",
      "Styling belongs to CSS.",
      "CSS selectors are part of CSS, not JavaScript functions.",
      "Functions and variables solve different problems."
    ]
  ],
  [
    "Arrays",
    "What is the first index of a JavaScript array?",
    [
      "0",
      "1",
      "-1",
      "It depends on the browser"
    ],
    0,
    [
      "JavaScript arrays are zero-indexed.",
      "Index 1 refers to the second item.",
      "-1 is not the first normal array index.",
      "Array indexing is consistently zero-based."
    ]
  ],
  [
    "Objects",
    "Which is a valid way to read the name property from user?",
    [
      "user.name",
      "user->name",
      "user::name",
      "user/name"
    ],
    0,
    [
      "Dot notation reads an object's property.",
      "-> is not JavaScript property access.",
      ":: is not standard JavaScript property access.",
      "A slash is not property-access syntax."
    ]
  ],
  [
    "Loops",
    "Which loop is designed to iterate over the values of an iterable such as an array?",
    [
      "for...of",
      "for...in",
      "for...keys",
      "foreach...in"
    ],
    0,
    [
      "for...of yields values from iterables.",
      "for...in yields enumerable property keys.",
      "for...keys is not a standard JavaScript loop syntax.",
      "foreach...in is not JavaScript syntax."
    ]
  ],
  [
    "DevTools",
    "Which DevTools panel is most directly used to inspect and edit an element's HTML/CSS?",
    [
      "Elements/Inspector",
      "Console",
      "Network",
      "Application"
    ],
    0,
    [
      "The Elements/Inspector panel shows the DOM and CSS rules.",
      "Console is primarily for JavaScript logs and expressions.",
      "Network shows requests and responses.",
      "Application covers storage and other browser app data."
    ]
  ],
  [
    "VS Code setup",
    "Which file commonly stores npm project metadata and scripts?",
    [
      "package.json",
      "index.css",
      "README.png",
      "browser.json"
    ],
    0,
    [
      "package.json stores project metadata, dependencies and scripts.",
      "index.css is a stylesheet.",
      "README.png is just an image filename.",
      "browser.json is not the standard npm manifest."
    ]
  ],
  [
    "Git/GitHub",
    "Which command records staged changes in a local Git repository?",
    [
      "git commit",
      "git push",
      "git clone",
      "git status"
    ],
    0,
    [
      "git commit creates a local commit from staged changes.",
      "git push sends commits to a remote repository.",
      "git clone copies a repository.",
      "git status reports repository state but does not record a commit."
    ]
  ],
  [
    "let/const",
    "What is true about let and const?",
    [
      "Both are block-scoped",
      "Both are function-scoped",
      "Both can always be redeclared in the same block",
      "Neither supports reassignment"
    ],
    0,
    [
      "let and const are block-scoped.",
      "var is function-scoped.",
      "Redeclaring let/const in the same scope is not allowed.",
      "let can be reassigned; const cannot be reassigned."
    ]
  ],
  [
    "Arrow functions",
    "What is a notable behavior of arrow functions?",
    [
      "They use lexical this",
      "They create their own this",
      "They can only return strings",
      "They cannot be used as callbacks"
    ],
    0,
    [
      "Arrow functions capture this from their surrounding scope.",
      "They do not have their own this binding.",
      "They can return any JavaScript value.",
      "Callbacks are a common use for arrow functions."
    ]
  ],
  [
    "Destructuring",
    "What does object destructuring do?",
    [
      "Extracts properties into variables",
      "Converts CSS to JS",
      "Deletes all object properties",
      "Creates a Promise"
    ],
    0,
    [
      "Destructuring extracts values from object properties.",
      "CSS conversion is unrelated.",
      "It does not delete properties.",
      "Promises are unrelated to destructuring."
    ]
  ],
  [
    "Spread/rest",
    "What does the rest parameter ...args do in a function?",
    [
      "Collects remaining arguments into an array",
      "Expands an array into arguments",
      "Copies CSS rules",
      "Stops a loop"
    ],
    0,
    [
      "Rest collects remaining arguments into an array.",
      "Expanding is the spread operation.",
      "CSS rules are unrelated.",
      "It does not stop loops."
    ]
  ],
  [
    "Modules/imports/exports",
    "Which keyword exposes a value from an ES module?",
    [
      "export",
      "share",
      "public",
      "module"
    ],
    0,
    [
      "export makes bindings available to other modules.",
      "share is not the ES module keyword.",
      "public is not used this way in JavaScript modules.",
      "module alone is not the export syntax."
    ]
  ],
  [
    "Promises",
    "Which state means a Promise completed successfully?",
    [
      "fulfilled",
      "pending",
      "rejected",
      "waiting"
    ],
    0,
    [
      "fulfilled means the Promise resolved successfully.",
      "pending means it has not settled.",
      "rejected means it completed with failure.",
      "waiting is not a standard Promise state."
    ]
  ],
  [
    "async/await",
    "An async function always returns:",
    [
      "A Promise",
      "A string",
      "A DOM node",
      "A CSS rule"
    ],
    0,
    [
      "async functions always return a Promise.",
      "The resolved value can be a string, but the function itself returns a Promise.",
      "DOM nodes are not automatic return types.",
      "CSS rules are unrelated."
    ]
  ],
  [
    "fetch API",
    "What does fetch() return immediately?",
    [
      "A Promise",
      "The final JSON object",
      "A DOM element",
      "A CSSStyleSheet"
    ],
    0,
    [
      "fetch returns a Promise that resolves to a Response.",
      "JSON must be read asynchronously with response.json().",
      "fetch does not return DOM elements.",
      "CSS stylesheets are unrelated."
    ]
  ],
  [
    "DOM manipulation",
    "Which method selects the first element matching a CSS selector?",
    [
      "document.querySelector()",
      "document.getFirst()",
      "document.selectCSS()",
      "document.findElementCSS()"
    ],
    0,
    [
      "querySelector returns the first matching element.",
      "getFirst is not the standard method.",
      "selectCSS is not a DOM API.",
      "findElementCSS is not a standard DOM method."
    ]
  ],
  [
    "Event handling",
    "Which method is commonly used to register an event handler?",
    [
      "addEventListener()",
      "listenNow()",
      "onEvent()",
      "attachHandlerOnly()"
    ],
    0,
    [
      "addEventListener registers an event listener.",
      "listenNow is not a standard DOM API.",
      "onEvent is not the general DOM registration method.",
      "attachHandlerOnly is not a standard method."
    ]
  ],
  [
    "Browser storage",
    "Which storage persists after the browser is closed and reopened?",
    [
      "localStorage",
      "sessionStorage",
      "memoryStorage",
      "tabStorage"
    ],
    0,
    [
      "localStorage persists until it is cleared by code/user/browser policy.",
      "sessionStorage is scoped to a page session.",
      "memoryStorage is not a standard Web Storage API.",
      "tabStorage is not a standard Web Storage API."
    ]
  ],
  [
    "JSON",
    "Which JavaScript method converts an object into a JSON string?",
    [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.object()",
      "JSON.encodeObject()"
    ],
    0,
    [
      "JSON.stringify serializes a JS value to JSON text.",
      "JSON.parse does the reverse: JSON text to JS value.",
      "JSON.object is not a standard method.",
      "JSON.encodeObject is not a standard method."
    ]
  ],
  [
    "Forms",
    "Which attribute connects a <label> to a form control?",
    [
      "for",
      "connect",
      "target",
      "bind"
    ],
    0,
    [
      "The label's for value matches the control's id.",
      "connect is not the standard attribute.",
      "target is used in other HTML contexts.",
      "bind is not the label-control association attribute."
    ]
  ],
  [
    "Handling events",
    "In React, which is the correct way to pass a click handler?",
    [
      "onClick={handleClick}",
      "onClick={handleClick()}",
      "click={handleClick}",
      "onclick='handleClick'"
    ],
    0,
    [
      "Passing the function reference lets React call it when clicked.",
      "handleClick() calls it during rendering instead of passing the handler.",
      "click is not React's standard event prop.",
      "React JSX uses camelCase event props, not this HTML string pattern."
    ]
  ],
  [
    "Forms",
    "In a controlled React input, the input value is normally stored in:",
    [
      "React state",
      "CSS",
      "The browser title",
      "The component's JSX text"
    ],
    0,
    [
      "Controlled inputs use React state as the source of truth.",
      "CSS cannot store form values.",
      "The browser title is unrelated.",
      "JSX describes the UI; it is not mutable form state."
    ]
  ],
  [
    "Controlled components",
    "Which combination keeps a controlled input synchronized?",
    [
      "value + onChange",
      "src + href",
      "className + id",
      "key + ref only"
    ],
    0,
    [
      "value reads state and onChange updates it.",
      "src/href are URL-related attributes.",
      "className/id do not control the input value.",
      "key is for reconciliation and ref has other uses; they do not form the normal controlled-input pair."
    ]
  ],
  [
    "React project setup with Vite/CRA",
    "Which tool is a modern build tool commonly used to start React projects?",
    [
      "Vite",
      "FTP",
      "Photoshop",
      "SQLite"
    ],
    0,
    [
      "Vite provides fast development/build tooling for modern frontend projects.",
      "FTP transfers files; it is not a React build tool.",
      "Photoshop is an image editor.",
      "SQLite is a database engine."
    ]
  ],
  [
    "React introduction",
    "React primarily helps developers build:",
    [
      "User interfaces from components",
      "Operating systems",
      "SQL databases",
      "Web servers only"
    ],
    0,
    [
      "React is a UI library centered on components.",
      "React is not an operating system.",
      "SQL databases are separate technologies.",
      "React can call servers but is not a server itself."
    ]
  ],
  [
    "Component-based architecture",
    "What is a major benefit of component-based architecture?",
    [
      "Reusable, focused UI pieces",
      "One giant file for everything",
      "No need for data",
      "CSS becomes unnecessary"
    ],
    0,
    [
      "Components encourage reuse and separation of responsibilities.",
      "A giant file defeats the architectural benefit.",
      "Applications still need data.",
      "React does not remove the need for CSS."
    ]
  ],
  [
    "JSX",
    "Which syntax places a JavaScript expression inside JSX?",
    [
      "{ expression }",
      "[ expression ]",
      "< expression >",
      "( expression )"
    ],
    0,
    [
      "Curly braces embed JavaScript expressions in JSX.",
      "Square brackets are commonly array syntax.",
      "Angle brackets represent JSX tags.",
      "Parentheses can group expressions but do not themselves embed JS in JSX."
    ]
  ],
  [
    "Components",
    "By convention, a custom React component should begin with:",
    [
      "An uppercase letter",
      "A number",
      "A dash",
      "A lowercase letter only"
    ],
    0,
    [
      "Uppercase names distinguish user components from native HTML tags in JSX.",
      "A number cannot start a normal identifier.",
      "A dash is invalid in component identifiers.",
      "Lowercase names are interpreted as intrinsic DOM tags in JSX."
    ]
  ],
  [
    "Props",
    "Which statement about React props is correct?",
    [
      "They are inputs passed from parent to child",
      "They should be mutated by the child",
      "They are global variables",
      "They replace all state"
    ],
    0,
    [
      "Props are read-only inputs passed down from a parent.",
      "Children should not mutate props directly.",
      "Props are not automatically global.",
      "State and props have different purposes."
    ]
  ],
  [
    "State",
    "What happens when a React state setter updates state?",
    [
      "React schedules a re-render",
      "The browser always reloads the page",
      "CSS is deleted",
      "The component is permanently destroyed"
    ],
    0,
    [
      "State updates schedule React to render with the new state.",
      "A normal state update does not reload the page.",
      "CSS is unaffected.",
      "The component is not permanently destroyed by an ordinary state update."
    ]
  ],
  [
    "Rendering lists",
    "Why is a key prop important when rendering a list?",
    [
      "It helps React identify list items",
      "It changes the item's CSS color",
      "It encrypts the item",
      "It makes arrays start at index 1"
    ],
    0,
    [
      "Keys give React stable identity for siblings during reconciliation.",
      "Keys do not directly style items.",
      "Keys are not encryption.",
      "Array indexing remains zero-based."
    ]
  ],
  [
    "Conditional rendering",
    "Which is a common React way to render one of two alternatives?",
    [
      "condition ? A : B",
      "condition => A : B",
      "if?A,B",
      "render(condition,A,B) only"
    ],
    0,
    [
      "The ternary operator is a standard conditional expression in JSX.",
      "Arrow syntax does not form a conditional expression this way.",
      "if?A,B is invalid syntax.",
      "A custom render function is possible but not the standard syntax implied here."
    ]
  ],
  [
    "useState",
    "What does useState return?",
    [
      "A state value and a setter function",
      "Only a setter",
      "Only a DOM node",
      "A Promise and a callback"
    ],
    0,
    [
      "useState returns a pair: current state and a function to update it.",
      "It returns both, not only the setter.",
      "It does not specifically return a DOM node.",
      "It is not a Promise API."
    ]
  ],
  [
    "useEffect",
    "What is useEffect mainly used for?",
    [
      "Synchronizing with external systems/side effects",
      "Defining CSS classes",
      "Creating HTML tags",
      "Replacing every state variable"
    ],
    0,
    [
      "Effects are for synchronization with external systems such as timers, subscriptions or network activity.",
      "CSS classes are handled separately.",
      "JSX creates the UI description.",
      "Effects do not replace state."
    ]
  ],
  [
    "useRef",
    "Changing ref.current usually:",
    [
      "Does not trigger a re-render",
      "Always reloads the page",
      "Deletes the component",
      "Triggers a CSS animation automatically"
    ],
    0,
    [
      "Updating ref.current does not by itself cause a React re-render.",
      "It does not reload the page.",
      "The component remains mounted.",
      "A ref does not automatically create animations."
    ]
  ],
  [
    "useMemo",
    "What does useMemo cache?",
    [
      "The result of a calculation",
      "A DOM event",
      "A CSS file",
      "A Git commit"
    ],
    0,
    [
      "useMemo memoizes a calculated value until dependencies change.",
      "Events, CSS files and Git commits are not what useMemo caches.",
      "A CSS file does not match the concept being tested.",
      "A Git commit does not match the concept being tested."
    ]
  ],
  [
    "useCallback",
    "What does useCallback primarily memoize?",
    [
      "A function reference",
      "An HTML document",
      "A network response forever",
      "A CSS selector"
    ],
    0,
    [
      "useCallback returns a cached function reference until dependencies change.",
      "It does not memoize an HTML document.",
      "It is not a permanent network cache.",
      "CSS selectors are unrelated."
    ]
  ],
  [
    "Component composition",
    "Which prop is commonly used to pass nested UI into a component?",
    [
      "children",
      "contentOnly",
      "slotTextOnly",
      "inside"
    ],
    0,
    [
      "React provides the children prop for nested JSX/content.",
      "The other names are not the standard React mechanism.",
      "Custom props are possible, but children is the conventional composition API.",
      "inside does not match the concept being tested."
    ]
  ],
  [
    "Reusable UI",
    "What makes a UI component easier to reuse?",
    [
      "Clear, focused responsibilities and configurable props",
      "Hard-coding one page's data",
      "Many unrelated responsibilities",
      "Hidden dependencies on global markup"
    ],
    0,
    [
      "Focused behavior and clear props make components portable and reusable.",
      "Hard-coded page data reduces reuse.",
      "Too many responsibilities make components difficult to maintain.",
      "Hidden dependencies increase coupling."
    ]
  ],
  [
    "Custom hooks",
    "What naming rule applies to custom React hooks?",
    [
      "Their names start with use",
      "They must end with Hook",
      "They must be classes",
      "They must return JSX"
    ],
    0,
    [
      "Custom hooks conventionally begin with use, e.g. useOnlineStatus.",
      "They do not have to end in Hook.",
      "Custom hooks are normally functions, not required to be classes.",
      "They can return data/actions rather than JSX."
    ]
  ],
  [
    "Lifting state up",
    "If two sibling components need the same changing data, a common solution is to:",
    [
      "Move the state to their closest common parent",
      "Duplicate unrelated state forever",
      "Put it in CSS",
      "Store it in an HTML comment"
    ],
    0,
    [
      "Lifting state to the closest common parent gives both siblings a shared source of truth.",
      "Duplicating state can cause synchronization problems.",
      "CSS is not the place for application state.",
      "HTML comments are not state storage."
    ]
  ],
  [
    "Prop drilling basics",
    "Prop drilling refers to:",
    [
      "Passing props through intermediate components",
      "Using only CSS variables",
      "Calling a REST API",
      "Rendering a list with keys"
    ],
    0,
    [
      "Prop drilling is passing data through components that may only forward it.",
      "CSS variables are unrelated.",
      "REST APIs are unrelated.",
      "Keys solve list identity, not prop drilling."
    ]
  ],
  [
    "HTML5 structure",
    "Which element contains the visible content of an HTML document?",
    [
      "<body>",
      "<head>",
      "<meta>",
      "<title>"
    ],
    0,
    [
      "<body> is correct because it directly matches the definition or behavior of HTML5 structure.",
      "<head> is not correct here; it describes a different concept or does not provide the required HTML5 structure behavior.",
      "<meta> is not correct here; it describes a different concept or does not provide the required HTML5 structure behavior.",
      "<title> is not correct here; it describes a different concept or does not provide the required HTML5 structure behavior."
    ]
  ],
  [
    "HTML5 structure",
    "Which element is normally used for the largest page heading?",
    [
      "<h1>",
      "<h6>",
      "<heading>",
      "<header>"
    ],
    0,
    [
      "<h1> is correct because it directly matches the definition or behavior of HTML5 structure.",
      "<h6> is not correct here; it describes a different concept or does not provide the required HTML5 structure behavior.",
      "<heading> is not correct here; it describes a different concept or does not provide the required HTML5 structure behavior.",
      "<header> is not correct here; it describes a different concept or does not provide the required HTML5 structure behavior."
    ]
  ],
  [
    "Semantic tags",
    "Which semantic element is best for a self-contained blog post?",
    [
      "<article>",
      "<div>",
      "<span>",
      "<b>"
    ],
    0,
    [
      "<article> is correct because it directly matches the definition or behavior of Semantic tags.",
      "<div> is not correct here; it describes a different concept or does not provide the required Semantic tags behavior.",
      "<span> is not correct here; it describes a different concept or does not provide the required Semantic tags behavior.",
      "<b> is not correct here; it describes a different concept or does not provide the required Semantic tags behavior."
    ]
  ],
  [
    "Semantic tags",
    "Which element commonly represents the main content of a page?",
    [
      "<main>",
      "<aside>",
      "<footer>",
      "<small>"
    ],
    0,
    [
      "<main> is correct because it directly matches the definition or behavior of Semantic tags.",
      "<aside> is not correct here; it describes a different concept or does not provide the required Semantic tags behavior.",
      "<footer> is not correct here; it describes a different concept or does not provide the required Semantic tags behavior.",
      "<small> is not correct here; it describes a different concept or does not provide the required Semantic tags behavior."
    ]
  ],
  [
    "Accessibility basics",
    "What should an informative image normally have for screen readers?",
    [
      "Meaningful alt text",
      "A CSS class only",
      "A larger width",
      "A border"
    ],
    0,
    [
      "Meaningful alt text is correct because it directly matches the definition or behavior of Accessibility basics.",
      "A CSS class only is not correct here; it describes a different concept or does not provide the required Accessibility basics behavior.",
      "A larger width is not correct here; it describes a different concept or does not provide the required Accessibility basics behavior.",
      "A border is not correct here; it describes a different concept or does not provide the required Accessibility basics behavior."
    ]
  ],
  [
    "Accessibility basics",
    "Which control is naturally keyboard accessible and communicates button semantics?",
    [
      "<button>",
      "<div onclick>",
      "<span onclick>",
      "<p onclick>"
    ],
    0,
    [
      "<button> is correct because it directly matches the definition or behavior of Accessibility basics.",
      "<div onclick> is not correct here; it describes a different concept or does not provide the required Accessibility basics behavior.",
      "<span onclick> is not correct here; it describes a different concept or does not provide the required Accessibility basics behavior.",
      "<p onclick> is not correct here; it describes a different concept or does not provide the required Accessibility basics behavior."
    ]
  ],
  [
    "CSS3 fundamentals",
    "Which property changes the text color?",
    [
      "color",
      "font-color",
      "text-color",
      "foreground"
    ],
    0,
    [
      "color is correct because it directly matches the definition or behavior of CSS3 fundamentals.",
      "font-color is not correct here; it describes a different concept or does not provide the required CSS3 fundamentals behavior.",
      "text-color is not correct here; it describes a different concept or does not provide the required CSS3 fundamentals behavior.",
      "foreground is not correct here; it describes a different concept or does not provide the required CSS3 fundamentals behavior."
    ]
  ],
  [
    "CSS3 fundamentals",
    "What does CSS specificity help determine?",
    [
      "Which rule wins when rules conflict",
      "How fast JavaScript runs",
      "How many HTML pages exist",
      "The server's IP address"
    ],
    0,
    [
      "Which rule wins when rules conflict is correct because it directly matches the definition or behavior of CSS3 fundamentals.",
      "How fast JavaScript runs is not correct here; it describes a different concept or does not provide the required CSS3 fundamentals behavior.",
      "How many HTML pages exist is not correct here; it describes a different concept or does not provide the required CSS3 fundamentals behavior.",
      "The server's IP address is not correct here; it describes a different concept or does not provide the required CSS3 fundamentals behavior."
    ]
  ],
  [
    "Box Model",
    "Which box-model area sits between content and border?",
    [
      "padding",
      "margin",
      "outline",
      "gap"
    ],
    0,
    [
      "padding is correct because it directly matches the definition or behavior of Box Model.",
      "margin is not correct here; it describes a different concept or does not provide the required Box Model behavior.",
      "outline is not correct here; it describes a different concept or does not provide the required Box Model behavior.",
      "gap is not correct here; it describes a different concept or does not provide the required Box Model behavior."
    ]
  ],
  [
    "Box Model",
    "Which property makes width include padding and border?",
    [
      "box-sizing: border-box",
      "width: include-box",
      "box-model: fixed",
      "sizing: border"
    ],
    0,
    [
      "box-sizing: border-box is correct because it directly matches the definition or behavior of Box Model.",
      "width: include-box is not correct here; it describes a different concept or does not provide the required Box Model behavior.",
      "box-model: fixed is not correct here; it describes a different concept or does not provide the required Box Model behavior.",
      "sizing: border is not correct here; it describes a different concept or does not provide the required Box Model behavior."
    ]
  ],
  [
    "Flexbox",
    "Which Flexbox property controls alignment along the main axis?",
    [
      "justify-content",
      "align-items",
      "align-content-x",
      "main-align"
    ],
    0,
    [
      "justify-content is correct because it directly matches the definition or behavior of Flexbox.",
      "align-items is not correct here; it describes a different concept or does not provide the required Flexbox behavior.",
      "align-content-x is not correct here; it describes a different concept or does not provide the required Flexbox behavior.",
      "main-align is not correct here; it describes a different concept or does not provide the required Flexbox behavior."
    ]
  ],
  [
    "Flexbox",
    "Which declaration turns an element into a flex container?",
    [
      "display: flex",
      "position: flex",
      "flex: container",
      "layout: flex"
    ],
    0,
    [
      "display: flex is correct because it directly matches the definition or behavior of Flexbox.",
      "position: flex is not correct here; it describes a different concept or does not provide the required Flexbox behavior.",
      "flex: container is not correct here; it describes a different concept or does not provide the required Flexbox behavior.",
      "layout: flex is not correct here; it describes a different concept or does not provide the required Flexbox behavior."
    ]
  ],
  [
    "Grid",
    "Which property defines CSS Grid columns?",
    [
      "grid-template-columns",
      "grid-columns-only",
      "columns-grid",
      "grid-axis"
    ],
    0,
    [
      "grid-template-columns is correct because it directly matches the definition or behavior of Grid.",
      "grid-columns-only is not correct here; it describes a different concept or does not provide the required Grid behavior.",
      "columns-grid is not correct here; it describes a different concept or does not provide the required Grid behavior.",
      "grid-axis is not correct here; it describes a different concept or does not provide the required Grid behavior."
    ]
  ],
  [
    "Grid",
    "What does the fr unit represent in Grid?",
    [
      "A fraction of available space",
      "A fixed font ratio",
      "A frame",
      "A fractional pixel"
    ],
    0,
    [
      "A fraction of available space is correct because it directly matches the definition or behavior of Grid.",
      "A fixed font ratio is not correct here; it describes a different concept or does not provide the required Grid behavior.",
      "A frame is not correct here; it describes a different concept or does not provide the required Grid behavior.",
      "A fractional pixel is not correct here; it describes a different concept or does not provide the required Grid behavior."
    ]
  ],
  [
    "Responsive design",
    "Which approach is most suitable for responsive images?",
    [
      "max-width: 100%; height: auto;",
      "width: 2000px;",
      "position: fixed;",
      "display: none;"
    ],
    0,
    [
      "max-width: 100%; height: auto; is correct because it directly matches the definition or behavior of Responsive design.",
      "width: 2000px; is not correct here; it describes a different concept or does not provide the required Responsive design behavior.",
      "position: fixed; is not correct here; it describes a different concept or does not provide the required Responsive design behavior.",
      "display: none; is not correct here; it describes a different concept or does not provide the required Responsive design behavior."
    ]
  ],
  [
    "Responsive design",
    "Responsive design mainly aims to:",
    [
      "Adapt the UI to different screen sizes",
      "Make every page identical",
      "Remove CSS",
      "Avoid using HTML"
    ],
    0,
    [
      "Adapt the UI to different screen sizes is correct because it directly matches the definition or behavior of Responsive design.",
      "Make every page identical is not correct here; it describes a different concept or does not provide the required Responsive design behavior.",
      "Remove CSS is not correct here; it describes a different concept or does not provide the required Responsive design behavior.",
      "Avoid using HTML is not correct here; it describes a different concept or does not provide the required Responsive design behavior."
    ]
  ],
  [
    "Media queries",
    "Which syntax targets screens 768px wide or smaller?",
    [
      "@media (max-width: 768px)",
      "@media screen-width 768",
      "@media (width < 768) only",
      "@screen 768px"
    ],
    0,
    [
      "@media (max-width: 768px) is correct because it directly matches the definition or behavior of Media queries.",
      "@media screen-width 768 is not correct here; it describes a different concept or does not provide the required Media queries behavior.",
      "@media (width < 768) only is not correct here; it describes a different concept or does not provide the required Media queries behavior.",
      "@screen 768px is not correct here; it describes a different concept or does not provide the required Media queries behavior."
    ]
  ],
  [
    "Media queries",
    "Media queries are written in which language?",
    [
      "CSS",
      "HTML",
      "SQL",
      "Java"
    ],
    0,
    [
      "CSS is correct because it directly matches the definition or behavior of Media queries.",
      "HTML is not correct here; it describes a different concept or does not provide the required Media queries behavior.",
      "SQL is not correct here; it describes a different concept or does not provide the required Media queries behavior.",
      "Java is not correct here; it describes a different concept or does not provide the required Media queries behavior."
    ]
  ],
  [
    "Mobile-first layouts",
    "In a mobile-first design, the base CSS usually targets:",
    [
      "Small screens first",
      "Only desktop",
      "Only tablets",
      "Printers first"
    ],
    0,
    [
      "Small screens first is correct because it directly matches the definition or behavior of Mobile-first layouts.",
      "Only desktop is not correct here; it describes a different concept or does not provide the required Mobile-first layouts behavior.",
      "Only tablets is not correct here; it describes a different concept or does not provide the required Mobile-first layouts behavior.",
      "Printers first is not correct here; it describes a different concept or does not provide the required Mobile-first layouts behavior."
    ]
  ],
  [
    "Mobile-first layouts",
    "Which media query commonly adds styles for larger screens in mobile-first CSS?",
    [
      "@media (min-width: ...)",
      "@media (max-width: 0)",
      "@desktop-only",
      "@large-screen"
    ],
    0,
    [
      "@media (min-width: ...) is correct because it directly matches the definition or behavior of Mobile-first layouts.",
      "@media (max-width: 0) is not correct here; it describes a different concept or does not provide the required Mobile-first layouts behavior.",
      "@desktop-only is not correct here; it describes a different concept or does not provide the required Mobile-first layouts behavior.",
      "@large-screen is not correct here; it describes a different concept or does not provide the required Mobile-first layouts behavior."
    ]
  ],
  [
    "Variables",
    "Which declaration creates a block-scoped variable that can be reassigned?",
    [
      "let",
      "const",
      "var",
      "define"
    ],
    0,
    [
      "let is correct because it directly matches the definition or behavior of Variables.",
      "const is not correct here; it describes a different concept or does not provide the required Variables behavior.",
      "var is not correct here; it describes a different concept or does not provide the required Variables behavior.",
      "define is not correct here; it describes a different concept or does not provide the required Variables behavior."
    ]
  ],
  [
    "Variables",
    "What is the value of x after this code: let x = 5; x = 8;?",
    [
      "8",
      "5",
      "undefined",
      "Error"
    ],
    0,
    [
      "8 is correct because it directly matches the definition or behavior of Variables.",
      "5 is not correct here; it describes a different concept or does not provide the required Variables behavior.",
      "undefined is not correct here; it describes a different concept or does not provide the required Variables behavior.",
      "Error is not correct here; it describes a different concept or does not provide the required Variables behavior."
    ]
  ],
  [
    "Functions",
    "What keyword sends a value back from a function?",
    [
      "return",
      "send",
      "output",
      "give"
    ],
    0,
    [
      "return is correct because it directly matches the definition or behavior of Functions.",
      "send is not correct here; it describes a different concept or does not provide the required Functions behavior.",
      "output is not correct here; it describes a different concept or does not provide the required Functions behavior.",
      "give is not correct here; it describes a different concept or does not provide the required Functions behavior."
    ]
  ],
  [
    "Functions",
    "Which is a valid function call?",
    [
      "greet()",
      "call greet",
      "function.greet",
      "run:greet"
    ],
    0,
    [
      "greet() is correct because it directly matches the definition or behavior of Functions.",
      "call greet is not correct here; it describes a different concept or does not provide the required Functions behavior.",
      "function.greet is not correct here; it describes a different concept or does not provide the required Functions behavior.",
      "run:greet is not correct here; it describes a different concept or does not provide the required Functions behavior."
    ]
  ],
  [
    "Arrays",
    "What is the index of the first element in a JavaScript array?",
    [
      "0",
      "1",
      "-1",
      "first"
    ],
    0,
    [
      "0 is correct because it directly matches the definition or behavior of Arrays.",
      "1 is not correct here; it describes a different concept or does not provide the required Arrays behavior.",
      "-1 is not correct here; it describes a different concept or does not provide the required Arrays behavior.",
      "first is not correct here; it describes a different concept or does not provide the required Arrays behavior."
    ]
  ],
  [
    "Arrays",
    "Which method adds an item to the end of an array?",
    [
      "push()",
      "pop()",
      "shift()",
      "slice()"
    ],
    0,
    [
      "push() is correct because it directly matches the definition or behavior of Arrays.",
      "pop() is not correct here; it describes a different concept or does not provide the required Arrays behavior.",
      "shift() is not correct here; it describes a different concept or does not provide the required Arrays behavior.",
      "slice() is not correct here; it describes a different concept or does not provide the required Arrays behavior."
    ]
  ],
  [
    "Objects",
    "Which syntax accesses a property named name from user?",
    [
      "user.name",
      "user->name",
      "user::name",
      "user/name"
    ],
    0,
    [
      "user.name is correct because it directly matches the definition or behavior of Objects.",
      "user->name is not correct here; it describes a different concept or does not provide the required Objects behavior.",
      "user::name is not correct here; it describes a different concept or does not provide the required Objects behavior.",
      "user/name is not correct here; it describes a different concept or does not provide the required Objects behavior."
    ]
  ],
  [
    "Objects",
    "Which structure is best for storing related key-value data?",
    [
      "Object",
      "String",
      "Number",
      "Boolean"
    ],
    0,
    [
      "Object is correct because it directly matches the definition or behavior of Objects.",
      "String is not correct here; it describes a different concept or does not provide the required Objects behavior.",
      "Number is not correct here; it describes a different concept or does not provide the required Objects behavior.",
      "Boolean is not correct here; it describes a different concept or does not provide the required Objects behavior."
    ]
  ],
  [
    "Loops",
    "Which loop is convenient for iterating over array values?",
    [
      "for...of",
      "for...in",
      "switch",
      "try...catch"
    ],
    0,
    [
      "for...of is correct because it directly matches the definition or behavior of Loops.",
      "for...in is not correct here; it describes a different concept or does not provide the required Loops behavior.",
      "switch is not correct here; it describes a different concept or does not provide the required Loops behavior.",
      "try...catch is not correct here; it describes a different concept or does not provide the required Loops behavior."
    ]
  ],
  [
    "Loops",
    "Which loop is guaranteed to execute its body at least once?",
    [
      "do...while",
      "while",
      "for...of",
      "for...in"
    ],
    0,
    [
      "do...while is correct because it directly matches the definition or behavior of Loops.",
      "while is not correct here; it describes a different concept or does not provide the required Loops behavior.",
      "for...of is not correct here; it describes a different concept or does not provide the required Loops behavior.",
      "for...in is not correct here; it describes a different concept or does not provide the required Loops behavior."
    ]
  ],
  [
    "DevTools",
    "Which DevTools panel is commonly used to inspect and edit CSS?",
    [
      "Elements",
      "Console",
      "Network only",
      "Sources only"
    ],
    0,
    [
      "Elements is correct because it directly matches the definition or behavior of DevTools.",
      "Console is not correct here; it describes a different concept or does not provide the required DevTools behavior.",
      "Network only is not correct here; it describes a different concept or does not provide the required DevTools behavior.",
      "Sources only is not correct here; it describes a different concept or does not provide the required DevTools behavior."
    ]
  ],
  [
    "DevTools",
    "Which DevTools panel helps inspect HTTP requests?",
    [
      "Network",
      "Elements",
      "Application only",
      "Memory only"
    ],
    0,
    [
      "Network is correct because it directly matches the definition or behavior of DevTools.",
      "Elements is not correct here; it describes a different concept or does not provide the required DevTools behavior.",
      "Application only is not correct here; it describes a different concept or does not provide the required DevTools behavior.",
      "Memory only is not correct here; it describes a different concept or does not provide the required DevTools behavior."
    ]
  ],
  [
    "VS Code setup",
    "What is the integrated terminal useful for?",
    [
      "Running project commands",
      "Changing CPU voltage",
      "Editing browser history",
      "Creating network cables"
    ],
    0,
    [
      "Running project commands is correct because it directly matches the definition or behavior of VS Code setup.",
      "Changing CPU voltage is not correct here; it describes a different concept or does not provide the required VS Code setup behavior.",
      "Editing browser history is not correct here; it describes a different concept or does not provide the required VS Code setup behavior.",
      "Creating network cables is not correct here; it describes a different concept or does not provide the required VS Code setup behavior."
    ]
  ],
  [
    "VS Code setup",
    "Which feature can automatically format source code in VS Code?",
    [
      "A formatter such as Prettier",
      "A database server",
      "The HTML <format> tag",
      "GitHub Pages"
    ],
    0,
    [
      "A formatter such as Prettier is correct because it directly matches the definition or behavior of VS Code setup.",
      "A database server is not correct here; it describes a different concept or does not provide the required VS Code setup behavior.",
      "The HTML <format> tag is not correct here; it describes a different concept or does not provide the required VS Code setup behavior.",
      "GitHub Pages is not correct here; it describes a different concept or does not provide the required VS Code setup behavior."
    ]
  ],
  [
    "Git/GitHub",
    "Which command creates a new Git commit?",
    [
      "git commit",
      "git save",
      "git snapshot-now",
      "git upload"
    ],
    0,
    [
      "git commit is correct because it directly matches the definition or behavior of Git/GitHub.",
      "git save is not correct here; it describes a different concept or does not provide the required Git/GitHub behavior.",
      "git snapshot-now is not correct here; it describes a different concept or does not provide the required Git/GitHub behavior.",
      "git upload is not correct here; it describes a different concept or does not provide the required Git/GitHub behavior."
    ]
  ],
  [
    "Git/GitHub",
    "Which command commonly sends local commits to a remote repository?",
    [
      "git push",
      "git send",
      "git upload-remote",
      "git publish"
    ],
    0,
    [
      "git push is correct because it directly matches the definition or behavior of Git/GitHub.",
      "git send is not correct here; it describes a different concept or does not provide the required Git/GitHub behavior.",
      "git upload-remote is not correct here; it describes a different concept or does not provide the required Git/GitHub behavior.",
      "git publish is not correct here; it describes a different concept or does not provide the required Git/GitHub behavior."
    ]
  ],
  [
    "let/const",
    "Which statement about const is correct?",
    [
      "The binding cannot be reassigned",
      "It is always globally scoped",
      "It can never contain an object",
      "It is identical to var"
    ],
    0,
    [
      "The binding cannot be reassigned is correct because it directly matches the definition or behavior of let/const.",
      "It is always globally scoped is not correct here; it describes a different concept or does not provide the required let/const behavior.",
      "It can never contain an object is not correct here; it describes a different concept or does not provide the required let/const behavior.",
      "It is identical to var is not correct here; it describes a different concept or does not provide the required let/const behavior."
    ]
  ],
  [
    "let/const",
    "What happens when a let variable is accessed before its declaration is evaluated?",
    [
      "A ReferenceError occurs",
      "It becomes null",
      "It becomes 0",
      "It is automatically declared"
    ],
    0,
    [
      "A ReferenceError occurs is correct because it directly matches the definition or behavior of let/const.",
      "It becomes null is not correct here; it describes a different concept or does not provide the required let/const behavior.",
      "It becomes 0 is not correct here; it describes a different concept or does not provide the required let/const behavior.",
      "It is automatically declared is not correct here; it describes a different concept or does not provide the required let/const behavior."
    ]
  ],
  [
    "Arrow functions",
    "Which is a valid arrow function that adds two numbers?",
    [
      "(a,b) => a+b",
      "function => a+b",
      "a,b -> a+b",
      "arrow(a,b): a+b"
    ],
    0,
    [
      "(a,b) => a+b is correct because it directly matches the definition or behavior of Arrow functions.",
      "function => a+b is not correct here; it describes a different concept or does not provide the required Arrow functions behavior.",
      "a,b -> a+b is not correct here; it describes a different concept or does not provide the required Arrow functions behavior.",
      "arrow(a,b): a+b is not correct here; it describes a different concept or does not provide the required Arrow functions behavior."
    ]
  ],
  [
    "Arrow functions",
    "A single-expression arrow function without braces:",
    [
      "Can implicitly return the expression",
      "Must use return twice",
      "Cannot accept parameters",
      "Can only return strings"
    ],
    0,
    [
      "Can implicitly return the expression is correct because it directly matches the definition or behavior of Arrow functions.",
      "Must use return twice is not correct here; it describes a different concept or does not provide the required Arrow functions behavior.",
      "Cannot accept parameters is not correct here; it describes a different concept or does not provide the required Arrow functions behavior.",
      "Can only return strings is not correct here; it describes a different concept or does not provide the required Arrow functions behavior."
    ]
  ],
  [
    "Destructuring",
    "What does array destructuring allow you to do?",
    [
      "Extract values into variables",
      "Sort CSS rules",
      "Create HTTP requests",
      "Compile JSX"
    ],
    0,
    [
      "Extract values into variables is correct because it directly matches the definition or behavior of Destructuring.",
      "Sort CSS rules is not correct here; it describes a different concept or does not provide the required Destructuring behavior.",
      "Create HTTP requests is not correct here; it describes a different concept or does not provide the required Destructuring behavior.",
      "Compile JSX is not correct here; it describes a different concept or does not provide the required Destructuring behavior."
    ]
  ],
  [
    "Destructuring",
    "Which syntax extracts name from an object?",
    [
      "const {name} = user;",
      "const [name] = user;",
      "const name <- user;",
      "object(name) = user;"
    ],
    0,
    [
      "const {name} = user; is correct because it directly matches the definition or behavior of Destructuring.",
      "const [name] = user; is not correct here; it describes a different concept or does not provide the required Destructuring behavior.",
      "const name <- user; is not correct here; it describes a different concept or does not provide the required Destructuring behavior.",
      "object(name) = user; is not correct here; it describes a different concept or does not provide the required Destructuring behavior."
    ]
  ],
  [
    "Spread/rest",
    "What does the spread syntax ... do when used with an array literal?",
    [
      "Expands its elements",
      "Deletes the array",
      "Freezes the array",
      "Sorts the array"
    ],
    0,
    [
      "Expands its elements is correct because it directly matches the definition or behavior of Spread/rest.",
      "Deletes the array is not correct here; it describes a different concept or does not provide the required Spread/rest behavior.",
      "Freezes the array is not correct here; it describes a different concept or does not provide the required Spread/rest behavior.",
      "Sorts the array is not correct here; it describes a different concept or does not provide the required Spread/rest behavior."
    ]
  ],
  [
    "Spread/rest",
    "In a function parameter list, ...args is called:",
    [
      "A rest parameter",
      "A spread-only variable",
      "A wildcard import",
      "A pointer"
    ],
    0,
    [
      "A rest parameter is correct because it directly matches the definition or behavior of Spread/rest.",
      "A spread-only variable is not correct here; it describes a different concept or does not provide the required Spread/rest behavior.",
      "A wildcard import is not correct here; it describes a different concept or does not provide the required Spread/rest behavior.",
      "A pointer is not correct here; it describes a different concept or does not provide the required Spread/rest behavior."
    ]
  ],
  [
    "Modules/imports/exports",
    "Which keyword exposes a value from an ES module?",
    [
      "export",
      "expose",
      "public",
      "module"
    ],
    0,
    [
      "export is correct because it directly matches the definition or behavior of Modules/imports/exports.",
      "expose is not correct here; it describes a different concept or does not provide the required Modules/imports/exports behavior.",
      "public is not correct here; it describes a different concept or does not provide the required Modules/imports/exports behavior.",
      "module is not correct here; it describes a different concept or does not provide the required Modules/imports/exports behavior."
    ]
  ],
  [
    "Modules/imports/exports",
    "Which statement imports a named export?",
    [
      "import { add } from './math.js'",
      "include add from math",
      "require named add only",
      "using math.add"
    ],
    0,
    [
      "import { add } from './math.js' is correct because it directly matches the definition or behavior of Modules/imports/exports.",
      "include add from math is not correct here; it describes a different concept or does not provide the required Modules/imports/exports behavior.",
      "require named add only is not correct here; it describes a different concept or does not provide the required Modules/imports/exports behavior.",
      "using math.add is not correct here; it describes a different concept or does not provide the required Modules/imports/exports behavior."
    ]
  ],
  [
    "Promises",
    "A Promise represents:",
    [
      "A future result of an asynchronous operation",
      "A CSS selector",
      "A DOM element",
      "A Git branch"
    ],
    0,
    [
      "A future result of an asynchronous operation is correct because it directly matches the definition or behavior of Promises.",
      "A CSS selector is not correct here; it describes a different concept or does not provide the required Promises behavior.",
      "A DOM element is not correct here; it describes a different concept or does not provide the required Promises behavior.",
      "A Git branch is not correct here; it describes a different concept or does not provide the required Promises behavior."
    ]
  ],
  [
    "Promises",
    "Which method handles a fulfilled Promise's value?",
    [
      "then()",
      "catchOnly()",
      "resolveNow()",
      "finallyOnly()"
    ],
    0,
    [
      "then() is correct because it directly matches the definition or behavior of Promises.",
      "catchOnly() is not correct here; it describes a different concept or does not provide the required Promises behavior.",
      "resolveNow() is not correct here; it describes a different concept or does not provide the required Promises behavior.",
      "finallyOnly() is not correct here; it describes a different concept or does not provide the required Promises behavior."
    ]
  ],
  [
    "async/await",
    "An async function always returns:",
    [
      "A Promise",
      "A string",
      "A DOM node",
      "A callback only"
    ],
    0,
    [
      "A Promise is correct because it directly matches the definition or behavior of async/await.",
      "A string is not correct here; it describes a different concept or does not provide the required async/await behavior.",
      "A DOM node is not correct here; it describes a different concept or does not provide the required async/await behavior.",
      "A callback only is not correct here; it describes a different concept or does not provide the required async/await behavior."
    ]
  ],
  [
    "async/await",
    "What does await do inside an async function?",
    [
      "Pauses that async function until a Promise settles",
      "Stops the browser",
      "Creates a new Promise automatically",
      "Loops forever"
    ],
    0,
    [
      "Pauses that async function until a Promise settles is correct because it directly matches the definition or behavior of async/await.",
      "Stops the browser is not correct here; it describes a different concept or does not provide the required async/await behavior.",
      "Creates a new Promise automatically is not correct here; it describes a different concept or does not provide the required async/await behavior.",
      "Loops forever is not correct here; it describes a different concept or does not provide the required async/await behavior."
    ]
  ],
  [
    "fetch API",
    "What does fetch() return?",
    [
      "A Promise for a Response",
      "A DOM element",
      "A JSON object immediately",
      "A CSS rule"
    ],
    0,
    [
      "A Promise for a Response is correct because it directly matches the definition or behavior of fetch API.",
      "A DOM element is not correct here; it describes a different concept or does not provide the required fetch API behavior.",
      "A JSON object immediately is not correct here; it describes a different concept or does not provide the required fetch API behavior.",
      "A CSS rule is not correct here; it describes a different concept or does not provide the required fetch API behavior."
    ]
  ],
  [
    "fetch API",
    "Which method commonly converts a Response body to JSON?",
    [
      "response.json()",
      "response.toJSONText()",
      "response.parse()",
      "JSON.response()"
    ],
    0,
    [
      "response.json() is correct because it directly matches the definition or behavior of fetch API.",
      "response.toJSONText() is not correct here; it describes a different concept or does not provide the required fetch API behavior.",
      "response.parse() is not correct here; it describes a different concept or does not provide the required fetch API behavior.",
      "JSON.response() is not correct here; it describes a different concept or does not provide the required fetch API behavior."
    ]
  ],
  [
    "DOM manipulation",
    "Which method selects the first element matching a CSS selector?",
    [
      "document.querySelector()",
      "document.findFirst()",
      "document.css()",
      "document.selectOne()"
    ],
    0,
    [
      "document.querySelector() is correct because it directly matches the definition or behavior of DOM manipulation.",
      "document.findFirst() is not correct here; it describes a different concept or does not provide the required DOM manipulation behavior.",
      "document.css() is not correct here; it describes a different concept or does not provide the required DOM manipulation behavior.",
      "document.selectOne() is not correct here; it describes a different concept or does not provide the required DOM manipulation behavior."
    ]
  ],
  [
    "DOM manipulation",
    "Which property changes the text content of an element?",
    [
      "textContent",
      "innerTextOnlyCSS",
      "textValue",
      "contentTextStyle"
    ],
    0,
    [
      "textContent is correct because it directly matches the definition or behavior of DOM manipulation.",
      "innerTextOnlyCSS is not correct here; it describes a different concept or does not provide the required DOM manipulation behavior.",
      "textValue is not correct here; it describes a different concept or does not provide the required DOM manipulation behavior.",
      "contentTextStyle is not correct here; it describes a different concept or does not provide the required DOM manipulation behavior."
    ]
  ],
  [
    "Event handling",
    "Which method attaches an event listener?",
    [
      "addEventListener()",
      "listen()",
      "onEventAdd()",
      "attachHandlerOnly()"
    ],
    0,
    [
      "addEventListener() is correct because it directly matches the definition or behavior of Event handling.",
      "listen() is not correct here; it describes a different concept or does not provide the required Event handling behavior.",
      "onEventAdd() is not correct here; it describes a different concept or does not provide the required Event handling behavior.",
      "attachHandlerOnly() is not correct here; it describes a different concept or does not provide the required Event handling behavior."
    ]
  ],
  [
    "Event handling",
    "Which event fires when a button is clicked?",
    [
      "click",
      "press",
      "tap-only",
      "button"
    ],
    0,
    [
      "click is correct because it directly matches the definition or behavior of Event handling.",
      "press is not correct here; it describes a different concept or does not provide the required Event handling behavior.",
      "tap-only is not correct here; it describes a different concept or does not provide the required Event handling behavior.",
      "button is not correct here; it describes a different concept or does not provide the required Event handling behavior."
    ]
  ],
  [
    "Browser storage",
    "Which storage API keeps data until it is explicitly removed?",
    [
      "localStorage",
      "sessionStorage only",
      "cookieMemory",
      "tempStorage"
    ],
    0,
    [
      "localStorage is correct because it directly matches the definition or behavior of Browser storage.",
      "sessionStorage only is not correct here; it describes a different concept or does not provide the required Browser storage behavior.",
      "cookieMemory is not correct here; it describes a different concept or does not provide the required Browser storage behavior.",
      "tempStorage is not correct here; it describes a different concept or does not provide the required Browser storage behavior."
    ]
  ],
  [
    "Browser storage",
    "What type of values does localStorage store?",
    [
      "Strings",
      "Only numbers",
      "Only objects",
      "Functions directly"
    ],
    0,
    [
      "Strings is correct because it directly matches the definition or behavior of Browser storage.",
      "Only numbers is not correct here; it describes a different concept or does not provide the required Browser storage behavior.",
      "Only objects is not correct here; it describes a different concept or does not provide the required Browser storage behavior.",
      "Functions directly is not correct here; it describes a different concept or does not provide the required Browser storage behavior."
    ]
  ],
  [
    "JSON",
    "What does JSON.stringify() do?",
    [
      "Converts a JavaScript value to a JSON string",
      "Parses a JSON string",
      "Fetches JSON from a server",
      "Validates HTML"
    ],
    0,
    [
      "Converts a JavaScript value to a JSON string is correct because it directly matches the definition or behavior of JSON.",
      "Parses a JSON string is not correct here; it describes a different concept or does not provide the required JSON behavior.",
      "Fetches JSON from a server is not correct here; it describes a different concept or does not provide the required JSON behavior.",
      "Validates HTML is not correct here; it describes a different concept or does not provide the required JSON behavior."
    ]
  ],
  [
    "JSON",
    "Which is valid JSON?",
    [
      "{\"name\":\"Samir\"}",
      "{name:'Samir'}",
      "<name>Samir</name>",
      "name = Samir"
    ],
    0,
    [
      "{\"name\":\"Samir\"} is correct because it directly matches the definition or behavior of JSON.",
      "{name:'Samir'} is not correct here; it describes a different concept or does not provide the required JSON behavior.",
      "<name>Samir</name> is not correct here; it describes a different concept or does not provide the required JSON behavior.",
      "name = Samir is not correct here; it describes a different concept or does not provide the required JSON behavior."
    ]
  ],
  [
    "Forms",
    "Which HTML attribute connects a label to a form control?",
    [
      "for",
      "target",
      "connect",
      "bind"
    ],
    0,
    [
      "for is correct because it directly matches the definition or behavior of Forms.",
      "target is not correct here; it describes a different concept or does not provide the required Forms behavior.",
      "connect is not correct here; it describes a different concept or does not provide the required Forms behavior.",
      "bind is not correct here; it describes a different concept or does not provide the required Forms behavior."
    ]
  ],
  [
    "Forms",
    "Which input type is suitable for an email address?",
    [
      "email",
      "mailbox",
      "text-email",
      "address"
    ],
    0,
    [
      "email is correct because it directly matches the definition or behavior of Forms.",
      "mailbox is not correct here; it describes a different concept or does not provide the required Forms behavior.",
      "text-email is not correct here; it describes a different concept or does not provide the required Forms behavior.",
      "address is not correct here; it describes a different concept or does not provide the required Forms behavior."
    ]
  ],
  [
    "Handling events",
    "In React, which prop is commonly used for a click event?",
    [
      "onClick",
      "onclickEvent",
      "clickHandlerOnly",
      "onPressHTML"
    ],
    0,
    [
      "onClick is correct because it directly matches the definition or behavior of Handling events.",
      "onclickEvent is not correct here; it describes a different concept or does not provide the required Handling events behavior.",
      "clickHandlerOnly is not correct here; it describes a different concept or does not provide the required Handling events behavior.",
      "onPressHTML is not correct here; it describes a different concept or does not provide the required Handling events behavior."
    ]
  ],
  [
    "Handling events",
    "Why might you call event.preventDefault() in a form submit handler?",
    [
      "To stop the browser's default form submission",
      "To delete the form",
      "To validate CSS",
      "To reload React"
    ],
    0,
    [
      "To stop the browser's default form submission is correct because it directly matches the definition or behavior of Handling events.",
      "To delete the form is not correct here; it describes a different concept or does not provide the required Handling events behavior.",
      "To validate CSS is not correct here; it describes a different concept or does not provide the required Handling events behavior.",
      "To reload React is not correct here; it describes a different concept or does not provide the required Handling events behavior."
    ]
  ],
  [
    "Forms",
    "Which HTML attribute connects a label to a form control?",
    [
      "for",
      "target",
      "connect",
      "bind"
    ],
    0,
    [
      "for is correct because it directly matches the definition or behavior of Forms.",
      "target is not correct here; it describes a different concept or does not provide the required Forms behavior.",
      "connect is not correct here; it describes a different concept or does not provide the required Forms behavior.",
      "bind is not correct here; it describes a different concept or does not provide the required Forms behavior."
    ]
  ],
  [
    "Forms",
    "Which input type is suitable for an email address?",
    [
      "email",
      "mailbox",
      "text-email",
      "address"
    ],
    0,
    [
      "email is correct because it directly matches the definition or behavior of Forms.",
      "mailbox is not correct here; it describes a different concept or does not provide the required Forms behavior.",
      "text-email is not correct here; it describes a different concept or does not provide the required Forms behavior.",
      "address is not correct here; it describes a different concept or does not provide the required Forms behavior."
    ]
  ],
  [
    "Controlled components",
    "A controlled React input gets its value from:",
    [
      "React state",
      "The browser only",
      "CSS variables",
      "localStorage automatically"
    ],
    0,
    [
      "React state is correct because it directly matches the definition or behavior of Controlled components.",
      "The browser only is not correct here; it describes a different concept or does not provide the required Controlled components behavior.",
      "CSS variables is not correct here; it describes a different concept or does not provide the required Controlled components behavior.",
      "localStorage automatically is not correct here; it describes a different concept or does not provide the required Controlled components behavior."
    ]
  ],
  [
    "Controlled components",
    "Which handler commonly updates controlled input state?",
    [
      "onChange",
      "onInputCSS",
      "onValueSet",
      "updateHTML"
    ],
    0,
    [
      "onChange is correct because it directly matches the definition or behavior of Controlled components.",
      "onInputCSS is not correct here; it describes a different concept or does not provide the required Controlled components behavior.",
      "onValueSet is not correct here; it describes a different concept or does not provide the required Controlled components behavior.",
      "updateHTML is not correct here; it describes a different concept or does not provide the required Controlled components behavior."
    ]
  ],
  [
    "React project setup with Vite/CRA",
    "Which tool is commonly used to create a modern React project quickly?",
    [
      "Vite",
      "SQL Server",
      "Apache only",
      "Photoshop"
    ],
    0,
    [
      "Vite is correct because it directly matches the definition or behavior of React project setup with Vite/CRA.",
      "SQL Server is not correct here; it describes a different concept or does not provide the required React project setup with Vite/CRA behavior.",
      "Apache only is not correct here; it describes a different concept or does not provide the required React project setup with Vite/CRA behavior.",
      "Photoshop is not correct here; it describes a different concept or does not provide the required React project setup with Vite/CRA behavior."
    ]
  ],
  [
    "React project setup with Vite/CRA",
    "What does npm install generally do in a React project?",
    [
      "Installs dependencies",
      "Creates CSS animations",
      "Publishes the site automatically",
      "Starts the browser"
    ],
    0,
    [
      "Installs dependencies is correct because it directly matches the definition or behavior of React project setup with Vite/CRA.",
      "Creates CSS animations is not correct here; it describes a different concept or does not provide the required React project setup with Vite/CRA behavior.",
      "Publishes the site automatically is not correct here; it describes a different concept or does not provide the required React project setup with Vite/CRA behavior.",
      "Starts the browser is not correct here; it describes a different concept or does not provide the required React project setup with Vite/CRA behavior."
    ]
  ],
  [
    "React introduction",
    "What is React primarily used to build?",
    [
      "User interfaces",
      "Operating systems",
      "Databases",
      "Network routers"
    ],
    0,
    [
      "User interfaces is correct because it directly matches the definition or behavior of React introduction.",
      "Operating systems is not correct here; it describes a different concept or does not provide the required React introduction behavior.",
      "Databases is not correct here; it describes a different concept or does not provide the required React introduction behavior.",
      "Network routers is not correct here; it describes a different concept or does not provide the required React introduction behavior."
    ]
  ],
  [
    "React introduction",
    "React encourages UI to be built from:",
    [
      "Components",
      "SQL tables",
      "Only CSS classes",
      "Server cables"
    ],
    0,
    [
      "Components is correct because it directly matches the definition or behavior of React introduction.",
      "SQL tables is not correct here; it describes a different concept or does not provide the required React introduction behavior.",
      "Only CSS classes is not correct here; it describes a different concept or does not provide the required React introduction behavior.",
      "Server cables is not correct here; it describes a different concept or does not provide the required React introduction behavior."
    ]
  ],
  [
    "Component-based architecture",
    "A major benefit of component-based architecture is:",
    [
      "Reusability and separation of UI concerns",
      "Removing JavaScript",
      "Avoiding all state",
      "Using one huge file"
    ],
    0,
    [
      "Reusability and separation of UI concerns is correct because it directly matches the definition or behavior of Component-based architecture.",
      "Removing JavaScript is not correct here; it describes a different concept or does not provide the required Component-based architecture behavior.",
      "Avoiding all state is not correct here; it describes a different concept or does not provide the required Component-based architecture behavior.",
      "Using one huge file is not correct here; it describes a different concept or does not provide the required Component-based architecture behavior."
    ]
  ],
  [
    "Component-based architecture",
    "A component should ideally have:",
    [
      "A focused, understandable responsibility",
      "Every feature in the application",
      "No inputs ever",
      "Only CSS"
    ],
    0,
    [
      "A focused, understandable responsibility is correct because it directly matches the definition or behavior of Component-based architecture.",
      "Every feature in the application is not correct here; it describes a different concept or does not provide the required Component-based architecture behavior.",
      "No inputs ever is not correct here; it describes a different concept or does not provide the required Component-based architecture behavior.",
      "Only CSS is not correct here; it describes a different concept or does not provide the required Component-based architecture behavior."
    ]
  ],
  [
    "JSX",
    "JSX is best described as:",
    [
      "A syntax extension that lets you write HTML-like UI in JavaScript",
      "A database query language",
      "A CSS preprocessor",
      "A browser API"
    ],
    0,
    [
      "A syntax extension that lets you write HTML-like UI in JavaScript is correct because it directly matches the definition or behavior of JSX.",
      "A database query language is not correct here; it describes a different concept or does not provide the required JSX behavior.",
      "A CSS preprocessor is not correct here; it describes a different concept or does not provide the required JSX behavior.",
      "A browser API is not correct here; it describes a different concept or does not provide the required JSX behavior."
    ]
  ],
  [
    "JSX",
    "In JSX, JavaScript expressions are commonly placed inside:",
    [
      "{ }",
      "[ ]",
      "< > only",
      "( ) only"
    ],
    0,
    [
      "{ } is correct because it directly matches the definition or behavior of JSX.",
      "[ ] is not correct here; it describes a different concept or does not provide the required JSX behavior.",
      "< > only is not correct here; it describes a different concept or does not provide the required JSX behavior.",
      "( ) only is not correct here; it describes a different concept or does not provide the required JSX behavior."
    ]
  ],
  [
    "Components",
    "A React function component should normally:",
    [
      "Return JSX or another renderable value",
      "Return only CSS",
      "Modify the DOM manually every render",
      "Always be a class"
    ],
    0,
    [
      "Return JSX or another renderable value is correct because it directly matches the definition or behavior of Components.",
      "Return only CSS is not correct here; it describes a different concept or does not provide the required Components behavior.",
      "Modify the DOM manually every render is not correct here; it describes a different concept or does not provide the required Components behavior.",
      "Always be a class is not correct here; it describes a different concept or does not provide the required Components behavior."
    ]
  ],
  [
    "Components",
    "Which name follows the usual convention for a React component?",
    [
      "UserCard",
      "usercard",
      "user_card_only",
      "USERCARDHTML"
    ],
    0,
    [
      "UserCard is correct because it directly matches the definition or behavior of Components.",
      "usercard is not correct here; it describes a different concept or does not provide the required Components behavior.",
      "user_card_only is not correct here; it describes a different concept or does not provide the required Components behavior.",
      "USERCARDHTML is not correct here; it describes a different concept or does not provide the required Components behavior."
    ]
  ],
  [
    "Props",
    "Are React props normally mutated by the receiving child?",
    [
      "No, props should be treated as read-only",
      "Yes, always",
      "Only with CSS",
      "Only in HTML"
    ],
    0,
    [
      "No, props should be treated as read-only is correct because it directly matches the definition or behavior of Props.",
      "Yes, always is not correct here; it describes a different concept or does not provide the required Props behavior.",
      "Only with CSS is not correct here; it describes a different concept or does not provide the required Props behavior.",
      "Only in HTML is not correct here; it describes a different concept or does not provide the required Props behavior."
    ]
  ],
  [
    "Props",
    "What is a common way to pass a value to a component?",
    [
      "<User name=\"Samir\" />",
      "<User send-name=\"Samir\"> only",
      "User.name = Samir",
      "props(User,Samir)"
    ],
    0,
    [
      "<User name=\"Samir\" /> is correct because it directly matches the definition or behavior of Props.",
      "<User send-name=\"Samir\"> only is not correct here; it describes a different concept or does not provide the required Props behavior.",
      "User.name = Samir is not correct here; it describes a different concept or does not provide the required Props behavior.",
      "props(User,Samir) is not correct here; it describes a different concept or does not provide the required Props behavior."
    ]
  ],
  [
    "State",
    "State represents:",
    [
      "Data a component needs to remember and that can change over time",
      "Only CSS values",
      "Only server files",
      "Static HTML comments"
    ],
    0,
    [
      "Data a component needs to remember and that can change over time is correct because it directly matches the definition or behavior of State.",
      "Only CSS values is not correct here; it describes a different concept or does not provide the required State behavior.",
      "Only server files is not correct here; it describes a different concept or does not provide the required State behavior.",
      "Static HTML comments is not correct here; it describes a different concept or does not provide the required State behavior."
    ]
  ],
  [
    "State",
    "Changing React state through its setter normally causes:",
    [
      "A re-render",
      "A full computer restart",
      "A Git commit",
      "CSS compilation only"
    ],
    0,
    [
      "A re-render is correct because it directly matches the definition or behavior of State.",
      "A full computer restart is not correct here; it describes a different concept or does not provide the required State behavior.",
      "A Git commit is not correct here; it describes a different concept or does not provide the required State behavior.",
      "CSS compilation only is not correct here; it describes a different concept or does not provide the required State behavior."
    ]
  ],
  [
    "Rendering lists",
    "Why does React ask for a key when rendering lists?",
    [
      "To help identify list items across renders",
      "To style every item",
      "To encrypt the array",
      "To call the API"
    ],
    0,
    [
      "To help identify list items across renders is correct because it directly matches the definition or behavior of Rendering lists.",
      "To style every item is not correct here; it describes a different concept or does not provide the required Rendering lists behavior.",
      "To encrypt the array is not correct here; it describes a different concept or does not provide the required Rendering lists behavior.",
      "To call the API is not correct here; it describes a different concept or does not provide the required Rendering lists behavior."
    ]
  ],
  [
    "Rendering lists",
    "Which method is commonly used to render an array into JSX elements?",
    [
      "map()",
      "joinCSS()",
      "renderEachHTML()",
      "loopJSXOnly()"
    ],
    0,
    [
      "map() is correct because it directly matches the definition or behavior of Rendering lists.",
      "joinCSS() is not correct here; it describes a different concept or does not provide the required Rendering lists behavior.",
      "renderEachHTML() is not correct here; it describes a different concept or does not provide the required Rendering lists behavior.",
      "loopJSXOnly() is not correct here; it describes a different concept or does not provide the required Rendering lists behavior."
    ]
  ],
  [
    "Conditional rendering",
    "Which operator is often used for a simple two-way conditional in JSX?",
    [
      "Ternary ? :",
      "SQL CASE only",
      "for...in",
      "spread"
    ],
    0,
    [
      "Ternary ? : is correct because it directly matches the definition or behavior of Conditional rendering.",
      "SQL CASE only is not correct here; it describes a different concept or does not provide the required Conditional rendering behavior.",
      "for...in is not correct here; it describes a different concept or does not provide the required Conditional rendering behavior.",
      "spread is not correct here; it describes a different concept or does not provide the required Conditional rendering behavior."
    ]
  ],
  [
    "Conditional rendering",
    "What does {isLoggedIn && <Dashboard />} commonly mean?",
    [
      "Render Dashboard when isLoggedIn is truthy",
      "Always render Dashboard twice",
      "Hide all JSX",
      "Create a Promise"
    ],
    0,
    [
      "Render Dashboard when isLoggedIn is truthy is correct because it directly matches the definition or behavior of Conditional rendering.",
      "Always render Dashboard twice is not correct here; it describes a different concept or does not provide the required Conditional rendering behavior.",
      "Hide all JSX is not correct here; it describes a different concept or does not provide the required Conditional rendering behavior.",
      "Create a Promise is not correct here; it describes a different concept or does not provide the required Conditional rendering behavior."
    ]
  ],
  [
    "useState",
    "What does useState return?",
    [
      "A state value and a setter function",
      "Only a number",
      "A DOM element",
      "A Promise"
    ],
    0,
    [
      "A state value and a setter function is correct because it directly matches the definition or behavior of useState.",
      "Only a number is not correct here; it describes a different concept or does not provide the required useState behavior.",
      "A DOM element is not correct here; it describes a different concept or does not provide the required useState behavior.",
      "A Promise is not correct here; it describes a different concept or does not provide the required useState behavior."
    ]
  ],
  [
    "useState",
    "Why should state updates use the setter returned by useState?",
    [
      "It tells React that state changed and a render may be needed",
      "It changes CSS specificity",
      "It bypasses React",
      "It edits the HTML file"
    ],
    0,
    [
      "It tells React that state changed and a render may be needed is correct because it directly matches the definition or behavior of useState.",
      "It changes CSS specificity is not correct here; it describes a different concept or does not provide the required useState behavior.",
      "It bypasses React is not correct here; it describes a different concept or does not provide the required useState behavior.",
      "It edits the HTML file is not correct here; it describes a different concept or does not provide the required useState behavior."
    ]
  ],
  [
    "useEffect",
    "An empty dependency array [] usually means an effect runs:",
    [
      "After the initial render (and cleanup when it unmounts)",
      "On every keystroke forever",
      "Only before React starts",
      "Never"
    ],
    0,
    [
      "After the initial render (and cleanup when it unmounts) is correct because it directly matches the definition or behavior of useEffect.",
      "On every keystroke forever is not correct here; it describes a different concept or does not provide the required useEffect behavior.",
      "Only before React starts is not correct here; it describes a different concept or does not provide the required useEffect behavior.",
      "Never is not correct here; it describes a different concept or does not provide the required useEffect behavior."
    ]
  ],
  [
    "useRef",
    "What does useRef return?",
    [
      "A stable ref object whose .current can hold a value",
      "A new component",
      "A Promise",
      "A CSS rule"
    ],
    0,
    [
      "A stable ref object whose .current can hold a value is correct because it directly matches the definition or behavior of useRef.",
      "A new component is not correct here; it describes a different concept or does not provide the required useRef behavior.",
      "A Promise is not correct here; it describes a different concept or does not provide the required useRef behavior.",
      "A CSS rule is not correct here; it describes a different concept or does not provide the required useRef behavior."
    ]
  ],
  [
    "useMemo",
    "When is useMemo most useful?",
    [
      "When memoizing an expensive calculation",
      "For every simple variable",
      "For CSS styling",
      "For routing only"
    ],
    0,
    [
      "When memoizing an expensive calculation is correct because it directly matches the definition or behavior of useMemo.",
      "For every simple variable is not correct here; it describes a different concept or does not provide the required useMemo behavior.",
      "For CSS styling is not correct here; it describes a different concept or does not provide the required useMemo behavior.",
      "For routing only is not correct here; it describes a different concept or does not provide the required useMemo behavior."
    ]
  ],
  [
    "useCallback",
    "What does useCallback memoize?",
    [
      "A function reference",
      "A CSS declaration",
      "A DOM node permanently",
      "A Promise result"
    ],
    0,
    [
      "A function reference is correct because it directly matches the definition or behavior of useCallback.",
      "A CSS declaration is not correct here; it describes a different concept or does not provide the required useCallback behavior.",
      "A DOM node permanently is not correct here; it describes a different concept or does not provide the required useCallback behavior.",
      "A Promise result is not correct here; it describes a different concept or does not provide the required useCallback behavior."
    ]
  ],
  [
    "Component composition",
    "Which prop is commonly used to pass nested JSX into a component?",
    [
      "children",
      "contentOnly",
      "slotTextOnly",
      "inside"
    ],
    0,
    [
      "children is correct because it directly matches the definition or behavior of Component composition.",
      "contentOnly is not correct here; it describes a different concept or does not provide the required Component composition behavior.",
      "slotTextOnly is not correct here; it describes a different concept or does not provide the required Component composition behavior.",
      "inside is not correct here; it describes a different concept or does not provide the required Component composition behavior."
    ]
  ],
  [
    "Reusable UI",
    "A reusable Button component should usually receive:",
    [
      "Props for values/behavior that vary",
      "Hard-coded data for every page",
      "Only global variables",
      "A database connection"
    ],
    0,
    [
      "Props for values/behavior that vary is correct because it directly matches the definition or behavior of Reusable UI.",
      "Hard-coded data for every page is not correct here; it describes a different concept or does not provide the required Reusable UI behavior.",
      "Only global variables is not correct here; it describes a different concept or does not provide the required Reusable UI behavior.",
      "A database connection is not correct here; it describes a different concept or does not provide the required Reusable UI behavior."
    ]
  ],
  [
    "Custom hooks",
    "What naming convention identifies a custom React hook?",
    [
      "It starts with use",
      "It ends with HookOnly",
      "It must be named ReactHook",
      "It starts with custom"
    ],
    0,
    [
      "It starts with use is correct because it directly matches the definition or behavior of Custom hooks.",
      "It ends with HookOnly is not correct here; it describes a different concept or does not provide the required Custom hooks behavior.",
      "It must be named ReactHook is not correct here; it describes a different concept or does not provide the required Custom hooks behavior.",
      "It starts with custom is not correct here; it describes a different concept or does not provide the required Custom hooks behavior."
    ]
  ],
  [
    "Lifting state up",
    "Lifting state up means:",
    [
      "Moving shared state to the closest common parent",
      "Moving state into CSS",
      "Deleting state",
      "Putting state in every child"
    ],
    0,
    [
      "Moving shared state to the closest common parent is correct because it directly matches the definition or behavior of Lifting state up.",
      "Moving state into CSS is not correct here; it describes a different concept or does not provide the required Lifting state up behavior.",
      "Deleting state is not correct here; it describes a different concept or does not provide the required Lifting state up behavior.",
      "Putting state in every child is not correct here; it describes a different concept or does not provide the required Lifting state up behavior."
    ]
  ],
  [
    "Prop drilling basics",
    "Prop drilling usually means:",
    [
      "Passing props through intermediate components to reach a deeper child",
      "Using props only once",
      "Fetching data with fetch",
      "Styling with props"
    ],
    0,
    [
      "Passing props through intermediate components to reach a deeper child is correct because it directly matches the definition or behavior of Prop drilling basics.",
      "Using props only once is not correct here; it describes a different concept or does not provide the required Prop drilling basics behavior.",
      "Fetching data with fetch is not correct here; it describes a different concept or does not provide the required Prop drilling basics behavior.",
      "Styling with props is not correct here; it describes a different concept or does not provide the required Prop drilling basics behavior."
    ]
  ]
];

const notesGrid = document.getElementById("notesGrid");
const nav = document.getElementById("courseNav");
const quizList = document.getElementById("quizList");
const moduleFilter = document.getElementById("moduleFilter");
const questionFilter = document.getElementById("questionFilter");
const noteSearch = document.getElementById("noteSearch");

let state = JSON.parse(localStorage.getItem("frontendMasteryState") || '{"answers":{},"score":0}');
const answered = () => Object.keys(state.answers).length;

function save(){localStorage.setItem("frontendMasteryState",JSON.stringify(state)); updateProgress();}
function updateProgress(){
 const a=answered(), total=questions.length;
 document.getElementById("progressText").textContent=`${a} / ${total} answered`;
 document.getElementById("progressBar").style.width=(a/total*100)+"%";
 document.getElementById("correctCount").textContent=Object.values(state.answers).filter(x=>x.correct).length;
 document.getElementById("wrongCount").textContent=Object.values(state.answers).filter(x=>!x.correct).length;
}
function buildNav(){
 nav.innerHTML="";
 modules.forEach(m=>{
  const group=document.createElement("div"); group.className="nav-group";
  const b=document.createElement("button"); b.className="nav-module"; b.textContent=`${m.sessions}  ${m.title}`;
  b.onclick=()=>{group.classList.toggle("open")};
  const topics=document.createElement("div"); topics.className="nav-topics";
  m.topics.forEach(t=>{
   const x=document.createElement("button"); x.className="nav-topic"; x.textContent=t.name;
   x.onclick=()=>jumpToNote(t.name); topics.appendChild(x);
  });
  group.append(b,topics); nav.appendChild(group);
  const opt=document.createElement("option"); opt.value=m.id; opt.textContent=`Module ${m.id}: ${m.title}`; moduleFilter.appendChild(opt);
 });
}
function jumpToNote(name){
 document.getElementById("notesSection").scrollIntoView({behavior:"smooth"});
 noteSearch.value=name; renderNotes(name);
}
function renderNotes(search=""){
 notesGrid.innerHTML="";
 let count=0;
 modules.forEach(m=>m.topics.forEach(t=>{
  if(search && !(t.name+" "+t.note+" "+m.title).toLowerCase().includes(search.toLowerCase())) return;
  count++;
  const card=document.createElement("article"); card.className="note-card";
  card.innerHTML=`<span class="module-label">Sessions ${m.sessions} • Module ${m.id}</span><h3>${t.name}</h3>
  <p>${t.note}</p>
  <h4>Remember</h4><ul>
    <li>Understand the purpose of the topic before memorizing syntax.</li>
    <li>Try a small example in the browser or your editor.</li>
  </ul>`;
  notesGrid.appendChild(card);
 }));
 if(!count) notesGrid.innerHTML='<div class="empty">No notes match your search.</div>';
}
function moduleOf(topic){
 return modules.find(m=>m.topics.some(t=>t.name===topic));
}
function renderQuiz(){
 const mod=moduleFilter.value, filter=questionFilter.value;
 quizList.innerHTML="";
 let shown=0;
 questions.forEach((q,i)=>{
  const [topic,text,opts,correct,details]=q, m=moduleOf(topic);
  if(mod!=="all" && String(m.id)!==mod) return;
  const ans=state.answers[i];
  if(filter==="unanswered" && ans) return;
  if(filter==="wrong" && (!ans || ans.correct)) return;
  shown++;
  const card=document.createElement("article"); card.className="quiz-card"; card.id="q-"+i;
  const chosen=ans?.choice;
  card.innerHTML=`<div class="q-head"><span class="q-num">Question ${i+1}</span><span class="q-topic">${topic}</span></div>
  <div class="question">${text}</div>
  <div class="options"></div>
  <div class="explanation ${ans?'show':''}">
    <strong>${ans ? (ans.correct ? "✓ Correct answer" : "✕ Not quite — review the explanations") : ""}</strong>
    <p>${ans ? `You selected <b>${String.fromCharCode(65+ans.choice)}</b>. The correct answer is <b>${String.fromCharCode(65+correct)}</b>.` : ""}</p>
    <div class="details"></div>
  </div>`;
  const options=card.querySelector(".options");
  opts.forEach((op,j)=>{
   const btn=document.createElement("button"); btn.className="option";
   if(ans){btn.classList.add("locked"); if(j===correct)btn.classList.add("correct"); if(j===chosen && j!==correct)btn.classList.add("wrong");}
   const letter=document.createElement("span");
   letter.className="option-letter";
   letter.textContent=String.fromCharCode(65+j);
   const label=document.createElement("span");
   label.className="option-label";
   label.textContent=op;
   btn.append(letter,label);
   btn.onclick=()=>answer(i,j);
   options.appendChild(btn);
  });
  if(ans){
   const d=card.querySelector(".details");
   d.innerHTML=details.map((x,j)=>`<div class="option-detail"><b class="${j===correct?'right-tag':'wrong-tag'}">${String.fromCharCode(65+j)} — ${j===correct?'RIGHT':'WHY '+(j===chosen?'YOUR CHOICE IS WRONG':'THIS OPTION IS WRONG')}</b>: ${x}</div>`).join("");
  }
  quizList.appendChild(card);
 });
 if(!shown) quizList.innerHTML='<div class="empty">No questions match this filter. Try another filter.</div>';
}
function answer(i,choice){
 if(state.answers[i]) return;
 const correct=questions[i][3]===choice;
 state.answers[i]={choice,correct};
 save(); renderQuiz();
 setTimeout(()=>document.getElementById("q-"+i)?.scrollIntoView({behavior:"smooth",block:"center"}),30);
}
document.getElementById("startBtn").onclick=()=>document.getElementById("quizSection").scrollIntoView({behavior:"smooth"});
document.getElementById("notesBtn").onclick=()=>document.getElementById("notesSection").scrollIntoView({behavior:"smooth"});
document.getElementById("resetBtn").onclick=()=>{if(confirm("Reset all answered questions and scores?")){state={answers:{},score:0};save();renderQuiz();}};
moduleFilter.onchange=renderQuiz; questionFilter.onchange=renderQuiz; noteSearch.oninput=()=>renderNotes(noteSearch.value);
document.getElementById("themeBtn").onclick=()=>{
 const dark=document.documentElement.getAttribute("data-theme")==="dark";
 document.documentElement.setAttribute("data-theme",dark?"light":"dark");
 localStorage.setItem("frontendMasteryTheme",dark?"light":"dark");
 document.getElementById("themeBtn").textContent=dark?"☾":"☀";
};
const savedTheme=localStorage.getItem("frontendMasteryTheme")||"light";
document.documentElement.setAttribute("data-theme",savedTheme);
document.getElementById("themeBtn").textContent=savedTheme==="dark"?"☀":"☾";
document.getElementById("totalQuestions").textContent=questions.length;
buildNav(); renderNotes(); renderQuiz(); updateProgress();

/* ================= Coding Playground ================= */
const playgroundData={
react:[
["React in one minute","React builds interfaces from reusable components. A component is normally a function that returns JSX.",
`function App() {
  return <h1>Hello React! ⚛️</h1>;
}`,"Change the heading to your own name.","Edit the text between <h1> and </h1>."],
["JSX + JavaScript","JSX can contain JavaScript expressions inside curly braces.",
`function App() {
  const name = "Learner";
  return <h2>Hello {name}</h2>;
}`,"Create a variable called course and display it inside an <h2>.","Use const course = 'React'; and then {course}."],
["Props","Props are values passed from a parent component to a child. Think of them as component inputs.",
`function Welcome({name}) {
  return <h2>Hi {name} 👋</h2>;
}
function App() {
  return <Welcome name="Frontend Learner" />;
}`,"Change the displayed name.","Change the value passed to name."],
["useState","useState gives a component memory. It returns the current value and a setter.",
`function App() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>
    Clicked {count} times
  </button>;
}`,"Make the counter start at 10.","Change useState(0) to useState(10)."],
["Events","React event props such as onClick receive a function.",
`function App() {
  const sayHi = () => alert("Hi!");
  return <button onClick={sayHi}>Click me</button>;
}`,"Make the alert say: I am learning React!","Change the string inside alert(...)."],
["Conditional rendering","A condition can decide which JSX appears.",
`function App() {
  const loggedIn = true;
  return <h2>{loggedIn ? "Welcome!" : "Please log in"}</h2>;
}`,"Set loggedIn to false and run it.","Change true to false."],
["Rendering lists","map() turns array items into JSX. Give each sibling a stable key.",
`function App() {
  const skills = ["HTML","CSS","React"];
  return <ul>{skills.map(s => <li key={s}>{s}</li>)}</ul>;
}`,"Add JavaScript to the skills array.","Add another string such as 'JavaScript'."],
["useEffect","useEffect synchronizes a component with an external system.",
`function App() {
  React.useEffect(() => {
    document.title = "React Learner";
  }, []);
  return <h2>Check the browser tab title.</h2>;
}`,"Change the tab title to My React App.","Replace the string assigned to document.title."],
["Custom hooks","Custom hooks reuse stateful logic. Their names start with use.",
`function useGreeting(name) {
  return "Hello " + name;
}
function App() {
  return <h2>{useGreeting("Learner")}</h2>;
}`,"Change the greeting to Welcome.","Replace 'Hello ' with 'Welcome '."]
],
javascript:[
["Variables","let can be reassigned; const cannot be reassigned.",
`const name = "Learner";
document.body.innerHTML =
  "<h1>Hello " + name + "</h1>";`,"Change the name and run it.","Edit the string assigned to name."],
["Functions","Functions package reusable behavior and can receive parameters.",
`function add(a,b){ return a+b; }
document.body.innerHTML="<h1>"+add(20,30)+"</h1>";`,"Make the result 100.","Change the numbers so they add to 100."],
["Arrays + map","map creates a new array by transforming every item.",
`const nums=[1,2,3];
const doubled=nums.map(n=>n*2);
document.body.innerHTML="<pre>"+doubled+"</pre>";`,"Triple every number instead.","Replace n*2 with n*3."]
],
htmlcss:[
["HTML structure","HTML gives a page its structure. Prefer meaningful semantic elements.",
`<main>
  <h1>My Page</h1>
  <p>Learning frontend!</p>
</main>`,"Add another paragraph.","Add another <p>...</p> inside <main>."],
["CSS styling","CSS changes presentation through selectors and declarations.",
`<h1>CSS Lab</h1>
<p>Make me look better.</p>`,"Make the heading 42px and add padding to the paragraph.","Edit the CSS tab."]
]};

const pg={mode:"react",lesson:0,file:"jsx",files:{
react:{jsx:`function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{fontFamily:"Arial",padding:"30px"}}>
      <h1>Hello React! ⚛️</h1>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}`,js:"",html:`<div id="root"></div>`,css:`body { margin:0; font-family:Arial; }`},
javascript:{jsx:"",js:`const name="Frontend Learner";
document.body.innerHTML="<main style='font-family:Arial;padding:30px'><h1>Hello "+name+"!</h1></main>";`,html:`<main><h1>JavaScript Playground</h1></main>`,css:`body{font-family:Arial;padding:30px;}`},
htmlcss:{jsx:"",js:`console.log("HTML + CSS mode");`,html:`<main>
  <h1>HTML + CSS Lab</h1>
  <p>Edit me!</p>
</main>`,css:`body{font-family:Arial;padding:30px} h1{font-size:40px} p{line-height:1.7}`}
}};

const pg$=id=>document.getElementById(id);
function pgLessons(){return playgroundData[pg.mode]}
function pgFiles(){return pg.files[pg.mode]}
function renderPlayground(){
 const l=pgLessons()[pg.lesson];
 pg$("lessonTitle").textContent=l[0];pg$("lessonText").textContent=l[1];
 pg$("lessonExample").textContent=l[2];pg$("challengeText").textContent=l[3];
 pg$("hintText").textContent="Hint: "+l[4];pg$("hintText").classList.remove("show");
 pg$("codeEditor").value=pgFiles()[pg.file]||"";
 document.querySelectorAll(".editor-tab").forEach(b=>b.classList.toggle("active",b.dataset.file===pg.file));
 pg$("previewLabel").textContent=pg.mode==="react"?"React":pg.mode==="javascript"?"JavaScript":"HTML + CSS";
}
function runPlayground(){
 pgFiles()[pg.file]=pg$("codeEditor").value;const f=pgFiles();let src="";
 if(pg.mode==="react"){
  src=`<!doctype html><html><head>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>${f.css}</style></head><body>${f.html}
<script type="text/babel">
try{${f.jsx}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}catch(e){document.body.innerHTML="<pre style='white-space:pre-wrap;color:#b42318;padding:20px'>"+e+"</pre>";}
<\/script></body></html>`;
 }else if(pg.mode==="javascript"){
  src=`<!doctype html><html><head><style>${f.css}</style></head><body>${f.html}<script>try{${f.js}}catch(e){document.body.innerHTML+="<pre>"+e+"</pre>"}</script></body></html>`;
 }else{
  src=`<!doctype html><html><head><style>${f.css}</style></head><body>${f.html}<script>${f.js}</script></body></html>`;
 }
 pg$("previewFrame").srcdoc=src;pg$("runStatus").textContent="✓ Preview updated";
 setTimeout(()=>pg$("runStatus").textContent="",1600);
}
pg$("playgroundNav").onclick=()=>pg$("playgroundSection").scrollIntoView({behavior:"smooth"});
pg$("playgroundMode").onchange=()=>{
 pgFiles()[pg.file]=pg$("codeEditor").value;pg.mode=pg$("playgroundMode").value;pg.lesson=0;
 pg.file=pg.mode==="react"?"jsx":pg.mode==="javascript"?"js":"html";renderPlayground();runPlayground();
};
document.querySelectorAll(".editor-tab").forEach(b=>b.onclick=()=>{
 pgFiles()[pg.file]=pg$("codeEditor").value;pg.file=b.dataset.file;renderPlayground();
});
pg$("codeEditor").oninput=()=>pgFiles()[pg.file]=pg$("codeEditor").value;
pg$("runCodeBtn").onclick=runPlayground;
pg$("showHintBtn").onclick=()=>pg$("hintText").classList.toggle("show");
pg$("nextLessonBtn").onclick=()=>{
 pgFiles()[pg.file]=pg$("codeEditor").value;pg.lesson=(pg.lesson+1)%pgLessons().length;
 pg.file=pg.mode==="react"?"jsx":pg.mode==="javascript"?"js":"html";renderPlayground();runPlayground();
};
pg$("resetCodeBtn").onclick=()=>{
 if(pg.mode==="react")pg.files.react.jsx=`function App() {
  const [count, setCount] = React.useState(0);
  return <div style={{fontFamily:"Arial",padding:"30px"}}>
    <h1>Hello React! ⚛️</h1>
    <p>You clicked {count} times.</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
  </div>;
}`;
 if(pg.mode==="javascript")pg.files.javascript.js=`const name="Frontend Learner";
document.body.innerHTML="<h1>Hello "+name+"!</h1>";`;
 if(pg.mode==="htmlcss")pg.files.htmlcss.html=`<main><h1>HTML + CSS Lab</h1><p>Edit me!</p></main>`;
 renderPlayground();runPlayground();
};
renderPlayground();runPlayground();

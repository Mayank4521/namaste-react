//
//<div id="parent">
//<div id = "child">
//<h1>Hello I am Mayank</h1>
//<h2>Its a pleasure</h2>
//</div>
//<div id = "child">
//<h1>Hello I am Mayank</h1>
//<h2>Its a pleasure</h2>
//</div>
//</div>
//

const heading = React.createElement("div",{id: "parent"},
    [React.createElement("div",{id: "child"},
        [React.createElement("h1",{},"Hello I am Mayank"),
        React.createElement("h2",{},"Its a Pleasure")
        ]
    ),
    React.createElement("div",{id: "child"},
        [React.createElement("h1",{},"Hello I am Mayank"),
        React.createElement("h2",{},"Its a Pleasure")
        ]
    )
])


const root  = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)
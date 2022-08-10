import React from "react"

export default function WindowTracker() {
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        /*even if our WindowTracker component is no rendered to our page, it allows us to resize our window(it's a browser component, not in our code)
        
        Because the window is a browser component, when the tracker is no rendered; we get an error which is called MEMORY LEAK
        To fix this; we need to create a return func (cleanup func) in our useEffect */
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}

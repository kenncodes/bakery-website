import useState from "react"

const Topbar = (props) => {
    //const [showTopbar,setShowTopbar] = useState(true);
    const removeTopbar = () => {
        var elem = document.getElementById("topbar");
        elem.setAttribute("style", "display:none");
    }

    return (
        <div id="topbar" className="topbar">
            <p className="topbarMessage">{props.message}</p>
            <button id="topbarButton" className="topbarButton" onClick={removeTopbar}>Close Bar</button>
        </div>
    )
}

export default Topbar
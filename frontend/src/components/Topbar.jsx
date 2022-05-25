import useState from "react"

const Topbar = (props) => {
    const [showTopbar,setShowTopbar] = useState(true);
    const removeTopbar = () => {

    }

    return (
        <div className="topbar">
            <p className="topbarMessage">{props.message}</p>
            <button className="topbarButton" onClick={removeTopbar}>Close Bar</button>
        </div>
    )
}

export default Topbar
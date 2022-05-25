const Navbar = (props) => {
    return (
    <div>
        <h1>{props.bakeryName}</h1>
        <ul className="navItems">
            <li>Menu</li>
            <li>About</li>
            <li>Location</li>
            <li>Cake Gallery</li>
            <li>Reviews</li>
        </ul>
    </div>
    )
}

export default Navbar
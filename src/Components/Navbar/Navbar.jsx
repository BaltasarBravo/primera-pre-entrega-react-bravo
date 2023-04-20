import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
        <div style={{width:"100%", height:"200px", display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"gray"}}>
            <h1 style={{margin:"100px"}}>I Love Bunny</h1>
            <nav>
                <ul style={{display: "inline-flex"}}>
                    <li><a href="http://">Inicio</a></li>
                    <li><a href="http://">Categorias</a></li>
                    <li><a href="http://">Mas Vendido</a></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    );
};

export default NavBar;
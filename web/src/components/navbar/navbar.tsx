import React from "react"
import getProducts from "../../Controllers/test";
import { Product } from '../../Controllers/test';

interface NavBarProps{
    nameCompany: string;
}

interface NavBarState{
    userName: string;
    products: Product[];
}

class NavBar extends React.Component<NavBarProps, NavBarState> {

    constructor(props: NavBarProps){
        super(props);
        this.state = {
            userName: "Pepito",
            products: []
        }
    }
    private testing () {
        getProducts().then(value => this.setState({products: value}))
    }

    public render () {
        this.testing();
        if (this.state.products.length === 0){
            return (<>Waiting for products</>)
        }
        console.log("Im in navbar", this.state.products);
        return (
            <div>
                <h1>Bienvenido a</h1>
                {this.state.products.map(
                    x => <><h1>{x.productName} {x.price}</h1></>
                )}
            </div>
        );
    }

}

export default NavBar;
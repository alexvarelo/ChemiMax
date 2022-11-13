import React from "react"

interface NavBarProps{
    nameCompany: string;
}

interface NavBarState{
    userName: string;
}

class NavBar extends React.Component<NavBarProps, NavBarState> {

    constructor(props: NavBarProps){
        super(props);
    }

    public render () {
        return (
            <div>
                <h1>Bienvenido a {this.props.nameCompany}</h1>
            </div>
        );
    }

}

export default NavBar;
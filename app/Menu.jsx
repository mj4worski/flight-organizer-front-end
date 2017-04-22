import React from 'react'

class Menu extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <nav>
                <ul>
                    <li>Strona glowna</li>
                    <li>Wyszukaj lotu</li>
                </ul>
            </nav>
        )
    }
}

export default Menu;
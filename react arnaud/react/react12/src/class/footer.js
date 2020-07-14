import React, { Component } from 'react';

class Footer extends Component {
    render() {
        let texteFooter = "";
        if (this.props.langue === 'FR') {
            texteFooter = "Copyright 2020. Tous droits reservés.";
        }
        if (this.props.langue === 'EN') {
            texteFooter = "Copyright 2020. all Rights reserved.";
        }
        return (
            <footer>
                {texteFooter}
            </footer>

        )
    }
}
export default Footer;
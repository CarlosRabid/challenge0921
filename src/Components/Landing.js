import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom' //do not delete Router Route
import { withTranslation } from 'react-i18next';
import './landing.css'
import CardLanding from './CardLanding';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            users: []
        }
    }

    render() {
        const { t } = this.props
        if (!this.props.isLoggedIn()) { return <Redirect to="/" /> }
        let dataLanding = [
            { title: t("Repositories"), description: t("Repo details."), link: "/form" , button: t("Check Details")}
        ]
        return (
            <div className="landing-container">
                {dataLanding.map(d => <CardLanding d={d} key={d.link} />)}
            </div>

        )
    }
}


export default withTranslation('translation')(Landing);
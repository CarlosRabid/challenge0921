import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './form.css';
import { withTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FieldLocations from './FieldLocations';
import Comments from './ObservationComments';
import { Redirect } from 'react-router-dom';
import * as constant from './constant'

const axios = require('axios');

const dinamicRoute = (
    window.location.host.includes("localhost") ?
        constant.LOCAL_GET : constant.PROD_GET
)

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationLatitude: "",  // set-up by beach selection
            locationLongitude: "", // set-up by beach selection
            selectedField: "",
            firstName: null,
            lastName: null,
            date: null,
            time: "",
            comments: ""
        }
    }

    handleFieldxInput = async (input) => {
        let selectedField = { ...this.state.selectedField }
        selectedField = input.selectedField
        await this.setState({  selectedField })
    }

    handleComments = (input) => {
        let comments = { ...this.state.comments }
        comments = input
        this.setState({
            comments
        })
    }

    submitNewForm = async (comments) => {


        const firstName = this.state.firstName || localStorage.getItem("firstName")
        const lastName = this.state.lastName || localStorage.getItem("lastName")


        let form = {
            observation:
            {
                comments: this.state.comments
            }
        }
        if(navigator.onLine) {
            const response = await axios.post(`${dinamicRoute}/mega-form`,  form )
            console.log(response)
            console.log('new information saved!')
            alert('Successfully submitted')
        }
        else {
            let savedForms = JSON.parse(localStorage.getItem("savedForms") || "[]")
            savedForms.push(form)
            localStorage.setItem('savedForms', JSON.stringify(savedForms))
            console.log("Saved form locally for later post")
            alert('Cannot submit, will try again later')
        }
    }

    handleExpandClick = (event) => {
        let showFpart = true
        this.setState({ showFpart: showFpart })
    };

    render() {
        const { t } = this.props;

        if (!this.props.isLoggedIn()) { return <Redirect to="/" /> }

        return (

            <div id="formContainer" >
                <h1>{t('Repository Detailed Information')}</h1>
                <div id="beachButton" >
                    <FieldLocations handleFieldxInput={this.handleFieldxInput} />
                </div>
                <br />
                <ExpansionPanel  className="shift" >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="shift"
                    // style={{border: '10px'}}

                    >
                        <div className="helptext">
                            <Typography className="Shift" variant="h6" component="h6">{t('Shift')}</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    {/* <ShiftInput forms={this.state.forms} handleName={this.handleName} handleDate={this.handleDate} />
                    <br />
                </ExpansionPanel>
                <ExpansionPanel TransitionProps={{ unmountOnExit: true }}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="turtles"
                    >
                        <div className="helptext">
                            <Typography className="turtles" variant="h6" component="h6">{t('Turtle Information')}</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <Turtle handleGender={this.handleGender} handleCondition={this.handleCondition} handleSpecies={this.handleSpecies} forms={this.state.forms} handleTurtInput={this.state.handleTurtInput}
                        handleDimentions={this.handleDimentions} />
                </ExpansionPanel>
                <ExpansionPanel TransitionProps={{ unmountOnExit: true }}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="turtles"
                    >
                        <div className="helptext">
                            <Typography className="nests" variant="h6" component="h6">{t('Nest Information')}</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <NestInput forms={this.state.forms} handleNest={this.handleNest} /> */}
                </ExpansionPanel> 
                <Comments handleComments={this.handleComments} />
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#09bc8a', opacity: 0.9, marginLeft: '0.2em', marginTop: '0.1em' }}
                    size="medium"
                    className="submit"
                    onClick={this.submitNewForm}
                    margin="normal"
                >
                    {t(' Submit ')}
                </Button>
            </div>
        )
    }
}



export default withTranslation('translation')(Form);
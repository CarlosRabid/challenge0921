import React, { Component } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './form.css';


class FieldLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationLatitude: "",  // set-up by beach selection
            locationLongitude: "", // set-up by beach selection
            showMenu: false,
            selectedField: ""
        }

        this.fields = {
            Opt1: {
                name: "Playa El Toro",
                latitude: 7.530178,
                longitude: -80.003034
            },
            Opt2: {
                name: "Playa El Arenal",
                latitude: 7.559493,
                longitude: -80.019275
            },
            Opt3: {
                name: "Playa Lagarto",
                latitude: 7.506391,
                longitude: -79.999284
            }
        }
    }
    handleClose = async (event) => {
        let idx = event.target.value
        if (idx) {
            let currentField = this.fields[idx]
            let selectedField = { ...this.state.selectedField }
           await this.props.handleFieldxInput({ selectedField })
            this.setState({
                selectedField
            })
            this.hideMenu()
        } else { return this.hideMenu() }
    }
    showMenu = () => {
        this.setState({ showMenu: true })
    }
    hideMenu = async () => {
        let showMenu = { ...this.state.showMenu }
        showMenu = null
        await this.setState({ showMenu })
    }
    render() {
        const { t } = this.props;
        return (
            <>
            <div id="menuplaya">
                    <FormControl variant="outlined" value={this.state.selectedField}  >
                        <InputLabel  style={{color:"white"}} 
                        htmlFor='menuplayascont' >   {this.state.selectedField ? 
                            this.state.selectedFIeld : t('Options') }  
                        </InputLabel>
                        <Select value={this.state.selectedField} labelWidth={60} 
                            // inputProps</FormControl>={{ name: 'playa', id: 'menuplayascont', }}
                            onChange={this.handleClose} 
                            // color="white"

                            >
                            <option value={null} > - </option>
                            <option value="Opt1" onClick={this.handleClose}>{t('Option 1')}</option>
                            <option value="Opt2" onClick={this.handleClose}>{t('Option 2')}</option>
                            <option value="Opt3" onClick={this.handleClose}>{t('Option 3')}</option>
                        </Select>
                    </FormControl>
                    </div>
            </>
        )
    }
}
export default withTranslation('translation')(FieldLocation);
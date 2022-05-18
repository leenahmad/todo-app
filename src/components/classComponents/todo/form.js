import React, { useContext } from 'react';
import {Card,FormGroup,InputGroup,Button,Elevation,Switch,} from '@blueprintjs/core';
import {SettingsContext} from '../../context/settingsContext';

function Form(props) {
const settings = useContext(SettingsContext);
    return (
<div style={ {width: '100%',
    display: 'flex',flexDirection: 'column',flexWrap: 'nowrap', marginRight: '200px'}}>

        <Card  interactive elevation={Elevation.FOUR} style={ {width: '30%',
     height: '50%',margin: '2%',marginLeft: '2%'}}>
            <form onSubmit={props.handleSubmit}>
                <FormGroup>
                <h2>Add To Do Item</h2>

                <label>
                    <span>To Do Item</span>
                    <InputGroup onChange={props.handleChange} intent={'primary'} name="text" type="text" placeholder="Item Details" />
                </label>
                    <br/>
                <label>
                    <span>Assigned To</span>
                    <InputGroup onChange={props.handleChange} intent={'primary'} name="assignee" type="text" placeholder="Assignee Name" />
                </label>

                <label>
                    <br />
                    <span>Difficulty</span>
                    <br />
                    <input onChange={props.handleChange} intent={'primary'} defaultValue={2} type="range" min={1} max={8} name="difficulty" />
                </label>
                <br/> <br/>
                <label>
                    <Button className="bp3-button bp3-icon-add" intent={'primary'} type="submit">Add Item</Button>
                </label>
           <br></br>
                <label>
                <span>Show Completed Tasks</span>
                <Switch checked={settings.state.displayItem} onChange={settings.state.displayItems}/>
                </label>
                <label>
                <span>Number of Item </span>
                <input type="number" min="1" max="20" value={settings.state.displayPerScreen} onChange={settings.state.toDisplayPerScreen}/>
                </label>
                </FormGroup>
            </form>
        </Card>
        </div>
    )
}

export default Form;
import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Card, Elevation, Button } from '@blueprintjs/core';
import { SettingsContext } from '../../context/settingsContext'

function List(props) {

    const settings = useContext(SettingsContext)

    const [next, setNext] = useState(0);
    const [prev, setPrev] = useState(settings.state.displayPerScreen);

    function setPage() {
        let page = props.list.slice(next, prev);
        return page;
    }

    function nextPage() {
        setNext(next + settings.state.displayPerScreen);
        setPrev(prev + settings.state.displayPerScreen);
    }

    function previousPage() {
        setNext(next - settings.state.displayPerScreen);
        setPrev(prev - settings.state.displayPerScreen);
    }

    useEffect(() => {
        if(!settings.state.displayItem){
            const item = props.list.filter((item) => item.complete === false);
            props.setList([...item]);
        }
    },[settings.state.displayItem])

   

    return (

       <>
       <div style={{width:'30%',display:'flex',position:'absolute',top:'130px',flexDirection:'column',flexWrap:'nowrap',marginLeft:'700px'}}>
            {setPage(0).map(item => (
                <Card  interactive elevation={Elevation.FOUR} key={item.id} >
                    <p>{item.text}</p>
                    <p><small>Assigned to: {item.assignee}</small></p>
                    <p><small>Difficulty: {item.difficulty}</small></p>
                    <Button type="button" intent={item.complete ? 'success' : 'Disabled'} onClick={() => props.toggleComplete(item.id)}>Complete</Button>
                    <Button onClick={() => props.deleteItem(item.id)} type="button" intent={'danger'}> X </Button>
                    <hr />
                </Card>
            ))}
            <div>
                <Button onClick={() => previousPage()} intent={'primary'}>Previous</Button>
                <Button onClick={() => nextPage()} intent={'primary'}>Next</Button>
            </div>
            </div>
            </>
    )
}

export default List;
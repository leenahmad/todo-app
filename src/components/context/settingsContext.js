import React from 'react';
import { useState,useEffect } from 'react';
export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {

    const[displayPerScreen,setDisplayPerScreen] = useState(3);
    const [displayItem, setDisplayItem] = useState(false);


    

    function displayItems(){
        if(localStorage.getItem('displayItem')){
            localStorage.removeItem('displayItem')
        }

        if(displayItem){
            setDisplayItem(false);
            localStorage.setItem('displayItem','false');
        }
        else{
            setDisplayItem(true);
            localStorage.setItem('displayItem','true');
        }
    }
    function toDisplayPerScreen(n){
       if(localStorage.getItem('page')){
           localStorage.removeItem('page');
       } 
       localStorage.setItem('itemNumbers',n.target.value);
      const itemNumbers = Number(n.target.value);
       setDisplayPerScreen(itemNumbers);
    }

    useEffect(()=> {
        if(localStorage.getItem('itemNumbers')){
            const itemNumbers = Number(localStorage.getItem('itemNumbers'));
            setDisplayPerScreen(itemNumbers);
        }
        if(localStorage.getItem('displayItem')){
            const displayItems = Boolean(localStorage.getItem('displayItem'));
            setDisplayItem(displayItems);
        }
    }, []);

    const state = {
        displayPerScreen,
        setDisplayPerScreen,
        displayItem,
        setDisplayItem,
        displayItems,
        toDisplayPerScreen


    }

    return (
        <SettingsContext.Provider value={{state}}>
            {props.children}
        </SettingsContext.Provider>
    )

}
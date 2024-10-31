import React from 'react'
import './App.css'

function DataComponent() {
    const users = [
        {
            id: '1',
            name: 'amadou bah',
            hobby: 'playing video games and coding',
            quotes: 'focus on yourself and grind'
        },
        {
            id: '2',
            name: 'john snow',
            hobby: 'guarding the wall',
            quotes: 'winter is coming'
        },
        {
            id: '3',
            name: 'cristiano ronaldo',
            hobby: 'playing football',
            quotes: 'suuuuuiiiiiii !!!!!'
        },
        {
            id: '4',
            name: 'wayne rooney',
            hobby: 'coaching youth football',
            quotes: 'man united is the best club in the world'
        },
        {
            id: '4',
            name: 'nina simone',
            hobby: 'playing the piano',
            quotes: 'best female pianist to ever live'
        },
        {
            id: '5',
            name: 'zlatan ibrahimovic',
            hobby: 'the best to ever do everything',
            quotes: 'zlatan dont follow rules, rules follow zlatan !!!'
        },
        {
            id: '6',
            name: 'drake',
            hobby: 'making hits',
            quotes: 'the 6 god runs the world'
        },
        {
            id: '7',
            name: 'jeff teague',
            hobby: 'podcast',
            quotes: 'ypu get pertiem right, go get something to eat'
        },
        {
            id: '8',
            name: 'larry bird',
            hobby: 'front end general manager for the pacers',
            quotes: 'get it put of the mood, like i did'
        }
    ]

    const userData = users.map((user) => (
        <div key={user.id} className='user-card'>
            <h3>{user.name}</h3>
            <p><em>hobby:</em>{user.hobby}</p>
            <p><em>quote:</em>{user.quotes}</p>
        </div>
    ));

    return (
        <div className='card-container'> {userData}</div>
    );
}

export default DataComponent;

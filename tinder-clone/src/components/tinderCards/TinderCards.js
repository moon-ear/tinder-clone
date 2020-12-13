import React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import "./TinderCards.css"

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Drake',
            url: "https://static.billboard.com/files/2020/10/Drake-2019-a-billboard-1548-1601934372-768x433.jpg"
        },
        {
            name: 'The Weeknd',
            url: "https://cdn.cnn.com/cnnnext/dam/assets/190911161831-the-weeknd-toronto-film-festival-super-tease.jpg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
            
        </div>
    )
}

export default TinderCards

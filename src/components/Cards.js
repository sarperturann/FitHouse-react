import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

// a class to represent all the cards
function Cards() {
    return (
        <div className='cards'>
            <h1>Start with your first-ever home workout!</h1>
            <div className='cards--container'>
                <div className='cards--wrapper'>
                    <ul className='cards--items'>
                        <CardItem src="images/workout.jpg" text="Working out has never been more fun!" label="Beginner" path="/regional-workouts"/>
                        <CardItem src="images/chest.jpg" text="For that beefy chest look" label="Beginner" path="/regional-workouts"/>
                        <CardItem src="images/female.png" text="This one is for our hourglass ladies" label="Intermediate" path="/regional-workouts"/>
                        <CardItem src="images/flatabs.jpg" text="Weight loss + abs" label="Intermediate" path="/regional-workouts"/>
                        <CardItem src="images/burn.jpg" text="Incredible Weight Loss" label="Advanced" path="/regional-workouts"/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards

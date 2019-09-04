import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = props => {
    return (
        <div className="ui card followerCard"> 
            <img className="mainImage" src={props.data.avatar_url} />
            <h2>Hey, I'm {props.data.name} </h2>
            <h3> I live in {props.data.location}</h3>      
            <h3> I have {props.data.public_repos} repos, {props.data.followers} followers, and {props.data.public_gists} gists</h3>

            <p>Checkout my Github account at: <a className="meta app-link" href={props.data.html_url}>{props.data.html_url}</a> </p>
        </div>
    )
} 


export default UserCard;
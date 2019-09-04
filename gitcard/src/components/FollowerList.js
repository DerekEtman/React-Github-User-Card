import React from 'react';
import FollowerCard from './FollowerCard';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'


const FollowerList = props => {
    return (
        <div className="ui Grid followerCard ">
                <div className="image" >
                  <img className="userImage" src={props.data.avatar_url} />
                </div>
                <div className="content">
                  <h3 className="header">{props.data.login}</h3>
                  <a className="meta app-link" href={props.data.html_url}>{props.data.html_url}</a>
                </div>
        </div>
    )

} 


export default FollowerList;
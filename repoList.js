import React from 'react';

import { Container, Content, List, ListItem, Left, Thumbnail, Right, Body, Text } from 'native-base'

export default class RepoList extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <List style={{ marginTop: 10 }}>
                {this.props.repositories.map(repo => (
                    <ListItem key={repo.id} avatar>
                        <Left>
                            <Thumbnail source={{ uri: repo.owner.avatar_url }} />
                        </Left>
                        <Body>
                            <Text>{repo.full_name}</Text>
                            <Text note>{repo.description}</Text>
                        </Body>
                        <Right>
                            <Text note>{repo.stargazers_count}</Text>
                        </Right>
                    </ListItem>
                ))}
            </List>
        )
    }
}
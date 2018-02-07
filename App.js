import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { Container, Header, Left, Body, Right, Title, Content, Form, Icon, Input, Item, Button, Spinner } from 'native-base';

import RepoList from './repoList'

export default class App extends Component<{}> {

  state = {
    search: '',
    loading: false,
    repositories: []
  }

  constructor(props){
    super(props)
  }

  fetchRepositories = async () => {
    if (this.state.search.length > 0){
      this.setState({ loading: true })

      const response = await fetch(`https://api.github.com/search/repositories?q=${this.state.search}`)

      const repositories = await response.json()
      this.setState({
        repositories: repositories.items,
        loading: false
      })
    }else{
      alert('Você digitar algo para efetuar a pesquisa.')
    }
  }

  render() {
    return (
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>Search Repo</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Form>
              <Item last>
                <Icon active name='search' />
                <Input placeholder="Buscar palavra chave" value={this.state.search} onChangeText={text => this.setState({ search: text })} />
              </Item>
            </Form>
            <Button block style={{ marginTop: 10 }} onPress={this.fetchRepositories}>
              <Text>Buscar</Text>
            </Button>
            { this.state.loading && <Spinner color='#333' /> }
          {this.state.repositories.length > 0 && <RepoList repositories={this.state.repositories} /> }
            
          </Content>
        </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

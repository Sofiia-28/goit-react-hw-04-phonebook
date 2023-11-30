import { Component } from 'react';
import { ContactsForm } from './ContactsForm';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter';
import { Wrapper } from './App.styled';

const storageKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = window.localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(this.state.contacts)
      );
    }
  }


  addContact = newName => {
    const name = {
      ...newName,
      id: nanoid(),
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, name],
      };
    });
  };

  searchFilter = name => {
    this.setState(prevState => {
      return {
        ...prevState,
        filter: name,
      };
    });
  };

  deleteName = nameId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== nameId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleNames = contacts.filter(contact => {
      const hasName = contact.name.toLowerCase().includes(filter.toLowerCase());

      return hasName;
    });

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactsForm onAdd={this.addContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} onSearch={this.searchFilter} />
        <ContactList contacts={visibleNames} onDelete={this.deleteName} />
      </Wrapper>
    );
  }
}

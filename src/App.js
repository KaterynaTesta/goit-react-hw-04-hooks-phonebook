import { useEffect, useState } from 'react';
// import initialContacts from './Components/initialsContacts.json';
import { nanoid } from 'nanoid';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    let repeatContacts = contacts.find(contact => contact.name === name);
    if (repeatContacts) {
      alert(`${addContact.name} is already in contacts!`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevState => [contact, ...prevState]);
    }
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const filteredContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));
  };
  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmitData={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList contacts={filteredContacts()} onDelete={deleteContact} />
    </>
  );
}

// class App extends Component {
//   state = {
//     contacts: initialContacts,
//     filter: '',
//   };

// const onSubmitData = data => {
//   addContact(data);
// };

// const filterContacts = (contacts, filter) =>
// contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

// changeFilter = e => {
//   const { value } = e.target;
//   this.setState({ filter: value });
// };

// onDeleteContact = id => {
//   this.setState({
//     contacts: this.state.contacts.filter(contact => contact.id !== id),
//   });
// };

// onSubmitData = data => {
//   const { contacts } = this.state;

//   const addContact = {
//     id: nanoid(),
//     name: data.name,
//     number: data.number,
//   };

//   if (contacts.find(contact => contact.name === addContact.name)) {
//     alert(`${addContact.name} is already in contacts!`);
//     return;
//   }
//   this.setState({
//     contacts: [...contacts, addContact],
//   });
// };

// render() {
//   const { contacts, filter } = this.state;
//   const filteredContacts = filterContacts(contacts, filter);
//   return (
//     <>
//       <h1>Phonebook</h1>

//       <ContactForm onSubmitData={addContact} />
//       {contacts.length !== 0 && (
//         <>
//           <h2>Contacts</h2>
//           {contacts.length > 1 && <Filter value={filter} onChangeFilter={changeFilter()} />}
//           <ContactList contacts={filterContacts()} onDeleteContact={onDeleteContact()} />
//         </>
//       )}
//     </>
//   );
// }

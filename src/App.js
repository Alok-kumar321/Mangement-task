import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import './App.css';
function Aloktest() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [search, setSearch] = useState('');

  const addContact = (event) => {
    event.preventDefault();
    setContacts([...contacts, { name: name, email: email, phone: phone }]);
    setName('');
    setEmail('');
    setPhone('');
  };

  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const updateContact = (index) => {
    const newContacts = [...contacts];
    newContacts[index].phone = phone;
    setContacts(newContacts);
  };

  const searchContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className='Contact-design'>
      <h2 >Contact List</h2>
      <input
        type="text"
        class="form__input" id="name"  
        placeholder="Search by name"
        onChange={(event) => setSearch(event.target.value)}
      />
    
      <ul>
        {searchContacts().map((contact, index) => (
          <li key={index}>
            {contact.name}, {contact.email}, {contact.phone}
            <button onClick={() => deleteContact(index)} class="button button2">Delete</button>
            <input
              type="text"
          className='alok-test'
              placeholder="New phone number"
              onChange={(event) => setPhone(event.target.value)}
            /> &nbsp;&nbsp;
            <button onClick={() => updateContact(index)} class="button button2">Update</button>
          </li>
        ))}
      </ul>
      <br/><br/>
      <h2>Add Contact</h2>
      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          className='alok-test'
          onChange={(event) => setName(event.target.value)}
        />
        <br/><br/>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className='alok-test'
          onChange={(event) => setEmail(event.target.value)}
        />
        <br/><br/>

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          className='alok-test'
          onChange={(event) => setPhone(event.target.value)}
        />
        <br/><br/>
        <button type="submit" class="button button2">Add</button>
    
      </form>
    </div>
  );
}
 export default Aloktest;
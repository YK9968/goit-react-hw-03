import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import cardsContact from "../../contacts.json";
import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState(cardsContact);
  const [search, setSearch] = useState("");

  const showContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={showContact} />
    </div>
  );
}

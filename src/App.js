import React from "react";
import "./App.css";
import { nanoid } from "nanoid";

import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onSubmit = (name) => {
    this.setState((prevState) => ({ contacts: [name, ...prevState.contacts] }));
  };

  onSearchFilter = (e) => {
    this.setState({ filter: e.target.value });
  };
  onIncludes = () => {
    const normalizeFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter((todo) => {
      return todo.name.toLowerCase().includes(normalizeFilter);
    });
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filterTodos = this.onIncludes();

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.onSubmit} />
        <h2>Contacts</h2>

        <Filter onSearchFilter={this.onSearchFilter} filter={filter} />

        <ul>
          {filterTodos.map((contact) => {
            return (
              <li className="list" key={contact.id}>
                <div>
                  {contact.name}: {contact.telValue}
                </div>
                <button onClick={() => this.deleteTodo(contact.id)}>
                  DELETE
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

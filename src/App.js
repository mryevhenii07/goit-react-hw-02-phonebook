import React, { PureComponent } from "react";
import "./App.css";
import { nanoid } from "nanoid";

import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";

class App extends PureComponent {
  state = {
    contacts: [],
    filter: "",
  };

  onSubmit = (name) => {
    this.setState((prevState) => ({
      contacts: [
        { ...name, id: `id-${prevState.contacts.length + 1}` },
        ...prevState.contacts,
      ],
    }));
  };

  onSearchFilter = (e) => {
    this.setState({ filter: e.target.value });
  };
  onIncludes = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter((todo) => {
      return todo.name.toLowerCase().includes(normalizeFilter);
    });

    if (filterContacts.length === 0) {
      alert("kuku");
    }
    return filterContacts;
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { filter } = this.state;

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

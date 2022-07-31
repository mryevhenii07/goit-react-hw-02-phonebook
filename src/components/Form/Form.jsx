import React from "react";

class Form extends React.Component {
  state = { name: "", telValue: "" };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeTel = (e) => {
    this.setState({ telValue: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({ name: "" });
    this.setState({ telValue: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.onChangeName}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.telValue}
          onChange={this.onChangeTel}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;

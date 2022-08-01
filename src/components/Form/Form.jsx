import React, { PureComponent } from "react";

class Form extends PureComponent {
  state = { name: "", telValue: "" };

  onInputChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        this.setState({ name: e.target.value });
        break;

      case "number":
        this.setState({ telValue: e.target.value });
        break;

      default:
    }
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({ name: "", telValue: "" });
    // this.setState({ telValue: '' });
  };

  render() {
    const { telValue, name } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.onInputChange}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={telValue}
          onChange={this.onInputChange}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;

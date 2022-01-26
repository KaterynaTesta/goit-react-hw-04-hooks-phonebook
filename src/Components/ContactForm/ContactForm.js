import { useState } from 'react';

import ContactStyled from './ContactFormStyled';

export default function Form({ onSubmitData }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitData(name, number);
    setNumber('');
    setName('');
  };

  return (
    <ContactStyled>
      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={name}
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={number}
        />
        <p></p>
        <button type="submit"> Add new contact </button>
      </form>
    </ContactStyled>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (!this.state.name || !this.state.number) {
//       return;
//     }
//     this.props.onSubmitData({ ...this.state });
//     this.reset();
//   };
//   reset() {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   }

//   render() {
//     const { name, number } = this.state;
//     return (
//       <ContactStyled>
//         <form onSubmit={this.handleSubmit}>
//           <h2>Name</h2>
//           <input type="text" value={name} name="name" onChange={this.handleChange} />
//           <h2>Number</h2>
//           <input type="text" name="number" value={number} onChange={this.handleChange} />
//           <p></p>
//           <button type="submit"> Add new contact </button>
//         </form>
//       </ContactStyled>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmitData: PropTypes.func.isRequired,
// };

// export default ContactForm;

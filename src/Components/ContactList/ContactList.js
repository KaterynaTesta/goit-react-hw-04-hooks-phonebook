import React from 'react';
import { Button } from './ContactItemStyled';
export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete contact
          </Button>
        </li>
      ))}
    </ul>
  );
}

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul>
//       {contacts.map(({ name, number, id }) => (
//         <li key={id}>
//           <p>{`${name}: ${number}`}</p>

//           <ContactListItem type="button" onClick={() => onDeleteContact(id)}>
//             Delete
//           </ContactListItem>
//         </li>
//       ))}
//     </ul>
//   );
// };

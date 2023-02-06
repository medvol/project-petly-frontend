import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
// import { makeStyles } from '@material-ui/core/styles';
import { nanoid } from 'nanoid';

// npm install
// @mui/material
// @emotion/react
// @emotion/styled

import {
  EnterButton,
  ModalContainer,
  ModalTitle,
  ButtonOff,
} from './ModalAddNotice.styled';

import Forma from './ModalAddSellNotice';

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     height: '100vh',
//     alignItems: 'center'
//   }
// });


export default function ModalAddsPetApp() {
  const [pets, setPets] = useState(
    () => JSON.parse(window.localStorage.getItem('pets')) ?? []
  );
  const [modalOpen, setModalOpen] = useState(false);

  //Запис в локал сторидж
  useEffect(() => {
    localStorage.setItem('pets', JSON.stringify(pets));
  }, [pets]);

  // Підтвердження збереження тваринки!
  const submitHandle = data => {
    //Заборони користувачеві можливість додавати тваринок, імена яких вже присутні у переліку.
    const sameName = pets.find(
      element => element.name.toLowerCase() === data.name.toLowerCase()
    );
    // При спробі виконати таку дію виведи alert із попередженням.
    if (sameName) return alert(sameName.name + ' is already in pets list!');

    //Присвоювання ID та запис у !
    data.id = nanoid();
    setPets(pets => [data, ...pets]);
  };

  const handleOpen = e => {
    setModalOpen(true);
  };
  const handleClose = e => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <>
      <EnterButton variant="contained" onClick={handleOpen}>
        Add Pet
      </EnterButton>
          <Modal open={modalOpen} onClose={handleClose} >
        <ModalContainer >
          <ButtonOff variant="contained" onClick={handleClose}></ButtonOff>
          <ModalTitle>Add Pet</ModalTitle>
          <Forma handleClose={handleClose} onSubmit={submitHandle} />
        </ModalContainer>
      </Modal>
    </>
  );
}

// const [filter, setFilter] = useState('');
// Пошук необхідної тваринки
//   const filterChange = event => {
//     event.preventDefault();
//     setFilter(event.currentTarget.value);
//   };
//       const normalizeFilter = filter.toLowerCase();
//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizeFilter)
//   );
// Видалення раніше збережених тваринок
//   const onDelete = id => {
//     setPets(pets => pets.filter(pet => pet.id !== id));
//   };

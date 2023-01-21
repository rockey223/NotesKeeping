import { useState } from "react";
import Modal from "./Modal";
import Note from "./Note";

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      {/* Modal*/}
      {isOpen ? <Modal onAdd={addNote} close={closeModal} /> : null}
      {/* add new button */}
      <div className="add-new-btn">
        <button className="addNewBtn" onClick={openModal}>
          <span>+</span>
        </button>
      </div>
      {/* display */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </>
  );
};

export default Content;

import { useState } from "react";

const Modal = (props) => {
  const [data, setData] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(data);
    setData({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-heading">Enter the fields below</div>
        <button className="closeModal" onClick={props.close}>
          <span>&#735;</span>
        </button>
        <input
          placeholder="Title Here"
          type="text"
          name="title"
          id="title"
          value={data.title}
          onChange={handleChange}
        />
        <textarea
          placeholder="Note Content Here"
          name="content"
          id="content"
          cols="30"
          rows="10"
          value={data.content}
          onChange={handleChange}
        ></textarea>
        <button className="add" onClick={submitNote}>
          Add
        </button>
      </div>
    </div>
  );
};
export default Modal;

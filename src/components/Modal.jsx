import "../styles.css";

export default function Modal({ message }) {
  return (
    <div className="modal">
      <p>{message}</p>
    </div>
  );
}

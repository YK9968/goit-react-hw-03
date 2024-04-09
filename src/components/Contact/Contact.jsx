import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact: { name, number } }) {
  return (
    <>
      <div>
        <p>
          <FaUser className={css.iconContact} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.iconContact} />
          {number}
        </p>
      </div>
      <button className={css.btnDelete}>Delete</button>
    </>
  );
}

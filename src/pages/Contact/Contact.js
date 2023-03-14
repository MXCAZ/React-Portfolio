import React, { useEffect, useRef } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const Contact = () => {
  useEffect(() => {
    document.title = ` <FS/> | Contact `;
  }, []);

  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3pb4ym8",
        "template_1dtzrjj",
        form.current,
        "UtS5wF4XdHFhXqFWX"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Email its been send",
            showConfirmButton: true,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const [rotate, setRotate] = useState(false);
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 1 }}
        className="containerContact">
        <motion.div
          animate={{
            rotate: [0, 100, 0, -100, 0],
            x: [0, 200, 200, 0, -200, -200, 0],
          }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="animateSquare"></motion.div>
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 2 }}
          className="formContact">
          <form ref={form} onSubmit={sendEmail}>
            <h2>{t("contact_me")}</h2>

            <input type="text" name="from_name" placeholder={`${t("name")}`} />

            <input
              type="email"
              name="reply_to"
              placeholder="example@mail"
              id="email"
            />

            <h4>{t("type_message")}</h4>
            <textarea name="message" />
            <input type="submit" value={`${t("send")}`} id="button" />
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;

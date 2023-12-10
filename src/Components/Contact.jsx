import React, { useRef, useState } from "react";
import styles from "../Styles/contact.module.css";
import resume from "../Images/Thilak-Singh-Resume.pdf";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [messageStatus, setmessageStatus] = useState("");
  console.log(messageStatus, "is message");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v8qun9c",
        "template_r9ymxsh",
        form.current,
        "q40HBcU4s8lSGrxRM"
      )
      .then((result) => {
        console.log(result.text);
        setTimeout(() => {
          setmessageStatus("");
        }, 5000);
        setmessageStatus("your message is sent successfully");
      })
      .catch((err) => {
        console.log(err.text);
      });
  };
  return (
    <div id={"contact"}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.contact_left}>
            <h1 className={styles.sub_title}>Contact Me</h1>
            <p id="contact-email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <path
                  fill="#ff004f"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m1.5 9l16-6.535L14.7 17zm16-6.5l-11 10m0 0v5l3-3"
                />
              </svg>
              truimphthilak@gmail.com
            </p>
            <p id="contact-phone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ff004f"
                  d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2a12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9Zm.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11.12 11.12 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.49 14.49 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a13.69 13.69 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z"
                />
              </svg>
              8186942194
            </p>
            <div className={styles.social_icons}>
              <a
                target="_blank"
                id="contact-github"
                href="https://github.com/ThilakSamplegithub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#1877F2"
                    d="M12 1A10.89 10.89 0 0 0 1 11.77A10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11a2.37 2.37 0 0 0 3.2.89a2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91a3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77A10.89 10.89 0 0 0 12 1"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                id="contact-linkedin"
                href="https://www.linkedin.com/in/thilak-singh-thakur-b1882b23a/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#1877F2"
                    d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"
                  />
                  <path
                    fill="#fff"
                    d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.contact_right}>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />
              <textarea
                rows="6"
                name={"message"}
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className={`${styles.btn} ${styles.btn2}`}>
                Submit
              </button>
            </form>
            <span className={styles.msg}>{messageStatus}</span>
          </div>
        </div>
      </div>
      {/* this is copyright */}
      <div className={styles.copyright}>
        <p>
          Copyright @ Thilak. Made with{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="24"
            viewBox="0 0 256 256"
          >
            <g fill="currentColor">
              <path
                d="M232 94c0 66-104 122-104 122S24 160 24 94a54 54 0 0 1 54-54c22.59 0 41.94 12.31 50 32c8.06-19.69 27.41-32 50-32a54 54 0 0 1 54 54Z"
                opacity=".2"
              />
              <path d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62Zm-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8Z" />
            </g>
          </svg>
        </p>
      </div>
    </div>
  );
};

export default Contact;

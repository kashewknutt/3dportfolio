import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import axios from 'axios';

const Contact = () => {
  useEffect(() => {
    document.title = "Rajat | Talk to me";
  }, []);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      sender: { name: "Rajat Disawal", email: "port.kashewknutt@gmail.com" },
      to: [{ email: form.email }],
      subject: "Thanks for reaching out!",
      htmlContent: `
        <h1>Hello ${form.name},</h1>
        <p>I received the following message from you:</p>
        <p>"${form.message}"</p>
        <p>I'll get back to you as soon as possible.</p>
        <p>Best Regards,<br>Your Name</p>
      `,
    };

    axios
      .post('https://api.brevo.com/v3/smtp/email', data, {
        headers: {
        'api-key': import.meta.env.VITE_BREVO_API_KEY,
        'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setLoading(false);
        alert("Email sent successfully!");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("An error occurred while sending your message.");
      });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-[#222222] font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-beige-light py-4 px-6 placeholder:text-secondary text-[#222222] rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#222222] font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-beige-light py-4 px-6 placeholder:text-secondary text-[#222222] rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#222222] font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-beige-light py-4 px-6 placeholder:text-secondary text-[#222222] rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-beige-light py-3 px-8 rounded-xl outline-none w-fit text-[#222222] font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

import { useState, useCallback } from 'react';

import Button from '../../Button';
import RadioBlock from './RadioBlock';
import CustomInput from '../../CustomInput';

import { paperPlaneFigure } from '../../../assets';

import styles from './index.module.sass';

const CtactForm = () => {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    tel: '',
    message: '',
  });

  const handleChangeInput = useCallback(
    (event) => {
      const name = event.target.name;
      const value = event.target.value;
      const newForm = { ...form };
      newForm[name] = value;
      setForm(newForm);
    },
    [form]
  );

  return (
    <form className={styles.contactForm}>
      <CustomInput
        label="First Name"
        name="fname"
        type="text"
        value={form.fname}
        onChange={handleChangeInput}
      />
      <CustomInput
        label="Last Name"
        name="lname"
        type="text"
        value={form.lname}
        onChange={handleChangeInput}
      />
      <CustomInput
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChangeInput}
      />
      <CustomInput
        label="Phone Number"
        name="tel"
        type="tel"
        value={form.tel}
        onChange={handleChangeInput}
      />
      <RadioBlock />
      <CustomInput
        label="Message"
        name="message"
        type="text"
        value={form.message}
        onChange={handleChangeInput}
        placeholder="Write your message.."
      />
      <Button type="submit" label="send message" />
      <img className={styles.paperPlane} src={paperPlaneFigure} alt="" />
    </form>
  );
};

export default CtactForm;

import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useForm } from "react-hook-form";
import Button from "../global/Button";
import { Form, Input, Textarea } from "../global/Form";
import CircleConfirm from "./CircleConfirm";
import "./emailForm.modules.scss";

interface FormData {
  asdfghjkname: string;
  asdfghjkmessage: string;
  asdfghjkemail: string;
  name?: string;
  email?: string;
  message?: string;
}

interface DataToSubmit {
  name: string;
  email: string;
  message: string;
}

interface Props {
  setIsConfirmed: Dispatch<SetStateAction<boolean>>;
}

const EmailForm: FC<Props> = ({ setIsConfirmed }) => {
  const { register, handleSubmit, errors, reset } = useForm<FormData>();
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const onSubmit = handleSubmit(
    ({
      asdfghjkname,
      asdfghjkmessage,
      asdfghjkemail,
      name,
      message,
      email,
    }) => {
      if (!name && !message && !email) {
        sendEmail({
          email: asdfghjkemail,
          name: asdfghjkname,
          message: asdfghjkmessage,
        });
        setEmailSent(true);
      }
      reset({
        asdfghjkname: "",
        asdfghjkmessage: "",
        asdfghjkemail: "",
        name: "",
        message: "",
        email: "",
      });
    }
  );

  const sendEmail = ({ email, name, message }: DataToSubmit) => {
    axios({
      method: "POST",
      url: "https://formspree.io/xjvevydo",
      responseType: "json",
      data: {
        email,
        name,
        message,
      },
    });
  };
  if (!emailSent) {
    setIsConfirmed(false);
  }

  if (emailSent) {
    setIsConfirmed(true);

    return (
      <div className="email-sent">
        <CircleConfirm />
        <p>
          Your email has been sent!
          <span>I&apos;ll get back to you as soon as I can.</span>
        </p>
      </div>
    );
  }

  return (
    <Form
      method="POST"
      action="https://formspree.io/xjvevydo"
      onSubmit={onSubmit}
    >
      <Input
        id="asdfghjkname"
        label="Hello! My name is "
        ref={register({ required: true })}
        type="text"
      />
      {errors.asdfghjkname && <p className="errors">Name is required.</p>}
      <Textarea label="and here is my message: " id="asdfghjkmessage" />

      {errors.asdfghjkmessage && <p className="errors">Message is required.</p>}
      <Input
        id="asdfghjkemail"
        type="email"
        ref={register({ required: true })}
        label="I will leave you my e-mail... please reply!"
      />
      {errors.asdfghjkemail && <p className="errors">Email is required.</p>}

      {/* H O N E Y P O T */}

      <label className="ohmyhoney" htmlFor="name"></label>
      <input
        ref={register}
        className="ohmyhoney"
        autoComplete="off"
        type="text"
        id="name"
        name="name"
        placeholder="Your name here"
      />
      <label className="ohmyhoney" htmlFor="email"></label>
      <input
        ref={register}
        className="ohmyhoney"
        autoComplete="off"
        type="email"
        id="email"
        name="email"
        placeholder="Your e-mail here"
      />
      <label className="ohmyhoney" htmlFor="message"></label>
      <input
        ref={register}
        className="ohmyhoney"
        autoComplete="off"
        type="message"
        id="message"
        name="message"
        placeholder="Your message here"
      />
      <Button type="submit" isRounded={false}>
        <FontAwesomeIcon icon={faLocationArrow} />
        Send Message
      </Button>
    </Form>
  );
};

export default EmailForm;

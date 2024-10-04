
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {

  return (
    <div className="section" id="contact">
      <h2 className="section__title" data-aos="fade-right">
        Get in <span className="different">Touch</span> with me
      </h2>
      <div>
        <a
          href="https://www.linkedin.com/in/ketan-makode"
          target="_blank"
        >
          <FaLinkedin className="linkedin" />
        </a>
        <a
          href="https://github.com/ImKetan1610"
          target="_blank"
        >
          <VscGithub className="github" />
        </a>
        <a
          href="mailto:ketan.makode@gmail.com"
          target="_blank"
        >
          <CgMail className="email" />
        </a>
        <a
          href="https://www.instagram.com/mi_ketan16/"
          target="_blank"
        >
          <BsInstagram className="instagram" />
        </a>
        <a
          href="tel:+919850349620"
          target="_blank"
        >
          <BsFillTelephoneFill className="phone" />
        </a>
      </div>
    </div>
  );
};
export default Contact;

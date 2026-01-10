import { FaGithub, FaTelegram, FaFacebook, FaUser } from "react-icons/fa";
import "./socialLinks.css";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/tesfalem-tesfu"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://t.me/@tesfu_22"
        target="_blank"
        rel="noreferrer"
        title="Telegram"
      >
        <FaTelegram />
      </a>

      <a
        href="https://facebook.com/YOUR_FACEBOOK_USERNAME"
        target="_blank"
        rel="noreferrer"
        title="Facebook"
      >
        <FaFacebook />
      </a>

     
    </div>
  );
}

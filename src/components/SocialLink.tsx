import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  IconDefinition,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import "../styles/socialLink.css";

export type SocialLinkType = {
  icon: IconDefinition;
  text: string;
  link: string;
};

const LINKS: SocialLinkType[] = [
  {
    icon: faGithub,
    text: "Github",
    link: "https://github.com/lixinge921111"
  },
  {
    icon: faLinkedin,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/xinge-li-839a9476/"
  },
  {
    icon: faEnvelope,
    text: "Email",
    link: "mailto:xinge.li.tox@gmail.com"
  },
  {
    icon: faInstagram,
    text: "Instagram",
    link: "https://www.instagram.com/xinge_doudou_the_havanese/"
  }
];

const SocialIcons = () => {
  return (
    <div className="social-links">
      {LINKS.map(link => {
        return (
          <div className="social-item" id={link.text}>
            <Link href={link.link}>
              <a style={{ color: "black" }} href={link.link}>
                <FontAwesomeIcon icon={link.icon} size="2x" />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SocialIcons;

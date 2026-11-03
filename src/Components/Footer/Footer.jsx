import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import styles from "./footer.module.css";

function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      name: "Facebook",
      url: "https://www.facebook.com/netflix",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/netflix",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/netflix",
    },
    {
      icon: <FaYoutube />,
      name: "YouTube",
      url: "https://www.youtube.com/netflix",
    },
  ];

  const footerLinks = [
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Centre", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
    ["Media Centre", "Privacy", "Contact Us"],
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className={styles.linksContainer}>
          {footerLinks.map((column, index) => (
            <div className={styles.linkColumn} key={index}>
              {column.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;

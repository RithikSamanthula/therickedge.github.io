import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© ${new Date().getFullYear()} Rithik Samanthula.`}
    </span>
    <Link
      secondary
      className="footer__link"
      href="https://github.com/Code2Rithik"
      target="_self"
    >
      Crafted by yours truly
    </Link>
  </footer>
);

export default Footer;

import './Footer.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare , FaTwitterSquare } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>&copy; 2024 Created By Hassan Essam.</p>
        </div>
        <div className="footer-section">
          <h3 className='title'>everlane</h3>
        </div>
        <div className="footer-section">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaSquareFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="nav-logo">
            <span className="logo-icon">A</span>
            <span className="logo-text">Axion Growth</span>
          </div>
          <p className="footer-desc">
            We scale D2C brands with performance marketing, content, Shopify builds, and retention systems built for real revenue.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li><Mail className="w-4 h-4" /> hello@axiongrowth.com</li>
            <li><MapPin className="w-4 h-4" /> Remote · Global</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container flex-between">
          <p>© {new Date().getFullYear()} Axion Growth. All rights reserved.</p>
          <p>Performance marketing built for ROI.</p>
        </div>
      </div>
    </footer>
  );
}

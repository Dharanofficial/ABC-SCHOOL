import "./Footer.css";
const socials = [["bi-instagram", "Instagram"], ["bi-facebook", "Facebook"], ["bi-youtube", "YouTube"], ["bi-twitter-x", "X"]];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-5">
            {/* Replace with assets/footer_image.jpg */}
            <div className="footer-img" role="img" aria-label="ABC School campus"><i className="bi bi-building" aria-hidden="true"></i></div>
          </div>
          <div className="col-md-7">
            <h2 className="h4">ABC School</h2>
            <address>
              Coimbatore,<br />Tamil Nadu, India<br />
              <i className="bi bi-telephone"></i> <a href="tel:+910000000000">+91 00000 00000</a><br />
              <i className="bi bi-envelope"></i> <a href="mailto:info@abcschool.edu">info@abcschool.edu</a>
            </address>
            <div className="socials">
              {socials.map(([ic, name]) => <a key={name} href="#!" aria-label={name}><i className={`bi ${ic}`}></i></a>)}
            </div>
          </div>
        </div>
        <p className="copy">© 2026 ABC School. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;

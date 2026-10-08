import Page from "../components/Page.jsx";
export default function Contact() {
  return (
    <Page eyebrow="Contact" title="We'd love to hear from you.">
      <div className="glass-card cta text-start">
        <p><i className="bi bi-geo-alt-fill"></i> ABC School, Coimbatore, Tamil Nadu, India</p>
        <p><i className="bi bi-telephone-fill"></i> <a href="tel:+910000000000">+91 00000 00000</a></p>
        <p><i className="bi bi-envelope-fill"></i> <a href="mailto:info@abcschool.edu">info@abcschool.edu</a></p>
      </div>
    </Page>
  );
}

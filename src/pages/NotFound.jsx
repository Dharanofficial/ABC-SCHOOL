import { Link } from "react-router-dom";
import Page from "../components/Page.jsx";
export default function NotFound() {
  return (
    <Page>
      <div className="notfound"><div className="big-emoji" aria-hidden="true">🎒</div><h1>Oops!</h1><p className="muted">This page went on a school adventure.</p><Link to="/" className="btn btn-glow">Back Home</Link></div>
    </Page>
  );
}

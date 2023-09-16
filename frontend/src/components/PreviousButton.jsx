import { Link } from "react-router-dom";

export default function PreviousButton() {
  
  return (
    <div className="previous-btn">
      <Link to={-1}>
        <img src='/svg/back-arrow.svg' />
      </Link>
    </div>
  );
}

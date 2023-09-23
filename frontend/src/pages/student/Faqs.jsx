// assets
import "../../assets/css/faqs.css";

// components
import Category from "../../components/faqs/Category";
import { Outlet } from "react-router-dom";


export default function Faqs() {  
  return (
    <div className="faqs">
      <h1>FAQS</h1>
      <div className="faqs_content">
        <div className="categories">
          <Category categoryName={'Basics'} />
          <Category categoryName={'Browse'} />
          <Category categoryName={'Account'} />
          <Category categoryName={'Submission'} />
          <Category categoryName={'Verification'} />
          <Category categoryName={'Contact Us'} />
        </div>
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq_line"></div>
          <div className="faq_content browser">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

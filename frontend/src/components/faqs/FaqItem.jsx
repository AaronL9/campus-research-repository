import { useLocation } from "react-router-dom";

// assets
import { FaqsInfo } from "../../assets/js/FaqsInfo";
import Faq from "./Faq";

export default function FaqItem() {
  
  const location = useLocation().pathname.split("/");
  const categoryID = location[location.length - 1].toString();
  const data = FaqsInfo[categoryID];
  console.log(categoryID)

  return (
    <>
      {data && data.map(content => (
        <Faq key={content[2]} question={content[0]} answer={content[1]} />
      ))}
    </>
  );
}

import { Link } from "react-router-dom";

export default function CardDept({ deptInfo }) {
  return (
    <div className={"box " + deptInfo.deptName[0]}>
      <div className="image">
        <img src={deptInfo.image} alt="department-logo" />
      </div>
      <div className="content">
        <h3>{deptInfo.deptName[1]}</h3>
        <Link
          to={`${deptInfo.deptName[0]}`}
          className={"box btn " + deptInfo.deptName[0]}
        >
          Go to Repository
        </Link>
      </div>
    </div>
  );
}

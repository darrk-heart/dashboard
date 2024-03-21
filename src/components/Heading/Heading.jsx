import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "./Heading.module.css";
import { MdApps } from "react-icons/md";

function Heading() {
  return (
    <>
      <div className={styles.heading}>
        <div className={styles.googleHeading}>
          <FaBars className={styles.fabar} size={21} />
          <span className="roboto-medium"> Google Finance</span>
        </div>
        <div>
          <MdApps className={styles.mdapp} size={26} />
        </div>
      </div>
    </>
  );
}

export default Heading;

import Image from "next/image";
import styles from "./style.module.css";

// TODO: Add props to HeistCard
  // HINT: look at pages/addHeist.jsx, line 19... what props are passed when we add a heist?
const HeistCard = ({location, startDate, endDate, plan}) => {
  // Bonus: Format date function
  const formatDate = (date) => {
    if (!date) return '';

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // TODO: Fill out this template with the correct props and labels. 
    // HINT: Check out CrewCard/index.jsx for formatting ideas...
    // HINT: <HTML tag> [Text] </HTML tag> {prop}
  return (
    <div className={styles.card}>
      <Image src="/heist_placeholder.jpg" width={550} height={300}/>
      <p className={styles.cardContent}>
        <strong>Heist: </strong> {location}
      </p>
      <p className={styles.cardContent}>
        <strong>Start Date: </strong> {startDate}
      </p>
      <p className={styles.cardContent}>
        <strong>End Date: </strong> {endDate}
      </p>
      <p className={styles.cardContent}> {plan}
        <strong>Plan: </strong>
      </p>
    </div>
  );
};

export default HeistCard;
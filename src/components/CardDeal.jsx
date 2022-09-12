import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section id="solution" className={layout.section}>
      {/* text & button */}
      <div className={layout.sectionInfo}>
        <h2
          className={styles.heading2}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Find a better card deal
          <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <div data-aos="fade-down" data-aos-delay="300">
          <Button styles={"mt-10"} />
        </div>
      </div>

      {/* image */}
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="card"
          className="w-[100%] h-[100%]"
          data-aos="zoom-in"
          data-aos-delay="1000"
        />
      </div>
    </section>
  );
};

export default CardDeal;

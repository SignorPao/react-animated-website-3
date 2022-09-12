import styles, { layout } from "../style";

// import icons & image
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section id="features" className={layout.sectionReverse}>
      {/* image */}
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
          data-aos="flip-left"
          data-aos-selay="400"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[40%] h-[40%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      {/* text & icons */}
      <div className={layout.sectionInfo}>
        <h2
          className={styles.heading2}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Easily control your
          <br className="sm:block hidden" /> billing & invoicing.
        </h2>
        <p
          className={`${styles.paragraph} max-w-[470x] mt-5`}
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        {/* icons */}
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="app_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
            data-aos="fade-down"
            data-aos-delay="300"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
            data-aos="fade-down"
            data-aos-delay="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;

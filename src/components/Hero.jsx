import styles from "../style";
import GetStarted from "./GetStarted";

// import icons & images
import { discount, robot } from "../assets";

// import hero image
import hand from "../assets/hero/hand.png";
import cardBottom from "../assets/hero/card-3.png";
import cardMiddle from "../assets/hero/card-2.png";
import cardTop from "../assets/hero/card-1.png";
import ball1 from "../assets/hero/Vector.png";
import ball2 from "../assets/hero/Vector-2.png";
import ball3 from "../assets/hero/Vector-3.png";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} sm:pt-[81px] pt-[81px]`}
    >
      {/* hero text & icons */}
      <div
        className={`flex-[60%] ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* discount */}
        <div
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>

        {/* hero text */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The Next <br className="sm:block hidden" />{" "}
            <span
              className="text-gradient"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Generation
            </span>{" "}
          </h1>

          {/* button */}
          <div
            className="ss:flex hidden md:mr-4 mr-0"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <GetStarted />
          </div>
        </div>

        <h1
          className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Payment Method.
        </h1>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* hero image */}
      <div
        className={`flex-[40%] flex ${styles.flexCenter} md:my-0 my-10 relative min-h-[50vh] md:min-h-[80vh] xl:min-h-[70vh]`}
      >
        {/* mobile hero */}
        <img
          src={robot}
          alt="hero"
          className="w-[100%] h-[100%] z-[5] object-contain absolute md:hidden"
        />

        {/* desktop hero */}
        <img
          src={hand}
          alt="hero"
          className="w-[100%] h-[100%] absolute z-[5] object-contain -bottom-[20%] hidden md:block"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <img
          src={cardBottom}
          alt="card"
          className="w-[55%] h-[55%] absolute object-contain bottom-[20%] right-[28%] hidden md:block"
          data-aos="fade-down"
          data-aos-delay="100"
        />
        <img
          src={cardMiddle}
          alt="card"
          className="w-[75%] h-[75%] absolute object-contain bottom-[19%] right-[17%] hidden md:block"
          data-aos="fade-down"
          data-aos-delay="300"
        />
        <img
          src={cardTop}
          alt="card"
          className="w-[68%] h-[68%] absolute object-contain bottom-[34%] right-[24%] hidden md:block"
          data-aos="fade-down"
          data-aos-delay="500"
        />
        <img
          src={ball1}
          alt="ball"
          className="w-[17%] h-[17%] object-contain absolute bottom-[80%] right-[73%]  hidden md:block"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        <img
          src={ball2}
          alt="ball"
          className="w-[13%] h-[13%] object-contain absolute bottom-[30%] right-[23%]  hidden md:block"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        <img
          src={ball3}
          alt="ball"
          className="w-[6%] h-[6%] object-contain absolute bottom-[25%] right-[77%]  hidden md:block"
          data-aos="zoom-in"
          data-aos-delay="100"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* mobile button */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;

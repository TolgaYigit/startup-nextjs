import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle center title="About Us" mb={"0"} />
        <div className="mx-auto text-center">
          <p className="mb-6">
            Welcome to LinguaPrime Academy, where language learning meets
            excellence. We are a premier educational institution dedicated to
            helping individuals unlock the power of language through immersive,
            innovative, and personalized programs.
          </p>
          <p className="mb-6">
            Our diverse range of courses caters to learners of all skill levels,
            empowering students to achieve their personal, professional, and
            academic goals. With a commitment to excellence, we create
            transformative experiences that not only enhance language
            proficiency but also foster cultural understanding and global
            connectivity.
          </p>
          <p className="mb-6">
            At LinguaPrime Academy, we believe in the limitless potential of
            language as a bridge to opportunities and a tool for success.
            Whether you’re a beginner or a seasoned linguist, our expert
            instructors and cutting-edge curriculum are here to guide you every
            step of the way.
          </p>
          <p>
            Join us on this journey of discovery, connection, and growth.
            Together, let’s speak the language of the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

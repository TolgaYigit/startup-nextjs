import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle center title="About Us" mb={"0"} />
        <div className="mx-auto text-center">
          <p className="mb-6">
            Meet Pelin and Tania! With over a decade of experience teaching
            English at prestigious institutions both in Turkey and abroad, we,
            Pelin and Tania, have decided to create our own educational
            programs. We specialize in preparing students for English
            proficiency exams such as TOEFL IBT, IELTS, English for UKVI, YDS,
            SAT, and iTEP. Additionally, we offer courses in General and
            Business English to meet diverse learning needs.
          </p>
          <p className="mb-6">
            Recognizing the growing demand for English proficiency in Turkey, we
            are excited to bring our expertise home. We are committed to helping
            students and professionals enhance their English skills to achieve
            their academic and career goals.
          </p>
          <p>We look forward to supporting your learning journey.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

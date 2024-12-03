import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../Features/SingleFeature";
import SingleCourse from "./SingleCourse";
import { coursesData } from "./coursesData";

const Courses = () => {
  return (
    <>
      <section id="courses" className="bg-gray-light py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle title="Courses" paragraph="" center />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {coursesData.map((course, index) => (
              <SingleCourse key={index} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;

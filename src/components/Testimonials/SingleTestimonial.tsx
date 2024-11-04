import { Testimonial } from "@/types/testimonial";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { designation, name, content } = testimonial;

  return (
    <div className="h-full w-full">
      <div className="flex h-full flex-col justify-between rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <p className="text-base leading-relaxed text-body-color dark:text-white">
          “{content}”
        </p>
        <div className="mt-8 flex items-center border-t border-body-color border-opacity-10 pt-8 dark:border-white dark:border-opacity-10">
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;

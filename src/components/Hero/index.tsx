import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section id="home" className="relative z-10 overflow-hidden">
        <div className="w-screen bg-black">
          <Image
            src="/images/pnt/heroImage.jpg"
            alt="hero"
            className="flex flex-col items-center opacity-60"
            objectFit="cover"
            objectPosition="center"
            layout="fill"
          />
          <div className="pt-[120px]md:pb-[120px] relative z-20 pb-16 text-white md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
            <div className="container">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 pt-40">
                  <div className="mx-auto max-w-[800px] text-center">
                    <h1 className="leading-tigh mb-5 text-3xl font-bold sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                      Lingua Prime Academy
                    </h1>
                    <p className="text-body-color-light mb-12 text-base !leading-relaxed sm:text-lg md:text-xl">
                      With personalized guidance and proven strategies, our
                      Expert English Coaching gives you the skills and
                      confidence to succeed in every exam. Let us help you turn
                      your dreams into reality as you move closer to achieving
                      your goals ❤️
                    </p>
                    {/* <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <Link
                        href=""
                        className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                      >
                        🔥 Get Pro
                      </Link>
                      <Link
                        href="https://github.com/NextJSTemplates/startup-nextjs"
                        className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                      >
                        Star on GitHub
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

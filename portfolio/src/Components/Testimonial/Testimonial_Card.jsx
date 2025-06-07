const Testimonial_Card = ({ content, name, from }) => {
  return (
    <section className="bg-white dark:bg-gray-900  px-4 py-6 sm:px-6 md:px-10 lg:px-12 xl:px-16 rounded-xl shadow-md w-full max-w-5xl mx-auto">
      <div className="text-center">
        <figure>
          <svg
            className="h-8 sm:h-10 md:h-12 mx-auto mb-4 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-900 dark:text-white leading-relaxed sm:px-4">
              {content}
            </p>
          </blockquote>
          <figcaption className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="font-semibold text-gray-900 dark:text-white text-lg">{name}</span>
            <span className="text-md font-light text-gray-500 dark:text-gray-400 text-center sm:text-left">
              {from}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial_Card;

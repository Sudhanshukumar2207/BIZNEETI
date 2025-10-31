export default function AboutUs() {
  return (
    <div id="aboutus" className="w-full h-auto flex items-center justify-center bg-gray-100">
      <div className="max-w-6xl mt-10 mb-10 mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 leading-relaxed mb-4 text-justify text-lg">
          <span className="font-semibold text-gray-800">Bizneeti Services</span> is a leading
          business solutions provider specializing in <span className="font-medium">sales and marketing</span>,
          with a strong focus on <span className="font-medium">digital marketing, sales personnel hiring,</span> and
          <span className="font-medium"> training</span>. Our mission is to empower businesses with
          result-driven strategies that fuel growth and success.
        </p>

        <p className="text-gray-700 leading-relaxed text-justify  text-lg">
          We understand that many businesses have great products or services, but due to weak sales
          and marketing execution, they struggle to scale. That's where we come in! Our expertise
          lies in creating tailored strategies that help businesses achieve consistent revenue
          growth.
        </p>
      </div>
    </div>
  );
}
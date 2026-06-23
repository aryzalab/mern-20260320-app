export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-black mb-5">About page</h1>
      <p>
        An effective About Us page builds trust and converts visitors by sharing
        your brand&apos;s story, mission, and unique value. It is the second
        most visited page on a website and your primary opportunity to humanize
        your business.Core Elements to IncludeYour Origin Story: Explain how and
        why you started, the problem you identified, and the journey you took to
        solve it.Mission and Vision: Clearly state what your business stands for
        and the ultimate goal you are trying to achieve.The People Behind the
        Brand: Introduce your founders or team members with bios and candid
        photos to create a personal connection.Credibility & Values: Share what
        you believe in, alongside any awards, testimonials, or features that
        prove your expertise.Call to Action (CTA): Tell visitors what to do next
        (e.g., browse your services, read your blog, or join your mailing list)
      </p>
      <button className="bg-blue-500 text-white px-4 py-1 rounded mt-5">
        Learn more
      </button>
    </section>
  );
};

export default AboutPage;

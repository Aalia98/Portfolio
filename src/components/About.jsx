const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            ABOUT
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm Aalia Amin, an Immediate joiner and a Software Engineer around 2
          years of professional experience building scalable backend systems and
          full-stack applications.
        </p>
        <br />
        <p className="text-xl">
          During my professional experience at RNGplay, I worked on systems
          powering 20+ real-time slot games with 10K+ concurrent users. I
          contributed to backend services and engineering solutions focused on
          scalability, performance, reliability, and efficient data processing.
        </p>
        <br />
        <p className="text-xl">
          My technical experience includes <b> Go</b>, <b>React</b>, <b>TypeScript</b>, <b>Kafka</b>, <b>Redis</b>,
          and <b>MySQL</b>. I have worked with <b> Microservices, REST APIs, Event-Driven
          Architectures, Caching, Database Optimization, Concurrency,</b> and
          <b> Distributed Systems</b>. I enjoy understanding how systems work under the hood, identifying
          performance bottlenecks, solving complex engineering problems, and
          writing clean, maintainable code. I am particularly interested in
          building scalable backend systems while also having the flexibility to
          work across the full stack.
        </p>
        <br />
        <p className="text-xl">
          One of my key projects is a full-stack e-commerce platform built with
          <b> Go, React, MySQL, Redis,</b> and <b> Kafka</b>, where I implemented
          authentication, role-based authorization, caching, asynchronous
          processing, and database optimization.
        </p>
        <br />
        <p className="text-xl">
          I'm continuously learning and improving my skills in <b> Software
          Engineering, System Design, Distributed Systems, and Data Structures
          and Algorithms</b>. My goal is to build reliable, scalable products and
          grow as a strong Software Engineer.
        </p>
      </div>
    </div>
  );
};

export default About;

const Heading = ({ title, sub }) => (
  <div className="pb-8">
    <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
    <p className="mt-2 text-[#8a90b8]">{sub}</p>
  </div>
);

const Pill = ({ children }) => (
  <span className="mb-2 mr-2 inline-block rounded-full border border-[#3a418a] px-4 py-2 text-sm text-[#c3c8ff]">{children}</span>
);

const About = () => (
  <div name="about" className="min-h-screen w-full bg-[#0b0d1a] text-[#e8eaf6]">
    <div className="mx-auto max-w-screen-xl px-6 py-20 sm:px-8">
      <Heading title="About" sub="Full stack, with a strong Go backend" />
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-5 text-base leading-relaxed text-[#c3c7e6] sm:text-lg md:col-span-3">
          <p>
            I'm Aalia Amin, an immediate joiner and a <b className="text-white">Full Stack Software Engineer</b> with
            around 2 years of professional experience building scalable backend systems and full-stack applications.
          </p>
          <p>
            During my professional experience at RNGplay, I worked on systems powering{" "}
            <b className="text-white">20+ real-time slot games</b> with <b className="text-white">10K+ concurrent users</b>.
            I contributed to backend services and engineering solutions focused on scalability, performance,
            reliability, and efficient data processing, and worked on the frontend as well.
          </p>
          <p>
            My technical experience includes <b className="text-white">Go</b>, <b className="text-white">React</b>,{" "}
            <b className="text-white">TypeScript</b>, <b className="text-white">Kafka</b>, <b className="text-white">Redis</b>, and{" "}
            <b className="text-white">MySQL</b>. I have worked with{" "}
            <b className="text-white">Microservices, REST APIs, Event-Driven Architectures, Caching, Database Optimization, Concurrency</b>, and{" "}
            <b className="text-white">Distributed Systems</b>.
          </p>
          <p>
            I enjoy understanding how systems work under the hood, identifying performance bottlenecks, solving complex
            engineering problems, and writing clean, maintainable code. I like working across the stack, from the
            interface a user sees to the service and database behind it.
          </p>
          <p>
            One of my key projects is a full-stack e-commerce platform built with <b className="text-white">Go, React, MySQL, Redis</b>,
            and <b className="text-white">Kafka</b>, where I implemented authentication, role-based authorization, caching,
            asynchronous processing, and database optimization.
          </p>
          <p>
            I'm continuously learning and improving my skills in{" "}
            <b className="text-white">Software Engineering, System Design, Distributed Systems, and Data Structures and Algorithms</b>.
            My goal is to build reliable, scalable products and grow as a strong Software Engineer.
          </p>
        </div>
        <div className="space-y-5 md:col-span-2">
          <div className="rounded-2xl border border-[#262c55] bg-[#141830] p-6">
            <b>Frontend</b>
            <div className="mt-3"><Pill>React</Pill><Pill>TypeScript</Pill><Pill>JavaScript</Pill><Pill>Tailwind CSS</Pill><Pill>HTML / CSS</Pill></div>
          </div>
          <div className="rounded-2xl border border-[#262c55] bg-[#141830] p-6">
            <b>Backend</b>
            <div className="mt-3"><Pill>Go</Pill><Pill>MySQL</Pill><Pill>Redis</Pill><Pill>Kafka</Pill><Pill>REST APIs</Pill><Pill>Microservices</Pill></div>
          </div>
          <div className="rounded-2xl border border-[#262c55] bg-[#141830] p-6">
            <b>Right now</b>
            <p className="mt-2 text-sm text-[#a9aed0]">Open to full-time Software Engineer roles (Go, Full Stack) and freelance projects. Immediate joiner.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

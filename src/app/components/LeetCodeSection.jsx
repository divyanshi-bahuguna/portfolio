export default function LeetCodeSection() {

  const badges = [
    { title: "100 Days Badge", img: "/images/leetcode/100days.png" },
    { title: "50 Days Badge", img: "/images/leetcode/50days.png" },
    { title: "October Badge", img: "/images/leetcode/oct.png" },
    { title: "September Badge", img: "/images/leetcode/sep.png" },
  ];

  return (
    <section id="leetcode" className="py-20">

      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-12">
        My LeetCode Journey
      </h2>

      {/* Badge Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 px-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="bg-[#111] border border-gray-800 rounded-xl p-6 text-center
                       transform transition duration-300
                       hover:scale-105 hover:-translate-y-2
                       hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]"
          >
            <img
              src={badge.img}
              alt={badge.title}
              className="mx-auto mb-4 h-40 object-contain"
            />

            <p className="text-gray-300 font-medium">
              {badge.title}
            </p>
          </div>
        ))}
      </div>

      {/* Activity */}
      <div className="max-w-5xl mx-auto bg-[#111] border border-gray-800 rounded-xl p-6 mb-12 px-4">
        <h3 className="text-xl font-semibold text-center mb-6">
          Submission Activity
        </h3>

        <img
          src="/images/leetcode/activity.png"
          alt="LeetCode Activity"
          className="rounded-lg mx-auto"
        />
      </div>

      {/* Profile Button */}
      <div className="text-center">
        <a
          href="https://leetcode.com/divyanshi_bahuguna/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-pink-500 rounded-full
                     hover:bg-pink-500 hover:text-white transition"
        >
          Visit My LeetCode Profile
        </a>
      </div>

    </section>
  );
}
import { motion } from "framer-motion";

function NewsletterSection() {
  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Newsletter
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 rounded-full w-full sm:w-auto bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
            Subscribe
          </button>
        </motion.div>

        <p className="text-sm text-gray-500 mt-4">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
}

export default NewsletterSection;

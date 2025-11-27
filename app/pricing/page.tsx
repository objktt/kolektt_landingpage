"use client";

import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-primary leading-tight">
              Simple, Fair Pricing
            </h1>
            <p className="text-xl md:text-2xl text-primary/60 leading-relaxed">
              Choose the plan that works best for your music collection needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-3xl p-8 border border-primary/10"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-primary mb-2">Free</h3>
                <div className="text-5xl font-bold text-primary mb-4">
                  $0
                  <span className="text-lg font-normal text-primary/60">
                    /month
                  </span>
                </div>
                <p className="text-primary/60">Perfect for getting started</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span className="text-primary/70">Up to 100 tracks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span className="text-primary/70">BPM detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span className="text-primary/70">Basic organization</span>
                </li>
              </ul>
              <button className="w-full bg-primary/10 text-primary py-4 px-6 rounded-xl font-semibold hover:bg-primary/20 transition-colors">
                Get Started
              </button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-accent text-white rounded-3xl p-8 relative shadow-2xl"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="text-3xl font-bold mb-2">Pro</h3>
                <div className="text-5xl font-bold mb-4">
                  $9
                  <span className="text-lg font-normal opacity-75">
                    /month
                  </span>
                </div>
                <p className="opacity-90">For serious collectors</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-white text-xl mr-3">✓</span>
                  <span>Unlimited tracks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white text-xl mr-3">✓</span>
                  <span>Advanced search</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white text-xl mr-3">✓</span>
                  <span>Cloud sync</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white text-xl mr-3">✓</span>
                  <span>Export features</span>
                </li>
              </ul>
              <button className="w-full bg-white text-accent py-4 px-6 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Start Free Trial
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ / Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Questions?
            </h2>
            <p className="text-xl text-primary/60 mb-8">
              Contact us if you need help choosing the right plan.
            </p>
            <a
              href="mailto:hello@kolektt.kr?subject=Pricing Inquiry"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

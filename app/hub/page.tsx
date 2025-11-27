"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HubPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <span className="text-primary font-semibold">
                    🏢 For Professional Dealers
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary leading-tight">
                  Professional Vinyl
                  <br />
                  <span className="text-accent">Inventory Management</span>
                </h1>
                <p className="text-xl text-primary/60 mb-8 leading-relaxed">
                  Enterprise-grade inventory system for record shops and
                  large-scale dealers. Streamline your operations with
                  automated cataloging, real-time pricing, and advanced
                  analytics.
                </p>

                {/* Key Stats */}
                <div className="flex flex-wrap gap-8 mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-accent mb-1">
                      10M+
                    </h3>
                    <p className="text-sm text-primary/60">Records Managed</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-accent mb-1">
                      2,500+
                    </h3>
                    <p className="text-sm text-primary/60">Record Shops</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-accent mb-1">
                      99.2%
                    </h3>
                    <p className="text-sm text-primary/60">Uptime SLA</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors"
                  >
                    📊 View Features
                  </Link>
                  <Link
                    href="#pricing"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent rounded-xl font-semibold hover:bg-accent hover:text-white transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="font-bold text-lg text-primary">
                      Inventory Dashboard
                    </h4>
                    <p className="text-sm text-primary/50">
                      Live data - Updated every 30 seconds
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-background rounded-lg p-4 text-center">
                    <h5 className="text-2xl font-bold text-accent mb-1">
                      15,247
                    </h5>
                    <p className="text-xs text-primary/60">In Stock</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 text-center">
                    <h5 className="text-2xl font-bold text-green-600 mb-1">
                      $847K
                    </h5>
                    <p className="text-xs text-primary/60">Inventory Value</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 text-center">
                    <h5 className="text-2xl font-bold text-orange-600 mb-1">
                      127
                    </h5>
                    <p className="text-xs text-primary/60">Low Stock</p>
                  </div>
                </div>

                <div
                  className="h-32 rounded-xl mb-4 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)",
                  }}
                >
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-xs opacity-75">
                      Monthly Sales Trend
                    </span>
                  </div>
                </div>

                <div>
                  <h6 className="font-bold text-sm mb-3 text-primary">
                    Recent Additions
                  </h6>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-accent rounded"></div>
                      <div className="w-8 h-8 bg-green-500 rounded"></div>
                      <div className="w-8 h-8 bg-orange-500 rounded"></div>
                      <div className="w-8 h-8 bg-red-500 rounded"></div>
                    </div>
                    <span className="text-xs text-primary/50">+47 today</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-primary">
              Complete inventory management suite
            </h2>
            <p className="text-xl text-primary/60 max-w-2xl mx-auto">
              Enterprise tools designed for professional record dealers and shops
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-primary/5"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                Inventory Management
              </h3>
              <p className="text-primary/60 mb-4">
                Real-time stock tracking, automated pricing, and comprehensive analytics
              </p>
              <div className="space-y-2 text-sm text-primary/50">
                <div>• Total Value: $847K</div>
                <div>• Rare Items: 2,847</div>
                <div>• Low Stock Alerts: 127</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-primary/5"
            >
              <div className="text-4xl mb-4">📁</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                Bulk Import System
              </h3>
              <p className="text-primary/60 mb-4">
                CSV/Excel import with Discogs API integration. Process up to 5,000 records at once.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-primary/60">Success Rate</span>
                  <span className="font-bold text-primary">97.3%</span>
                </div>
                <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: "97%" }}></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-primary/5"
            >
              <div className="text-4xl mb-4">📷</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                Barcode Scanner
              </h3>
              <p className="text-primary/60 mb-4">
                Instant catalog lookup with mobile barcode scanning
              </p>
              <div className="text-primary/50 text-sm">
                <div className="font-bold text-2xl text-primary mb-1">247</div>
                <div>Scanned Today</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-primary/5"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                B2B Sales Management
              </h3>
              <p className="text-primary/60 mb-4">
                Wholesale pricing, bulk orders, and dealer network management. Multi-channel sales integration.
              </p>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <div className="font-bold text-lg text-primary">847</div>
                  <div className="text-primary/50 text-xs">B2B Customers</div>
                </div>
                <div>
                  <div className="font-bold text-lg text-primary">$1.2M</div>
                  <div className="text-primary/50 text-xs">Monthly Revenue</div>
                </div>
                <div>
                  <div className="font-bold text-lg text-primary">15%</div>
                  <div className="text-primary/50 text-xs">Avg. Margin</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-background rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-primary/5"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                Market Analytics
              </h3>
              <p className="text-primary/60 mb-4">
                Real-time Discogs pricing with trend analysis and profit margin calculations
              </p>
              <div className="flex justify-between text-sm">
                <div>
                  <div className="font-bold text-lg text-primary">+23.7%</div>
                  <div className="text-primary/50 text-xs">ROI This Quarter</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-primary">$47</div>
                  <div className="text-primary/50 text-xs">Avg. Margin</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-background rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-primary/5"
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                Multi-Location Support
              </h3>
              <p className="text-primary/60 mb-4">
                Manage inventory across multiple store locations with centralized control
              </p>
              <div className="text-primary/50 text-sm">
                <div className="font-bold text-2xl text-primary mb-1">12</div>
                <div>Active Locations</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-20 lg:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="bg-white rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto shadow-xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary/60 mb-10 leading-relaxed">
              Join thousands of record dealers who trust Kolektt Hub for their inventory management
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:hello@kolektt.kr?subject=Kolektt Hub - Request Demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-accent/90 transition-all duration-200"
              >
                Request Demo
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent text-lg font-semibold rounded-xl hover:bg-accent hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

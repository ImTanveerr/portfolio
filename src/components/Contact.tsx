"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = {
        service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_USER_ID,
        template_params: {
          title: formData.subject,
          name: formData.name,
          time: new Date().toLocaleString(),
          message: formData.message,
          email: formData.email,
        },
      };

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      console.error("Error sending message:", error);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "iamtanv33r@gmail.com",
      href: "mailto:iamtanv33r@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+8801874935346",
      href: "tel:+8801874935346",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Notun Bazar, Dhaka, Bangladesh",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-orange-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have an idea or project in mind? Reach out and let&apos;s make it happen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-purple-600 text-white shadow-md">
                  <info.icon size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {info.title}
                  </h4>
                  {info.href === "#" ? (
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  ) : (
                    <a
                      href={info.href}
                      className="text-orange-600 dark:text-orange-400 hover:underline"
                    >
                      {info.value}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "GitHub", href: "https://github.com/ImTanveerr" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/akram-hossain-tanveer-73266a359/" },
                  { name: "WhatsApp", href: "https://wa.me/+8801874935346" },
                  { name: "Email", href: "mailto:iamtanv33r@gmail.com" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 shadow-sm"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 w-full dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 w-full dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                required
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 w-full dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                required
                rows={6}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 w-full dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-orange-500 resize-none"
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-orange-600 to-purple-600 hover:shadow-lg"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center font-medium">
                  ✅ Your message was sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 dark:text-red-400 text-center font-medium">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

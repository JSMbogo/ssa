import { createFileRoute } from '@tanstack/react-router'
import {
  Smartphone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/5">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Get in <span className="text-africa-gold">Touch</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-primary-foreground/80 font-medium">
            We are here to listen. Reach out to us for inquiries, support, or to report an incident safely.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information (Left Column) */}
          <div className="bg-primary/5 p-8 lg:p-12 space-y-10">
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground flex items-center gap-3">
                <span className="w-12 h-1 bg-africa-red block"></span>
                Contact Info
              </h2>
              <p className="text-muted-foreground">
                Our team is ready to assist you. Please use any of the channels below to reach us.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold uppercase tracking-wide text-xs text-muted-foreground">Phone / WhatsApp</h3>
                  <p className="text-lg font-black text-foreground">0700512997</p>
                  <p className="text-sm font-medium text-muted-foreground">Mon - Fri, 8am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold uppercase tracking-wide text-xs text-muted-foreground">Email</h3>
                  <p className="text-lg font-black text-foreground">report@speaksafe.africa</p>
                  <p className="text-sm font-medium text-muted-foreground">24/7 Support</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold uppercase tracking-wide text-xs text-muted-foreground">Headquarters</h3>
                  <p className="text-lg font-black text-foreground">Kampala, Uganda</p>
                  <p className="text-sm font-medium text-muted-foreground">Plot 123, Access Road</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border/50">
              <h3 className="font-bold uppercase tracking-wide text-xs text-muted-foreground mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="p-8 lg:p-12 bg-white">
            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-secondary/5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-secondary/5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 bg-secondary/5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 bg-secondary/5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/50 resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-primary text-primary-foreground font-black uppercase tracking-widest rounded-lg hover:bg-primary/90 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

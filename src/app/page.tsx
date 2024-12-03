'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  ChevronDown, Star, Users, Zap, Gift, ArrowRight, BarChart,
  MessageCircle, LayoutDashboard, Menu, X, Activity, Award,
  Monitor, Globe, Target, TrendingUp, Smile, ThumbsUp
} from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden relative">
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 opacity-20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-yellow-500 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-yellow-500 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/icon.png"
              alt="ClassMate Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-xl font-semibold">ClassMate</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('rewards')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              Rewards
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('for-teachers')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              For Teachers
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              About
            </button>
            <Link
              href="https://"
              target="_blank"
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors shadow-lg"
            >
              Join Waitlist
            </Link>
          </div>
          <button className="md:hidden text-yellow-500" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <button onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 text-yellow-500">
            <X className="w-6 h-6" />
          </button>
          <div className="mt-8 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('rewards')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              Rewards
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('for-teachers')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              For Teachers
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              About
            </button>
            <Link
              href="https://"
              target="_blank"
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors text-center shadow-lg"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl">
          Collaborate Smarter. Study Together.
          <span className="text-yellow-500"> Succeed Together.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          400+ students already using ClassMate to connect, collaborate, and succeed together in their courses
        </p>
        <div className="mb-8">
          <Link
            href="https://"
            target="_blank"
            className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full hover:bg-yellow-600 transition-colors inline-flex items-center group shadow-lg"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="w-full max-w-sm">
          <video
            src="/classmate-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg shadow-2xl w-full h-auto"
          ></video>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose ClassMate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-700 p-8 rounded-xl relative group hover:bg-gray-600 transition-colors shadow-lg">
              <Users className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">Effortless Groups</h3>
              <p className="text-gray-300">Auto-created study groups for every class. Connect instantly with your classmates.</p>
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/10 rounded-full filter blur-xl group-hover:scale-150 transition-transform"></div>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-700 p-8 rounded-xl relative group hover:bg-gray-600 transition-colors shadow-lg">
              <Zap className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">Quick Support</h3>
              <p className="text-gray-300">Get help instantly from classmates and AI-powered assistance.</p>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-yellow-500/10 rounded-full filter blur-xl group-hover:scale-150 transition-transform"></div>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-700 p-8 rounded-xl relative group hover:bg-gray-600 transition-colors shadow-lg">
              <Gift className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">Earn Rewards</h3>
              <p className="text-gray-300">Get rewarded for helping others and participating in discussions.</p>
              <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-500/10 rounded-full filter blur-xl group-hover:scale-150 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Earn While You Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <Star className="w-6 h-6 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors">Help Others, Earn Points</h3>
                  <p className="text-gray-300">Answer questions and participate in discussions to earn reward points.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <Gift className="w-6 h-6 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors">Redeem Rewards</h3>
                  <p className="text-gray-300">Convert your points into gift cards and exclusive perks.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center space-y-4 group hover:bg-gray-700 transition-colors shadow-lg">
                <Smile className="w-12 h-12 text-yellow-500 group-hover:scale-110 transition-transform" />
                <p className="text-center text-gray-300">Motivating Engagement</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center space-y-4 group hover:bg-gray-700 transition-colors shadow-lg">
                <ThumbsUp className="w-12 h-12 text-yellow-500 group-hover:scale-110 transition-transform" />
                <p className="text-center text-gray-300">Recognition and Rewards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                major: "Computer Science",
                feedback: "ClassMate has completely transformed how I collaborate with my classmates. The reward system makes helping others fun!",
              },
              {
                name: "Emily Davis",
                major: "Biology",
                feedback: "I used to feel lost in large classes, but with ClassMate, I've found a community that supports me.",
              },
              {
                name: "Michael Lee",
                major: "Engineering",
                feedback: "The auto-created study groups are fantastic. I no longer have to struggle to find study partners.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-700 p-8 rounded-xl relative group hover:bg-gray-600 transition-colors shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.major}</p>
                  </div>
                </div>
                <p className="text-gray-200">"{testimonial.feedback}"</p>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-full filter blur-xl group-hover:scale-150 transition-transform"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Teachers Section */}
      <section id="for-teachers" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Empower Your Teaching with ClassMate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <BarChart className="w-8 h-8 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors">Data-Driven Insights</h3>
                  <p className="text-gray-300">Collect valuable data on student questions and identify common pain points in your courses.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <MessageCircle className="w-8 h-8 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors">Improve Course Content</h3>
                  <p className="text-gray-300">Receive feedback on frequently asked questions to refine and enhance your course materials.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <LayoutDashboard className="w-8 h-8 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors">TA/Teacher Dashboard</h3>
                  <p className="text-gray-300">Efficiently manage student questions and monitor class engagement with our intuitive dashboard.</p>
                </div>
              </div>
            </div>
            <div className="text-center space-y-4 flex justify-center">
              <video
                src="/dashboard-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-2xl w-full max-w-sm"
              ></video>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About ClassMate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-gray-300">
                ClassMate is a next-generation collaboration platform designed to enhance the learning experience for students and teachers in higher education. By leveraging technology, behavioral psychology, and data-driven insights, ClassMate fosters a sense of community in educational settings, making learning more interactive, inclusive, and rewarding.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <Users className="w-6 h-6 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold group-hover:text-yellow-500 transition-colors">Auto-Created Study Groups</h4>
                    <p className="text-gray-300">Automatically organizes students into study groups for each class, encouraging teamwork and building a sense of belonging.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Activity className="w-6 h-6 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold group-hover:text-yellow-500 transition-colors">Real-Time Collaboration</h4>
                    <p className="text-gray-300">Offers instant messaging and group chat functionalities, fostering peer-to-peer learning with AI-powered assistance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <Award className="w-6 h-6 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold group-hover:text-yellow-500 transition-colors">Rewards System</h4>
                    <p className="text-gray-300">Gamifies learning by awarding points for helping others, which can be redeemed for gift cards and exclusive perks.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-700 p-6 rounded-xl flex flex-col items-center justify-center space-y-4 group hover:bg-gray-600 transition-colors shadow-lg">
                  {i === 1 && <Monitor className="w-12 h-12 text-yellow-500 group-hover:scale-110 transition-transform" />}
                  {i === 2 && <Globe className="w-12 h-12 text-yellow-500 group-hover:scale-110 transition-transform" />}
                  {i === 3 && <Target className="w-12 h-12 text-yellow-500 group-hover:scale-110 transition-transform" />}
                  {i === 4 && <TrendingUp className="w-12 h-12 text-yellow-500 group-hover:scale-110 transition-transform" />}
                  <p className="text-center text-gray-300">
                    {i === 1 && "Seamless Integration"}
                    {i === 2 && "Inclusive Design"}
                    {i === 3 && "Motivational Rewards"}
                    {i === 4 && "Actionable Insights"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ClassMate</h3>
              <p className="text-gray-300 text-sm">Making student collaboration effortless and rewarding.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-yellow-500 transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('rewards')} className="hover:text-yellow-500 transition-colors">Rewards</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-yellow-500 transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('for-teachers')} className="hover:text-yellow-500 transition-colors">For Teachers</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-yellow-500 transition-colors">About</button></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <Link
                href="https://"
                target="_blank"
                className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ClassMate. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-500 p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
        >
          <ChevronDown className="w-6 h-6 transform rotate-180 text-gray-900" />
        </button>
      )}
    </div>
  )
}

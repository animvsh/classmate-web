'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronDown, Star, Users, Zap, Gift, BookOpen, ArrowRight, BarChart, MessageCircle, LayoutDashboard, Menu, X } from 'lucide-react'

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
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-yellow-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/placeholder.svg?height=32&width=32" 
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
              href="https://rizzy.vip" 
              target="_blank"
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
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
      <div className={`fixed inset-y-0 right-0 w-64 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
              href="https://rizzy.vip" 
              target="_blank"
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors text-center"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Collaborate Smarter. Study Together.
              <span className="text-yellow-500"> Succeed Together.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              400+ students already using ClassMate to connect, collaborate, and succeed together in their courses
            </p>
            <div className="mb-12">
              <Link
                href="https://rizzy.vip"
                target="_blank" 
                className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full hover:bg-yellow-600 transition-colors inline-flex items-center group"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Image src="/placeholder.svg?height=24&width=80" alt="UCSC" width={80} height={24} className="opacity-50" />
              <Image src="/placeholder.svg?height=24&width=80" alt="Canvas" width={80} height={24} className="opacity-50" />
              <span className="text-gray-500">+ More</span>
            </div>
          </div>
          <div className="relative mt-12 md:mt-0">
            <div className="bg-gray-800/50 rounded-lg backdrop-blur-sm aspect-video">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                App Demo Video
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500/20 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-500/20 rounded-full filter blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose ClassMate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl relative group hover:bg-gray-750 transition-colors">
              <Users className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">Effortless Groups</h3>
              <p className="text-gray-400">Auto-created study groups for every class. Connect instantly with your classmates.</p>
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/10 rounded-full filter blur-xl group-hover:scale-150 transition-transform"></div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl relative group hover:bg-gray-750 transition-colors">
              <Zap className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">Quick Support</h3>
              <p className="text-gray-400">Get help instantly from classmates and AI-powered assistance.</p>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-yellow-500/10 rounded-full filter blur-xl group-hover:scale-150 transition-transform"></div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl relative group hover:bg-gray-750 transition-colors">
              <Gift className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">Earn Rewards</h3>
              <p className="text-gray-400">Get rewarded for helping others and participating in discussions.</p>
              <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-500/10 rounded-full filter blur-xl group-hover:scale-150 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Earn While You Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <Star className="w-6 h-6 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors">Help Others, Earn Points</h3>
                  <p className="text-gray-400">Answer questions and participate in discussions to earn reward points.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <Gift className="w-6 h-6 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors">Redeem Rewards</h3>
                  <p className="text-gray-400">Convert your points into gift cards and exclusive perks.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl relative group hover:bg-gray-750 transition-colors">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Rewards Dashboard</h3>
                <div className="h-40 bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 group-hover:bg-gray-650 transition-colors">
                  Rewards UI Preview
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full filter blur-xl group-hover:scale-150 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-xl relative group hover:bg-gray-750 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mr-4 group-hover:bg-gray-650 transition-colors"></div>
                  <div>
                    <h4 className="font-semibold">UCSC Student</h4>
                    <p className="text-gray-400 text-sm">Computer Science</p>
                  </div>
                </div>
                <p className="text-gray-300">"ClassMate has completely transformed how I collaborate with my classmates. The reward system makes helping others fun!"</p>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-full filter blur-xl group-hover:scale-150 transition-transform"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Teachers Section */}
      <section id="for-teachers" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Empower Your Teaching with ClassMate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <BarChart className="w-8 h-8 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors">Data-Driven Insights</h3>
                  <p className="text-gray-400">Collect valuable data on student questions and identify common pain points in your courses.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <MessageCircle className="w-8 h-8 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors">Improve Course Content</h3>
                  <p className="text-gray-400">Receive feedback on frequently asked questions to refine and enhance your course materials.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <LayoutDashboard className="w-8 h-8 text-yellow-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition-colors">TA/Teacher Dashboard</h3>
                  <p className="text-gray-400">Efficiently manage student questions and monitor class engagement with our intuitive dashboard.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl relative group hover:bg-gray-750 transition-colors">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Teacher Dashboard Preview</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 group-hover:bg-gray-650 transition-colors">
                  Dashboard UI Preview
                </div>
              </div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500/10 rounded-full filter blur-xl group-hover:scale-150 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About ClassMate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 mb-6">
                We're building the future of student collaboration, making it easier than ever to connect, learn, and succeed together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 group">
                  <BookOpen className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-yellow-500 transition-colors">400+ Active Students</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Users className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-yellow-500 transition-colors">20+ Professors Onboard</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-800 aspect-square rounded-xl relative overflow-hidden group hover:bg-gray-750 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 group-hover:scale-110 transition-transform"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ClassMate</h3>
              <p className="text-gray-400 text-sm">Making student collaboration effortless and rewarding.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-yellow-500 transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('rewards')} className="hover:text-yellow-500 transition-colors">Rewards</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-yellow-500 transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('for-teachers')} className="hover:text-yellow-500 transition-colors">For Teachers</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-yellow-500 transition-colors">About</button></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <Link
                href="https://rizzy.vip"
                target="_blank"
                className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
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
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, User, ArrowRight, Heart, MessageCircle } from "lucide-react"
import { AnimatedElement, StaggeredAnimation } from "@/components/animations"
import { BlogService } from "@/services/api-service"
import { blogCategories } from "@/data/blog-data"
import type { BlogPost } from "@/data/blog-data"

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const posts =
          selectedCategory === "All"
            ? await BlogService.getAllPosts()
            : await BlogService.getPostsByCategory(selectedCategory)
        setBlogPosts(posts)
      } catch (error) {
        console.error("Error fetching blog posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [selectedCategory])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10 flex items-center justify-center">
        <div className="text-center">
          <div className="loading-dots text-2xl font-bold gradient-text">Loading</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10">
      {/* Header */}
      <section className="gradient-animate text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animation="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stories, insights, and wisdom from amazing women in tech. Get inspired, learn something new, and join the
              conversation! ✨
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <StaggeredAnimation staggerDelay={100}>
              {blogCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full shadow-md transition-all duration-300 font-medium ${
                    selectedCategory === category.name
                      ? "bg-[#16E7B4] text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:text-[#16E7B4] hover:shadow-lg"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedElement animation="scale-in">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden card-hover">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={blogPosts[0].image || "/placeholder.svg"}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#16E7B4] text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-[#42F5C3]/20 to-[#4FC3F7]/20 text-[#03BDA3] px-3 py-1 rounded-full text-sm font-semibold">
                        {blogPosts[0].category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {blogPosts[0].date}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{blogPosts[0].title}</h2>
                    <p className="text-gray-600 text-lg mb-6">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#42F5C3] to-[#16E7B4] rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{blogPosts[0].author}</p>
                          <p className="text-sm text-gray-500">{blogPosts[0].readTime}</p>
                        </div>
                      </div>
                      <Link href={`/blogs/${blogPosts[0].id}`} className="fun-button flex items-center gap-2">
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggeredAnimation staggerDelay={150}>
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="relative">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-[#03BDA3] px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                      <span className="mx-2">•</span>
                      {post.readTime}
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#42F5C3] to-[#16E7B4] rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{post.author}</span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/blogs/${post.id}`}
                      className="block mt-4 text-[#03BDA3] hover:text-[#16E7B4] font-semibold text-sm flex items-center gap-1 transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 gradient-animate text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="scale-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss a Story!</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to our newsletter and get the latest insights, tips, and inspiration delivered straight to your
              inbox! 📧
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-[#03BDA3] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Heart, Share2, Tag, Linkedin } from "lucide-react"
import { AnimatedElement } from "@/components/animations"
import { useBlogInteractions } from "@/hooks/use-blog-interactions"
import { useNewsletter } from "@/hooks/use-newsletter"
import { BlogService } from "@/services/api-service"
import type { BlogPostType } from "@/data/blog-data"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([])
  const [loading, setLoading] = useState(true)

  const { email, setEmail, isSubscribing, isSubscribed, handleSubscribe } = useNewsletter()
  const { likes, isLiked, isSharing, handleLike, handleShare } = useBlogInteractions(post?.likes || 0)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      try {
        const postData = await BlogService.getPostById(Number.parseInt(params.id))
        setPost(postData)

        if (postData) {
          const related = await BlogService.getRelatedPosts(postData.category, postData.id, 3)
          setRelatedPosts(related)
        }
      } catch (error) {
        console.error("Error fetching blog post:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10 flex items-center justify-center">
        <div className="text-center">
          <div className="loading-dots text-2xl font-bold gradient-text">Loading</div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link href="/blogs" className="fun-button">
            Back to Blogs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#42F5C3]/10 to-[#4FC3F7]/10">
      {/* Header */}
      <section className="relative">
        <div className="h-96 relative overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute top-8 left-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement animation="slide-in-left">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#16E7B4] text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center text-white/80 text-sm gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#16E7B4] to-[#4FC3F7] rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{post.author}</p>
                      <p className="text-sm text-white/80">Tech Lead & Mentor</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <AnimatedElement animation="fade-in">
                <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  <div
                    className="text-center md:text-start prose prose-lg max-w-none prose-headings:gradient-text prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-[#03BDA3]"
                    dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
                  />

                  {/* Tags */}
                  {post.tags && (
                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <div className="flex items-center gap-2 mb-4">
                        <Tag className="w-5 h-5 text-[#03BDA3]" />
                        <span className="font-semibold text-gray-800">Tags:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-[#42F5C3]/20 to-[#4FC3F7]/20 text-[#03BDA3] px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Social Actions */}
                  <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <button
                        onClick={handleLike}
                        className={`flex items-center gap-2 transition-colors ${
                          isLiked ? "text-red-500" : "text-gray-600 hover:text-red-500"
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                        <span>{likes} likes</span>
                      </button>
                    </div>
                    <button
                      onClick={handleShare}
                      disabled={isSharing}
                      className="flex items-center gap-2 fun-button px-4 py-2"
                    >
                      <Share2 className="w-4 h-4" />
                      {isSharing ? "Sharing..." : "Share"}
                    </button>
                  </div>
                </article>
              </AnimatedElement>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedElement animation="slide-in-right" delay={200}>
                <div className="sticky top-24 space-y-8">
                  {/* Author Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-[#16E7B4] to-[#4FC3F7] rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{post.author}</h3>
                      <p className="text-gray-600 text-sm mb-4">Tech Lead & Community Mentor</p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm bg-[#0077B5] text-white px-4 py-2 rounded-full hover:bg-[#005885] transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>

                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Related Posts</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost, index) => (
                          <Link
                            key={index}
                            href={`/blogs/${relatedPost.id}`}
                            className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-[#42F5C3]/10 hover:to-[#4FC3F7]/10 transition-all duration-300"
                          >
                            <p className="text-sm font-medium text-gray-800 hover:text-[#03BDA3]">
                              {relatedPost.title}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Newsletter */}
                  <div className="bg-gradient-to-br from-[#16E7B4] to-[#4FC3F7] rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                    <p className="text-sm opacity-90 mb-4">Get the latest posts delivered to your inbox</p>
                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubscribing || isSubscribed}
                        className="w-full bg-white text-[#03BDA3] py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
                      >
                        {isSubscribing ? "Subscribing..." : isSubscribed ? "Subscribed! ✓" : "Subscribe"}
                      </button>
                    </form>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

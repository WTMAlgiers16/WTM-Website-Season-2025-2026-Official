"use client"

import { useState } from "react"

export function useBlogInteractions(initialLikes: number) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)
  const [isSharing, setIsSharing] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1)
      setIsLiked(false)
    } else {
      setLikes((prev) => prev + 1)
      setIsLiked(true)
    }
  }

  const handleShare = async () => {
    setIsSharing(true)

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        })
      } catch (error) {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard!")
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      await navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }

    setIsSharing(false)
  }

  return {
    likes,
    isLiked,
    isSharing,
    handleLike,
    handleShare,
  }
}

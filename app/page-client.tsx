"use client"

import { useEffect } from "react"
import { initializeAnimations } from "@/utils/animation"

export default function PageClient() {
  useEffect(() => {
    // Navbar scroll effect
    const navbar = document.querySelector(".navbar")
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar?.classList.add("navbar-scrolled")
      } else {
        navbar?.classList.remove("navbar-scrolled")
      }
    }
    window.addEventListener("scroll", handleScroll)

    // Active nav link
    const sections = document.querySelectorAll("section[id]")
    const navLinks = document.querySelectorAll(".nav-link")

    const highlightNavLink = () => {
      const scrollPosition = window.scrollY

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active")
            }
          })
        }
      })
    }

    window.addEventListener("scroll", highlightNavLink)
    highlightNavLink() // Initial check

    // Smooth scrolling for anchor links with increased offset
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          // Get the header height and add additional offset
          const headerHeight =
            Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 64
          const additionalOffset = 32 // 2rem in pixels

          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.scrollY - headerHeight - additionalOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      })
    })

    // Initialize scroll animations
    const cleanupAnimations = initializeAnimations()

    // Project filter functionality
    const filterButtons = document.querySelectorAll(".project-filter-btn")
    const projectItems = document.querySelectorAll(".project-item")

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("bg-white", "dark:bg-slate-600", "shadow-sm"))
        filterButtons.forEach((btn) => btn.classList.add("text-slate-600", "dark:text-slate-300"))

        // Add active class to clicked button
        button.classList.add("bg-white", "dark:bg-slate-600", "shadow-sm")
        button.classList.remove("text-slate-600", "dark:text-slate-300")
        button.classList.add("text-slate-800", "dark:text-white")

        const filter = button.getAttribute("data-filter")

        // Show/hide projects based on filter
        projectItems.forEach((item) => {
          if (filter === "all" || item.getAttribute("data-category") === filter) {
            item.classList.remove("hidden")
            setTimeout(() => {
              item.classList.remove("opacity-0")
              item.classList.add("opacity-100")
            }, 50)
          } else {
            item.classList.remove("opacity-100")
            item.classList.add("opacity-0")
            setTimeout(() => {
              item.classList.add("hidden")
            }, 500) // Match this with the CSS transition time
          }
        })
      })
    })

    // Typing animation for hero text
    const heroText = document.querySelector(".typing-text")
    if (heroText) {
      const text = heroText.textContent || ""
      heroText.textContent = ""

      let i = 0
      const typeWriter = () => {
        if (i < text.length) {
          heroText.textContent += text.charAt(i)
          i++
          setTimeout(typeWriter, 100)
        }
      }

      setTimeout(typeWriter, 500)
    }

    // Parallax effect for hero section
    const parallaxElements = document.querySelectorAll(".parallax")
    const handleParallax = () => {
      const scrollPosition = window.scrollY

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || "0.5"
        const yPos = -(scrollPosition * Number.parseFloat(speed))
        element.setAttribute("style", `transform: translateY(${yPos}px)`)
      })
    }

    window.addEventListener("scroll", handleParallax)

    // Initialize counters
    const counters = document.querySelectorAll(".counter")
    const startCounters = () => {
      counters.forEach((counter) => {
        const target = Number.parseInt(counter.getAttribute("data-target") || "0")
        const duration = 2000 // ms
        const step = target / (duration / 16) // 60fps

        let current = 0
        const updateCounter = () => {
          current += step
          if (current < target) {
            counter.textContent = Math.ceil(current).toString()
            requestAnimationFrame(updateCounter)
          } else {
            counter.textContent = target.toString()
          }
        }

        updateCounter()
      })
    }

    // Start counters when they come into view
    const counterSection = document.querySelector(".counter-section")
    if (counterSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters()
            observer.unobserve(entry.target)
          }
        })
      })

      observer.observe(counterSection)
    }

    // Initialize skill bars
    const skillBars = document.querySelectorAll(".skill-bar")
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.3 },
    )

    skillBars.forEach((bar) => {
      observer2.observe(bar)
    })

    // Initialize progress circles
    const progressCircles = document.querySelectorAll(".progress-circle")
    const observerCircles = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.3 },
    )

    progressCircles.forEach((circle) => {
      observerCircles.observe(circle)
    })

    // Cleanup
    return () => {
      cleanupAnimations()
      window.removeEventListener("scroll", handleParallax)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", highlightNavLink)
      observer2.disconnect()
      observerCircles.disconnect()
    }
  }, [])

  return null
}


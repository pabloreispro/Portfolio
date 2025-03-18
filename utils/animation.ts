export function isElementInViewport(el: Element) {
  const rect = el.getBoundingClientRect()
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0
}

export function animateOnScroll() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll")

  animatedElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("animate-in")
    }
  })
}

export function initializeAnimations() {
  // Initial check for elements already in viewport
  animateOnScroll()

  // Add scroll event listener
  window.addEventListener("scroll", animateOnScroll)

  return () => {
    window.removeEventListener("scroll", animateOnScroll)
  }
}


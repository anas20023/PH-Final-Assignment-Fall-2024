const faqs = document.querySelectorAll(".cursor-pointer");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const answer = faq.querySelector("p");
    const button = faq.querySelector(".toggle-btn");
    const icon = button.querySelector("i");
    const isHidden = answer.classList.contains("hidden");

    // Toggle the FAQ answer visibility
    if (isHidden) {
      answer.classList.remove("hidden");
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    } else {
      answer.classList.add("hidden");
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }
  });
});

// Projects Data
const projects = [
  {
    id: "project1",
    image:
      "https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAaxnUMz54fqU-ZQLMhgknTYB9YfG3QACQxQAAgvNiVaCWOQXYMSoeDYE",
    alt: "Project 1 Cover",
    liveLink: "https://e-co-bazar.vercel.app/#",
    repoLink: "https://github.com/anas20023/E-Commerce-Site",
  },
  {
    id: "project2",
    image:
      "https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAatnUMyVqNg9G7tpBreiLTzjgQc4cgACQhQAAgvNiVaEojyUo8208TYE",
    alt: "Project 2 Cover",
    liveLink: "https://mregistration.vercel.app/",
    repoLink: "https://github.com/anas20023/Registration",
  },
  {
    id: "project3",
    image:
      "https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAapnUMxPDqSidcg_7sDino_h5fSRjwACQRQAAgvNiVZt6i68awJuDjYE",
    alt: "Project 3 Cover",
    liveLink: "https://walletmgr.netlify.app/",
    repoLink: "https://github.com/anas20023/web-camp-final-Assessment-main",
  },
  {
    id: "project4",
    image:
      "https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAalnUMvJye299ZbzyCEof7cH2avJiAACQBQAAgvNiVZmdDhOvv_kwzYE",
    alt: "Project 4 Cover",
    liveLink: "https://iipc.vercel.app/",
    repoLink: "https://github.com/anas20023/IIPC",
  },
  {
    id: "project5",
    image:
      "https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAahnUMsAAUTTjoJIkU8XwTDZ-VNGxmgAAj8UAAILzYlWicQ3yF1bKCI2BA",
    alt: "Project 5 Cover",
    liveLink: "https://boot-camp-assignment-1.vercel.app/",
    repoLink: "https://github.com/anas20023/BootCamp_Assignment_1",
  },
  {
    id: "project6",
    image:
      "https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAadnUMbAo8bSVaJ7eJJj-MNeZmUnhAACPhQAAgvNiVYxqzaiepAJnTYE",
    alt: "Project 6 Cover",
    liveLink: "https://thr1ve.netlify.app/",
    repoLink: "https://github.com/anas20023",
  },
];

const galleryContainer = document.querySelector("#gallery");

projects.forEach((project) => {
  const galleryItem = document.createElement("div");
  galleryItem.className = "gallery-item";
  galleryItem.setAttribute("onclick", `openModal('${project.id}')`);

  galleryItem.innerHTML = `
    <img
      src="${project.image}"
      alt="${project.alt}"
      class="w-full h-full rounded-lg shadow-md cursor-pointer object-cover"
    />
  `;

  galleryContainer.appendChild(galleryItem);
});

function openModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <img src="${project.image}" alt="${project.alt}" class="w-full rounded-lg mb-4" />
    <div class="flex flex-row justify-center items-center gap-3  border-t-2 border-slate-300 pt-2">
      <a href="${project.liveLink}" target="_blank" class="bg-slate-900 text-white rounded-full px-4 py-2">Live Link <i class="fa-solid fa-link"></i></a>
      <a href="${project.repoLink}" target="_blank" class="bg-slate-900 text-white rounded-full px-4 py-2">Repository Link <i class="fa-brands fa-github"></i></a>
    </div>
  `;

  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

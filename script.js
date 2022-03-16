const teachers = [
  {
    name: "Andrew Roubas",
    grade: "9th Dan",
    image: "andrew.png",
  },
  {
    name: "Stefan Roubas",
    grade: "8th Dan",
    image: "andrew.png",
  },
  {
    name: "Paul Dovico",
    grade: "7th Dan",
    image: "andrew.png",
  },
  {
    name: "Jayson Cook",
    grade: "6th Dan",
    image: "andrew.png",
  },
  {
    name: "Martin Unger",
    grade: "4th Dan",
    image: "andrew.png",
  },
  {
    name: "Michael Thomakos",
    grade: "3rd Dan",
    image: "andrew.png",
  },
  {
    name: "Claudio Nieto",
    grade: "3rd Dan",
    image: "andrew.png",
  },
  {
    name: "Jesse Jenkins",
    grade: "2nd Dan",
    image: "teacherPhotos/jesse.jpg",
  },
];

const main = document.querySelector("main h2");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const doc = document.querySelector("html");

const observer = new IntersectionObserver(
  (entries, observer) => {
    if (window.screen.width < 700) return;
    let prop;
    let margin;
    prop = entries[0].isIntersecting ? "2rem" : "1rem";
    header.style.setProperty("--border_height", prop);
    doc.style.scrollPaddingTop = margin;
  },
  { rootMargin: "-20%" }
);

//Note -- int observer breaking and causing page to jitter.
//fix when more content on page

observer.observe(main);

const emailHandler = () => {
  const name = document.querySelector("form #name").value;
  const phone = document.querySelector("form #phone").value;
  const message = document.querySelector("form #message").value;

  const error = document.querySelector("form #error");
  if (
    name.trim().length === 0 ||
    phone.trim().length === 0 ||
    message.trim().length === 0
  )
    return (error.textContent = "Please fill in all fields");
  console.log("there is content");
  error.textContent = "";
  const body = encodeURIComponent(
    `-- Expression of Interest --\n \n Name: ${name} \n \n Message: ${message} \n \n Phone: ${phone}`
  );
  const address = `mailto:info@karatedojo.com.au?subject=Expression of Interest&body=${body}`;
  window.location.href = address;
};

const teacherGrid = document.querySelector("#teacherGrid");

if (window.location.href.includes("about"))
  teachers.forEach((teacher) => {
    const div = document.createElement("div");
    div.classList.add("teacher", "image", "container");

    const img = document.createElement("img");
    img.src = teacher.image;

    const teacherName = document.createElement("p");
    teacherName.classList.add("teacher", "name");
    teacherName.textContent = teacher.name;

    const teacherGrade = document.createElement("p");
    teacherGrade.classList.add("teacher", "grade");
    teacherGrade.textContent = teacher.grade;

    console.log(teacherName, teacherGrade);

    div.append(img);
    div.append(teacherName);
    div.append(teacherGrade);

    teacherGrid.append(div);
  });

const headings = document.querySelectorAll("h3");
headings.forEach((heading) => {
  const topButton = document.createElement("p");
  topButton.classList.add("top", "button");
  const topLink = document.createElement("a");
  topLink.textContent = "Scroll to Top";
  topLink.href = "#top";
  topButton.append(topLink);
  heading.append(topButton);
});
console.log(headings);

let expanded = false;
menuHandler = () => {
  const menuItems = document.querySelectorAll("nav .links a");
  const container = document.querySelector("nav .links");
  menuItems.forEach((item) => {
    item.style.display = !expanded ? "block" : "none";
    window.location.href = "#top";
  });
  // container.style.height = "50vh";
  expanded = !expanded;
};

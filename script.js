const main = document.querySelector("main h2");
const nav = document.querySelector("nav");
const header = document.querySelector("header");

const observer = new IntersectionObserver(
  (entries, observer) => {
    let prop;
    prop = entries[0].isIntersecting ? "2rem" : "1rem";
    header.style.setProperty("--border_height", prop);
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

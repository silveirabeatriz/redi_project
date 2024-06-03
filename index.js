const btnMobile = document.querySelector('.btn-mobile');
const navMenu = document.querySelector('.nav-menu');

btnMobile.addEventListener('click', () => {
  navMenu.classList.toggle('show');
})


const fraudReportForm = document.getElementById("fraud-report-form");
const fraudTypePreview = document.getElementById("fraud-type-preview");
const descriptionPreview = document.getElementById("description-preview");
const datePreview = document.getElementById("date-preview");
const websitePreview = document.getElementById("website-preview");

fraudReportForm.addEventListener("submit", (event) => {
  event.preventDefault();


  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((json) => (user = json))
    .then(() => {
      const reportPreviewTitle = document.getElementById("report-title");
      const agentTitle = document.getElementById("agent-title");
      agentTitle.removeAttribute("hidden");
      reportPreviewTitle.removeAttribute("hidden");
      const fraudType = document.getElementById("fraud-type").value;
      const description = document.getElementById("description").value;
      const date = document.getElementById("date").value;
      const website = document.getElementById("website").value;

      fraudTypePreview.textContent = `Type of fraud:${fraudType}`;
      descriptionPreview.textContent = `Description of the incident: ${description}`;
      datePreview.textContent = `Date and time of the incident: ${date}`;
      websitePreview.textContent = `Website or platform involved: ${website}`;

      fraudTypePreview.innerHTML = `<strong>Type of fraud:</strong> ${fraudType}`;
      descriptionPreview.innerHTML = `<strong>Description of the incident:</strong> ${description}`;
      datePreview.innerHTML = `<strong>Description of the incident:</strong> ${date}`;
      websitePreview.innerHTML = `<strong>Website or platform involved:</strong> ${website}`;


      const agentName = document.getElementById("agent-name");
      const agentEmail = document.getElementById("agent-email");
      const agentPicture = document.getElementById("agent-picture");
      agentName.innerText = `${user.results[0].name.first} ${user.results[0].name.last}`;
      agentEmail.innerText = user.results[0].email;
      agentPicture.src = user.results[0].picture.medium;

      alert("Report submitted successfully");

      
      fraudReportForm.reset();
    });
});

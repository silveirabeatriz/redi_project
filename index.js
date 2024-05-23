const fraudReportForm = document.getElementById('fraud-report-form');
const fraudTypePreview = document.getElementById('fraud-type-preview');
const descriptionPreview = document.getElementById('description-preview');
const datePreview = document.getElementById('date-preview');
const websitePreview = document.getElementById('website-preview');


fraudReportForm.addEventListener('submit', (event) => {
	event.preventDefault();


// const reportPreview = document.createElement("h2");
// reportPreview.innerText = "Report Preview";

// const reportContainer = document.getElementById("report-preview");
// reportContainer.appendChild(reportPreview);

  
let user;
let isSubmitted = false;
  fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => user=json)
      .then(()=>{

        const reportPreviewTitle = document.getElementById("report-title");
        reportPreviewTitle.removeAttribute("hidden");

        const fraudType = document.getElementById('fraud-type').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const website = document.getElementById('website').value;

        fraudTypePreview.textContent = `Type of fraud: ${fraudType}`;
        descriptionPreview.textContent = `Description of the incident: ${description}`;
        datePreview.textContent = `Date and time of the incident: ${date}`;
        websitePreview.textContent = `Website or platform involved: ${website}`;


        const agent = document.getElementById("agent");
        const agentField = document.createElement("div");
        agentField.innerText = `${user.results[0].name.first} ${user.results[0].name.last}`;

        const email = document.createElement("div");
        email.innerText = user.results[0].email;

        const picture = document.createElement("img");
        picture.src = user.results[0].picture.medium;
        agent.appendChild(agentField);
        agent.appendChild(email);
        agent.appendChild(picture);

        alert('Report submitted successfully');
    
        fraudReportForm.reset();
  
      })

  
});
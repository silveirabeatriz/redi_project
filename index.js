const fraudReportForm = document.getElementById('fraud-report-form');
const fraudTypePreview = document.getElementById('fraud-type-preview');
const descriptionPreview = document.getElementById('description-preview');
const datePreview = document.getElementById('date-preview');
const websitePreview = document.getElementById('website-preview');
const detailsPreview = document.getElementById('details-preview');

fraudReportForm.addEventListener('submit', (event) => {
	event.preventDefault();

  const fraudType = document.getElementById('fraud-type').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const website = document.getElementById('website').value;
  const details = document.getElementById('details').value;

  fraudTypePreview.textContent = `Type of fraud: ${fraudType}`;
  descriptionPreview.textContent = `Description of the incident: ${description}`;
  datePreview.textContent = `Date and time of the incident: ${date}`;
  websitePreview.textContent = `Website or platform involved: ${website}`;
  detailsPreview.textContent = `Additional details or evidence: ${details}`;

  alert('Report submitted successfully');
});
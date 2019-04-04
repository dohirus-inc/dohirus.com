let onMailFormSubmit = () => {

  const nameElem = document.getElementById('name');
  const emailElem = document.getElementById('email');
  const subjectElem = document.getElementById('subject');
  const msgElem = document.getElementById('comments');

  let validated = true;
  [nameElem, emailElem, subjectElem, msgElem].forEach(elem => {
    if (!elem.value) {
      elem.setAttribute('style', 'border-color: #ef5350');
      validated = false;
    }
  });

  if (!validated) {
    return;
  }

  const name = nameElem.value;
  const email = emailElem.value;
  const subject = subjectElem.value;
  const msg = msgElem.value;

  fetch('https://dohirus-mail-service.herokuapp.com/mail', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name, email, subject, msg
    })
  });
};
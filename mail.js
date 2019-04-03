let onMailFormSubmit = () => {
  const name = contactform.name.value;
  const email = contactform.email.value;
  const subject = contactform.subject.value;
  const msg = contactform.comments.value;

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
let onMailFormSubmit = () => {
  const name = contactform.name.value;
  const email = contactform.email.value;
  const subject = contactform.subject.value;
  const msg = contactform.comments.value;

  fetch('http://localhost:1234/mail', {
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
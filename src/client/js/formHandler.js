function handleSubmit(event) {
    event.preventDefault()

    console.log("::: Form Submitted :::")
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText)) { // if it's valid url
      document.getElementById('results').innerHTML = 'Loading results from MeaningCloud...'
      fetch('http://localhost:8081/test', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: formText
          })
      })
      .then(res => res.json())
      .then(function(res) {
          document.getElementById('results').innerHTML =
          `
  Model: ${res.model.toLowerCase().toLowerCase()}
  Agreement: ${res.agreement.toLowerCase()}
  Subjectivity: ${res.subjectivity.toLowerCase()}
  Confidence : ${res.confidence.toLowerCase()}
  Irony : ${res.irony.toLowerCase()}
          `
      })
    }
    else {
      alert('Input is not valid URL. Try again')
    }
}

export { handleSubmit }

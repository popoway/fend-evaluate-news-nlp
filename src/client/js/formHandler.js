import * as Client from "./nameChecker"

function handleSubmit(event) {
    event.preventDefault()
    console.log("::: Form Submitted :::")
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText)) { // if it's valid url
      handleFetch(formText)
      return true
    }
    else {
      alert('Input is not valid URL. Try again')
      return false
    }
}

// Fetch response from API
function handleFetch(url) {
  document.getElementById('loading').innerHTML = 'Loading results from MeaningCloud...'
  fetch('http://localhost:8081/test', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url
      })
  })
  .then(res => res.json())
  .then(function(res) {
    parseResult(res)
  })
  return true
}

// Parse the response body to dynamically fill content on the page
function parseResult(res) {
  document.getElementById('loading').innerHTML = ''
  document.getElementById('model').innerHTML = `Model: ${res.model.toLowerCase()}`
  document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement.toLowerCase()}`
  document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity.toLowerCase()}`
  document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence.toLowerCase()}`
  document.getElementById('irony').innerHTML = `Irony: ${res.irony.toLowerCase()}`
  return JSON.stringify(res)
}

export { handleSubmit }

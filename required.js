function alertContents() {
    try {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
    catch( e ) {
      alert('Caught Exception: ' + e.description);
    }
  }
  
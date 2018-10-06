function doSubmit(ev){
    ev.preventDefault();
    console.log('submitting something!');
    var preSignedUrl = 'http://some-useful-signed-url';
    var inputEl = document.querySelector("input[type=file]");
    debugger;
    // var request = new XMLHttpRequest();
    // request.open("PUT", "submitform.php");
    // request.send(new FormData(formElement));

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', preSignedUrl, true);
    var givenFile = inputEl.files[0];
    console.log(givenFile.type);
    xhr.setRequestHeader('Content-Type', givenFile.type);
    xhr.onload = () => {
      if (xhr.status === 200) {
        // success!
      }
    };
    xhr.onerror = () => {
        console.log("Error", xhr.statusText);  

      // error...
    };
    xhr.send(givenFile); // `file` is a File object here 
    return false;
}

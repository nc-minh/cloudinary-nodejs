function upload() {
    var file = document.getElementById('file')
    var _file = file.files[0]
    console.log(file.value)
    console.log(_file)
    let formData = new FormData()
    formData.append('file', _file)

    console.log(formData)
    var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

    fetch("/upload", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
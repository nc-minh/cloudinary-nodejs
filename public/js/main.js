function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}

function upload() {
    var file = document.getElementById('file')
    var _file = file.files[0]

    getBase64(_file).then(data => {

        fetch('/api/upload-video', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data
            })
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
    })

}
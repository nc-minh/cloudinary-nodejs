function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}

function upload() {
    var file = document.getElementById('file-upload')
    var _file = file.files[0]

    getBase64(_file).then(data => {

        fetch('/api/upload', {
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

function uploadVideo() {
    var file = document.getElementById('file-upload-video')
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

function deleteImage(){
    var id = document.getElementById('text-delete').value

    fetch('/api/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": id
            }),
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
}

function deleteVideo(){
    var id = document.getElementById('text-delete-video').value

    fetch('/api/delete-video', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": id
            }),
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
}
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
    const notifyUpload = document.getElementById('notify-upload')
    const linkUpload = document.getElementById('link-upload')
    var _file = file.files[0]

    notifyUpload.innerText = ''
    linkUpload.style.display = 'none'

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
            .then(result => {
                console.log(result)
                if (result.message === 'succes') {
                    notifyUpload.innerText = result.public_id
                    linkUpload.setAttribute('href', result.url)
                    linkUpload.style.display = 'block'
                } else {
                    notifyUpload.innerText = result.message
                    linkUpload.style.display = 'none'
                }
            })
            .catch(error => console.log('error', error))
    })

}

function uploadVideo() {
    var file = document.getElementById('file-upload-video')
    const notifyUploadVideo = document.getElementById('notify-upload-video')
    const linkUploadVideo = document.getElementById('link-upload-video')
    var _file = file.files[0]

    notifyUploadVideo.innerText = ''
                    linkUploadVideo.style.display = 'none'

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
            .then(result => {
                console.log(result)
                if (result.message === 'succes') {
                    notifyUploadVideo.innerText = result.public_id
                    linkUploadVideo.setAttribute('href', result.url)
                    linkUploadVideo.style.display = 'block'
                } else {
                    notifyUploadVideo.innerText = result.message
                    linkUploadVideo.style.display = 'none'
                }
            })
            .catch(error => console.log('error', error))
    })

}

function deleteImage() {
    var id = document.getElementById('text-delete').value
    const notifyDelete = document.getElementById('notify-delete')

    notifyDelete.innerText = ''
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
        .then(result => {
            console.log(result)
            if (result.message === 'succes') {
                notifyDelete.innerText = result.data.result
            } else if (result.status === 'failure') {
                notifyDelete.innerText = result.message
            } else {
                notifyDelete.innerText = result.error.message
            }
        })
        .catch(error => console.log('error', error))
}

function deleteVideo() {
    var id = document.getElementById('text-delete-video').value
    const notifyDeleteVideo = document.getElementById('notify-delete-video')

    notifyDeleteVideo.innerText = ''

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
        .then(result => {
            console.log(result)
            if (result.message === 'succes') {
                notifyDeleteVideo.innerText = result.data.result
            } else if (result.status === 'failure') {
                notifyDeleteVideo.innerText = result.message
            } else {
                notifyDeleteVideo.innerText = result.error.message
            }
        })
        .catch(error => console.log('error', error))
}
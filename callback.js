const userLogin = (email, password, onSuccess, onError) => {
    const error = true
    if (error) {
        onError(new Error('error getUser'))
        return
    }
    setTimeout(() => {
        console.log('user logged in')
        onSuccess({ id: 10, name: 'carlos santana', email })
    }, 2000);
}

const getUserVideos = (idUser, onSuccess, onError) => {
    setTimeout(() => {
        console.log('getUserVideos')
        onSuccess(['video 1', 'video 2', 'video 3'])
    }, 3000);
}

const getVideosDetail = (idVideo, onSuccess, onError) => {
    setTimeout(() => {
        console.log('getVideosDetail')
        onSuccess({ idVideo, detail: 'xxxxxxxxxxxxxx' })
    }, 1500);
}



// callback hell
userLogin('carlos@gmail.com', '123456', (user) => {
    console.log('user', user)

    getUserVideos(user.id, (videos) => {
        console.log('videos', videos)

        getVideosDetail(videos[0], (detail) => {
            console.log('details', detail)

        }, (error) => console.log(error))

    }, (error) => console.log(error))

}, (errorMessage) => console.log(errorMessage))




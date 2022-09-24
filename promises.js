const userLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = true
        if (error) {
            reject(new Error('error getUser'))
        }
        setTimeout(() => {
            console.log('user logged in')
            resolve({ id: 10, name: 'carlos santana', email })
        }, 2000);
    })
}

const getUserVideos = (idUser) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getUserVideos')
            resolve(['video 1', 'video 2', 'video 3'])
        }, 3000);
    })
}

const getVideosDetail = (idVideo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getVideosDetail')
            resolve({ idVideo, detail: 'xxxxxxxxxxxxxx' })
        }, 1500);
    })
}



userLogin('carlos@gmail.com', '123456')
.then( (user)=> {
    console.log('user', user)
    return getUserVideos(user.id)  // return new promise
})
.then( (videos)=> {
    console.log('videos', videos)
    return getVideosDetail(videos[0]) // return new promise
})
.then( (detail)=> console.log('details', detail))
.catch(error => console.log(error))






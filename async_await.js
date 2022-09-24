const userLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false
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


(async function init() {
    try {
        const user = await userLogin('carlos@gmail.com', '123456')
        const videos = await getUserVideos(user.id)
        const details = await getVideosDetail(videos[0])

        console.log('user', user)
        console.log('videos', videos)
        console.log('details', details)
    } catch (error) {
        console.log(error)
    }
})()







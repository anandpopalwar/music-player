let song = document.getElementById('song')

let main_btn = document.getElementById('main_btn')

let progress = document.getElementById('progress')

let songCurrentTime = document.getElementById('songCurrentTime')

let songMaxTime = document.getElementById('songMaxTime') 


main_btn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-circle-fill btn" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>`


songCurrentTime.innerHTML = Math.floor(song.currentTime)

songMaxTime.innerHTML = Math.floor(song.duration)

let PlayingValue = true

 


if (song.play()) {
    setInterval(() => {

        progress.value = Math.floor(song.currentTime);

        songCurrentTime.innerHTML = Math.floor (song.currentTime)

        songMaxTime.innerHTML = Math.floor(song.duration)

    }, 500)
}

main_btn.addEventListener('click', run)

 function run() {

    if (PlayingValue) {
        song.play()
        PlayingValue = false
        main_btn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
        <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
        </svg> `
    } else {
        song.pause()
        PlayingValue = true
        main_btn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-circle-fill btn" viewBox="0 0 16 16">
   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
 </svg>`

    }
}

progress.onchange = () => {
    song.play()
    // PlayingValue=false
    song.currentTime = progress.value
    main_btn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
    <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
    </svg> `
}

 function minusTen(){
    song.currentTime = song.currentTime - 10
    song.play()

 }
 function plusTen(){
    song.currentTime = song.currentTime + 10
    song.play()

 }
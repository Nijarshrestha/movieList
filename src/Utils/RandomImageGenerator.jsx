export const randomMovieImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rABBx-tOhUKiHkplCzw47uqe4AUtlQU-aw&usqp=CAU',
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/068DC075BDB49E11BD8C2CA9D28346CD81D8A8E961677019167B1D27D9648948/scale?width=1200&aspectRatio=1.78&format=jpeg',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmZeSLF4JwxKWBLo9xnzo_sBRHOjXw7ya_g&usqp=CAU",
    'https://livijumpa2.files.wordpress.com/2013/12/impossible.jpg',
    'https://dcassetcdn.com/design_img/16298/35582/35582_406182_16298_image.jpg',
    'https://images.template.net/wp-content/uploads/2016/10/24110602/Korean-Thriller-Movie-Poster.jpg',
    'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/forbidden-planet-in-cinemascope-retro-classic-movie-poster-landscape-r-muirhead-art.jpg',
]


export const randomDirectorImages=[
    'https://m.media-amazon.com/images/M/MV5BMTcyNDA4Nzk3N15BMl5BanBnXkFtZTcwNDYzMjMxMw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHomLCkmfaGF3NrR0Ey6UQduN5JXzbkPIug&usqp=CAU',
    'https://img.discogs.com/9X6waA3ffzgvrvL_Rv4OeaxkzwA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-694549-1595971813-6695.jpeg.jpg'
]

export function randomImageGenerator(array, number){
    return array[Math.floor(Math.random() *number)]
}
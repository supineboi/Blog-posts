function getData(page){
    const api = fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6&_page=${page}`)
    api.then( (response) => response.json())
    .then( (data) => {
        data.map( (blog) => {
                $('.blog-posts-container').append(
                    `<div class="card local-card">
                        <div class="card-body">
                            <h5 class="card-title local-card-title">${blog.title}</h5>
                            <p class="card-text local-card-text">${blog.body}</p>
                            </div>
                            <div class="card-footer local-card-footer text-center">Blog no : ${blog.id}</div>
                            </div>`
                )
            });
        loaderHide();
    })
    
}

function loaderShow(){
    let loadStart = 0;
    $('.loader').show();
    $('.loading').show();
    setInterval( () => {
        $('.loader').css('--rotator',loadStart + 'deg')
        loadStart++;

        if(loadStart > 360)
        loadStart = 0;

        console.log(loadStart);
    },0)
}

function loaderHide(){
    $('.loader').hide();
    $('.loading').hide();
}

let page = 1;
getData(page);

$(document).scroll( () => {
        let scrollBarHeight = document.documentElement.scrollHeight;
        let viewportHeight = window.innerHeight;
        let topScrollHeight = document.documentElement.scrollTop;
        console.log(viewportHeight + topScrollHeight);

        if(viewportHeight + topScrollHeight >= scrollBarHeight  && page<17){
            loaderShow();
            page++;
            getData(page);
        }
})
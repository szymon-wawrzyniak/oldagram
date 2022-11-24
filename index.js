const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function addLike(number){
    console.log("XXXXXXXXXXXXXXXXXXXX")
    posts[number].likes +=1
    renderPosts()
}

function renderPosts(){
    let mainEl = document.getElementById("main_el")
    let html = ""

    for (let i=0; i<posts.length; i++){
        html += `
        <article class ="post">
            <div class="post-header">
                <img class="img-avatar" src="${posts[i].avatar}">
                <div>
                    <div class="post-name">
                        ${posts[i].name}
                    </div>
                    <div>
                        ${posts[i].location}    
                    </div>
                </div>
            </div>

            <div class="post-img">
                <img class="img-main" id="imgEl${i}" src="${posts[i].post}" ondblclick="addLike(${i})">
            </div>
            
            <div class="post-footer">
                <div>
                    <img class="icon" src="images/icon-heart.png">
                    <img class="icon" src="images/icon-comment.png">
                    <img class="icon" src="images/icon-dm.png">
                </div>
                
                <div class="text-black likes">
                    ${posts[i].likes} likes
                </div>

                <span class="text-black">${posts[i].username}</span> ${posts[i].comment}             
            </div>
        </article>
        `
    }

    mainEl.innerHTML = html
    console.log(html)
}

renderPosts()
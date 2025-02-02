const loadData = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data = await res.json();
    const posts = data.posts;
    displayData(posts);
}

const displayData = (posts) => {
    const discussCard = document.getElementById('discussCard');
    for(const post of posts){
        // console.log(post);
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
        <div class="bg-[#797DFC1A] border rounded-xl gap-6 p-10 flex-1 mb-6">
          <div class="flex justify-between gap-9">
          <div>
            <div class="w-[72px] rounded-lg border"><img src=${post.image} alt=""></div>
          </div>
          <div class="space-y-6 flex-1">
            <div class="flex gap-5">
              <h4># ${post.category}</h4>
              <h5>Author: ${post.author.name}</h5>
            </div>
            <h1 class="text-xl font-bold useColor">${post.title}</h1>
            <p class="text-[#12132D99] text-base">${post.description}</p>
            <hr class="border-dashed border border-[#12132D40] mb-6">
            <div class="flex justify-between">
              <div class="flex gap-6">
                <div class="flex gap-3">
                  <img class="w-[28px]" src="images/cardSection/comment.png" alt="comment">
                  <p class="text-[#12132D99] interFont text-base">${post.comment_count}</p>
                </div>
                <div class="flex gap-3">
                  <img class="w-[28px]" src="images/cardSection/show.png" alt="show">
                  <p class="text-[#12132D99] interFont text-base">${post.view_count}</p>
                </div>
                <div class="flex gap-3">
                  <img class="w-[28px]" src="images/cardSection/history.png" alt="history">
                  <p class="text-[#12132D99] interFont text-base">${post.posted_time} min</p>
                </div>
              </div>
              <!-- button -->
              <div>
                <img onclick="detailShow()" class="w-[28px] cursor-pointer" src="images/email.png" alt="mailBox">
              </div>
            </div>
          </div>
          
          </div>
        </div>
        `

        discussCard.appendChild(cardDiv);


        
    }
};

// Latest Api Fetch

const latestData = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    const data = await res.json();
    latestDataDisplay(data);
}

const latestDataDisplay = (latests) => {
    const latestCard = document.getElementById('latestCard');
    for(const latest of latests) {
        console.log(latest);
        const latestDiv = document.createElement('latestCard');
        latestDiv.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-xl border">
            <figure class="px-10 pt-10">
              <img src=${latest.cover_image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body">
              <h6>${latest.author.posted_date}</h6>
              <h2 class="card-title font-extrabold">${latest.title}</h2>
              <p class="text-[#12132D99]">${latest.description}</p>
              <div class="flex gap-3">
                <img class="w-[50px] rounded-full" src=${latest.profile_image} alt="">
                <div>
                  <h4 class="useColor">${latest.author.name}</h4>
                  <p class="text-[#12132D99]">${latest.author.designation}</p>
                </div>
              </div>
            </div>
        </div>
        `

        latestCard.appendChild(latestDiv);
    }
}











latestData()
loadData();
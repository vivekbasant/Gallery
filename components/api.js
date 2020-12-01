export async function getPostsData(){
    const res = await fetch('https://www.reddit.com/r/memes.json?limit=1000');
    const body = await res.json();
    let photos = [];
    for(let i=0;i<body.data.children.length;i++)
    {
        if(body.data.children[i].data.post_hint==='image')
        {
            let photo = {
                thumbnail : body.data.children[i].data.thumbnail,
                src : body.data.children[i].data.url,
                w : 1200,
                h : 900,
                title : body.data.children[i].data.title,
            }
            photos.push(photo);
        }
    }
    return photos;
}
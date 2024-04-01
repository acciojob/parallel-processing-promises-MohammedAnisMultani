//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click", ()=>{


   function displayImages(url){
    let img = new Image()
    return new Promise((resolve, reject)=>{
        img.onload = (()=>{resolve(img)})
        img.onerror = (()=>{reject(new error(`Failed to load image's URL: ${url}`))})
        img.src = url;
    })
   }

   let p1 = displayImages(images[0].url)
   let p2 = displayImages(images[1].url)
   let p3 = displayImages(images[2].url)
   let promiseArray = Promise.all([p1,p2,p3])

   promiseArray.then((img)=>{
    for(let i=0; i<img.length; i++){
        output.append(img[i])
    }
   })
   .catch((err)=>{console.log(err)})
})
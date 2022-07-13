// singleArr.links.html singleArr.alt_description singleArr.created_at

const apiFetch = {
    // imgDetails : '',
    async fetching(){
        const res = await fetch('https://api.unsplash.com/photos/?client_id=6qwpp3-crCKyGmJgRLVxMXBO-ZKTlHI99wiwo3FSHxU');
        const allImg = await res.json();
        // console.log(allImg);
        // const{}
        return allImg;
    } 
}


// apiFetch.fetching()

// console.log(apiFetch.imgDetails);


const uiInit = {
    loadSelectors(){
        const gallery = document.querySelector('.gallery');
        const singlePicture = document.querySelector('.singlePicture');
        const galleryBox = document.querySelector('.galleryBox');
        const galleryImage = document.querySelector('.galleryBox .galleryImage');
        const galleryTitle = document.querySelector('.galleryTitle');
        const galleryDescription = document.querySelector('.galleryDescription');

        return{
            gallery,
            singlePicture,
            galleryBox,
            galleryImage,
            galleryTitle,
            galleryDescription
        }
    },
    async handleContent(){ 
        const {gallery, galleryBox, galleryImage} = this.loadSelectors();
        // console.log(galleryImage);
        const allImg = await apiFetch.fetching()

        
      

        allImg.map(elm => {
            const imgUrl = elm.urls.regular;

        //     galleryBox.innerHTML = `<div class="galleryImage">
                
        //     <img src=${imgUrl} alt="image">
            
        //   </div>`

            // gallery.insertAdjacentHTML('afterbegin', imgElm)

            // console.log(galleryBox);
            // imgArr.push(imgUrl)
            // this.handleContent(imgUrl)
            let galBoxDiv = document.createElement('div');
            let galImgDiv = document.createElement('div');
            let titleDiv = document.createElement('div');
            let desDiv = document.createElement('div');
            desDiv.classList.add('galleryDescription');
            titleDiv.classList.add('galleryTitle')
            galImgDiv.innerHTML = `
                <img src="${imgUrl}">
            `
            titleDiv.innerHTML = `
                <h3>This is title</h3>
            `
            desDiv.innerHTML = `
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsa tenetur doloremque aspernatur animi dicta praesentium eaque incidunt saepe officiis soluta iusto illum quidem eum velit beatae, labore eius blanditiis.</p>
            `
            galBoxDiv.appendChild(galImgDiv)
            galBoxDiv.appendChild(titleDiv)
            galBoxDiv.appendChild(desDiv)
            galBoxDiv.classList.add('galleryBox');
            galImgDiv.classList.add('galleryImage');
            

            gallery.appendChild(galBoxDiv)
    
            console.log(galBoxDiv);

            
        });
    },
    showInUi(){
       
           
        
    },
    initialize(){
        window.addEventListener('DOMContentLoaded', async e=> {
            // let imgArr = []
            
            // this.showInUi()
            
            this.handleContent()
            
            // console.log(imgArr);
        })
    }
}



uiInit.initialize();
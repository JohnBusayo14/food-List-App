const title = document.getElementById("title");
const desc = document.getElementById("desc");
const back = document.getElementById("back");

const foods= [
    eba={
        picture : "eba.jpg",
        title  : 'Eba',
        desc : 'eba is good for the body'
    },
    fufu={
        picture : "fufu.jpg",
        title  : 'fufu',
        desc : 'fufu is good for the body'
    },
    amala={
        picture : "amala.jpg",
        title  : 'amala',
        desc : 'amala is good for the body'
    },
    // eba={
    //     picture : "eba.jpg",
    //     title  : 'Eba',
    //     desc : 'eba is good for the body'
    // },
    // fufu={
    //     picture : "fufu.jpg",
    //     title  : 'fufu',
    //     desc : 'fufu is good for the body'
    // },
    // amala={
    //     picture : "amala.jpg",
    //     title  : 'amala',
    //     desc : 'amala is good for the body'
    // }
]

foods.map(item => {
 const div = document.createElement('div');
 const p = document.createElement('p');
 const h2 = document.createElement('h2');
 const img = document.createElement("img")
console.log(item.title);
console.log(item.desc);


img.src = 'n.jpg'
p.innerHTML = "Title"
h2.innerHTML = 'Desc'


//  div style
div.style.backgroundColor = 'yellow'
div.style.height = "50%"
div.style.width = '100%'
div.style.margin = '10px '
div.style.alignItems = 'center'
div.style.justifyContent = 'center'
div.style.display = 'flex'
div.style.flex = '1 0 60px'
div.style.flexDirection = 'column'

// image style
img.style.height = '50%'
img.style.width = '50%'

// p style
p.style.fontSize = '5px'

// h2 style
h2.style.fontSize = '3px'



// Assign html element to their content from array

p.innerHTML = item.title
h2.innerHTML = item.desc
img.src = item.picture

//append div(card) to the section(back)
back.appendChild(div)

//append p,h2 and img to the div(card)
div.appendChild(img)
div.appendChild(p)
div.appendChild(h2)

})

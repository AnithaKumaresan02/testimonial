let testimonial_data = [
    {
        name: "Sparrow",
        image: "images.jpg",
        text_content: "Sparrows have beautiful voices and their chirping and singing can be heard all over",
    },
    {
        name: "Love Birds",
        image: "bird 2.jpg",
        text_content: "Lovebirds are small parrots with rounded heads, large beaks, and short tails",
    },
    {
        name: "Humming Bird",
        image: "bird 3.jpg",
        text_content: "A hummingbird can flap its wings up to 80 times a second, or as many as 200 times in a dive",
    },
];

let data = 0;
let name = document.querySelector(".container_name");
let image = document.querySelector(".container_image");
let text_content = document.querySelector(".container_content");

function testimonial() {
    let current = testimonial_data[data];
    name.innerHTML = current.name;
    image.src = current.image;
    text_content.innerHTML = current.text_content;
    data++;

    if (data === testimonial_data.length) {
        data = 0;
    }
}

setInterval(() => {
    testimonial();
}, 1000);

testimonial();

// Popular movies -------------------------------------------
const slides = document.querySelectorAll(".movie_1");
slides.forEach((s, i) => (s.style.transform = `translateX(${110 * i}%)`));
const btn_left_p = document.querySelector(".popular_left");
const btn_right_p = document.querySelector(".popular_right");
let currentSlide = 0;

btn_right_p.addEventListener('click', function () {
    if (currentSlide === (slides.length - 5)) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    slides.forEach((s, i) => (s.style.transform = `translateX(${110 * (i - currentSlide)}%)`));
})

btn_left_p.addEventListener('click', function () {


    if (currentSlide === 0) {
        currentSlide = slides.length - 5;
    } else {
        currentSlide--;

    }
    slides.forEach((s, i) => (s.style.transform = `translateX(${110 * (i - currentSlide)}%)`));

})

// Kids movies -------------------------------------------

const slides_k = document.querySelectorAll(".movie_2");
slides_k.forEach((s, i) => (s.style.transform = `translateX(${110 * i}%)`));
const btn_left_k = document.querySelector(".kids_left");
const btn_right_k = document.querySelector(".kids_right");

let currentSlide_k = 0;

btn_right_k.addEventListener('click', function () {
    if (currentSlide === (slides_k.length - 5)) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    slides_k.forEach((s, i) => (s.style.transform = `translateX(${110 * (i - currentSlide)}%)`));
})

btn_left_k.addEventListener('click', function () {


    if (currentSlide === 0) {
        currentSlide = slides_k.length - 5;
    } else {
        currentSlide--;

    }
    slides_k.forEach((s, i) => (s.style.transform = `translateX(${110 * (i - currentSlide)}%)`));

})

const movie_img = document.querySelector('.movie_discription_box_content_img');
const movie_topic = document.querySelector('.movie_discription_box_content_1');
const year_time = document.querySelector('.movie_discription_box_content_2');
const movie_cont = document.querySelector('.movie_discription_box_content_3');
const movie_director = document.querySelector('.director_name');
const movie_writer = document.querySelector('.writer_name');
const movie_actors = document.querySelector('.actors_name');
const trailer_link = document.querySelector('.movie_discription_box_content_5')
//common

function commom() {
    document.getElementById('box_hidden').classList.add("box_view");
    document.querySelector('.movies').style.filter = "blur(7px)";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
}

// Close the movie content box
function close_box() {
    document.getElementById('box_hidden').classList.remove("box_view");
    document.querySelector('.movies').style.filter = "none";
    document.body.style.overflow = "visible";
}

// Open the bullet train movie content box
function open_bullet_train_box() {
    movie_img.src = "images_student_2/popular_movies/bullet_train.jpeg";
    movie_topic.innerHTML = "Bullet Train";
    year_time.innerHTML = "2022 | 2h 7m";
    movie_director.innerHTML = "David Leitch";
    movie_writer.innerHTML = "Zark Olkewics";
    movie_actors.innerHTML = "Bard Pitt, Aaron Taylor, Jeoy King";
    trailer_link.href = "https://www.youtube.com/watch?v=0IOsk2Vlc4o";

    commom();
}
function open_365days_box() {
    movie_img.src = "images_student_2/popular_movies/365days.jpeg";
    movie_topic.innerHTML = "365 Days";
    year_time.innerHTML = "2020 | 1h 54m";
    movie_director.innerHTML = "Barbara Boialowas, Tomasz Mandes";
    movie_writer.innerHTML = "Tomasz Klimala, Barbara Boialowas ";
    movie_actors.innerHTML = "Anne-Maria, Michele Morrone";
    trailer_link.href = "https://www.youtube.com/watch?v=pyM3z73oMAk";

    commom();
}
function open_topgun_box() {
    movie_img.src = "images_student_2/popular_movies/topgun.jpeg";
    movie_topic.innerHTML = "Top Gun";
    year_time.innerHTML = "2022 | 2h 10m";
    movie_director.innerHTML = "Joshep Kosinski";
    movie_writer.innerHTML = "Jim Cash, Jack Epps Jr, Peter Criag";
    movie_actors.innerHTML = "Tom Cruise, Jennifer Connelly, Miles Teller";
    trailer_link.href = "https://www.youtube.com/watch?v=giXco2jaZ_4";

    commom();
}

function open_smile_box() {
    movie_img.src = "images_student_2/popular_movies//smile.avif";
    movie_topic.innerHTML = "Smile";
    year_time.innerHTML = "2022 | 1h 55m";
    movie_director.innerHTML = "Parker Finn";
    movie_writer.innerHTML = "Parker Finn";
    movie_actors.innerHTML = " Sosie Bacon, Jessie T,Trevor.Ushar, Kyle Gallner ";
    trailer_link.href = "https://www.youtube.com/watch?v=BcDK7lkzzsU";

    commom();
}

function open_mario_box() {
    movie_img.src = "images_student_2/popular_movies/super_mario.jpeg";
    movie_topic.innerHTML = "Smile";
    year_time.innerHTML = "2023 | 1h 32m";
    movie_director.innerHTML = "Aaron Horvath and Michael Jelenic";
    movie_writer.innerHTML = "Matthew Fogel";
    movie_actors.innerHTML = "Anya Taylor-Joy,Charlie Day, Jack Black";
    trailer_link.href = "https://www.youtube.com/watch?v=TnGl01FkMMo";

    commom();
}

function open_pathaan_box() {
    movie_img.src = "images_student_2/popular_movies/pathaan.jpeg";
    movie_topic.innerHTML = "Pathaan";
    year_time.innerHTML = "2023 | 2h 26m";
    movie_director.innerHTML = " Siddharth Anand";
    movie_writer.innerHTML = "Shridhar Raghavan and Abbas Tyrewala";
    movie_actors.innerHTML = "Aditya Chopra, Shah Rukh Khan, Deepika Padukone";
    trailer_link.href = "https://www.youtube.com/watch?v=vqu4z34wENw";

    commom();
}

function open_fastx_box() {
    movie_img.src = "images_student_2/popular_movies/fastx.jpeg";
    movie_topic.innerHTML = "Fast X";
    year_time.innerHTML = "2023 | 2h 21m";
    movie_director.innerHTML = "Louis Leterrier ";
    movie_writer.innerHTML = "Dan Mazeau and Justin Lin,";
    movie_actors.innerHTML = "Diesel, Walker, Rodriguez, Brewster, Gibson, Ludacris";
    trailer_link.href = "https://www.youtube.com/watch?v=32RAq6JzY-w";

    commom();
}

function open_jurasicworld_box() {
    movie_img.src = "images_student_2/popular_movies/jurasic.jpeg";
    movie_topic.innerHTML = "Jurassic World Dominion";
    year_time.innerHTML = "2022 | 2h 27m";
    movie_director.innerHTML = " Colin Trevorrow,";
    movie_writer.innerHTML = " Derek Connolly and Trevorrow";
    movie_actors.innerHTML = "Chris Pratt,Bryce Dallas Howard";
    trailer_link.href = "https://www.youtube.com/watch?v=fb5ELWi-ekk";

    commom();
}

function open_hypnotic_box() {
    movie_img.src = "images_student_2/popular_movies/hypnotic.jpeg";
    movie_topic.innerHTML = "Hypnotic";
    year_time.innerHTML = "2023 | 1h 23m";
    movie_director.innerHTML = " Robert Rodriguez";
    movie_writer.innerHTML = " Max Borenstein";
    movie_actors.innerHTML = "Ben Affleck, Alice Braga, JD Pardo";
    trailer_link.href = "https://www.youtube.com/watch?v=eHsWYmnXk1o";

    commom();
}

function open_beast_box() {
    movie_img.src = "images_student_2/popular_movies/beast.jpeg";
    movie_topic.innerHTML = "Beast";
    year_time.innerHTML = "2022 | 2h 35m";
    movie_director.innerHTML = " Nelson";
    movie_writer.innerHTML = "Nelson";
    movie_actors.innerHTML = "Vijay, Pooja Hegde and Selvaraghavan.";
    trailer_link.href = "https://www.youtube.com/watch?v=eHsWYmnXk1o";

    commom();
}





// Film Benefits section functions
//_____________________________________________

const color_change = document.querySelector('.benefits');
const benefit_img = document.querySelector('.benefit_img');
const benefit_topic = document.querySelector('.benefit_content_1');
const benefit_content = document.querySelector('.benefit_content_2');

function stress_btn() {
    benefit_img.src = "images_student_2/film_benefits/stress.png";
    color_change.style.backgroundColor = "#237ec3";
    benefit_topic.innerHTML = "lEnjoyment and stress reduction";
    benefit_topic.style.color = "#237ec3";
    benefit_content.innerHTML = "Many people find watching movies both entertaining and a way to reduce stress. Watching movies can make us forget our problems is an alternative to anxiety loss. As previously said, watching movies can have a positive emotional impact. Movies can calm us down and soothe us. We reduce the stress within us by lowering worry, and even watching a movie may turn all negative thoughts into the better, as long as it is enjoyable.";

    document.querySelector('.insight').classList.remove("current_btn");
    document.querySelector('.language').classList.remove("current_btn");
    document.querySelector('.motivation').classList.remove("current_btn");
    document.querySelector('.culture').classList.remove("current_btn");
    document.querySelector('.stress').classList.add("current_btn");

}

function cultuure_btn() {
    benefit_img.src = "images_student_2/film_benefits/culture.jpeg";
    color_change.style.backgroundColor = "#7F8C8D";
    benefit_topic.innerHTML = "Learning about new cultures";
    benefit_topic.style.color = "#7F8C8D";
    benefit_content.innerHTML = "History buffs have plenty of options when it comes to movies. It can show us new things about the culture that we probably did not know. We gain many things, such as a country’s history or a new culture, and then we realize some influential figures in the world. Educating ourselves on a country’s history may instill a sense of nationalism in us. It is the same when we watch historical movies from other countries.";

    document.querySelector('.insight').classList.remove("current_btn");
    document.querySelector('.stress').classList.remove("current_btn");
    document.querySelector('.language').classList.remove("current_btn");
    document.querySelector('.motivation').classList.remove("current_btn");
    document.querySelector('.culture').classList.add("current_btn");
}

function language_btn() {
    benefit_img.src = "images_student_2/film_benefits/language.png";
    color_change.style.backgroundColor = "#E74C3C";
    benefit_topic.innerHTML = "Help us learn a new language";
    benefit_topic.style.color = "#E74C3C";
    benefit_content.innerHTML = "we watch movies from western countries,. Fluency in English is crucial for some people, particularly those who did not grow up in a country where English was their first language. Can we merely watch movies to enhance our language skills? How do we do that?In some cases, people may even master a new language only by watching movies. They will be able to watch the movie without having to read subtitles. Maybe not everyone will understand the complicated grammar or the uncommon vocabulary of the country. However, understanding the context of their language, in general, will increase our knowledge beyond our first and second languages.";

    document.querySelector('.insight').classList.remove("current_btn");
    document.querySelector('.stress').classList.remove("current_btn");
    document.querySelector('.culture').classList.remove("current_btn");
    document.querySelector('.motivation').classList.remove("current_btn");
    document.querySelector('.language').classList.add("current_btn");
}

function motivation_btn() {
    benefit_img.src = "images_student_2/film_benefits/motivation.jpeg";
    color_change.style.backgroundColor = "#bc7fd6b5";
    benefit_topic.innerHTML = "Movies help us to get motivatione";
    benefit_topic.style.color = "#bc7fd6b5";
    benefit_content.innerHTML = "Have you ever read a movie quote over and over again? It indicates the movie has encouraged you to feel more positive and inspired. We may learn a lot by watching movies. Movies may motivate us to make positive changes in our lives, and movies’ strong characters can inspire us to do the same. The benefit of watching movies can increase self-motivation to be solid and inflexible in dealing with all the problems. Even though it is just a movie, we can acquire this psychological influence in our life.";

    document.querySelector('.insight').classList.remove("current_btn");
    document.querySelector('.stress').classList.remove("current_btn");
    document.querySelector('.language').classList.remove("current_btn");
    document.querySelector('.culture').classList.remove("current_btn");
    document.querySelector('.motivation').classList.add("current_btn");


}
function insight_btn() {
    benefit_img.src = "images_student_2/film_benefits/insight.png";
    color_change.style.backgroundColor = "#11a083bd";
    benefit_topic.innerHTML = "Insight and understanding";
    benefit_topic.style.color = "#11a083bd";
    benefit_content.innerHTML = "Beyond entertainment, movies can likely provide insight into people, with different genres presenting them with many new insights. Watching movies from other countries tells us much about each country’s culture and national values. Watching movies can also give a different view to each viewer from the beginning of the story itself. Each movie’s plot or characters will provide us with a different perspective than anyone else. It gives us insight into things we did not know before without recognizing them.";

    document.querySelector('.stress').classList.remove("current_btn");
    document.querySelector('.language').classList.remove("current_btn");
    document.querySelector('.culture').classList.remove("current_btn");
    document.querySelector('.motivation').classList.remove("current_btn");
    document.querySelector('.insight').classList.add("current_btn");
}

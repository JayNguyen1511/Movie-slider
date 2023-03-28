const prev = $(".prev")[0];
const next = $(".next")[0];
const track = $(".track")[0];

let Allfilms = [
  { title: "Fermat's Room", image: "/images/sl11.jpg", content: "A stranger using the alias Fermat invites several people to attend a convention of the country's best mathematicians. To accept the invitation, each must solve a math puzzle. Upon receipt of the correct solution, each receives as an alias the name of a famous mathematician or philosopher; they are forbidden to reveal their true identities to the other attendees. Each is instructed to arrive at a specific place and time, alone and without a cell phone, to work on the greatest enigma. At the appointed time, four individuals converge at a river bank: a serious young man using the alias Galois, an older man using Hilbert, a self-effacing young man using Pascal, and a stylish young woman using Oliva. At dusk, a car on the far side of the river flashes its headlights. In the car they find a PDA with GPS coordinates and travel instructions. These direct them to an abandoned warehouse in the countryside, where a back room is set up as an elegant parlor stocked with books and a large dining table set for five. "},
  { title: "Thirce upon a time", image: "/images/sl12.jpg", content: " is a horror media franchise centered on a series of survival horror video games, created by Keiichiro Toyama, developed and published by Konami. The first four video games in the series, Silent Hill, Silent Hill 2, Silent Hill 3 and Silent Hill 4: The Room, were developed by an internal group called Team Silent, a development staff within former Konami subsidiary Konami Computer Entertainment Tokyo." },
  { title: "Pompo Cinephile", image: "/images/sl13.jpg",content:"The film begins with WILLE stopping in Paris, France, which much like the outskirts of former Tokyo-3 has been converted into core material. A team descends from the Wunder -- comprised of Ritsuko, Maya, three of Maya's male underlings, and Mari in Unit-08 β-ICC -- and lands on top of a mysterious black pillar. Ritsuko acts as a look-out while Maya and her men connect to the black pillar via laptop in order to resume the activation of an Anti-L System -- something a team of Europeans had previously died while attempting. Large numbers of a never-before-seen Eva type, Evangelion Mark.44A, appears in two waves, and Mari holds them off, assisted by helmsman Sumire_Nagara utilizing the Wunder's intricate cable flight capabilities." },
  { title: "Let's get party started", image: "/images/sl14.jpg",content:"Pompo: The Cinéphile (映画大好きポンポさん, Eiga Daisuki Ponpo-san) is a Japanese manga series by Shogo Sugitani (also known as Ningen Plamo), serialized online via pixiv Comic website since April 2017. It has been collected in six tankōbon volumes by Media Factory. A spin-off manga by Sugitani titled Fran: The Cinéphile (映画大好きフランちゃん, Eiga Daisuki Fran-chan) has also been serialized online via pixiv Comic since July 2018. It has been collected in a single tankōbon volume by Media Factory. An anime film adaptation by CLAP premiered in Japan on June 4, 2021." },
  { title: "Sword Art Online", image: "/images/sl15.jpg",content:"There are as many as two mildly amusing jokes, one of which has not previously appeared in a Cheech & Chong sketch, and further diversion may be wrung from speculating as to what on earth possessed Jon Snow and John Humphrys - gods among men, each - to grace this witless shambles with cameo appearances; Humphrys should at least have insisted that they spelled his surname correctly in the credits." },
  { title: "Chip 'n Dale", image: "/images/sl16.jpg",content:"Chip 'n Dale: Rescue Rangers is a 2022 American live-action/computer-animated action-adventure comedy film based on the characters Chip and Dale and continuation of the animated TV series of the same name.[6][7][8] Directed by Akiva Schaffer and written by Dan Gregor and Doug Mand, the film stars John Mulaney and Andy Samberg as the voices of the titular pair, respectively, with KiKi Layne, Will Arnett, Eric Bana, Flula Borg, Dennis Haysbert, Keegan-Michael Key, Tress MacNeille, Tim Robinson, Seth Rogen, and J.K. Simmons." },
  { title: "Lavalantula", image: "/images/sl17.jpg",content:"Lavalantula is an American 2015 science fiction comedy horror thriller television film that takes place after a series of volcanic eruptions in Los Angeles unleashes a swarm of gigantic, lava-breathing tarantulas[1] from which the film draws its title. It was directed by Mike Mendez and stars Steve Guttenberg, Nia Peeples and Patrick Renna. Ian Ziering appears as Fin Shepard, tying the film into the Sharknado universe.[2] It premiered on Syfy on July 25, 2015." },
  { title: "Lucky Luke", image: "/images/sl18.jpg",content:"Lucky Luke is a 2009 French-Argentine Western adventure film directed by James Huth and starring Jean Dujardin, who also co-wrote the screenplay. It is based on the comic series of the same name by Morris. The film includes a cameo by Argentine writer and TV host Alberto Laiseca." },
  { title: "Tom Jones", image: "/images/sl19.jpg",content:"Tom Jones (Albert Finney), a bastard foundling raised by the kindly Squire Allworthy (George Devine), loves the beautiful Sophie Western (Susannah York), but cannot marry her due to the difference in their stations." },
  { title: "Your name 君の名は。", image: "/images/sl10.jpg",content:"Your Name (Japanese: 君の名は。, Hepburn: Kimi no Na wa.) is a 2016 Japanese animated romantic fantasy film produced by CoMix Wave Films and distributed by Toho. It depicts a high school boy in Tokyo and a high school girl in the Japanese countryside who suddenly and inexplicably begin to swap bodies." },
  { title: "Violet Evergarden", image: "/images/sl9.jpg",content:"Violet Evergarden (Japanese: ヴァイオレット・エヴァーガーデン, Hepburn: Vaioretto Evāgāden) is a Japanese light novel series written by Kana Akatsuki and illustrated by Akiko Takase. It won the grand prize in the fifth Kyoto Animation Award's novel category in 2014, the first ever work to win a grand prize in any of the three categories (novel, scenario, and manga).[3] Kyoto Animation published the first light novel in December 2015, under their KA Esuma Bunko imprint." },
  { title: "Silent Voice", image: "/images/sl8.jpg", content:"A Silent Voice (Japanese: 聲の形, Hepburn: Koe no Katachi, lit. 'The Shape of Voice') is a 2016 Japanese animated drama film[4] produced by Kyoto Animation, directed by Naoko Yamada and written by Reiko Yoshida, featuring character designs by Futoshi Nishiya and music by Kensuke Ushio.[5] It is based on the manga of the same name written and illustrated by Yoshitoki Ōima. Plans for an animated film adaptation were announced back in November 2014, Kyoto Animation was confirmed to produce the film in November 2016. Miyu Irino and Saori Hayami signed on as voice casting in May 2016 and the theatrical release poster and official trailer were released in July 2016." },
];

let carouselWidth = $(".carousel-container")[0].offsetWidth;

$(window).resize(function () {
  carouselWidth = $(".carousel-container")[0].offsetWidth;
});

let indexWhenScroll = 0;

$(".next").click(function () {
  indexWhenScroll++;
  prev.classList.add("show");
  track.style.transform = `translateX(-${indexWhenScroll * carouselWidth}px)`;

  if (track.offsetWidth - indexWhenScroll * carouselWidth < carouselWidth) {
    next.classList.add("hide");
  }
});

$(".prev").click(function () {
  indexWhenScroll--;
  next.classList.remove("hide");
  if (indexWhenScroll === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = `translateX(-${indexWhenScroll * carouselWidth}px)`;
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function showModal(indexWhenScroll) {
  $("#modal-title").text("");
  $("#modal-content-p").text("");

  $("#modal-title").text(Allfilms[indexWhenScroll].title);
  $("#modal-content-p").text(Allfilms[indexWhenScroll].content);
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// sua ten model
function MakeASlider() {
  track.innerHTML = "";

  let sliders = "";
  
  for (let i = 0; i < Allfilms.length; i++) {
    const slide = `<div class="card-container">
   <div class="card">
     <div class="img">
       <div class="data" style="display: none"></div>
       ${Allfilms[i].title}
     </div>
     <div class="info">
       <img src="${Allfilms[i].image}" class="slide-item" onclick="showModal(${i})"/>
     </div>
   </div>
 </div>`;
    sliders += slide;
  }
  track.innerHTML = sliders;
}

MakeASlider();
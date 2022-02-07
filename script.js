/*=============================================================================
                             varibles                                                  
=============================================================================*/

const btnHam = document.querySelector(".ham-btn");
const btnTimes = document.querySelector(".times-btn");
const navBar = document.getElementById("nav-bar");
const loader = document.querySelector(".loader");
const container = document.querySelector(".container");
/*=============================================================================
funtions                                                   
=============================================================================*/
/*=============================================================================
                             markUp                                                  
=============================================================================*/
const addElements = function (arr, element) {
  return arr.map((item) => element(item)).join(" ");
};
const gerateRandomNub = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

const mainPage = function (data) {
  const article = data.articles;
  const indx = gerateRandomNub(5, 15);
  return `  <section class="banner">
    <div class="banner-main-content">
      <h2>GET THE WORLD'S LATEST NEWS</h2>
      <h3>World's Best News Portal</h3>

      <button>
        <a href="#">Know More</a>
      </button>

      <div class="current-news-head">
        <h3>
          Apple Glasses: What we expect, what we think we are
          <span>by scott stein</span>
        </h3>

        <h3>
          What's it's like to have Elon Musk's old phone number
          <span>by abrar al-heeti</span>
        </h3>

        <h3>
          Watch the exact moment Chris Pratt accidentally deletes 51, 000
          emials <span>by goel fashingbauer</span>
        </h3>

        <h3>
          Richard Branson's Virgin Orbit will launch a rocket from midair
          Sunday <span>by eric mack</span>
        </h3>
      </div>
    </div>

    <div class="banner-sub-content">

  


      ${addElements(article.slice(2, 6), cardWithBg)}

     
     
  </section>

  <hr />

  <main>
    <section class="main-container-left">
      <h2>Top Stories</h2>
      <div class="container-top-left">
        <article>
          <img src=${article[indx].urlToImage || "images/top-left.jpg"} />

          <div>
            <h3> ${
              article[indx].title ||
              "Best Used Cars Under $20, 000 for families"
            }</h3>

            <p>
             ${article[indx].content.slice(0, 180)}...
            </p>

            <a href="${article[indx].url}" >Read More <span>>></span></a>
          </div>
        </article>
      </div>

      <div class="container-bottom-left">
       
         ${addElements(data.splice(15, 20), cardWithBg)}
     
      </div>
    </section>

    <section class="main-container-right">
      <h2>Latest Stories</h2>

      <article>
        <h4>just in</h4>
        <div>
          <h2>
            Disneyland Paris will stream its Lion King stage show Friday
            night
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus?
          </p>

          <a href="#">Read More <span>>></span></a>
        </div>
        <img src="images/right-4.jpg" />
      </article>
      <article>
        <h4>just in</h4>
        <div>
          <h2>
            Disneyland Paris will stream its Lion King stage show Friday
            night
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus?
          </p>

          <a href="#">Read More <span>>></span></a>
        </div>
        <img src="images/right-4.jpg" />
      </article>
      <article>
        <h4>just in</h4>
        <div>
          <h2>
            Disneyland Paris will stream its Lion King stage show Friday
            night
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus?
          </p>

          <a href="#">Read More <span>>></span></a>
        </div>
        <img src="images/right-4.jpg" />
      </article>
      <article>
        <h4>just in</h4>
        <div>
          <h2>
            Disneyland Paris will stream its Lion King stage show Friday
            night
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus?
          </p>

          <a href="#">Read More <span>>></span></a>
        </div>
        <img src="images/right-4.jpg" />
      </article>
    </section>
  </main>`;
};

const cardWithBg = function (obj) {
  console.log(obj);
  return `    <div class="hot-topic">
    <img src=${obj.urlToImage || "images/banner-news-3.jpg"} alt="" />

    <div class="hot-topic-content">
      <h2>
      ${obj.title}
      </h2>

      <h3>New Topic 1</h3>
      <p>
       ${obj.content.slice(0, 80)}...
      </p>
      <a href="#">Read More</a>
    </div>
  </div>`;
};
const withTopimg = function (obj) {
  return `  <article>
    <img src="images/bottom-left-2.jpg" />
    <div>
      <h3>
        iPad Pro, reviewed: Has the iPad become my main computer now?
      </h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Commodi iure modi animi cupiditate. Explicabo, nihil?
      </p>

      <a href="#">Read More <span>>></span></a>
    </div>
  </article>`;
};
const latestStoriesItem = function (obj) {
  return `<article>
    <h4>just in</h4>
    <div>
      <h2>
        Disneyland Paris will stream its Lion King stage show Friday
        night
      </h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus?
      </p>

      <a href="#">Read More <span>>></span></a>
    </div>
    <img src="images/right-4.jpg" />
  </article>`;
};

/*================================================================================
                             loader                                                   
================================================================================*/

const loaderOn = function (parent, marginY) {
  console.log(parent);
  const ele = parent.querySelector(".loader");
  ele.style.display = "block";
  ele.style.margin = `${marginY}px auto`;
};
const loaderOff = function (parent) {
  const ele = parent.querySelector(".loader");
  if (ele) ele.remove();
};
/*=============================================================================
                             hamBurger Menu                                                  
=============================================================================*/

const btnHamFunc = function () {
  if (btnHam.className !== "") {
    btnHam.style.display = "none";
    btnTimes.style.display = "block";
    navBar.classList.add("show-nav");
  }
};

const btnTimesFunc = function () {
  if (btnHam.className !== "") {
    this.style.display = "none";
    btnHam.style.display = "block";
    navBar.classList.remove("show-nav");
  }
};
/*=============================================================================
                             add page to parent                                                  
=============================================================================*/
const addChild = function (ele, parent) {
  parent.innerHTML = "";
  parent.append(ele);
};

/*=============================================================================
                             get data from api                                                  
=============================================================================*/
const getMainData = async function () {
  try {
    loaderOn(container, 200);
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=223d63ea9a6041ce95a4099d57ccefae"
    );
    const data = await res.json();
    if (!res.ok) throw new Error("No Data found ");

    console.log(data);
    const main_page = document.createElement("div");
    main_page.innerHTML = mainPage(data);
    console.log(data);
    addChild(main_page, container);
  } catch (error) {
    alert(error.msg);
  } finally {
    loaderOff(container);
  }
};

/*=============================================================================
                             dom loadFunc                                                  
=============================================================================*/

const loadFunc = function () {
  console.log("done");
  getMainData();
};

/*=============================================================================
add event lister                                                  
=============================================================================*/
btnTimes.addEventListener("click", btnTimesFunc);
btnHam.addEventListener("click", btnHamFunc);
window.addEventListener("load", loadFunc);

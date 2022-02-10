/*=============================================================================
                             varibles                                                  
=============================================================================*/

const btnHam = document.querySelector(".ham-btn");
const btnTimes = document.querySelector(".times-btn");
const navBar = document.getElementById("nav-bar");
const loader = document.querySelector(".loader");
const container = document.querySelector(".container");
const latestNews = document.querySelector(".latestNews");
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
/*=============================================================================
                             country wise                                                  
=============================================================================*/

const countrymarkup = function (article, country) {
  const indx = 0;
  return `
  <main class="data">
   
  
    

    <section class="main-container-right">
      <h2 class="Country ">${country}</h2>

    
      ${addElements(article.slice(0), latestStoriesItem)}
      
      ${addElements(article.slice(0), latestStoriesItem)}
     
    </section>
 
  </main>`;
};

const countryWise = async function (country) {
  container.innerHTML = "";
  loaderOn(container, 200);
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${country}&apiKey=223d63ea9a6041ce95a4099d57ccefae`
  );
  const data = await res.json();
  const div = document.createElement("div");
  div.innerHTML = countrymarkup(data.articles, country.toUpperCase());
  console.log(data.articles);
  console.log(div);
  loaderOff(container);
  addChild(div, container);
};

const mainPage = function (data) {
  const article = data.articles;
  const indx = 5;
  const start = 0;
  console.log(start);

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

  


      ${addElements(article.slice(start, start + 4), cardWithBg)}

     
     
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
              article[indx].title
                ? article[indx].title
                : "Best Used Cars Under $20, 000 for families"
            }</h3>

            <p>
             ${
               article[indx].content
                 ? article[indx].content.slice(0, 180)
                 : `Journalists acting in a manner prejudicial to the country's "security, sovereignty and integrity" as well`
             }...
            </p>

            <a href="${article[indx].url}" >Read More <span>>></span></a>
          </div>
        </article>
      </div>

      <div class="container-bottom-left">
     

      ${addElements(article.slice(6, 10), withTopimg)}
      </div>
    </section>

    <section class="main-container-right">
      <h2>Latest Stories</h2>

    
      ${addElements(article.slice(12), latestStoriesItem)}
      
     
    </section>
  </main>`;
};

const cardWithBg = function (obj) {
  console.log(obj);
  return `    <div class="hot-topic">
    <img src=${
      obj.urlToImage || ` images/banner-news-${gerateRandomNub(1, 5)}.jpg`
    } alt="" />

    <div class="hot-topic-content">
      <h2>
      ${
        obj.title
          ? obj.title.slice(0, 60)
          : "Journalists Acting Against National Security To Lose Government Accreditation"
      }...
      </h2>

      <h3>New Topic 1</h3>
      <p>
       ${
         obj.content
           ? obj.content.slice(0, 80)
           : `Journalists acting in a manner prejudicial to the country's "security, sovereignty and integrity" as well `
       }...
      </p>
      <a href="${obj.url}" target="_blank">Read More</a>
    </div>
  </div>`;
};
const withTopimg = function (obj) {
  return `  <article>
    <img src="${obj.urlToImage || "images/banner-news-3.jpg"}" />
    <div>
      <h3>
        ${
          obj.title
            ? obj.title
            : "Journalists Acting Against National Security To Lose Government Accreditation"
        }
      </h3>
      <p>
       ${
         obj.content
           ? obj.content.slice(0, 150)
           : `Journalists acting in a manner prejudicial to the country's "security, sovereignty and integrity" as well as "public order, decency or morality" will lose their government accreditation`
       }...
      </p>

      <a href="${obj.url}" target="_blank">Read More <span>>></span></a>
    </div>
  </article>`;
};
const latestStoriesItem = function (obj) {
  return `<article>
    <h4>${new Date(obj.publishedAt).toDateString()}</h4>
    <div>
      <h2>
       ${
         obj.title
           ? obj.title.slice(0, 50)
           : ` Journalists Acting Against National Security To Lose Government Accreditation`
       }...
      </h2>

      <p>
        ${
          obj.content
            ? obj.content.slice(0, 80)
            : `Journalists acting in a manner prejudicial to the country's "security, sovereignty and integrity" as well `
        }...
      </p>

      <a href="${obj.url}" target="_blank">Read More <span>>></span></a>
    </div>
    <img src=${obj.urlToImage} ||"images/right-4.jpg" />
  </article>`;
};

/*================================================================================
                             loader                                                   
================================================================================*/

const loaderOn = function (parent, marginY) {
  console.log(parent);
  const ele = loader;
  parent.prepend(ele);
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
    container.innerHTML = "";
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
    loaderOff(container);
    addChild(main_page, container);
  } catch (error) {
    alert(error.msg);
  } finally {
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
                             latest page                                                  
=============================================================================*/
const latestFuncData = async function () {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-01-09&sortBy=publishedAt&apiKey=223d63ea9a6041ce95a4099d57ccefae"
  );
  const data = await res.json();
  return data.articles;
};

const LatestFunc = async function () {
  container.innerHTML = "";
  loaderOn(container, 200);
  const latest = document.createElement("div");
  const topHeading = document.createElement("h2");
  topHeading.innerHTML = "Latest News ";
  latest.classList.add("latestNews");
  const data = await latestFuncData();
  console.log(data);
  latest.innerHTML += data
    .map((item) => {
      const article = withTopimg(item);

      return article;
    })
    .join("");
  latest.prepend(topHeading);
  addChild(latest, container);
  console.log(data.articles);

  const articles = document.querySelectorAll("article");
  console.log(articles);

  articles.forEach((article) => {
    console.log(article);
    article.classList.add("cardLatestNews");
  });
};
/*=============================================================================
                             haschange function                                                  
=============================================================================*/

const hashchangeFunc = function (e) {
  console.log(e);
  const hash = e.newURL.slice(e.newURL.lastIndexOf("#") + 1);
  console.log(hash);
  if (hash == "Latest") LatestFunc();
  if (hash == "Home") loadFunc();
  else countryWise(hash);
};

/*=============================================================================
add event lister                                                  
=============================================================================*/
btnTimes.addEventListener("click", btnTimesFunc);
btnHam.addEventListener("click", btnHamFunc);
window.addEventListener("load", loadFunc);
window.addEventListener("hashchange", hashchangeFunc);

'use strict';
const cursorEl = document.querySelector('.cursor');
const startUpEl = document.querySelector(`.startup-container`);

// Sections
const homeSectionEl = document.querySelector(`.section--home`);
const aboutSectionEl = document.querySelector(`.section--about`);
const projectsSectionEl = document.querySelector(`.section--projects`);
const ctaSectionEl = document.querySelector(`.section--cta`);

// Containers
const homeSectionContainerEl = document.querySelector(
  `.section-container--home`
);
const aboutSectionContainerEl = document.querySelector(
  `.section-container--about`
);
const projectsSectionContainerEl = document.querySelector(
  `.section-container--projects`
);
const ctaSectionContainerEl = document.querySelector(`.section-container--cta`);

// Buttons
const btnEl = document.querySelectorAll('.btn');
const btnHomeEl = document.querySelector(`.btn-home`);
const btnAboutEl = document.querySelector(`.btn-about`);
const btnProjectsEl = document.querySelector(`.btn-projects`);
const btnCtaEl = document.querySelector(`.btn-cta`);
const startupBtnEl = document.querySelector(`.startup-btn`);
const btnHomeContactEl = document.querySelector(`.home-contact-btn`);
const fixedBtnEl = document.querySelectorAll(`.fixed-btn`);

// Projects Grid
const overlayEl = document.querySelector(`.overlay`);
const modalEl = document.querySelector(`.modal`);
const gridItemEl = document.querySelectorAll(`.grid-item`);

////////////////////////////////////////////////////////////

// /////////////// //
// CURSOR SETTINGS //
// /////////////// //
// Allows btn text to move with cursor & transforms cursor.
const buttonHover = function (e) {
  const btnTextEl = this.querySelector('.btn-text');
  const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,
    move = 25,
    xMove = (x / width) * (move * 2) - move,
    yMove = (y / height) * (move * 2) - move;

  btnTextEl.style.transform = `translate(${xMove}px, ${yMove}px)`;
  cursorEl.style.transform = `translate(-50%, -50%) scale(4)`;
  cursorEl.style.mixBlendMode = `normal`;
  cursorEl.style.backgroundColor = `#4e4e4e`;
  cursorEl.style.border = `none`;
  cursorEl.style.animation = `pulse-dark 2s infinite`;

  if (e.type === 'mouseleave') {
    btnTextEl.style.transform = ``;
    cursorEl.style.transform = ``;
    cursorEl.style.mixBlendMode = `difference`;
    cursorEl.style.backgroundColor = `#fff`;
    cursorEl.style.border = `#fefefe 1px solid`;
    cursorEl.style.animation = `pulse 2s infinite`;
  }
};

// Allows page cursor to follow user's cursor position.
const editCursor = e => {
  const { clientX: x, clientY: y } = e;
  cursorEl.style.left = x - 7 + 'px';
  cursorEl.style.top = y - 7 + 'px';
};

btnEl.forEach(button => button.addEventListener('mousemove', buttonHover));
btnEl.forEach(button => button.addEventListener('mouseleave', buttonHover));
window.addEventListener('mousemove', editCursor);

////////////////////////////////////////////////////////////

// //////////////// //
// STARTUP SETTINGS //
// //////////////// //

const startupClick = () => {
  startUpEl.classList.add('anim--fade-out');

  setTimeout(() => {
    startUpEl.classList.add('hidden');
  }, 1000);

  setTimeout(() => {
    homeSectionEl.classList.remove(`anim--close-section`);
    homeSectionEl.classList.add(`anim--open-section`);
    btnHomeEl.classList.add(`hidden`);

    // Adjusts flexGow of each section
    homeSectionEl.style.flexGrow = `20`;
    aboutSectionEl.style.flexGrow = `1`;
    projectsSectionEl.style.flexGrow = `1`;
    ctaSectionEl.style.flexGrow = `1`;

    // Changes container visibility
    homeSectionContainerEl.classList.remove(`hidden`);
    aboutSectionContainerEl.classList.add(`hidden`);
    projectsSectionContainerEl.classList.add(`hidden`);
    ctaSectionContainerEl.classList.add(`hidden`);

    // Returns other buttons to original states.
    if (
      btnAboutEl.classList.contains(`hidden`) ||
      btnProjectsEl.classList.contains(`hidden`) ||
      btnCtaEl.classList.contains(`hidden`)
    ) {
      btnAboutEl.classList.remove(`hidden`);
      btnProjectsEl.classList.remove(`hidden`);
      btnCtaEl.classList.remove(`hidden`);
    }
  }, 1350);
};

startupBtnEl.addEventListener(`click`, startupClick);

////////////////////////////////////////////////////////////

// /////////////// //
// BUTTON SETTINGS //
// /////////////// //
const openHomeSection = button => {
  if (button.target.classList.contains(`btn-home`)) {
    // Changes opening/closing animation respectively
    if (aboutSectionEl.classList.contains(`anim--open-section`)) {
      aboutSectionEl.classList.remove(`anim--open-section`);
      aboutSectionEl.classList.add(`anim--close-section`);
    } else if (projectsSectionEl.classList.contains(`anim--open-section`)) {
      projectsSectionEl.classList.remove(`anim--open-section`);
      projectsSectionEl.classList.add(`anim--close-section`);
    } else if (ctaSectionEl.classList.contains(`anim--open-section`)) {
      ctaSectionEl.classList.remove(`anim--open-section`);
      ctaSectionEl.classList.add(`anim--close-section`);
    }
    homeSectionEl.classList.remove(`anim--close-section`);
    homeSectionEl.classList.add(`anim--open-section`);
    btnHomeEl.classList.add(`hidden`);

    // Adjusts flexGow of each section
    homeSectionEl.style.flexGrow = `20`;
    aboutSectionEl.style.flexGrow = `1`;
    projectsSectionEl.style.flexGrow = `1`;
    ctaSectionEl.style.flexGrow = `1`;

    // Changes container visibility
    homeSectionContainerEl.classList.remove(`hidden`);
    aboutSectionContainerEl.classList.add(`hidden`);
    projectsSectionContainerEl.classList.add(`hidden`);
    ctaSectionContainerEl.classList.add(`hidden`);

    // Returns other buttons to original states.
    if (
      btnAboutEl.classList.contains(`hidden`) ||
      btnProjectsEl.classList.contains(`hidden`) ||
      btnCtaEl.classList.contains(`hidden`)
    ) {
      btnAboutEl.classList.remove(`hidden`);
      btnProjectsEl.classList.remove(`hidden`);
      btnCtaEl.classList.remove(`hidden`);
    }
  } else {
    // If conditions don't work, resets state and logs error
    homeSectionEl.classList.remove(`anim--close-section`);
    homeSectionEl.classList.add(`anim--open-section`);
    btnHomeEl.classList.add(`hidden`);
    homeSectionEl.style.flexGrow = `20`;
    homeSectionContainerEl.classList.remove(`hidden`);

    console.error(`Something went wrong with the Home Button action...`);
  }
};

const openAboutSection = button => {
  if (button.target.classList.contains(`btn-about`)) {
    // Changes opening/closing animation respectively
    if (homeSectionEl.classList.contains(`anim--open-section`)) {
      homeSectionEl.classList.remove(`anim--open-section`);
      homeSectionEl.classList.add(`anim--close-section`);
    } else if (projectsSectionEl.classList.contains(`anim--open-section`)) {
      projectsSectionEl.classList.remove(`anim--open-section`);
      projectsSectionEl.classList.add(`anim--close-section`);
    } else if (ctaSectionEl.classList.contains(`anim--open-section`)) {
      ctaSectionEl.classList.remove(`anim--open-section`);
      ctaSectionEl.classList.add(`anim--close-section`);
    }
    aboutSectionEl.classList.remove(`anim--close-section`);
    aboutSectionEl.classList.add(`anim--open-section`);
    btnAboutEl.classList.add(`hidden`);

    // Adjusts flexGow of each section
    homeSectionEl.style.flexGrow = `1`;
    aboutSectionEl.style.flexGrow = `20`;
    projectsSectionEl.style.flexGrow = `1`;
    ctaSectionEl.style.flexGrow = `1`;

    // Changes container visibility
    homeSectionContainerEl.classList.add(`hidden`);
    aboutSectionContainerEl.classList.remove(`hidden`);
    projectsSectionContainerEl.classList.add(`hidden`);
    ctaSectionContainerEl.classList.add(`hidden`);

    // Returns other buttons to original states.
    if (
      btnHomeEl.classList.contains(`hidden`) ||
      btnProjectsEl.classList.contains(`hidden`) ||
      btnCtaEl.classList.contains(`hidden`)
    ) {
      btnHomeEl.classList.remove(`hidden`);
      btnProjectsEl.classList.remove(`hidden`);
      btnCtaEl.classList.remove(`hidden`);
    }
  } else {
    // If conditions don't work, resets state and logs error
    aboutSectionEl.classList.remove(`anim--close-section`);
    aboutSectionEl.classList.add(`anim--open-section`);
    btnAboutEl.classList.add(`hidden`);
    aboutSectionEl.style.flexGrow = `20`;
    aboutSectionContainerEl.classList.remove(`hidden`);

    console.error(`Something went wrong with the About Button action...`);
  }
};

const openProjectsSection = button => {
  if (button.target.classList.contains(`btn-projects`)) {
    // Changes opening/closing animation respectively
    if (aboutSectionEl.classList.contains(`anim--open-section`)) {
      aboutSectionEl.classList.remove(`anim--open-section`);
      aboutSectionEl.classList.add(`anim--close-section`);
    } else if (homeSectionEl.classList.contains(`anim--open-section`)) {
      homeSectionEl.classList.remove(`anim--open-section`);
      homeSectionEl.classList.add(`anim--close-section`);
    } else if (ctaSectionEl.classList.contains(`anim--open-section`)) {
      ctaSectionEl.classList.remove(`anim--open-section`);
      ctaSectionEl.classList.add(`anim--close-section`);
    }
    projectsSectionEl.classList.remove(`anim--close-section`);
    projectsSectionEl.classList.add(`anim--open-section`);
    btnProjectsEl.classList.add(`hidden`);

    // Adjusts flexGow of each section
    homeSectionEl.style.flexGrow = `1`;
    aboutSectionEl.style.flexGrow = `1`;
    projectsSectionEl.style.flexGrow = `20`;
    ctaSectionEl.style.flexGrow = `1`;

    // Changes container visibility
    homeSectionContainerEl.classList.add(`hidden`);
    aboutSectionContainerEl.classList.add(`hidden`);
    projectsSectionContainerEl.classList.remove(`hidden`);
    ctaSectionContainerEl.classList.add(`hidden`);

    // Returns other buttons to original states.
    if (
      btnAboutEl.classList.contains(`hidden`) ||
      btnHomeEl.classList.contains(`hidden`) ||
      btnCtaEl.classList.contains(`hidden`)
    ) {
      btnAboutEl.classList.remove(`hidden`);
      btnHomeEl.classList.remove(`hidden`);
      btnCtaEl.classList.remove(`hidden`);
    }
  } else {
    // If conditions don't work, resets state and logs error
    projectsSectionEl.classList.remove(`anim--close-section`);
    projectsSectionEl.classList.add(`anim--open-section`);
    btnProjectsEl.classList.add(`hidden`);
    projectsSectionEl.style.flexGrow = `20`;
    projectsSectionContainerEl.classList.remove(`hidden`);

    console.error(`Something went wrong with the Projects Button action...`);
  }
};

const openCtaSection = button => {
  if (
    button.target.classList.contains(`btn-cta`) ||
    button.target.classList.contains(`home-contact-btn`)
  ) {
    // Changes opening/closing animation respectively
    if (aboutSectionEl.classList.contains(`anim--open-section`)) {
      aboutSectionEl.classList.remove(`anim--open-section`);
      aboutSectionEl.classList.add(`anim--close-section`);
    } else if (projectsSectionEl.classList.contains(`anim--open-section`)) {
      projectsSectionEl.classList.remove(`anim--open-section`);
      projectsSectionEl.classList.add(`anim--close-section`);
    } else if (homeSectionEl.classList.contains(`anim--open-section`)) {
      homeSectionEl.classList.remove(`anim--open-section`);
      homeSectionEl.classList.add(`anim--close-section`);
    }
    ctaSectionEl.classList.remove(`anim--close-section`);
    ctaSectionEl.classList.add(`anim--open-section`);
    btnCtaEl.classList.add(`hidden`);

    // Adjusts flexGow of each section
    homeSectionEl.style.flexGrow = `1`;
    aboutSectionEl.style.flexGrow = `1`;
    projectsSectionEl.style.flexGrow = `1`;
    ctaSectionEl.style.flexGrow = `20`;

    // Changes container visibility
    homeSectionContainerEl.classList.add(`hidden`);
    aboutSectionContainerEl.classList.add(`hidden`);
    projectsSectionContainerEl.classList.add(`hidden`);
    ctaSectionContainerEl.classList.remove(`hidden`);

    // Returns other buttons to original states.
    if (
      btnAboutEl.classList.contains(`hidden`) ||
      btnProjectsEl.classList.contains(`hidden`) ||
      btnHomeEl.classList.contains(`hidden`)
    ) {
      btnAboutEl.classList.remove(`hidden`);
      btnProjectsEl.classList.remove(`hidden`);
      btnHomeEl.classList.remove(`hidden`);
    }
  } else {
    // If conditions don't work, resets state and logs error
    ctaSectionEl.classList.remove(`anim--close-section`);
    ctaSectionEl.classList.add(`anim--open-section`);
    btnCtaEl.classList.add(`hidden`);
    ctaSectionEl.style.flexGrow = `20`;
    ctaSectionContainerEl.classList.remove(`hidden`);

    console.error(`Something went wrong with the CTA Button action...`);
    console.log(button.target);
  }
};

const resetSections = () => {
  //reset animations
  homeSectionEl.classList.remove(`anim--open-section`);
  homeSectionEl.classList.add(`anim--close-section`);
  aboutSectionEl.classList.remove(`anim--open-section`);
  aboutSectionEl.classList.add(`anim--close-section`);
  projectsSectionEl.classList.remove(`anim--open-section`);
  projectsSectionEl.classList.add(`anim--close-section`);
  ctaSectionEl.classList.remove(`anim--open-section`);
  ctaSectionEl.classList.add(`anim--close-section`);

  // each buttons reset back to original states
  btnHomeEl.classList.remove(`hidden`);
  btnAboutEl.classList.remove(`hidden`);
  btnProjectsEl.classList.remove(`hidden`);
  btnCtaEl.classList.remove(`hidden`);

  // each section containers
  homeSectionContainerEl.classList.add(`hidden`);
  aboutSectionContainerEl.classList.add(`hidden`);
  projectsSectionContainerEl.classList.add(`hidden`);
  ctaSectionContainerEl.classList.add(`hidden`);

  // Reset flex sections
  homeSectionEl.style.flexGrow = `1`;
  aboutSectionEl.style.flexGrow = `1`;
  projectsSectionEl.style.flexGrow = `1`;
  ctaSectionEl.style.flexGrow = `1`;
};

btnHomeEl.addEventListener(`click`, openHomeSection);
btnAboutEl.addEventListener(`click`, openAboutSection);
btnProjectsEl.addEventListener(`click`, openProjectsSection);
btnCtaEl.addEventListener(`click`, openCtaSection);
btnHomeContactEl.addEventListener(`click`, openCtaSection);
fixedBtnEl.forEach(button => button.addEventListener(`click`, resetSections));

////////////////////////////////////////////////////////////

// ////////////// //
// MODAL SETTINGS //
// ////////////// //
const toggleModal = function () {
  overlayEl.classList.toggle(`hidden`);
  modalEl.classList.toggle(`hidden`);
};

const editModalHTML = function (gridItem) {
  let html = ``;
  modalEl.innerHTML = ``;

  console.log(gridItem);
  switch (gridItem) {
    case 0: {
      html = `
        <h1 class="modal-heading">Covid Map Tracker</h1>
        <img
          class="modal-img"
          src="../img/photos/covid-tracker-sample.png"
        />

        <div class="modal-information">
          <p class="modal-text">
            This project was created to show a heatmap of sorts regarding daily
            confirmed COVID-19 cases in the US.
          </p>

          <p class="modal-text">
            My goal for this project was to learn and implement fetching API
            data and visualizing to an interactive map.
          </p>

          <p class="modal-text">
            The setbacks I encountered while working on this project was
            that I got too excited on focusing on the details first. I could
            have saved time by making sure each state was representing the
            correct confirmed number of cases rather than jumping ahead and
            trying to add county information while there was ongoing issues
            viewing the map.
          </p>

          <p class="modal-text">
            This project did give me insight with API's and gathering &
            manipulating data fetched from outside sources. I also got to
            play with all sorts of graphs and searched through their API
            documention on how to edit the graph settings.
          </p>
        </div>

        <div class="modal-link-wrapper">
          <a class="modal-link" href="https://github.com/AndrewKohn/Coronavirus-data-chart" target="_blank" title="Live demo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="modal-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            class="modal-link"
            href="#"
            target="_blank"
            title="Covid Map Tracker Repository"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="modal-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </a>
        </div>
      `;
      break;
    }

    case 1: {
      html = `
        <h1 class="modal-heading">MGH Menu</h1>
        <img class="modal-img" src="../img/photos/mgh-menu-sample.png" />

        <div class="modal-information">
          <p class="modal-text">
            This project was created to assist staff at an Residential
            Assisted Living Facility on daily menus through out the month.
          </p>

          <p class="modal-text">
            My goal for this project was to help minimize grocery store
            trips and lower costs. No menu structure may allow staff to run
            out one type of ingredient faster than others. With this menu,
            staff can easily coordinate with house managers on necessary
            grocery list items and not worry about what they need to make
            during their busy work schedule.
          </p>

          <p class="modal-text">
            I currently have a submission where staff, RN's, or house
            managers can submit menu items and the submission will email me
            an html code of arrays that i can plug and play into menu.js
            within the repository to easily implement new menus, if need be.
          </p>

          <p class="modal-text">
            This project allowed me to perform html insertions within
            JavaScript and work with a free email-submission API for menu
            submissions.
          </p>
        </div>

        <div class="modal-link-wrapper">
          <a
            class="modal-link"
            href="https://mghmenu.netlify.app/"
            target="_blank"
            title="Live demo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="modal-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            class="modal-link"
            href="https://github.com/AndrewKohn/MGH-menu"
            target="_blank"
            title="Covid Map Tracker Repository"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="modal-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </a>
        </div>
      `;
      break;
    }

    case 2: {
      html = `griditem = 3`;
      break;
    }

    case 3: {
      html = `griditem = 4`;
      break;
    }

    case 4: {
      html = `griditem = 5`;
      break;
    }

    case 5: {
      html = `griditem = 6`;
      break;
    }

    default: {
      console.error(`Error on switch statement of editModalHTML`);
      break;
    }
  }

  console.log(html);
  modalEl.insertAdjacentHTML(`afterbegin`, html);
};

gridItemEl.forEach(button =>
  button.addEventListener(`click`, e => {
    // console.log(Number(String(e.target.id).split(`--`)[1]));
    editModalHTML(Number(String(e.target.id).split(`--`)[1]));
    toggleModal();
  })
);
overlayEl.addEventListener(`click`, toggleModal);

//기본설정
// weather.js
const COORDS = "coords";

function saveCoords(coordsObj) {
  // localStorage에 저장
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  // 요청 수락
  const latitude = position.coords.latitude,
    longitude = position.coords.longitude,
    coordsObj = {
      latitude,
      longitude,
    };
  saveCoords(coordsObj); // localStorage에 저장 함수
}

function handleGeoError() {
  // 요청 거절
}

function askForCoords() {
  // 사용자 위치 요청 (요청 수락, 요청 거절)
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

// 각종 기초값 셋팅부분
let nextNum = 0,
  runEvent = false,
  loadText = true,
  time = Intl.DateTimeFormat("kr", {
    dateStyle: "full",
    timeStyle: "full",
  }).format(new Date()),
  calculatorAnswerValue = [],
  calculatorSet = false;

const user = navigator.userAgent; // Pc/Mobile 체크
let isCheck = false;
if (
  user.indexOf("iPhone") > -1 ||
  user.indexOf("Android") > -1 ||
  user.indexOf("iPad") > -1
) {
  isCheck = true;
}

const mainWrap = document.querySelector("#wrap"), // 화면 전체 dom
  mainWrapBg = document.createElement("div"),
  mainWrapBgGradient = document.createElement("div"),
  mainWrapBgTree = document.createElement("div"),
  mainWrapBgLines = document.createElement("div"),
  mainWrapBgText = document.createElement("h1"),
  moNavconClickHint = document.createElement("p"),
  footerWrap = document.createElement("div"), // 화면 하단의 footer
  footerWrapTime = document.createElement("div"),
  innerContainer = document.createElement("div"), // 실제 화면에서 보여지는 영역
  stickyBarTop = document.createElement("div"), // 플레이트의 윗 부분
  stickyBarBottom = document.createElement("div"), // 플레이트의 아랫부분
  UIBox = document.createElement("div"), // 퀵버튼
  UIBoxInner = document.createElement("div"),
  UIBoxInnerDiv1 = document.createElement("div"),
  UIBoxInnerDiv2 = document.createElement("div"),
  UIBoxInnerDiv3 = document.createElement("div"),
  UIBoxInnerDiv4 = document.createElement("div");

//  Pf Page load
const PfPageWrap = document.createElement("div");
PfPageWrap.className = "PfPageWrap";

function addPlayerGuide() {
  // 첫 가이드 화면 함수
  const playerGuideWrap = document.createElement("div"),
    playerGuideWrapBg = document.createElement("div"),
    playerGuideWrapInner = document.createElement("div");

  playerGuideWrap.className = "playerGuideWrap";
  playerGuideWrapBg.className = "playerGuideWrapBg";
  playerGuideWrapInner.className = "playerGuideWrapInner";

  mainWrap.appendChild(playerGuideWrap);
  playerGuideWrap.appendChild(playerGuideWrapBg);
  playerGuideWrap.appendChild(playerGuideWrapInner);

  playerGuideWrapInner.innerHTML = `<img src="img/guide.png"/>`;

  playerGuideWrap.addEventListener("click", () => {
    playerGuideWrap.remove();
  });
}
// addPlayerGuide(); // 삭제시 가이드 생성

function loadBar() {
  // 기본 창들 생성
  mainWrapBg.id = "mainWrapBg";
  mainWrapBgGradient.id = "mainWrapBgGradient";
  mainWrapBgTree.id = "mainWrapBgTree";
  mainWrapBgLines.id = "mainWrapBgLines";
  mainWrapBgText.id = "mainWrapBgText";
  moNavconClickHint.className = "moNavconClickHint";
  footerWrap.id = "footerWrap";
  footerWrapTime.id = "footerWrapTime";
  stickyBarTop.id = "stickyBarTop"; // 각 dom마다 컨트롤 하기 쉽게 선택자 입력
  UIBox.id = "UIBox";
  UIBox.className = "moveWrap";
  UIBoxInner.id = "UIBoxInner";
  UIBoxInnerDiv1.className = "UIBoxInnerDiv";
  UIBoxInnerDiv2.className = "UIBoxInnerDiv";
  UIBoxInnerDiv3.className = "UIBoxInnerDiv";
  UIBoxInnerDiv4.className = "UIBoxInnerDiv";
  stickyBarBottom.id = "stickyBarBottom";
  innerContainer.id = "innerContainer";

  mainWrap.appendChild(footerWrap);
  footerWrap.appendChild(footerWrapTime);
  mainWrap.appendChild(moNavconClickHint);
  mainWrap.appendChild(mainWrapBg);
  mainWrapBg.appendChild(mainWrapBgGradient);
  mainWrapBg.appendChild(mainWrapBgTree);
  mainWrapBg.appendChild(mainWrapBgLines);
  mainWrapBg.appendChild(mainWrapBgText);
  mainWrap.appendChild(UIBox);
  UIBox.appendChild(UIBoxInner);
  UIBoxInner.appendChild(UIBoxInnerDiv1);
  UIBoxInner.appendChild(UIBoxInnerDiv2);
  UIBoxInner.appendChild(UIBoxInnerDiv3);
  UIBoxInner.appendChild(UIBoxInnerDiv4);

  moNavconClickHint.innerText = "Click The Icon";
  mainWrapBgText.innerText = "CGM Style";
  UIBoxInnerDiv1.style = "--i:0;--x:0;--y:0;";
  UIBoxInnerDiv2.style = "--i:1;--x:2;--y:0;";
  UIBoxInnerDiv3.style = "--i:2;--x:0;--y:2;";
  UIBoxInnerDiv4.style = "--i:3;--x:2;--y:2;";
  UIBoxInnerDiv1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z"></path><path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z"></path></svg>`;
  UIBoxInnerDiv2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M10.25 0a.75.75 0 000 1.5h1v1.278a9.955 9.955 0 00-5.635 2.276L4.28 3.72a.75.75 0 00-1.06 1.06l1.315 1.316A9.962 9.962 0 002 12.75c0 5.523 4.477 10 10 10s10-4.477 10-10a9.962 9.962 0 00-2.535-6.654L20.78 4.78a.75.75 0 00-1.06-1.06l-1.334 1.334a9.955 9.955 0 00-5.636-2.276V1.5h1a.75.75 0 000-1.5h-3.5zM12 21.25a8.5 8.5 0 100-17 8.5 8.5 0 000 17zm4.03-12.53a.75.75 0 010 1.06l-2.381 2.382a1.75 1.75 0 11-1.06-1.06l2.38-2.382a.75.75 0 011.061 0z"></path></svg>`;
  UIBoxInnerDiv3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1.5a7 7 0 100-14 7 7 0 000 14zm12-7a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h2.5A.75.75 0 0124 12zM4 12a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h2.5A.75.75 0 014 12zm16.485-8.485a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 01-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM6.343 17.657a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 11-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM12 0a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0V.75A.75.75 0 0112 0zm0 20a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0112 20zM3.515 3.515a.75.75 0 011.06 0l1.768 1.768a.75.75 0 11-1.06 1.06L3.515 4.575a.75.75 0 010-1.06zm14.142 14.142a.75.75 0 011.06 0l1.768 1.768a.75.75 0 01-1.06 1.06l-1.768-1.767a.75.75 0 010-1.061z"></path></svg>`;
  UIBoxInnerDiv4.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M8.114 2.094a.75.75 0 01.386.656V9h1.252a.75.75 0 110 1.5H5.75a.75.75 0 010-1.5H7V4.103l-.853.533a.75.75 0 01-.795-1.272l2-1.25a.75.75 0 01.762-.02zm4.889 5.66a.75.75 0 01.75-.75h5.232a.75.75 0 01.53 1.28l-2.776 2.777c.55.097 1.057.253 1.492.483.905.477 1.504 1.284 1.504 2.418 0 .966-.471 1.75-1.172 2.27-.687.511-1.587.77-2.521.77-1.367 0-2.274-.528-2.667-.756a.75.75 0 01.755-1.297c.331.193.953.553 1.912.553.673 0 1.243-.188 1.627-.473.37-.275.566-.635.566-1.067 0-.5-.219-.836-.703-1.091-.538-.284-1.375-.443-2.471-.443a.75.75 0 01-.53-1.28l2.643-2.644h-3.421a.75.75 0 01-.75-.75zM7.88 15.215a1.4 1.4 0 00-1.446.83.75.75 0 01-1.37-.61 2.9 2.9 0 012.986-1.71 2.565 2.565 0 011.557.743c.434.446.685 1.058.685 1.778 0 1.641-1.254 2.437-2.12 2.986-.538.341-1.18.694-1.495 1.273H9.75a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75c0-1.799 1.337-2.63 2.243-3.21 1.032-.659 1.55-1.031 1.55-1.8 0-.355-.116-.584-.26-.732a1.068 1.068 0 00-.652-.298z"></path></svg>`;

  UIBox.draggable = true;
}

function addTopBtns(Wrap, text) {
  // 창들의 상단 타이틀,최소화,닫기 버튼을 생성하는 함수
  const addTopBtnContainer = document.createElement("div"),
    addTopBtnContainerTitle = document.createElement("p"),
    addTopBtnContainerMin = document.createElement("div"),
    addTopBtnContainerClose = document.createElement("div");

  addTopBtnContainer.className = "addTopBtnContainer";
  addTopBtnContainerTitle.className = "addTopBtnContainerTitle";
  addTopBtnContainerMin.className = "addTopBtnContainerMin";
  addTopBtnContainerClose.className = "addTopBtnContainerClose";

  Wrap.appendChild(addTopBtnContainer);
  addTopBtnContainer.appendChild(addTopBtnContainerTitle);
  addTopBtnContainer.appendChild(addTopBtnContainerMin);
  addTopBtnContainer.appendChild(addTopBtnContainerClose);

  addTopBtnContainerTitle.innerText = `${text}`;

  setTimeout(() => {
    // 창이 여러개 켜질경우 제목 옆에 (숫자)를 넣어줌으로 몇개의 창이 생성되었는지 보여주는 값
    let checkWrapNum = addTopBtnContainer.parentElement.classList[0];
    let WrapNumTitle = document.querySelectorAll(`.${checkWrapNum}`);
    if (WrapNumTitle.length >= 2) {
      addTopBtnContainerTitle.innerText = `${text}(${WrapNumTitle.length})`;
    }
  }, 50);

  addTopBtnContainerClose.addEventListener("click", () => {
    // 닫기버튼 클릭시
    Wrap.remove();

    let checkCodeWrap = document.querySelector(".codeWrap"), // 코드창 있는지 확인
      checkPlayerWrapWrap = document.querySelector(".playerWrap"), // 플레이어창 있는지 확인
      checkCalculatorWrap = document.querySelector("#calculatorWrap"), // 계산기가 있는지 체크
      checkWeatherWrap = document.querySelector(".weatherWrap"), // 날씨창이 있는지 체크
      footerWrap = document.querySelector("#footerWrap");

    if (!checkCalculatorWrap) {
      footerWrap.childNodes[1].style.background = "transparent";
    }
    if (!checkCodeWrap) {
      footerWrap.childNodes[2].style.background = "transparent";
    }
    if (!checkWeatherWrap) {
      footerWrap.childNodes[3].style.background = "transparent";
    }
    if (!checkPlayerWrapWrap) {
      footerWrap.childNodes[4].style.background = "transparent";
    }
  });
  addTopBtnContainerMin.addEventListener("click", (e) => {
    // 최소화 버튼 클릭시

    e.path[2].classList.toggle("min");
    if (!e.path[2].classList.contains("min")) {
      //
      e.path[2].style.height = null;
      return false;
    }
    e.path[2].style.height = "24px";
  });
}

function addCodeWrap() {
  if (runEvent === true) {
    alert("아직 이벤트 중입니다.");
    return false;
  }

  const codeWrap = document.createElement("div"), // 아래 모든 영역을 포함한 dom
    firstBg = document.createElement("form"), // 메인 화면에서의 컨텐츠
    firstUl = document.createElement("ui"),
    firstliLast = document.createElement("form"),
    firstliLastInput = document.createElement("input"),
    firstliLastButton = document.createElement("button");

  firstBg.id = "firstBg";
  firstUl.id = "firstUl";
  firstliLast.id = "firstLastLi";
  firstliLastInput.id = "firstliLastInput";
  firstliLastButton.id = "firstliLastButton";

  codeWrap.classList = "codeWrap";
  codeWrap.classList += " moveWrap";

  addTopBtns(codeWrap, "Text-Program"); //창의 상단 부분 생성
  mainWrap.appendChild(codeWrap); // 실제 dom 생성
  codeWrap.appendChild(firstBg);

  firstBg.appendChild(firstUl);
  codeWrap.appendChild(firstliLast);
  firstliLast.appendChild(firstliLastInput);
  firstliLast.appendChild(firstliLastButton);
  PfPageWrap.appendChild(innerContainer);
  PfPageWrap.appendChild(stickyBarTop);
  PfPageWrap.appendChild(stickyBarBottom);

  firstliLastButton.innerText = "입력";
  firstliLastInput.autocomplete = "off";
  firstliLastInput.placeholder = "'포폴보기'또는 '도움말'이라고 입력해주세요";

  function autoTyping(text, textContainer, textNum) {
    // 넘겨받을 텍스트, 해당 텍스트를 보여줄 dom,중지할 이벤트 이름
    counter = 0;
    let intervalEvent = setInterval((e) => {
      if (text.length === counter) {
        if (textNum === undefined) {
          textNum = document.querySelectorAll(".firstLi").length;
          return false;
        }
        clearInterval(intervalEvent);
        if (nextNum === 0) {
          nextText(nextNum);
          nextNum = +1;
        } else {
          nextText(nextNum);
          nextNum = nextNum + 1;
        }
        return false;
      }
      // 문자열 하나하나 h2의 텍스트 컨텐츠로 추가한다
      textContainer.textContent += text[counter];
      // 카운터 증산
      counter++;
    }, 50);
  }

  function addTextListLi(textLiNum, text) {
    // list 생성하는 함수
    runEvent = true;
    firstUl.appendChild(
      eval(`firstli${textLiNum} = document.createElement("li")`)
    );
    eval(`firstli${textLiNum}`).appendChild(
      eval(`firstli${textLiNum}div = document.createElement("div")`)
    );
    eval(`firstli${textLiNum}`).appendChild(
      eval(`firstli${textLiNum}p = document.createElement("p")`)
    );
    eval(`firstli${textLiNum}`).className = `firstLi`;
    eval(`firstli${textLiNum}div`).className = `firstLiDiv`;
    eval(`firstli${textLiNum}p`).className = `firstLiP`;

    eval(`firstli${textLiNum}div`).innerText = `${
      eval(`firstli${textLiNum}div`).parentElement.parentElement
        .childElementCount
    }`; // list의 갯수를 파악후 +1
    autoTyping(text, eval(`firstli${textLiNum}p`, textLiNum)); // 기본 텍스트

    // list의 텍스트 클릭시 이벤트
    eval(`firstli${textLiNum}p`).addEventListener("click", liChangeEvent);
    function liChangeEvent(e) {
      let liNum = document.querySelectorAll(".firstLi");
      liNum.forEach((liLine) => {
        liLine.children[1].addEventListener("click", (e) => {
          // input 생성하는단
          e.stopPropagation();

          const addNewInput = document.createElement("input");
          if (liLine.children[1].innerText === "") {
            return false;
          }
          addNewInput.autocomplete = "off";
          liLine.appendChild(addNewInput);
          addNewInput.focus();
          addNewInput.value = liLine.children[1].innerText;
          liLine.children[1].remove();
          addNewInput.className = "changeLineText";
        });
      });

      function checkInputText(submitEvent) {
        submitEvent.preventDefault();
        submitEvent.stopPropagation();

        const newLineLiP = document.createElement("p");

        if (submitEvent.target[0] === undefined) {
          return false;
        }

        newLineLiP.className = "firstLiP";
        newLineLiP.innerText = submitEvent.target[0].value;

        let createElementLi = submitEvent.target[0].offsetParent;

        submitEvent.target[0].remove();

        createElementLi.appendChild(newLineLiP);
        newLineLiP.addEventListener("click", liChangeEvent);
      }
      firstBg.addEventListener("submit", checkInputText);
    }
  }

  addTextListLi(1, "안녕하세요"); // 맨 처음 첫줄의 텍스트
  function nextText(nextNum) {
    runEvent = true;
    let num1 = [
      [2, "E-mail : developercgm@gmail.com"],
      [3, "더블클릭하면 내용을 수정할수있습니다."],
      [4, "하단의 입력창에 내용을 입력시 내용을 추가할수있습니다."],
      [5, "이 페이지는 하드코딩으로 제작한 페이지 입니다."],
      [
        6,
        "이 페이지의 html5는 <main id='wrap'></main> 하나이며 전부 동적 생성되었습니다.",
      ],
    ];
    if (num1[nextNum] === undefined) {
      runEvent = false;
      loadText = false;
      return false;
    }
    addTextListLi(num1[nextNum][0], num1[nextNum][1]);
    nextNum = +1;
  }

  firstliLast.addEventListener("submit", (firstliLastEvent) => {
    firstliLastEvent.preventDefault();

    let inputTypingText = firstliLastEvent.target[0].value;

    if (inputTypingText === "포폴보기") {
      mainBarEvent();
      return false;
    }
    if (runEvent === true) {
      alert("아직 이벤트 중입니다.");
      firstliLastEvent.target[0].value = "";
      return false;
    }
    if (inputTypingText.length > 18) {
      alert("너무 긴 입력입니다");
      return false;
    }

    if (inputTypingText === "도움말") {
      addTextListLi(
        document.querySelectorAll(`.firstLi`).length + 1,
        inputTypingText
      );
      runEvent = true;
      setTimeout(() => {
        addTextListLi(
          document.querySelectorAll(`.firstLi`).length + 1,
          `입력가능한 명력어는 '시간','날씨','추가예정'등이 있습니다-유튜브 url입력시 재생불가는 해당영상이 퍼가기 불가 영상이기에 막혀있을 가능성이 높습니다.`
        );
      }, 1000);
      firstliLastEvent.target[0].value = "";
      return false;
    } else if (inputTypingText === "시간") {
      addTextListLi(
        document.querySelectorAll(`.firstLi`).length + 1,
        inputTypingText
      );
      runEvent = true;
      setTimeout(() => {
        addTextListLi(
          document.querySelectorAll(`.firstLi`).length + 1,
          `${time}입니다.`
        );
      }, 1000);
      firstliLastEvent.target[0].value = "";
      return false;
    } else if (inputTypingText === "날씨") {
      const API_KEY = "c65eec58bb72eba4ba267415b3d37432";
      function getWeather(lat, lng) {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        )
          .then(function (response) {
            // .then = fetch가 완료 된 후 실행됨
            return response.json(); // json형태로 변환
          })
          .then(function (json) {
            const temperature = json.main.temp,
              place = json.name,
              nowWeather = json.weather[0].main;

            runEvent = true;
            setTimeout(() => {
              runEvent = true;
              addTextListLi(
                document.querySelectorAll(`.firstLi`).length + 1,
                `현재 지역은 ${place} 이며 날씨는 ${nowWeather}, 기온은 ${temperature.toFixed()}도 입니다.`
              );
            }, 1000);
          });
      }

      function weatherLoadCoords() {
        const loadedCoords = localStorage.getItem(COORDS); // localStorage에서 위치정보 가져옴
        if (loadedCoords === null) {
          // 위치 정보가 없으면
          askForCoords(); // 위치 정보 요청 함수
        } else {
          const parseCoords = JSON.parse(loadedCoords); // json형식을 객체 타입으로 바꿔서 저장
          getWeather(parseCoords.latitude, parseCoords.longitude); // 날씨 요청 함수
        }
      }
      weatherLoadCoords();
      addTextListLi(
        document.querySelectorAll(`.firstLi`).length + 1,
        inputTypingText
      );
      firstliLastEvent.target[0].value = "";
      return false;
    } else if (inputTypingText === "추가예정") {
      addTextListLi(
        document.querySelectorAll(`.firstLi`).length + 1,
        inputTypingText
      );
      runEvent = true;
      setTimeout(() => {
        addTextListLi(
          document.querySelectorAll(`.firstLi`).length + 1,
          `위 수정한 text를 save&load하는 기능 / text를 save&load하며 위 화면에 띄워주는 기능`
        );
      }, 1000);
      firstliLastEvent.target[0].value = "";
      return false;
    } else if (inputTypingText === "계산" || inputTypingText === "계산기") {
      footerQuick(
        1,
        null,
        `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 128 128" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_1"><rect fill="#F4F5F5" height="1520" opacity="0" width="727.938" x="-59.984" y="-541"/></g><g id="Layer_2"><g><circle cx="64" cy="64" fill="#2597CE" r="64"/><g><defs><circle cx="64" cy="64" id="SVGID_35_" r="64"/></defs><clipPath id="SVGID_2_"><use overflow="visible" xlink:href="#SVGID_35_"/></clipPath><polygon clip-path="url(#SVGID_2_)" fill="#1389C9" points="101.864,27.092 128,53.215 128,128 53.333,128 26.813,101.273      35.004,68.722 26.929,60.646 61.417,27.092 66.786,32.462    "/></g><g><defs><circle cx="64" cy="64" id="SVGID_37_" r="64"/></defs><clipPath id="SVGID_4_"><use overflow="visible" xlink:href="#SVGID_37_"/></clipPath><polygon clip-path="url(#SVGID_4_)" fill="#0082C5" points="26.94,61.284 89.952,124.296 110.11,112.138 124.423,89.992      61.381,27.036    "/></g><path d="M62,57.692C62,60.071,60.071,62,57.692,62H29.308C26.929,62,25,60.071,25,57.692V29.308    C25,26.929,26.929,25,29.308,25h28.385C60.071,25,62,26.929,62,29.308V57.692z" fill="#FFF1E5"/><path d="M103,57.692c0,2.379-1.929,4.308-4.308,4.308H70.308C67.929,62,66,60.071,66,57.692V29.308    C66,26.929,67.929,25,70.308,25h28.385c2.379,0,4.308,1.929,4.308,4.308V57.692z" fill="#FFF1E5"/><path d="M62,98.692c0,2.379-1.929,4.308-4.308,4.308H29.308C26.929,103,25,101.071,25,98.692V70.308    C25,67.929,26.929,66,29.308,66h28.385C60.071,66,62,67.929,62,70.308V98.692z" fill="#FFF1E5"/><path d="M103,98.692c0,2.379-1.929,4.308-4.308,4.308H70.308C67.929,103,66,101.071,66,98.692V70.308    C66,67.929,67.929,66,70.308,66h28.385c2.379,0,4.308,1.929,4.308,4.308V98.692z" fill="#FFF1E5"/><g><defs><path d="M103,57.692c0,2.379-1.929,4.308-4.308,4.308H70.308C67.929,62,66,60.071,66,57.692V29.308      C66,26.929,67.929,25,70.308,25h28.385c2.379,0,4.308,1.929,4.308,4.308V57.692z" id="SVGID_39_"/></defs><clipPath id="SVGID_6_"><use overflow="visible" xlink:href="#SVGID_39_"/></clipPath><polygon clip-path="url(#SVGID_6_)" fill="#DED3CD" points="92.45,42.383 75.898,45.734 93.08,63 103,63 103,52.899    "/></g><g><defs><path d="M103,98.692c0,2.379-1.929,4.308-4.308,4.308H70.308C67.929,103,66,101.071,66,98.692V70.308      C66,67.929,67.929,66,70.308,66h28.385c2.379,0,4.308,1.929,4.308,4.308V98.692z" id="SVGID_41_"/></defs><clipPath id="SVGID_8_"><use overflow="visible" xlink:href="#SVGID_41_"/></clipPath><polygon clip-path="url(#SVGID_8_)" fill="#DED3CD" points="92.607,78.245 79.068,79.263 75.692,81.076 81.266,86.68      75.883,90.391 88.485,103 103,103 102.872,88.613    "/></g><g><defs><path d="M62,98.692c0,2.379-1.929,4.308-4.308,4.308H29.308C26.929,103,25,101.071,25,98.692V70.308      C25,67.929,26.929,66,29.308,66h28.385C60.071,66,62,67.929,62,70.308V98.692z" id="SVGID_43_"/></defs><clipPath id="SVGID_10_"><use overflow="visible" xlink:href="#SVGID_43_"/></clipPath><polygon clip-path="url(#SVGID_10_)" fill="#DED3CD" points="49.8,78.391 37.725,90.465 50.235,103 63,103 63,90.451      50.262,77.728    "/></g><g><defs><path d="M62,57.692C62,60.071,60.071,62,57.692,62H29.308C26.929,62,25,60.071,25,57.692V29.308      C25,26.929,26.929,25,29.308,25h28.385C60.071,25,62,26.929,62,29.308V57.692z" id="SVGID_45_"/></defs><clipPath id="SVGID_12_"><use overflow="visible" xlink:href="#SVGID_45_"/></clipPath><polygon clip-path="url(#SVGID_12_)" fill="#DED3CD" points="44.108,43.932 35.731,45.684 53.027,63 63,63 63,52.952      45.785,35.813    "/></g><g><g><g><path d="M50.386,41.438h-3.949v-3.949c0-1.372-1.122-2.494-2.494-2.494h0c-1.372,0-2.494,1.122-2.494,2.494       v3.949h-3.949c-1.372,0-2.494,1.122-2.494,2.494c0,1.372,1.122,2.494,2.494,2.494h3.949v3.949c0,1.372,1.122,2.494,2.494,2.494       h0c1.372,0,2.494-1.122,2.494-2.494v-3.949h3.949c1.372,0,2.494-1.122,2.494-2.494C52.88,42.56,51.758,41.438,50.386,41.438z" fill="#59515C"/></g></g><g><path d="M90.501,46.426H77.614c-1.372,0-2.494-1.122-2.494-2.494l0,0c0-1.372,1.122-2.494,2.494-2.494h12.887      c1.372,0,2.494,1.122,2.494,2.494l0,0C92.996,45.304,91.873,46.426,90.501,46.426z" fill="#59515C"/></g><g><path d="M50.262,81.255l-9.113,9.112c-0.97,0.97-2.557,0.97-3.527,0l0,0c-0.97-0.97-0.97-2.557,0-3.527      l9.112-9.113c0.97-0.97,2.557-0.97,3.527,0l0,0C51.232,78.698,51.232,80.285,50.262,81.255z" fill="#59515C"/><path d="M41.15,77.728l9.113,9.113c0.97,0.97,0.97,2.557,0,3.527l0,0c-0.97,0.97-2.557,0.97-3.527,0      l-9.112-9.112c-0.97-0.97-0.97-2.557,0-3.527l0,0C38.592,76.758,40.18,76.758,41.15,77.728z" fill="#59515C"/></g><g><g><path d="M90.501,86.107H77.614c-1.372,0-2.494,1.122-2.494,2.494c0,1.372,1.122,2.494,2.494,2.494h12.887       c1.372,0,2.494-1.122,2.494-2.494C92.996,87.229,91.873,86.107,90.501,86.107z M77.614,81.989h12.887       c1.372,0,2.494-1.122,2.494-2.494c0-1.372-1.122-2.494-2.494-2.494H77.614c-1.372,0-2.494,1.122-2.494,2.494       C75.12,80.867,76.242,81.989,77.614,81.989z" fill="#59515C"/></g></g></g></g></g></svg>`
      );
    }

    addTextListLi(
      document.querySelectorAll(`.firstLi`).length + 1,
      `${inputTypingText}`
    );
    firstliLastEvent.target[0].value = "";
  });

  moveWrapAction();
  codeWrap.draggable = true;
}
addCodeWrap();

function addPlayer() {
  // 플레이어 생성
  const playerWrap = document.createElement("div"),
    playerContainer = document.createElement("div"),
    playerContainerUrlBox = document.createElement("div"),
    playerContainerUrlInner = document.createElement("form"),
    playerContainerUrlInnerVolume = document.createElement("input"),
    playerContainerUrlInnerDiv = document.createElement("div"),
    playerContainerUrlInnerInput = document.createElement("input"),
    playerContainerUrlTitel = document.createElement("div"),
    playerContainerUrlTitelDiv = document.createElement("div"),
    playerContainerUrlTitelP = document.createElement("p"),
    playerContainerUrlTitelP2 = document.createElement("p"),
    playerContainerUrlTitelTime = document.createElement("p"),
    playerContainerController = document.createElement("div"),
    playerContainerControllerPrev = document.createElement("div"),
    playerContainerControllerOnOff = document.createElement("div"),
    playerContainerControllerNext = document.createElement("div");

  playerWrap.classList = "playerWrap";
  playerWrap.classList += " moveWrap";
  playerContainer.className = "playerContainer";
  playerContainerUrlBox.className = "playerContainerUrlBox";
  playerContainerUrlInner.className = "playerContainerUrlInner";
  playerContainerUrlInnerVolume.className = "playerContainerUrlInnerVolume";
  playerContainerUrlInnerDiv.className = "playerContainerUrlInnerDiv";
  playerContainerUrlInnerInput.className = "playerContainerUrlInnerInput";
  playerContainerUrlTitel.className = "playerContainerUrlTitel";
  playerContainerUrlTitelDiv.className = "playerContainerUrlTitelDiv";
  playerContainerUrlTitelP.className = "playerContainerUrlTitelP";
  playerContainerUrlTitelP2.className = "playerContainerUrlTitelP2";
  playerContainerUrlTitelTime.className = "playerContainerUrlTitelTime";
  playerContainerController.className = "playerContainerController";
  playerContainerControllerPrev.className = "playerContainerControllerPrev";
  playerContainerControllerOnOff.className = "playerContainerControllerOnOff";
  playerContainerControllerNext.className = "playerContainerControllerNext";

  mainWrap.appendChild(playerWrap);
  addTopBtns(playerWrap, "Player", 4);
  playerWrap.appendChild(playerContainer);
  playerContainer.appendChild(playerContainerUrlBox);
  playerContainerUrlBox.appendChild(playerContainerUrlInner);
  playerContainerUrlInner.appendChild(playerContainerUrlInnerVolume);
  playerContainerUrlInner.appendChild(playerContainerUrlInnerDiv);
  playerContainerUrlInner.appendChild(playerContainerUrlInnerInput);
  playerContainer.appendChild(playerContainerUrlTitel);
  playerContainerUrlTitel.appendChild(playerContainerUrlTitelDiv);
  playerContainerUrlTitelDiv.appendChild(playerContainerUrlTitelP);
  playerContainerUrlTitelDiv.appendChild(playerContainerUrlTitelP2);
  playerContainerUrlTitel.appendChild(playerContainerUrlTitelTime);
  playerContainer.appendChild(playerContainerController);
  playerContainerController.appendChild(playerContainerControllerPrev);
  playerContainerController.appendChild(playerContainerControllerOnOff);
  playerContainerController.appendChild(playerContainerControllerNext);

  playerContainerUrlInnerDiv.innerHTML = `<?xml version="1.0" ?><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.11,15.39,8.23,19.27a2.52,2.52,0,0,1-3.5,0,2.47,2.47,0,0,1,0-3.5l3.88-3.88a1,1,0,1,0-1.42-1.42L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33l3.89-3.88a1,1,0,0,0-1.42-1.42ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L10.47,7.19a1,1,0,1,0,1.42,1.42l3.88-3.88a2.52,2.52,0,0,1,3.5,0,2.47,2.47,0,0,1,0,3.5l-3.88,3.88a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3.88-3.89A4.49,4.49,0,0,0,20.69,3.31ZM8.83,15.17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.92-4.92a1,1,0,1,0-1.42-1.42L8.83,13.75A1,1,0,0,0,8.83,15.17Z" fill="#f26600"/></svg>`;
  playerContainerControllerPrev.innerHTML = `<?xml version="1.0" ?><svg fill="#838383" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path d="M22.2,10.6l-9-5.4c-1-0.6-2.2,0.2-2.2,1.4v3.2L3.2,5.2C2.2,4.6,1,5.4,1,6.6v10.7c0,1.2,1.2,2,2.2,1.4l7.8-4.6   v3.2c0,1.2,1.2,2,2.2,1.4l9-5.4C23.3,12.8,23.3,11.2,22.2,10.6z" id="next"/></g></svg>`;
  playerContainerControllerNext.innerHTML = `<?xml version="1.0" ?><svg fill="#838383" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path d="M22.2,10.6l-9-5.4c-1-0.6-2.2,0.2-2.2,1.4v3.2L3.2,5.2C2.2,4.6,1,5.4,1,6.6v10.7c0,1.2,1.2,2,2.2,1.4l7.8-4.6   v3.2c0,1.2,1.2,2,2.2,1.4l9-5.4C23.3,12.8,23.3,11.2,22.2,10.6z" id="next"/></g></svg>`;
  playerContainerControllerOnOff.innerHTML = `<?xml version="1.0" ?><svg fill="#f26600" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path d="M3.9,18.9V5.1c0-1.6,1.7-2.6,3-1.8l12,6.9c1.4,0.8,1.4,2.9,0,3.7l-12,6.9C5.6,21.5,3.9,20.5,3.9,18.9z" id="play"/></g></svg>`;

  playerWrap.draggable = true;
  playerContainerUrlInnerInput.placeholder = "유튜브 url 입력";
  playerContainerUrlInnerVolume.type = "range";
  playerContainerUrlInnerVolume.value = "50";
  playerContainerUrlInnerVolume.min = "0";
  playerContainerUrlInnerVolume.max = "100";

  let onOff = false; // 재생 유무
  let audio = new Audio("music/A Typical Ride Out - Noir Et Blanc Vie.mp3"); // 디폴트값의 노래
  audio.pause();
  let sec = 0; // 노래 진행 시간초
  let songCount = 0; // 플레이 리스트 넘버 체크
  let fixDefaultMin = "";

  audio.autoplay = true;

  const songList = [
    // 음악 플레이 리스트
    `music/A Typical Ride Out - Noir Et Blanc Vie.mp3`,
    `music/Easy Saturday - Bad Snacks.mp3`,
    `music/Hot Hop Rok - Steve Adams.mp3`,
    `music/Luly - Text Me Records _ Grandbankss.mp3`,
    `music/Philly Crew - Danny Kean_Doug Maxwell.mp3`,
    `music/Realism - Text Me Records _ Grandbankss.mp3`,
    `music/Studio 2020 - Quincas Moreira.mp3`,
  ];

  playerContainerUrlInnerVolume.addEventListener("input", (e) => {
    // 볼륨 컨트롤 부분
    playerWrap.draggable = false;

    let target = e.target;
    if (e.target.type !== "range") {
      target = document.querySelector(".playerContainerUrlInnerVolume");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;
    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%"; // background-image로 진행바 같은 느낌으로 생성
    audio.volume = val / 100; // 볼륨조절
    return false;
  });
  playerContainerUrlInnerVolume.addEventListener("mouseup", (e) => {
    playerWrap.draggable = true;
  });

  const convertTime = function (time) {
    // 노래 시간초 계산하는 아이
    let mins = Math.floor(time / 60);
    if (mins < 10) {
      mins = "0" + String(mins);
    }
    let secs = Math.floor(time % 60);
    if (secs < 10) {
      secs = "0" + String(secs);
    }
    return mins + ":" + secs;
  };

  let TimeRun = setInterval(() => {
    // 시간초 이벤트
    if (onOff === true) {
      // 숫자를 시간으로 표기하는 함수
      sec += 0.01;
      let secMin = Math.floor(sec);
      if (sec >= secMin + 0.6) {
        // 흐르는 시간이 60초가 넘으면 분으로 올려주는 함수
        sec += 1;
        sec = Math.floor(sec);
      }

      playerContainerUrlTitelTime.innerHTML = `<span>${convertTime(
        audio.currentTime
      )}</span> / ${convertTime(audio.duration)}`;

      if (sec.toFixed(2) === fixDefaultMin) {
        // 노래가 끝날 경우
        sec = 0;
        audio.pause();
        nextSong();
      }
    }
  }, 1000);

  audio.addEventListener("ended", () => {
    nowTime = 0;
    audio.pause();
    nextSong();
  });

  function stratAction() {
    // 음악 시작버튼 액션
    if (onOff === false) {
      // 스타트
      audio.play();
      playerContainerControllerOnOff.innerHTML = `<?xml version="1.0" ?><svg fill="#f26600" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><g id="list"><path d="M20,2H4C2.9,2,2,2.9,2,4v4c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z"/><path d="M20,14H4c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-4C22,14.9,21.1,14,20,14z"/></g></g></svg>`;
      playerContainerControllerOnOff.style.transform = "rotate(270deg)";
    } else {
      // 정지
      audio.pause();
      playerContainerControllerOnOff.innerHTML = `<?xml version="1.0" ?><svg fill="#f26600" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path d="M3.9,18.9V5.1c0-1.6,1.7-2.6,3-1.8l12,6.9c1.4,0.8,1.4,2.9,0,3.7l-12,6.9C5.6,21.5,3.9,20.5,3.9,18.9z" id="play"/></g></svg>`;
      playerContainerControllerOnOff.style.transform = "rotate(0deg)";
    }
    onOff = !onOff; // on off 체인지
  }

  function playDefaultSet() {
    // 이부분임
    playerContainerUrlTitelP.innerText = `${audio.attributes[1].value.slice(6 )}`; // 노래 제목
    playerContainerUrlTitelP2.innerText = `${audio.attributes[1].value.slice(6 )}`; // 노래 제목
    playerWrap.children[0].children[0].innerText = `${audio.attributes[1].value.slice(
      6
    )}`;

    setTimeout(() => {
      // 창이 여러개 켜질경우 제목 옆에 (숫자)를 넣어줌으로 몇개의 창이 생성되었는지 보여주는 값 (player)는 노래 제목이 들어가야 함으로 별개의 함수로 다시 설정
      let checkPlayerWrapNum = playerContainerUrlTitelP.parentElement.parentElement.parentElement.classList[0];
      let PlayerWrapNumTitle = document.querySelectorAll(`.${checkPlayerWrapNum}`);

      if (PlayerWrapNumTitle.length >= 2) {
        playerContainerUrlTitelP.innerText = `${audio.attributes[1].value.slice(6)}(${PlayerWrapNumTitle.length})`; // 노래 제목
        playerContainerUrlTitelP2.innerText = `${audio.attributes[1].value.slice(6)}(${PlayerWrapNumTitle.length})`; // 노래 제목
        playerWrap.children[0].children[0].innerText = `${audio.attributes[1].value.slice(6)}(${PlayerWrapNumTitle.length})`;
      }
    }, 50);
    audio.addEventListener("loadeddata", (event) => {
      // audio의 데이터가 로드 되었을때 실행
      playerContainerUrlTitelTime.innerText = `${convertTime(audio.duration)}`; // 노래의 길이
    });
  }
  playDefaultSet();

  playerWrap.children[0].children[2].addEventListener("click", () => {
    // 닫기 버튼 클릭시
    audio.pause();
    audio.src = "";
  });

  function nextSong() {
    // 다음 버튼 함수
    audio.pause();
    songCount += 1;
    if (songCount === songList.length) {
      songCount = 0;
    }
    audio.src = `${songList[songCount]}`;
    sec = 0;
    audio.load();
    audio.play();
    onOff = false;
    stratAction();
    playDefaultSet();
    setInterval(TimeRun);
  }
  function prevSong() {
    // 이전 버튼 함수
    audio.pause();
    songCount -= 1;
    if (songCount === -1) {
      songCount = songList.length - 1;
    }
    audio.src = `${songList[songCount]}`;
    sec = 0;
    audio.load();
    audio.play();
    onOff = false;
    stratAction();
    playDefaultSet();
    setInterval(TimeRun);
  }

  function urlTyping(e) {
    if (e.type === "submit") {
      // 보낸 이벤트가 submit한 이벤트 일 경우 submit막기
      e.preventDefault();
    }

    let typing = "";

    if (e.type != undefined) {
      // submit값은 .target으로 아이콘을 클릭한 값은 바로 값을 입력
      if (e.target[1]) {
        // 입력된 url
        typing = e.target[1].value;
      } else {
        typing = e.target[0].value;
      }
    } else {
      typing = e;
    }

    let checkTypingUrl = "";
    let fixUrl = checkTypingUrl[checkTypingUrl.length - 1];

    if (typing.indexOf("list") != -1) {
      // 유튜브 url창의 주소 입력시
      checkTypingUrl = typing.split("/");
      fixUrl = checkTypingUrl[checkTypingUrl.length - 1];
    } else if (typing.indexOf("?") != -1) {
      checkTypingUrl = typing.split("?");
      checkTypingUrl = checkTypingUrl[1].slice(2);
      fixUrl = checkTypingUrl;
    } else {
      // 동영상 주소 복사 입력시
      checkTypingUrl = typing.split("/");
      fixUrl = checkTypingUrl[checkTypingUrl.length - 1];
    }

    playerWrap.style.transform = "rotate(360deg)"; // 이 부분부터는 새로운 영상 공유창을 위한 부분
    playerContainer.remove();

    const UrlContainer = document.createElement("div"),
      UrlContainerForm = document.createElement("form"),
      UrlContainerFormIcon = document.createElement("div"),
      UrlContainerFormInput = document.createElement("input"),
      UrlContainerObj = document.createElement("div"),
      UrlContainerObjInner = document.createElement("div");

    UrlContainer.className = "UrlContainer";
    UrlContainerForm.className = "UrlContainerForm";
    UrlContainerFormIcon.className = "UrlContainerFormIcon";
    UrlContainerFormInput.className = "UrlContainerFormInput";
    UrlContainerObj.className = "UrlContainerObj";
    UrlContainerObjInner.className = "UrlContainerObjInner";

    playerWrap.appendChild(UrlContainer);
    UrlContainer.appendChild(UrlContainerForm);
    UrlContainerForm.appendChild(UrlContainerFormIcon);
    UrlContainerForm.appendChild(UrlContainerFormInput);
    UrlContainer.appendChild(UrlContainerObj);
    UrlContainerObj.appendChild(UrlContainerObjInner);

    UrlContainerFormIcon.innerHTML = `<?xml version="1.0" ?><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.11,15.39,8.23,19.27a2.52,2.52,0,0,1-3.5,0,2.47,2.47,0,0,1,0-3.5l3.88-3.88a1,1,0,1,0-1.42-1.42L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33l3.89-3.88a1,1,0,0,0-1.42-1.42ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L10.47,7.19a1,1,0,1,0,1.42,1.42l3.88-3.88a2.52,2.52,0,0,1,3.5,0,2.47,2.47,0,0,1,0,3.5l-3.88,3.88a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3.88-3.89A4.49,4.49,0,0,0,20.69,3.31ZM8.83,15.17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.92-4.92a1,1,0,1,0-1.42-1.42L8.83,13.75A1,1,0,0,0,8.83,15.17Z" fill="#f26600"/></svg>`;
    UrlContainerObjInner.innerHTML = `
        <iframe width="1280" height="720" src="//youtube.com/embed/${fixUrl}" title="Cgm Youtube Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <path fill="black">
                <animate attributeName="d"
                    dur="30s"
                    repeatCount="indefinite"
                    
                    values="M411,322Q333,394,230,428.5Q127,463,104,356.5Q81,250,136.5,200Q192,150,251,148.5Q310,147,399.5,198.5Q489,250,411,322Z;
                            
                    M388,356.5Q373,463,264.5,438.5Q156,414,80,332Q4,250,95.5,195.5Q187,141,250,141Q313,141,358,195.5Q403,250,388,356.5Z;
                    
                    M387.5,317Q327,384,227,423.5Q127,463,107.5,356.5Q88,250,124,171.5Q160,93,257.5,80.5Q355,68,401.5,159Q448,250,387.5,317Z;
                    
                    M390.5,298.5Q306,347,245,355.5Q184,364,112,307Q40,250,87.5,150Q135,50,221.5,99.5Q308,149,391.5,199.5Q475,250,390.5,298.5Z;
                    
                    M371.57062,328.47151Q340.70386,406.94302,242.89674,419.64955Q145.08962,432.35608,106.21602,341.17804Q67.34243,250,114.84243,174.71335Q162.34243,99.4267,269.34926,65.84778Q376.35608,32.26885,389.39674,141.13442Q402.43739,250,371.57062,328.47151Z;
                    
                    M391.5,317Q327,384,259.5,367.5Q192,351,136.5,300.5Q81,250,133,193.5Q185,137,259.5,120.5Q334,104,395,177Q456,250,391.5,317Z;
                    
                    M415,336.5Q350,423,259.5,407Q169,391,116.5,320.5Q64,250,97.5,147.5Q131,45,247,50Q363,55,421.5,152.5Q480,250,415,336.5Z;
                    
                    M411,322Q333,394,230,428.5Q127,463,104,356.5Q81,250,136.5,200Q192,150,251,148.5Q310,147,399.5,198.5Q489,250,411,322Z;">
                
                </animate>
            </path>
        </svg>
    `;
    playerWrap.children[0].children[0].innerText = `youtube Player`; // youtube player 부분

    UrlContainerFormIcon.addEventListener("click", () => {
      // 새로 생성된 youtube창 url 부분 클릭
      UrlContainerFormIcon.classList.toggle("rotate");
      UrlContainerFormInput.classList.toggle("open");
      if (UrlContainerFormInput.value != "") {
        // 엔터가 아닌 url 아이콘 부분 클릭해도 넘어가도록
        UrlContainer.remove();
        urlTyping(UrlContainerFormInput.value);
      }
    });

    UrlContainerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      UrlContainer.remove();
      urlTyping(e);
    });
  }

  playerContainerUrlInner.addEventListener("submit", urlTyping); // url 입력시 다시 생성되는 창

  playerContainerControllerOnOff.addEventListener("click", stratAction); // 재생버튼 이벤트

  playerContainerControllerNext.addEventListener("click", nextSong); // 다음 버튼 이벤트
  playerContainerControllerPrev.addEventListener("click", prevSong); // 이전 버튼 이벤트

  playerContainerUrlInnerDiv.addEventListener("click", (e) => {
    // 기존 영역 url아이콘 클릭시 이벤트
    // url부분 클릭시 이벤트
    playerContainerUrlInnerDiv.classList.toggle("rotate");
    playerContainerUrlInnerInput.classList.toggle("open");
    if (playerContainerUrlInnerInput.value != "") {
      // 엔터가 아닌 url 아이콘 부분 클릭해도 넘어가도록
      urlTyping(playerContainerUrlInnerInput.value);
    }
  });
  moveWrapAction(); // 창 이동 이벤트 재 할당
}
if (isCheck === false) {
  //pc일때만 플레이어 기본 생성
  addPlayer();
}

const mainBarEvent = () => {
  // 플레이트 컷 이벤트 내용
  mainWrap.appendChild(PfPageWrap); // 플레이트 Wrap생성

  stickyBarTop.style.transform = "rotate(0deg)";
  stickyBarBottom.style.bottom = "0%";
  stickyBarTop.style.bottom = "6.6%";
  mainWrap.style.transform = "scale(0.5)rotate(180deg)";
  PfPageWrap.style.opacity = "1";
  if (isCheck) {
    stickyBarTop.style.bottom = "6.6%";
  } else {
    stickyBarTop.style.bottom = "12.6%";
  }

  setTimeout(() => {
    stickyBarTop.style.transform = "rotate(90deg)";
    stickyBarBottom.style.bottom = "-14.9%";
    stickyBarTop.style.bottom = "0";
    mainWrap.style.transform = "scale(1)";
    wrap.innerHTML = "";

    firstPage();
  }, 2000);
  setTimeout(() => {
    stickyBarTop.remove();
    stickyBarBottom.remove();
  }, 3000);
};
loadBar();

UIBox.addEventListener("click", function (e) {
  UIBox.classList.toggle("active");
  moNavconClickHint.remove();
});

function moveWrapAction() {
  // 창 이동 함수
  let moveWrap = document.querySelectorAll(".moveWrap");
  moveWrap.forEach((move) => {
    // moveWrap이라는 클래스를 가지면 움직일수있음
    if (isCheck === true) {
      move.addEventListener("touchstart", function (e) {
        // 모바일 퀵 버튼 부분 move 이벤트
        move.style.zIndex = "4";
        this.style.zIndex = "5";
        let shiftX =
            e.changedTouches[0].clientX - this.getBoundingClientRect().left,
          shiftY =
            e.changedTouches[0].clientY - this.getBoundingClientRect().top,
          traget = null;
        move.addEventListener("touchmove", function (e) {
          if (e.stopPropagation) e.stopPropagation();
          if (e.preventDefault) e.preventDefault();
          e.cancelBubble = true;
          e.returnValue = false;

          this.style.left = e.changedTouches[0].pageX - shiftX + "px";
          this.style.top = e.changedTouches[0].pageY - shiftY + "px";
        });

        this.addEventListener("touchend", function (e) {
          this.style.zIndex = "4";
        });
      });
    } else {
      move.addEventListener("dragstart", function (e) {
        // pc 퀵 버튼 부분 move 이벤트
        move.style.zIndex = "4";
        this.style.zIndex = "5";

        let shiftX = e.clientX + 80 - this.getBoundingClientRect().left,
          shiftY = e.clientY + 70 - this.getBoundingClientRect().top;

        this.style.cursor = "grabbing";

        this.addEventListener("dragover", function (e) {
          this.style.cursor = "grabbing";
          this.style.left = e.pageX - shiftX + 10 + "px";
          this.style.top = e.pageY - shiftY + "px";
        });

        this.addEventListener("mouseup", function () {
          this.style.cursor = "pointer";
          e.stopImmediatePropagation;
        });
      });
    }
  });
}
moveWrapAction();

function addWeatherBox() {
  // 날씨 Wrap 생성

  const API_KEY = "c65eec58bb72eba4ba267415b3d37432";
  function getWeather(lat, lng) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
      .then(function (response) {
        // .then = fetch가 완료 된 후 실행됨
        return response.json(); // json형태로 변환
      })
      .then(function (json) {
        const temperature = json.main.temp,
          place = json.name,
          nowWeather = json.weather[0].main;

        const weatherWrap = document.createElement("div"), // 날씨 wrap 생성
          weatherWrapContainer = document.createElement("div"),
          weatherWrapTemperature = document.createElement("p"),
          weatherWrapWeacther = document.createElement("div"),
          weatherWrapPlace = document.createElement("p");

        weatherWrap.classList = "weatherWrap";
        weatherWrap.classList += " moveWrap";
        weatherWrapContainer.className = "weatherWrapContainer";
        weatherWrapTemperature.className = "weatherWrapTemperature";
        weatherWrapWeacther.className = "weatherWrapWeacther";
        weatherWrapPlace.className = "weatherWrapPlace";

        mainWrap.appendChild(weatherWrap);
        addTopBtns(weatherWrap, "Weather", 3);
        weatherWrap.appendChild(weatherWrapContainer);
        weatherWrapContainer.appendChild(weatherWrapTemperature);
        weatherWrapContainer.appendChild(weatherWrapWeacther);
        weatherWrapContainer.appendChild(weatherWrapPlace);

        weatherWrapTemperature.innerText = `${temperature.toFixed()}`;

        if(nowWeather.indexOf("rain") === 0) {
          console.log("작동")
        }
        if (nowWeather.indexOf("Clouds") === 0) {
          // 구름
          weatherWrapWeacther.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
        } else if (nowWeather.indexOf("rain") === 0) {
          // 비
          weatherWrapWeacther.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
        } else if (nowWeather.indexOf("sun") === 0 || nowWeather.indexOf("Clear") === 0) {
          // 맑음
          weatherWrapWeacther.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        } else if (nowWeather.indexOf("snow") === 0) {
          // 눈
          weatherWrapWeacther.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
        } else if (nowWeather.indexOf("strom") === 0) {
          // 천둥
          weatherWrapWeacther.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
        }
        weatherWrapPlace.innerText = `${place}`;

        weatherWrap.draggable = true;

        moveWrapAction(); // 창 이동 이벤트 재 할당
      });
  }

  function weatherLoadCoords() {
    const loadedCoords = localStorage.getItem(COORDS); // localStorage에서 위치정보 가져옴
    if (loadedCoords === null) {
      // 위치 정보가 없으면
      askForCoords(); // 위치 정보 요청 함수
    } else {
      const parseCoords = JSON.parse(loadedCoords); // json형식을 객체 타입으로 바꿔서 저장
      getWeather(parseCoords.latitude, parseCoords.longitude); // 날씨 요청 함수
    }
  }
  weatherLoadCoords();
}
if (isCheck === false) {
  addWeatherBox();
}

function autoText(_, counter = 0) {
  // 계산기 부분
  function calculator() {
    const calculatorWrap = document.createElement("div"),
      calculatorWrapCotainer = document.createElement("div"),
      calculatorHintWrap = document.createElement("p"),
      calculatorForm = document.createElement("form"),
      calculatorInput = document.createElement("input"),
      calculatorPad = document.createElement("div"),
      calculatorUl = document.createElement("ul"),
      calculatorLi1 = document.createElement("li"),
      calculatorLi2 = document.createElement("li"),
      calculatorLi3 = document.createElement("li"),
      calculatorLi4 = document.createElement("li"),
      calculatorLi5 = document.createElement("li"),
      calculatorLi6 = document.createElement("li"),
      calculatorLi7 = document.createElement("li"),
      calculatorLi8 = document.createElement("li"),
      calculatorLi9 = document.createElement("li"),
      calculatorLi10 = document.createElement("li"),
      calculatorLi11 = document.createElement("li"),
      calculatorLi12 = document.createElement("li"),
      calculatorLi13 = document.createElement("li"),
      calculatorLi14 = document.createElement("li"),
      calculatorLi15 = document.createElement("li"),
      calculatorLi16 = document.createElement("li"),
      calculatorLi17 = document.createElement("li");

    calculatorWrap.className = "calculatorWrap";
    calculatorWrap.className += " moveWrap";
    calculatorWrapCotainer.className = "calculatorWrapCotainer";
    calculatorHintWrap.className = `calculatorHintWrap`;
    calculatorForm.className = "calculatorForm";
    calculatorInput.className = "calculatorInput";
    calculatorPad.className = "calculatorPad";
    calculatorUl.className = "calculatorUl";
    calculatorLi1.className = "calculatorLi";
    calculatorLi2.className = "calculatorLi";
    calculatorLi3.className = "calculatorLi";
    calculatorLi4.className = "calculatorLi";
    calculatorLi5.className = "calculatorLi";
    calculatorLi6.className = "calculatorLi";
    calculatorLi7.className = "calculatorLi";
    calculatorLi8.className = "calculatorLi";
    calculatorLi9.className = "calculatorLi";
    calculatorLi10.className = "calculatorLi";
    calculatorLi11.className = "calculatorLi";
    calculatorLi12.className = "calculatorLi";
    calculatorLi13.className = "calculatorLi";
    calculatorLi14.className = "calculatorLi";
    calculatorLi15.className = "calculatorLi";
    calculatorLi16.className = "calculatorLi";
    calculatorLi17.className = "calculatorLi";

    calculatorWrap.draggable = true;
    calculatorInput.type = "text";
    calculatorInput.autocomplete = "off";
    calculatorInput.placeholder = "1+1";
    calculatorLi1.innerText = "C";
    calculatorLi2.innerText = "/";
    calculatorLi3.innerText = "*";
    calculatorLi4.innerText = "-";
    calculatorLi5.innerText = "7";
    calculatorLi6.innerText = "8";
    calculatorLi7.innerText = "9";
    calculatorLi8.innerText = "+";
    calculatorLi9.innerText = "4";
    calculatorLi10.innerText = "5";
    calculatorLi11.innerText = "6";
    calculatorLi12.innerText = "1";
    calculatorLi13.innerText = "2";
    calculatorLi14.innerText = "3";
    calculatorLi15.innerText = "=";
    calculatorLi16.innerText = "0";
    calculatorLi17.innerText = ".";

    addTopBtns(calculatorWrap, "calculator", 2);
    mainWrap.appendChild(calculatorWrap);
    calculatorWrap.appendChild(calculatorWrapCotainer);
    calculatorForm.appendChild(calculatorHintWrap);
    calculatorWrapCotainer.appendChild(calculatorForm);
    calculatorForm.appendChild(calculatorInput);
    calculatorWrapCotainer.appendChild(calculatorPad);
    calculatorPad.appendChild(calculatorUl);
    calculatorUl.appendChild(calculatorLi1);
    calculatorUl.appendChild(calculatorLi2);
    calculatorUl.appendChild(calculatorLi3);
    calculatorUl.appendChild(calculatorLi4);
    calculatorUl.appendChild(calculatorLi5);
    calculatorUl.appendChild(calculatorLi6);
    calculatorUl.appendChild(calculatorLi7);
    calculatorUl.appendChild(calculatorLi8);
    calculatorUl.appendChild(calculatorLi9);
    calculatorUl.appendChild(calculatorLi10);
    calculatorUl.appendChild(calculatorLi11);
    calculatorUl.appendChild(calculatorLi12);
    calculatorUl.appendChild(calculatorLi13);
    calculatorUl.appendChild(calculatorLi14);
    calculatorUl.appendChild(calculatorLi15);
    calculatorUl.appendChild(calculatorLi16);
    calculatorUl.appendChild(calculatorLi17);

    moveWrapAction(); // 창 이동 이벤트 재 할당
    calculatorForm.addEventListener("submit", (e) => {
      e.preventDefault();
    }); // 계산기의 submit이벤트 막기

    let allKey = document.querySelectorAll(".calculatorLi"); // 계산기 클릭시 색 변경 이벤트
    allKey.forEach((allKey) => {
      allKey.addEventListener("click", function () {
        allKey.style.background = "dimgrey";
        setTimeout(() => {
          allKey.style.background = `linear-gradient(135deg, #2a2a2a, #000000)`;
        }, 100);
      });
    });

    calculatorUl.addEventListener("click", function (e) {
      // 계산기 클릭 이벤트
      let checkInputOper = e.target.innerText;
      if (
        checkInputOper === "+" ||
        checkInputOper === "-" ||
        checkInputOper === "*" ||
        checkInputOper === "/" ||
        checkInputOper === "c" ||
        checkInputOper === "="
      ) {
        calculatorAnswer(calculatorInput.value, e.target.innerText);
        return;
      } else {
        calculatorInput.value = calculatorInput.value + e.target.innerText;
      }
      calculatorAnswer(calculatorInput.value, e.target.innerText);
    });
    calculatorInput.addEventListener("keydown", function (e) {
      // 계산기 클릭이 아니라 키보드로 입력할때

      let allKey = document.querySelectorAll(".calculatorLi");

      function keyDown() {
        let downKey = e.key;
        if (downKey === "Enter") {
          // enter의 값을 = 랑 같도록 설정
          downKey = "=";
        }
        allKey.forEach((allKey) => {
          if (downKey === allKey.innerText) {
            allKey.style.background = "dimgrey";
            setTimeout(() => {
              allKey.style.background = `linear-gradient(135deg, #2a2a2a, #000000)`;
            }, 100);
          }
        });
        calculatorAnswer(calculatorInput.value, downKey);
      }
      keyDown();
    });

    function calculatorAnswer(value, set) {
      if (set === "+" || set === "-" || set === "*" || set === "/") {
        // 이상한 입력값 막기
        if (calculatorSet === true) {
          alert("올바른 값을 입력해주세요");
          calculatorInput.value = "";
          calculatorSet = true;
          return false;
        }

        calculatorSet = true;
        if (
          value.slice(0, 1) === "-" ||
          value.slice(0, 1) === "+" ||
          value.slice(0, 1) === "*" ||
          value.slice(0, 1) === "/"
        ) {
          value = value.slice(1, value.length);
        }
        calculatorAnswerValue.push(value, set);
        setTimeout(() => {
          // 계산값에 대한 현재 입력되어 있는 값
          calculatorHintWrap.style.paddingRight = `5px`;
          calculatorHintWrap.innerText = `${calculatorAnswerValue[0]}${calculatorAnswerValue[1]}`;
          calculatorInput.value = "";
        }, 100);
      } else if (!isNaN(set)) {
        calculatorSet = false;
      }
      if (set === "=") {
        // 계산 결과 도출 이벤트
        calculatorAnswerValue.push(value);
        calculatorAnswerValue.map((list) => {
          if (list === "") {
            // 값이 비어있다면
            calculatorInput.value = "";
            alert("올바른 값을 입력해주세요");
            calculatorAnswerValue = [];
            return false;
          }
        });

        let calculatorCounter = calculatorAnswerValue.length / 2 - 0.5; // 연산 횟수
        for (counter = 1; counter <= calculatorCounter; counter++) {
          //실제 연산 영역

          if (calculatorAnswerValue[1] === "+") {
            let answer =
              Number(calculatorAnswerValue[0]) +
              Number(calculatorAnswerValue[2]);
            calculatorAnswerValue[2] = answer;
            calculatorAnswerValue.shift();
            calculatorAnswerValue.shift();
          } else if (calculatorAnswerValue[1] === "-") {
            let answer =
              Number(calculatorAnswerValue[0]) -
              Number(calculatorAnswerValue[2]);
            calculatorAnswerValue[2] = answer;
            calculatorAnswerValue.shift();
            calculatorAnswerValue.shift();
          } else if (calculatorAnswerValue[1] === "*") {
            let answer =
              Number(calculatorAnswerValue[0]) *
              Number(calculatorAnswerValue[2]);
            calculatorAnswerValue[2] = answer;
            calculatorAnswerValue.shift();
            calculatorAnswerValue.shift();
          } else if (calculatorAnswerValue[1] === "/") {
            let answer =
              Number(calculatorAnswerValue[0]) /
              Number(calculatorAnswerValue[2]);
            calculatorAnswerValue[2] = answer;
            calculatorAnswerValue.shift();
            calculatorAnswerValue.shift();
          }
        }
        calculatorHintWrap.style.paddingRight = 0;
        calculatorHintWrap.innerText = ""; // 힌트 삭제
        calculatorInput.value = calculatorAnswerValue; // 연산된 값 출력
        calculatorAnswerValue = []; // 출력후 값으 저장되었던 배열 삭제
      }
    }
    calculatorLi1.addEventListener("click", function (e) {
      // 초기화 버튼 액션
      calculatorAnswerValue = [];
      calculatorHintWrap.style.paddingRight = 0;
      calculatorHintWrap.innerText = ""; // 힌트 삭제
      setTimeout(() => {
        calculatorInput.value = "";
      }, 10);
    });
  }

  UIBoxInnerDiv1.addEventListener("click", mainBarEvent);
  UIBoxInnerDiv2.addEventListener("click", () => {
    if (runEvent === true) {
      alert("아직 이벤트가 진행중입니다.");
      return false;
    }
    addTextListLi(
      document.querySelectorAll(`.firstLi`).length + 1,
      `${time}입니다.`
    );
  });
  UIBoxInnerDiv3.addEventListener("click", () => {
    if (footerWrap.className.indexOf("active")===0) {
      addWeatherBox();
      footerWrap.childNodes[3].style.background = "rgba(100, 100, 255, 0.3)";
    }
  });
  UIBoxInnerDiv4.addEventListener("click", () => {
    calculator();
    footerWrap.childNodes[1].style.background = "rgba(100, 100, 255, 0.3)";
  });

  // 하단 퀵 버튼 생성 함수
  function footerQuick(Wrapnum, readyOn, Icon) {
    footerWrap.appendChild(
      eval(`footerIconWrap${Wrapnum} = document.createElement("div")`)
    );
    eval(`footerIconWrap${Wrapnum}`).appendChild(
      eval(`footerIconWrapDiv${Wrapnum} = document.createElement("div")`)
    );

    eval(`footerIconWrap${Wrapnum}`).className = `footerIconWrap`;
    eval(`footerIconWrapDiv${Wrapnum}`).className = `footerIconWrapDiv`;

    eval(`footerIconWrapDiv${Wrapnum}`).innerHTML = `${Icon}`;

    if (readyOn === true) {
      eval(`footerIconWrap${Wrapnum}`).style.background =
        "rgba(100,100,255,0.3)";
    }

    eval(`footerIconWrap${Wrapnum}`).addEventListener("click", () => {
      if (Wrapnum === 1) {
        calculator();
        eval(`footerIconWrap${Wrapnum}`).style.background =
          "rgba(100,100,255,0.3)";
      } else if (Wrapnum === 2) {
        if (runEvent === true) {
          alert("초기 이벤트를 아직 진행중입니다.");
          return false;
        }
        addCodeWrap();
        eval(`footerIconWrap${Wrapnum}`).style.background =
          "rgba(100,100,255,0.3)";
      } else if (Wrapnum === 3) {
        addWeatherBox();
        eval(`footerIconWrap${Wrapnum}`).style.background =
          "rgba(100,100,255,0.3)";
      } else if (Wrapnum === 4) {
        addPlayer();
        eval(`footerIconWrap${Wrapnum}`).style.background =
          "rgba(100,100,255,0.3)";
      }
    });
  }

  // 화면 하단 퀵 버튼
  if (isCheck === false) {
    footerQuick(
      1, // 순서
      false, // 하단 퀵바에서 true시 기본 선택으로 바뀜
      `<?xml version="1.0" ?><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.5,8H6v.5a1,1,0,0,0,2,0V8h.5a1,1,0,0,0,0-2H8V5.5a1,1,0,0,0-2,0V6H5.5a1,1,0,0,0,0,2ZM4.88,19.12a1,1,0,0,0,1.41,0L7,18.41l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L8.41,17l.71-.71a1,1,0,0,0-1.41-1.41L7,15.59l-.71-.71a1,1,0,0,0-1.41,1.41l.71.71-.71.71A1,1,0,0,0,4.88,19.12ZM20,1H4A3,3,0,0,0,1,4V20a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V4A3,3,0,0,0,20,1ZM11,21H4a1,1,0,0,1-1-1V13h8Zm0-10H3V4A1,1,0,0,1,4,3h7Zm10,9a1,1,0,0,1-1,1H13V13h8Zm0-9H13V3h7a1,1,0,0,1,1,1Zm-5.5,5.5h3a1,1,0,0,0,0-2h-3a1,1,0,0,0,0,2ZM18.5,6h-3a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm-3,13.5h3a1,1,0,0,0,0-2h-3a1,1,0,0,0,0,2Z" fill="#764ba2"/></svg>`
    );
    footerQuick(
      2,
      true,
      `<?xml version="1.0" ?><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z" fill="#764ba2"/><path d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z" fill="#764ba2"/><path d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z" fill="#764ba2"/></svg>`
    );
    footerQuick(
      3,
      true,
      `<?xml version="1.0" ?><svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Sunny" stroke="none" stroke-width="1"><g stroke="#764ba2" stroke-width="2" transform="translate(2.000000, 2.000000)"><circle cx="14" cy="14" id="Oval-4" r="8"/><path d="M14,0 L14,3 M23.8994949,4.10050506 L21.7781746,6.22182541 M28,14 L25,14 M23.8994949,23.8994949 L21.7781746,21.7781746 M14,28 L14,25 M4.10050506,23.8994949 L6.22182541,21.7781746 M3.83475851e-17,14 L3,14 M4.10050506,4.10050506 L6.22182541,6.22182541" id="Path-7" stroke-linecap="round"/></g></g></svg>`
    );
    footerQuick(
      4,
      true,
      `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg id="Layer_1" style="enable-background:new 0 0 64 64;" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">.st0{fill:#764ba2;}</style><g><g id="Icon-Play" transform="translate(128.000000, 278.000000)"><path class="st0" d="M-95.9-222c-13.2,0-23.9-10.7-23.9-23.9s10.7-23.9,23.9-23.9S-72-259.1-72-245.9     S-82.7-222-95.9-222L-95.9-222z M-95.9-267.2c-11.7,0-21.3,9.6-21.3,21.3c0,11.7,9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3     C-74.6-257.7-84.2-267.2-95.9-267.2L-95.9-267.2z" id="Fill-124"/><path class="st0" d="M-103-233.6v-24.7l21.2,12.4L-103-233.6L-103-233.6z M-100.2-253.4v14.9l12.7-7.4     L-100.2-253.4L-100.2-253.4z" id="Fill-125"/></g></g></svg>`
    );
  } else {
    footerQuick(
      1,
      false,
      `<?xml version="1.0" ?><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.5,8H6v.5a1,1,0,0,0,2,0V8h.5a1,1,0,0,0,0-2H8V5.5a1,1,0,0,0-2,0V6H5.5a1,1,0,0,0,0,2ZM4.88,19.12a1,1,0,0,0,1.41,0L7,18.41l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L8.41,17l.71-.71a1,1,0,0,0-1.41-1.41L7,15.59l-.71-.71a1,1,0,0,0-1.41,1.41l.71.71-.71.71A1,1,0,0,0,4.88,19.12ZM20,1H4A3,3,0,0,0,1,4V20a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V4A3,3,0,0,0,20,1ZM11,21H4a1,1,0,0,1-1-1V13h8Zm0-10H3V4A1,1,0,0,1,4,3h7Zm10,9a1,1,0,0,1-1,1H13V13h8Zm0-9H13V3h7a1,1,0,0,1,1,1Zm-5.5,5.5h3a1,1,0,0,0,0-2h-3a1,1,0,0,0,0,2ZM18.5,6h-3a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm-3,13.5h3a1,1,0,0,0,0-2h-3a1,1,0,0,0,0,2Z" fill="#764ba2"/></svg>`
    );
    footerQuick(
      2,
      true,
      `<?xml version="1.0" ?><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z" fill="#764ba2"/><path d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z" fill="#764ba2"/><path d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z" fill="#764ba2"/></svg>`
    );
    footerQuick(
      3,
      false,
      `<?xml version="1.0" ?><svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Sunny" stroke="none" stroke-width="1"><g stroke="#764ba2" stroke-width="2" transform="translate(2.000000, 2.000000)"><circle cx="14" cy="14" id="Oval-4" r="8"/><path d="M14,0 L14,3 M23.8994949,4.10050506 L21.7781746,6.22182541 M28,14 L25,14 M23.8994949,23.8994949 L21.7781746,21.7781746 M14,28 L14,25 M4.10050506,23.8994949 L6.22182541,21.7781746 M3.83475851e-17,14 L3,14 M4.10050506,4.10050506 L6.22182541,6.22182541" id="Path-7" stroke-linecap="round"/></g></g></svg>`
    );
    footerQuick(
      4,
      false,
      `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg id="Layer_1" style="enable-background:new 0 0 64 64;" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">.st0{fill:#764ba2;}</style><g><g id="Icon-Play" transform="translate(128.000000, 278.000000)"><path class="st0" d="M-95.9-222c-13.2,0-23.9-10.7-23.9-23.9s10.7-23.9,23.9-23.9S-72-259.1-72-245.9     S-82.7-222-95.9-222L-95.9-222z M-95.9-267.2c-11.7,0-21.3,9.6-21.3,21.3c0,11.7,9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3     C-74.6-257.7-84.2-267.2-95.9-267.2L-95.9-267.2z" id="Fill-124"/><path class="st0" d="M-103-233.6v-24.7l21.2,12.4L-103-233.6L-103-233.6z M-100.2-253.4v14.9l12.7-7.4     L-100.2-253.4L-100.2-253.4z" id="Fill-125"/></g></g></svg>`
    );
  }
}
// 화면 최하단 우측 시간 부분
footerWrapTime.innerHTML = `${time.slice(0, time.length - 7)}`; // 첫 실행
setInterval(() => {
  // 실행 후 1분 마다 리셋
  time = Intl.DateTimeFormat("kr", {
    dateStyle: "full",
    timeStyle: "full",
  }).format(new Date());
  footerWrapTime.innerHTML = `${time.slice(0, time.length - 7)}`;
}, 1000);

window.addEventListener("load", autoText);

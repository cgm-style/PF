//기본설정
// weather.js
const COORDS = "coords";

function saveCoords(coordsObj) { // localStorage에 저장
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) { // 요청 수락
    const latitude = position.coords.latitude; 
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj); // localStorage에 저장 함수
}

function handleGeoError() { // 요청 거절
    
}

function askForCoords() { // 사용자 위치 요청 (요청 수락, 요청 거절)
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

// 각종 기초값 셋팅부분
let nextNum = 0;
let runEvent = true;
let loadText = true;
let time = Intl.DateTimeFormat('kr',{dateStyle:'full', timeStyle: 'full'}).format(new Date);
let calculatorAnswerValue = [];
let calculatorSet = false;


const user = navigator.userAgent;   // Pc/Mobile 체크
let isCheck = false;

if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) {
    isCheck = true;
}


const mainWrap = document.querySelector("#wrap");   // 화면 전체 dom
    const mainWrapBg = document.createElement("div");
        const mainWrapBgGradient = document.createElement("div");
        const mainWrapBgTree = document.createElement("div");
        const mainWrapBgLines = document.createElement("div");
        const mainWrapBgText = document.createElement("p");
    const footerWrap = document.createElement("div");   // 화면 하단의 footer
        const footerWrapTime = document.createElement("div");
    const codeWrap = document.createElement("div");    // 아래 모든 영역을 포함한 dom
    const firstBg = document.createElement("form");  // 메인 화면에서의 컨텐츠
        const firstUl = document.createElement("ui");
            const firstliLast = document.createElement("form");
                const firstliLastInput = document.createElement("input");
                const firstliLastButton = document.createElement("button");
    const innerContainer = document.createElement("div");   // 실제 화면에서 보여지는 영역

    const stickyBarTop = document.createElement("div"); // 플레이트의 윗 부분
    const stickyBarBottom = document.createElement("div");  // 플레이트의 아랫부분

    const UIBox = document.createElement("div"); // 퀵버튼
        const UIBoxInner = document.createElement("div");
            const UIBoxInnerDiv1 = document.createElement("div");
            const UIBoxInnerDiv2 = document.createElement("div");
            const UIBoxInnerDiv3 = document.createElement("div");
            const UIBoxInnerDiv4 = document.createElement("div");

function loadBar() {    // 기본 창들 생성
    mainWrapBg.id = "mainWrapBg";
    mainWrapBgGradient.id = "mainWrapBgGradient";
    mainWrapBgTree.id = "mainWrapBgTree";
    mainWrapBgLines.id = "mainWrapBgLines";
    mainWrapBgText.id = "mainWrapBgText";
    footerWrap.id = "footerWrap";
    footerWrapTime.id = "footerWrapTime";
    stickyBarTop.id = "stickyBarTop";   // 각 dom마다 컨트롤 하기 쉽게 선택자 입력
    firstBg.id = "firstBg";
    UIBox.id = "UIBox";
    UIBox.className =  "moveWrap";
        UIBoxInner.id ="UIBoxInner";
            UIBoxInnerDiv1.className = "UIBoxInnerDiv";
            UIBoxInnerDiv2.className = "UIBoxInnerDiv";
            UIBoxInnerDiv3.className = "UIBoxInnerDiv";
            UIBoxInnerDiv4.className = "UIBoxInnerDiv";
    firstUl.id = "firstUl";
    firstliLast.id = "firstLastLi";
        firstliLastInput.id = "firstliLastInput";
        firstliLastButton.id = "firstliLastButton";
    stickyBarBottom.id = "stickyBarBottom";
    codeWrap.id = "codeWrap";
    codeWrap.className = "moveWrap";
    innerContainer.id = "innerContainer";

    mainWrap.appendChild(footerWrap);
    footerWrap.appendChild(footerWrapTime);
    mainWrap.appendChild(mainWrapBg);
        mainWrapBg.appendChild(mainWrapBgGradient);
        mainWrapBg.appendChild(mainWrapBgTree);
        mainWrapBg.appendChild(mainWrapBgLines);
        mainWrapBg.appendChild(mainWrapBgText);
    mainWrap.appendChild(codeWrap);    // 실제 dom 생성
    codeWrap.appendChild(firstBg);
    mainWrap.appendChild(UIBox);
        UIBox.appendChild(UIBoxInner);
            UIBoxInner.appendChild(UIBoxInnerDiv1);
            UIBoxInner.appendChild(UIBoxInnerDiv2);
            UIBoxInner.appendChild(UIBoxInnerDiv3);
            UIBoxInner.appendChild(UIBoxInnerDiv4);
        firstBg.appendChild(firstUl);
        codeWrap.appendChild(firstliLast);
            firstliLast.appendChild(firstliLastInput);
            firstliLast.appendChild(firstliLastButton);
    codeWrap.appendChild(innerContainer);
    codeWrap.appendChild(stickyBarTop);
    codeWrap.appendChild(stickyBarBottom);
    
    mainWrapBgText.innerText = "CGM Style";
    firstliLastButton.innerText = "입력";
    firstliLastInput.autocomplete="off";
    firstliLastInput.placeholder = "'자세히보기'또는 '도움말'이라고 입력해주세요";
    UIBoxInnerDiv1.style = "--i:0;--x:0;--y:0;"
    UIBoxInnerDiv2.style = "--i:1;--x:2;--y:0;"
    UIBoxInnerDiv3.style = "--i:2;--x:0;--y:2;"
    UIBoxInnerDiv4.style = "--i:3;--x:2;--y:2;"
    UIBoxInnerDiv1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z"></path><path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z"></path></svg>`;
    UIBoxInnerDiv2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M10.25 0a.75.75 0 000 1.5h1v1.278a9.955 9.955 0 00-5.635 2.276L4.28 3.72a.75.75 0 00-1.06 1.06l1.315 1.316A9.962 9.962 0 002 12.75c0 5.523 4.477 10 10 10s10-4.477 10-10a9.962 9.962 0 00-2.535-6.654L20.78 4.78a.75.75 0 00-1.06-1.06l-1.334 1.334a9.955 9.955 0 00-5.636-2.276V1.5h1a.75.75 0 000-1.5h-3.5zM12 21.25a8.5 8.5 0 100-17 8.5 8.5 0 000 17zm4.03-12.53a.75.75 0 010 1.06l-2.381 2.382a1.75 1.75 0 11-1.06-1.06l2.38-2.382a.75.75 0 011.061 0z"></path></svg>`;
    UIBoxInnerDiv3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1.5a7 7 0 100-14 7 7 0 000 14zm12-7a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h2.5A.75.75 0 0124 12zM4 12a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h2.5A.75.75 0 014 12zm16.485-8.485a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 01-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM6.343 17.657a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 11-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM12 0a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0V.75A.75.75 0 0112 0zm0 20a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0112 20zM3.515 3.515a.75.75 0 011.06 0l1.768 1.768a.75.75 0 11-1.06 1.06L3.515 4.575a.75.75 0 010-1.06zm14.142 14.142a.75.75 0 011.06 0l1.768 1.768a.75.75 0 01-1.06 1.06l-1.768-1.767a.75.75 0 010-1.061z"></path></svg>`;
    UIBoxInnerDiv4.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M8.114 2.094a.75.75 0 01.386.656V9h1.252a.75.75 0 110 1.5H5.75a.75.75 0 010-1.5H7V4.103l-.853.533a.75.75 0 01-.795-1.272l2-1.25a.75.75 0 01.762-.02zm4.889 5.66a.75.75 0 01.75-.75h5.232a.75.75 0 01.53 1.28l-2.776 2.777c.55.097 1.057.253 1.492.483.905.477 1.504 1.284 1.504 2.418 0 .966-.471 1.75-1.172 2.27-.687.511-1.587.77-2.521.77-1.367 0-2.274-.528-2.667-.756a.75.75 0 01.755-1.297c.331.193.953.553 1.912.553.673 0 1.243-.188 1.627-.473.37-.275.566-.635.566-1.067 0-.5-.219-.836-.703-1.091-.538-.284-1.375-.443-2.471-.443a.75.75 0 01-.53-1.28l2.643-2.644h-3.421a.75.75 0 01-.75-.75zM7.88 15.215a1.4 1.4 0 00-1.446.83.75.75 0 01-1.37-.61 2.9 2.9 0 012.986-1.71 2.565 2.565 0 011.557.743c.434.446.685 1.058.685 1.778 0 1.641-1.254 2.437-2.12 2.986-.538.341-1.18.694-1.495 1.273H9.75a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75c0-1.799 1.337-2.63 2.243-3.21 1.032-.659 1.55-1.031 1.55-1.8 0-.355-.116-.584-.26-.732a1.068 1.068 0 00-.652-.298z"></path></svg>`;

    UIBox.draggable = true;
    codeWrap.draggable = true;
}



function addTopBtns(Wrap,text)   { // 창들의 상단 타이틀,최소화,닫기 버튼을 생성하는 함수
    const addTopBtnContainer = document.createElement("div");
        const addTopBtnContainerTitle = document.createElement("p");
        const addTopBtnContainerMin = document.createElement("div");
        const addTopBtnContainerClose = document.createElement("div");
    
    addTopBtnContainer.className = "addTopBtnContainer";
    addTopBtnContainerTitle.className = "addTopBtnContainerTitle";
    addTopBtnContainerMin.className = "addTopBtnContainerMin";
    addTopBtnContainerClose.className = "addTopBtnContainerClose";

    Wrap.appendChild(addTopBtnContainer);
    addTopBtnContainer.appendChild(addTopBtnContainerTitle);
    addTopBtnContainer.appendChild(addTopBtnContainerMin);
    addTopBtnContainer.appendChild(addTopBtnContainerClose);

    addTopBtnContainerTitle.innerText = text;   // 창의 이름

    addTopBtnContainerClose.addEventListener("click",()=>{  // 닫기버튼 클릭시
        Wrap.remove();
    })
    addTopBtnContainerMin.addEventListener("click",(e)=>{   // 최소화 버튼 클릭시

        e.path[2].classList.toggle("min");
        if(!e.path[2].classList.contains("min")){    //
            e.path[2].style.height = null;
            return false;
        }

        e.path[2].style.height = "24px";
    })
}

// 창 상단 부분 생성
addTopBtns(codeWrap,"Text-Program");

function addPlayer()    {
    
}

const mainBarEvent = () => {    // 플레이트 컷 이벤트 내용
    stickyBarTop.style.transform = "rotate(0deg)";
    stickyBarBottom.style.bottom = "0%"
    stickyBarTop.style.bottom = "12.6%";
    codeWrap.style.transform = "scale(0.5)rotate(180deg)";

    setTimeout(() => {
        stickyBarTop.style.transform = "rotate(90deg)";
        stickyBarBottom.style.bottom = "-14.9%"
        stickyBarTop.style.bottom = "0";
        codeWrap.style.transform = "scale(1)";
        firstBg.remove();
        firstPage();
    }, 4000);
    setTimeout(() => {
        stickyBarTop.remove();
        stickyBarBottom.remove();
    },5000)

}
loadBar();
UIBox.addEventListener("click",function(e){
    UIBox.classList.toggle("active");
})

function moveWrapAction(){
    let moveWrap = document.querySelectorAll(".moveWrap");
    moveWrap.forEach((move)=>{  // moveWrap이라는 클래스를 가지면 움직일수있음
        if(isCheck === true){
            move.addEventListener("touchstart", function(e){    // 모바일 퀵 버튼 부분 move 이벤트
                codeWrap.style.zIndex = "5";
                let shiftX = e.changedTouches[0].clientX - move.getBoundingClientRect().left;
                let shiftY = e.changedTouches[0].clientY - move.getBoundingClientRect().top;
            
                move.addEventListener("touchmove",function(e) {
                    move.style.left = e.changedTouches[0].pageX - shiftX + 'px';
                    move.style.top = e.changedTouches[0].pageY - shiftY + 'px';
                })
            
                move.addEventListener("touchend",function(e) {
                    move.style.zIndex = "4";
                })
            })
        }else{
            move.addEventListener("mousedown", function(e){    // pc 퀵 버튼 부분 move 이벤트
                move.style.zIndex = "5";
                let shiftX = e.clientX - move.getBoundingClientRect().left;
                let shiftY = e.clientY - move.getBoundingClientRect().top;
            
                move.style.cursor = "grabbing";
            
                this.addEventListener("dragover",function(e) {
                    console.dir(move);
                    move.style.cursor = "grabbing";
                    move.style.left = e.pageX - shiftX + 'px';
                    move.style.top = e.pageY - shiftY + 'px';
                })
            
                this.addEventListener("mouseup",function(e) {
                    move.style.cursor = "pointer";
                    move.style.zIndex = "4";
                })
            })
        }
    })
}
moveWrapAction();


function autoText(_, counter = 0)   {
    function autoTyping(text, textContainer,textNum) {  // 넘겨받을 텍스트, 해당 텍스트를 보여줄 dom,중지할 이벤트 이름
        counter=0;
        let intervalEvent = setInterval((e) => {
            if (text.length === counter) {
                if(textNum === undefined){
                    textNum = document.querySelectorAll(".firstLi").length;
                    return false;
                }
                clearInterval(intervalEvent);
                if(nextNum === 0){
                    nextText(nextNum);
                    nextNum =+1;
                }else{
                    nextText(nextNum);
                    nextNum =nextNum+1;
                }
                return false;
            };
            // 문자열 하나하나 h2의 텍스트 컨텐츠로 추가한다 
            textContainer.textContent += text[counter];
            // 카운터 증산
            counter++;
        }, 50); 
        
    }

    function addTextListLi(textLiNum,text)  {    // list 생성하는 함수
        runEvent = true;
        firstUl.appendChild(eval(`firstli${textLiNum} = document.createElement("li")`));
            eval(`firstli${textLiNum}`).appendChild(eval(`firstli${textLiNum}div = document.createElement("div")`));
            eval(`firstli${textLiNum}`).appendChild(eval(`firstli${textLiNum}p = document.createElement("p")`));
        eval(`firstli${textLiNum}`).className = `firstLi`;
            eval(`firstli${textLiNum}div`).className = `firstLiDiv`;
            eval(`firstli${textLiNum}p`).className = `firstLiP`;

        eval(`firstli${textLiNum}div`).innerText = `${textLiNum}`

        autoTyping(text,eval(`firstli${textLiNum}p`,textLiNum)); // 기본 텍스트

        // list의 텍스트 클릭시 이벤트
        eval(`firstli${textLiNum}p`).addEventListener("click",liChangeEvent);
        function liChangeEvent(e) {
            let liNum = document.querySelectorAll(".firstLi");
            liNum.forEach( (liLine) => {
                liLine.children[1].addEventListener('click', (e)=>{ // input 생성하는단
                    e.stopPropagation();
        
                    const addNewInput = document.createElement("input");
                    if(liLine.children[1].innerText === "") {  
                        return false;
                    }
                    addNewInput.autocomplete="off";
                    liLine.appendChild(addNewInput);
                    addNewInput.focus();
                    addNewInput.value = liLine.children[1].innerText
                    liLine.children[1].remove();
                    addNewInput.className = "changeLineText";
                })
            })

            function checkInputText(submitEvent)   {
                submitEvent.preventDefault();
                submitEvent.stopPropagation();
    
                const newLineLiP = document.createElement("p");
    
                if(submitEvent.target[0] === undefined) {
                    return false;
                }
    
                newLineLiP.className = "firstLiP";
                newLineLiP.innerText = submitEvent.target[0].value;
    
                let createElementLi = submitEvent.target[0].offsetParent;
    
                submitEvent.target[0].remove();
    
                createElementLi.appendChild(newLineLiP);
                newLineLiP.addEventListener("click",liChangeEvent)
            }
            firstBg.addEventListener("submit",checkInputText);
        }   
    }

    addTextListLi(1,"안녕하세요"); // 맨 처음 첫줄의 텍스트
    function nextText(nextNum){
        runEvent = true;
        let num1 = [
            [2,"E-mail : developercgm@gmail.com"],
            [3,"더블클릭하면 내용을 수정할수있습니다."],
            [4,"하단의 입력창에 내용을 입력시 내용을 추가할수있습니다."],
            [5,"이 페이지는 하드코딩으로 제작한 페이지 입니다."],
            [6,"이 페이지의 html5는 <main id='wrap'></main> 하나이며 전부 동적 생성되었습니다."]
        ]
        if(num1[nextNum] === undefined)   {
            runEvent = false;
            loadText = false;
            return false;
        }
        addTextListLi(num1[nextNum][0],num1[nextNum][1]);
        nextNum =+1;
    }

    firstliLast.addEventListener("submit",(firstliLastEvent)=>{
        
        firstliLastEvent.preventDefault();

        let inputTypingText = firstliLastEvent.target[0].value;

        if(inputTypingText === "자세히보기")   {
            mainBarEvent();
            return false
        }
        if(runEvent === true){
            alert("아직 이벤트 중입니다.");
            firstliLastEvent.target[0].value="";
            return false;
        }
        if(inputTypingText.length > 18) {
            alert("너무 긴 입력입니다");
            return false;
        }
        
        
        if(inputTypingText === "도움말")   {
            addTextListLi(document.querySelectorAll(`.firstLi`).length+1,inputTypingText);
            runEvent = true;
            setTimeout(() => {
                addTextListLi(document.querySelectorAll(`.firstLi`).length+1,`입력가능한 명력어는 '시간','날씨','추가예정'등이 있습니다.`);
            }, 1000);
            firstliLastEvent.target[0].value="";
            return false
        }else if(inputTypingText === "시간")  {
            addTextListLi(document.querySelectorAll(`.firstLi`).length+1,inputTypingText);
            runEvent = true;
            setTimeout(() => {
                addTextListLi(document.querySelectorAll(`.firstLi`).length+1,`${time}입니다.`);
            }, 1000);
            firstliLastEvent.target[0].value="";
            return false;
        }else if(inputTypingText === "날씨")  {

            const API_KEY = "c65eec58bb72eba4ba267415b3d37432";
            function getWeather(lat, lng) {
                fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
                )
                    .then(function (response) { // .then = fetch가 완료 된 후 실행됨
                        return response.json(); // json형태로 변환
                    })
                    .then(function (json) { 
                        const temperature = json.main.temp; 
                        const place = json.name;
                        const nowWeather = json.weather[0].main;

                        runEvent = true;
                        setTimeout(() => {
                            runEvent = true;
                            addTextListLi(document.querySelectorAll(`.firstLi`).length+1,`현재 지역은 ${place} 이며 날씨는 ${nowWeather}, 기온은 ${temperature.toFixed()}도 입니다.`);
                        }, 1000);
                    });
                }

            function weatherLoadCoords() {
                const loadedCoords = localStorage.getItem(COORDS); // localStorage에서 위치정보 가져옴
                if (loadedCoords === null) { // 위치 정보가 없으면
                    askForCoords(); // 위치 정보 요청 함수
                } else {
                    const parseCoords = JSON.parse(loadedCoords); // json형식을 객체 타입으로 바꿔서 저장
                    getWeather(parseCoords.latitude, parseCoords.longitude); // 날씨 요청 함수
                }
            }
            weatherLoadCoords();
            addTextListLi(document.querySelectorAll(`.firstLi`).length+1,inputTypingText);
            firstliLastEvent.target[0].value="";
            return false;
        }else if(inputTypingText === "추가예정")  {
            addTextListLi(document.querySelectorAll(`.firstLi`).length+1,inputTypingText);
            runEvent = true;
            setTimeout(() => {
                addTextListLi(document.querySelectorAll(`.firstLi`).length+1,`위 수정한 text를 save&load하는 기능 / text를 save&load하며 위 화면에 띄워주는 기능 / 퀵버튼 리사이징`);
            }, 1000);
            firstliLastEvent.target[0].value="";
            return false;
        }else if (inputTypingText === "계산" || inputTypingText === "계산기")   {
            calculator();
        }

        addTextListLi(document.querySelectorAll(`.firstLi`).length+1,`${inputTypingText}`);
        firstliLastEvent.target[0].value="";
    })

    // 계산기 부분
    function calculator() {
        const calculatorWrap = document.createElement("div"),
            calculatorTop = document.createElement("div"),
            calculatorWrapCotainer = document.createElement("div"),
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

        calculatorWrap.id = "calculatorWrap";
        calculatorWrap.className = "moveWrap";
            calculatorTop.id = "calculatorTop";
            calculatorWrapCotainer.id = "calculatorWrapCotainer";
                calculatorForm.id = "calculatorForm";
                    calculatorInput.id = "calculatorInput";
                calculatorPad.id = "calculatorPad";
                    calculatorUl.id = "calculatorUl";
                        calculatorLi1.className ="calculatorLi";
                        calculatorLi2.className ="calculatorLi";
                        calculatorLi3.className ="calculatorLi";
                        calculatorLi4.className ="calculatorLi";
                        calculatorLi5.className ="calculatorLi";
                        calculatorLi6.className ="calculatorLi";
                        calculatorLi7.className ="calculatorLi";
                        calculatorLi8.className ="calculatorLi";
                        calculatorLi9.className ="calculatorLi";
                        calculatorLi10.className ="calculatorLi";
                        calculatorLi11.className ="calculatorLi";
                        calculatorLi12.className ="calculatorLi";
                        calculatorLi13.className ="calculatorLi";
                        calculatorLi14.className ="calculatorLi";
                        calculatorLi15.className ="calculatorLi";
                        calculatorLi16.className ="calculatorLi";
                        calculatorLi17.className ="calculatorLi";
        
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

        addTopBtns(calculatorWrap,"calculator",2);
        mainWrap.appendChild(calculatorWrap);
            calculatorWrap.appendChild(calculatorTop);
            calculatorWrap.appendChild(calculatorWrapCotainer);
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

        moveWrapAction();   // 창 이동 이벤트 재 할당
        calculatorForm.addEventListener("submit",(e)=>{e.preventDefault();})    // 계산기의 submit이벤트 막기

        let allKey = document.querySelectorAll(".calculatorLi");    // 계산기 클릭시 색 변경 이벤트
        allKey.forEach((allKey) => {
            allKey.addEventListener("click",function(){
                allKey.style.background = "dimgrey";
                setTimeout(() => {
                    allKey.style.background = `linear-gradient(135deg, #2a2a2a, #000000)`
                }, 100);
            })
        })

        calculatorUl.addEventListener("click",function(e){  // 계산기 클릭 이벤트
            let checkInputOper = e.target.innerText;
            if(checkInputOper === "+" || checkInputOper === "-" || checkInputOper === "*" || checkInputOper === "/" || checkInputOper === "c" || checkInputOper === "="){
                calculatorAnswer(calculatorInput.value,e.target.innerText);
                return;
            }else{
                calculatorInput.value = calculatorInput.value + e.target.innerText;
            }
            calculatorAnswer(calculatorInput.value,e.target.innerText);
        })
        calculatorInput.addEventListener("keydown",function(e){ // 계산기 클릭이 아니라 키보드로 입력할때 

            let allKey = document.querySelectorAll(".calculatorLi");
            
            function keyDown(){
                let downKey = e.key;
                if(downKey === "Enter") {   // enter의 값을 = 랑 같도록 설정
                    downKey = "=";
                }
                allKey.forEach((allKey) => {
                    if(downKey === allKey.innerText)  {
                        allKey.style.background = "dimgrey";
                        setTimeout(() => {
                            allKey.style.background = `linear-gradient(135deg, #2a2a2a, #000000)`
                        }, 100);
                        
                    }
                })
                calculatorAnswer(calculatorInput.value,downKey)
            }
            keyDown();
        })

        function calculatorAnswer(value,set){
            if(set === "+" || set === "-" || set === "*" || set === "/") {  // 이상한 입력값 막기
                if(calculatorSet === true){
                    alert("올바른 값을 입력해주세요");
                    calculatorInput.value = "";
                    calculatorSet = true;
                    return false;
                }

                calculatorSet = true;
                if(value.slice(0,1) === "-" || value.slice(0,1) === "+" || value.slice(0,1) === "*" || value.slice(0,1) === "/")    {  
                    value = value.slice(1,value.length);
                }
                calculatorAnswerValue.push(value,set);
                setTimeout(() => {
                    calculatorInput.value="";
                }, 100);
            }else if (!isNaN(set))  {
                calculatorSet = false;
            }
            if(set === "=") {   // 계산 결과 도출 이벤트
                calculatorAnswerValue.push(value);
                calculatorAnswerValue.map((list) =>{
                    if(list === "") {   // 값이 비어있다면
                        calculatorInput.value = "";
                        alert("올바른 값을 입력해주세요");
                        calculatorAnswerValue = [];
                        return false;
                    }
                })

                let calculatorCounter = calculatorAnswerValue.length/2-0.5;   // 연산 횟수 
                for(counter=1; counter <= calculatorCounter; counter++) {   //실제 연산 영역
                    
                    if(calculatorAnswerValue[1] === "+")    {
                        console.log(calculatorAnswerValue);
                        let answer = Number(calculatorAnswerValue[0]) + Number(calculatorAnswerValue[2]);
                        calculatorAnswerValue[2] = answer;
                        calculatorAnswerValue.shift();
                        calculatorAnswerValue.shift();
                    }else if(calculatorAnswerValue[1] === "-")  {
                        let answer = Number(calculatorAnswerValue[0]) - Number(calculatorAnswerValue[2]);
                        calculatorAnswerValue[2] = answer;
                        calculatorAnswerValue.shift();
                        calculatorAnswerValue.shift();
                    }else if(calculatorAnswerValue[1] === "*")  {
                        let answer = Number(calculatorAnswerValue[0]) * Number(calculatorAnswerValue[2]);
                        calculatorAnswerValue[2] = answer;
                        calculatorAnswerValue.shift();
                        calculatorAnswerValue.shift();
                    }else if(calculatorAnswerValue[1] === "/")  {
                        let answer = Number(calculatorAnswerValue[0]) / Number(calculatorAnswerValue[2]);
                        calculatorAnswerValue[2] = answer;
                        calculatorAnswerValue.shift();
                        calculatorAnswerValue.shift();
                    }
                    
                }
                calculatorInput.value = calculatorAnswerValue;  // 연산된 값 출력
                calculatorAnswerValue = []; // 출력후 값으 저장되었던 배열 삭제
            }
        }
        calculatorLi1.addEventListener("click",function(e){ // 초기화 버튼 액션
            calculatorAnswerValue = [];
            setTimeout(() => {
                calculatorInput.value = "";
            }, 10);
        })
        
    }

    UIBoxInnerDiv1.addEventListener("click",mainBarEvent);
    UIBoxInnerDiv2.addEventListener("click",() => {
        if(runEvent === true)   {
            alert("아직 이벤트가 진행중입니다.");
            return false;
        }
        addTextListLi(document.querySelectorAll(`.firstLi`).length+1,`${time}입니다.`);
    });
    UIBoxInnerDiv3.addEventListener("click",() => {
        if(runEvent === true)   {
            alert("아직 이벤트가 진행중입니다.");
            return false;
        }
        const API_KEY = "c65eec58bb72eba4ba267415b3d37432";
        function getWeather(lat, lng) {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
            )
                .then(function (response) { // .then = fetch가 완료 된 후 실행됨
                    return response.json(); // json형태로 변환
                })
                .then(function (json) { 
                    const temperature = json.main.temp; 
                    const place = json.name;
                    const nowWeather = json.weather[0].main;

                    runEvent = true;
                    addTextListLi(document.querySelectorAll(`.firstLi`).length+1,`현재 지역은 ${place} 이며 날씨는 ${nowWeather}, 기온은 ${temperature.toFixed()}도 입니다.`);
                });
            }

        function weatherLoadCoords() {
            const loadedCoords = localStorage.getItem(COORDS); // localStorage에서 위치정보 가져옴
            if (loadedCoords === null) { // 위치 정보가 없으면
                askForCoords(); // 위치 정보 요청 함수
            } else {
                const parseCoords = JSON.parse(loadedCoords); // json형식을 객체 타입으로 바꿔서 저장
                getWeather(parseCoords.latitude, parseCoords.longitude); // 날씨 요청 함수
            }
        }
        weatherLoadCoords();
        return false;
    });
    UIBoxInnerDiv4.addEventListener("click",calculator);

    // 하단 퀵 버튼 생성 함수
    function footerQuick(Wrapnum,wrapThis,Icon)  {
        footerWrap.appendChild(eval(`footerIconWrap${Wrapnum} = document.createElement("div")`));
        eval(`footerIconWrap${Wrapnum}`).appendChild(eval(`footerIconWrapDiv${Wrapnum} = document.createElement("div")`));

        eval(`footerIconWrap${Wrapnum}`).className = `footerIconWrap`;
        eval(`footerIconWrapDiv${Wrapnum}`).className = `footerIconWrapDiv`;

        eval(`footerIconWrapDiv${Wrapnum}`).innerHTML = `${Icon}`;

        eval(`footerIconWrap${Wrapnum}`).addEventListener("click",()=>{
            if(Wrapnum === 1)   {
                calculator();
            }
        })
    }

    // 화면 하단 퀵 버튼
    footerQuick(1,null,`<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 128 128" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_1"><rect fill="#F4F5F5" height="1520" opacity="0" width="727.938" x="-59.984" y="-541"/></g><g id="Layer_2"><g><circle cx="64" cy="64" fill="#2597CE" r="64"/><g><defs><circle cx="64" cy="64" id="SVGID_35_" r="64"/></defs><clipPath id="SVGID_2_"><use overflow="visible" xlink:href="#SVGID_35_"/></clipPath><polygon clip-path="url(#SVGID_2_)" fill="#1389C9" points="101.864,27.092 128,53.215 128,128 53.333,128 26.813,101.273      35.004,68.722 26.929,60.646 61.417,27.092 66.786,32.462    "/></g><g><defs><circle cx="64" cy="64" id="SVGID_37_" r="64"/></defs><clipPath id="SVGID_4_"><use overflow="visible" xlink:href="#SVGID_37_"/></clipPath><polygon clip-path="url(#SVGID_4_)" fill="#0082C5" points="26.94,61.284 89.952,124.296 110.11,112.138 124.423,89.992      61.381,27.036    "/></g><path d="M62,57.692C62,60.071,60.071,62,57.692,62H29.308C26.929,62,25,60.071,25,57.692V29.308    C25,26.929,26.929,25,29.308,25h28.385C60.071,25,62,26.929,62,29.308V57.692z" fill="#FFF1E5"/><path d="M103,57.692c0,2.379-1.929,4.308-4.308,4.308H70.308C67.929,62,66,60.071,66,57.692V29.308    C66,26.929,67.929,25,70.308,25h28.385c2.379,0,4.308,1.929,4.308,4.308V57.692z" fill="#FFF1E5"/><path d="M62,98.692c0,2.379-1.929,4.308-4.308,4.308H29.308C26.929,103,25,101.071,25,98.692V70.308    C25,67.929,26.929,66,29.308,66h28.385C60.071,66,62,67.929,62,70.308V98.692z" fill="#FFF1E5"/><path d="M103,98.692c0,2.379-1.929,4.308-4.308,4.308H70.308C67.929,103,66,101.071,66,98.692V70.308    C66,67.929,67.929,66,70.308,66h28.385c2.379,0,4.308,1.929,4.308,4.308V98.692z" fill="#FFF1E5"/><g><defs><path d="M103,57.692c0,2.379-1.929,4.308-4.308,4.308H70.308C67.929,62,66,60.071,66,57.692V29.308      C66,26.929,67.929,25,70.308,25h28.385c2.379,0,4.308,1.929,4.308,4.308V57.692z" id="SVGID_39_"/></defs><clipPath id="SVGID_6_"><use overflow="visible" xlink:href="#SVGID_39_"/></clipPath><polygon clip-path="url(#SVGID_6_)" fill="#DED3CD" points="92.45,42.383 75.898,45.734 93.08,63 103,63 103,52.899    "/></g><g><defs><path d="M103,98.692c0,2.379-1.929,4.308-4.308,4.308H70.308C67.929,103,66,101.071,66,98.692V70.308      C66,67.929,67.929,66,70.308,66h28.385c2.379,0,4.308,1.929,4.308,4.308V98.692z" id="SVGID_41_"/></defs><clipPath id="SVGID_8_"><use overflow="visible" xlink:href="#SVGID_41_"/></clipPath><polygon clip-path="url(#SVGID_8_)" fill="#DED3CD" points="92.607,78.245 79.068,79.263 75.692,81.076 81.266,86.68      75.883,90.391 88.485,103 103,103 102.872,88.613    "/></g><g><defs><path d="M62,98.692c0,2.379-1.929,4.308-4.308,4.308H29.308C26.929,103,25,101.071,25,98.692V70.308      C25,67.929,26.929,66,29.308,66h28.385C60.071,66,62,67.929,62,70.308V98.692z" id="SVGID_43_"/></defs><clipPath id="SVGID_10_"><use overflow="visible" xlink:href="#SVGID_43_"/></clipPath><polygon clip-path="url(#SVGID_10_)" fill="#DED3CD" points="49.8,78.391 37.725,90.465 50.235,103 63,103 63,90.451      50.262,77.728    "/></g><g><defs><path d="M62,57.692C62,60.071,60.071,62,57.692,62H29.308C26.929,62,25,60.071,25,57.692V29.308      C25,26.929,26.929,25,29.308,25h28.385C60.071,25,62,26.929,62,29.308V57.692z" id="SVGID_45_"/></defs><clipPath id="SVGID_12_"><use overflow="visible" xlink:href="#SVGID_45_"/></clipPath><polygon clip-path="url(#SVGID_12_)" fill="#DED3CD" points="44.108,43.932 35.731,45.684 53.027,63 63,63 63,52.952      45.785,35.813    "/></g><g><g><g><path d="M50.386,41.438h-3.949v-3.949c0-1.372-1.122-2.494-2.494-2.494h0c-1.372,0-2.494,1.122-2.494,2.494       v3.949h-3.949c-1.372,0-2.494,1.122-2.494,2.494c0,1.372,1.122,2.494,2.494,2.494h3.949v3.949c0,1.372,1.122,2.494,2.494,2.494       h0c1.372,0,2.494-1.122,2.494-2.494v-3.949h3.949c1.372,0,2.494-1.122,2.494-2.494C52.88,42.56,51.758,41.438,50.386,41.438z" fill="#59515C"/></g></g><g><path d="M90.501,46.426H77.614c-1.372,0-2.494-1.122-2.494-2.494l0,0c0-1.372,1.122-2.494,2.494-2.494h12.887      c1.372,0,2.494,1.122,2.494,2.494l0,0C92.996,45.304,91.873,46.426,90.501,46.426z" fill="#59515C"/></g><g><path d="M50.262,81.255l-9.113,9.112c-0.97,0.97-2.557,0.97-3.527,0l0,0c-0.97-0.97-0.97-2.557,0-3.527      l9.112-9.113c0.97-0.97,2.557-0.97,3.527,0l0,0C51.232,78.698,51.232,80.285,50.262,81.255z" fill="#59515C"/><path d="M41.15,77.728l9.113,9.113c0.97,0.97,0.97,2.557,0,3.527l0,0c-0.97,0.97-2.557,0.97-3.527,0      l-9.112-9.112c-0.97-0.97-0.97-2.557,0-3.527l0,0C38.592,76.758,40.18,76.758,41.15,77.728z" fill="#59515C"/></g><g><g><path d="M90.501,86.107H77.614c-1.372,0-2.494,1.122-2.494,2.494c0,1.372,1.122,2.494,2.494,2.494h12.887       c1.372,0,2.494-1.122,2.494-2.494C92.996,87.229,91.873,86.107,90.501,86.107z M77.614,81.989h12.887       c1.372,0,2.494-1.122,2.494-2.494c0-1.372-1.122-2.494-2.494-2.494H77.614c-1.372,0-2.494,1.122-2.494,2.494       C75.12,80.867,76.242,81.989,77.614,81.989z" fill="#59515C"/></g></g></g></g></g></svg>`);
    footerQuick(2,null,`<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 128 128" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_1"><rect fill="#F4F5F5" height="1520" opacity="0" width="727.938" x="-539.984" y="-731"/></g><g id="Layer_2"><g><circle cx="64" cy="64" fill="#F54F33" r="64"/><g><defs><circle cx="64" cy="64" id="SVGID_31_" r="64"/></defs><clipPath id="SVGID_2_"><use overflow="visible" xlink:href="#SVGID_31_"/></clipPath><polygon clip-path="url(#SVGID_2_)" fill="#DD2C24" points="20.161,96.119 52.036,128 128,128 128,52.536 108.115,32.622    "/></g><path d="M104.944,96.947H23.056c-2.209,0-4-1.791-4-4V35.053c0-2.209,1.791-4,4-4h81.888c2.209,0,4,1.791,4,4    v57.894C108.944,95.156,107.153,96.947,104.944,96.947z" fill="#FFFFFF"/><g><path d="M108.944,42.054v-7.001c0-2.209-1.791-4-4-4H23.056c-2.209,0-4,1.791-4,4v7.001H108.944z" fill="#E1E3E9"/></g><circle cx="25" cy="36.553" fill="#F24B45" r="3"/><circle cx="34" cy="36.553" fill="#FFB202" r="3"/><circle cx="43.001" cy="36.553" fill="#4CBB41" r="3"/><g><defs><path d="M104.944,96.947H23.056c-2.209,0-4-1.791-4-4V35.053c0-2.209,1.791-4,4-4h81.888c2.209,0,4,1.791,4,4      v57.894C108.944,95.156,107.153,96.947,104.944,96.947z" id="SVGID_33_"/></defs><clipPath id="SVGID_4_"><use overflow="visible" xlink:href="#SVGID_33_"/></clipPath><polygon clip-path="url(#SVGID_4_)" fill="#E1E3E9" opacity="0.8" points="30.866,70.855 57.438,97.5 110,97.5 110,79.563      97.134,66.663 84.469,63.719 71.795,51.056 64.376,67.188 53.475,56.3 31.937,68.83    "/></g><g><path d="M30.866,66.804L53.475,56.3v4.993l-17.099,7.49v0.094l17.099,7.489v4.993L30.866,70.855V66.804z" fill="#53899F"/><path d="M56.958,85.206l10.08-34.15h4.758l-10.081,34.15H56.958z" fill="#53899F"/><path d="M97.134,70.997L74.525,81.359v-4.993L92,68.877v-0.094l-17.476-7.49V56.3l22.609,10.363V70.997z" fill="#53899F"/></g></g></g></svg>`);


}
// 화면 최하단 우측 시간 부분
footerWrapTime.innerHTML = `${time.slice(0,time.length-7)}`; // 첫 실행
setInterval(() => { // 실행 후 1분 마다 리셋
    time = Intl.DateTimeFormat('kr',{dateStyle:'full', timeStyle: 'full'}).format(new Date);
    footerWrapTime.innerHTML = `${time.slice(0,time.length-7)}`; 
}, 1000);

window.addEventListener('load', autoText)
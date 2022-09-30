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
    const innerWrap = document.createElement("div");    // 아래 모든 영역을 포함한 dom
    const firstBg = document.createElement("form");  // 메인 화면에서의 컨텐츠
        const firstUl = document.createElement("ui");
            const firstliLast = document.createElement("form");
                const firstliLastInput = document.createElement("input");
                const firstliLastButton = document.createElement("button");
    const innerContainer = document.createElement("div");   // 실제 화면에서 보여지는 영역

    const stickyBarTop = document.createElement("div"); // 플레이트의 윗 부분
    const stickyBarBottom = document.createElement("div");  // 플레이트의 아랫부분

    const UIBox = document.createElement("div"); // 기능 : 창 크기 자유 변경 - 각 기능에 대한 버튼
        const UIBoxTop = document.createElement("div");
            const UIBoxTopP = document.createElement("p");
            const UIBoxTopDiv = document.createElement("div");
        const UIBoxInner = document.createElement("div");
            const UIBoxInnerDiv1 = document.createElement("div");
            const UIBoxInnerDiv2 = document.createElement("div");
            const UIBoxInnerDiv3 = document.createElement("div");
            const UIBoxInnerDiv4 = document.createElement("div");
            const UIBoxInnerDiv5 = document.createElement("div");
            const UIBoxInnerDiv6 = document.createElement("div");

function loadBar() {

    stickyBarTop.id = "stickyBarTop";   // 각 dom마다 컨트롤 하기 쉽게 선택자 입력
    firstBg.id = "firstBg";
    UIBox.id = "UIBox";
        UIBoxTop.id = "UIBoxTop";
            UIBoxTopP.id = "UIBoxTopP";
            UIBoxTopDiv.id = "UIBoxTopDiv";
        UIBoxInner.id ="UIBoxInner";
            UIBoxInnerDiv1.className = "UIBoxInnerDiv";
            UIBoxInnerDiv2.className = "UIBoxInnerDiv";
            UIBoxInnerDiv3.className = "UIBoxInnerDiv";
            UIBoxInnerDiv4.className = "UIBoxInnerDiv";
            UIBoxInnerDiv5.className = "UIBoxInnerDiv";
            UIBoxInnerDiv6.className = "UIBoxInnerDiv";
    firstUl.id = "firstUl";
    firstliLast.id = "firstLastLi";
        firstliLastInput.id = "firstliLastInput";
        firstliLastButton.id = "firstliLastButton";
    stickyBarBottom.id = "stickyBarBottom";
    innerWrap.id = "innerWrap";
    innerContainer.id = "innerContainer";

    mainWrap.appendChild(innerWrap);    // 실제 dom 생성
    innerWrap.appendChild(firstBg);
        firstBg.appendChild(UIBox);
            UIBox.appendChild(UIBoxTop);
                UIBoxTop.appendChild(UIBoxTopP);
                UIBoxTop.appendChild(UIBoxTopDiv);
            UIBox.appendChild(UIBoxInner);
                UIBoxInner.appendChild(UIBoxInnerDiv1);
                UIBoxInner.appendChild(UIBoxInnerDiv2);
                UIBoxInner.appendChild(UIBoxInnerDiv3);
                UIBoxInner.appendChild(UIBoxInnerDiv4);
                UIBoxInner.appendChild(UIBoxInnerDiv5);
                UIBoxInner.appendChild(UIBoxInnerDiv6);
        firstBg.appendChild(firstUl);
        innerWrap.appendChild(firstliLast);
            firstliLast.appendChild(firstliLastInput);
            firstliLast.appendChild(firstliLastButton);
    innerWrap.appendChild(innerContainer);
    innerWrap.appendChild(stickyBarTop);
    innerWrap.appendChild(stickyBarBottom);
    
    firstliLastButton.innerText = "입력";
    firstliLastInput.autocomplete="off";
    firstliLastInput.placeholder = "'자세히보기'또는 '도움말'이라고 입력해주세요";
    UIBoxTopP.innerText = "Quick Button";
    UIBoxInnerDiv1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z"></path><path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z"></path></svg>`;
    UIBoxInnerDiv2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M10.25 0a.75.75 0 000 1.5h1v1.278a9.955 9.955 0 00-5.635 2.276L4.28 3.72a.75.75 0 00-1.06 1.06l1.315 1.316A9.962 9.962 0 002 12.75c0 5.523 4.477 10 10 10s10-4.477 10-10a9.962 9.962 0 00-2.535-6.654L20.78 4.78a.75.75 0 00-1.06-1.06l-1.334 1.334a9.955 9.955 0 00-5.636-2.276V1.5h1a.75.75 0 000-1.5h-3.5zM12 21.25a8.5 8.5 0 100-17 8.5 8.5 0 000 17zm4.03-12.53a.75.75 0 010 1.06l-2.381 2.382a1.75 1.75 0 11-1.06-1.06l2.38-2.382a.75.75 0 011.061 0z"></path></svg>`;
    UIBoxInnerDiv3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1.5a7 7 0 100-14 7 7 0 000 14zm12-7a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h2.5A.75.75 0 0124 12zM4 12a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h2.5A.75.75 0 014 12zm16.485-8.485a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 01-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM6.343 17.657a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 11-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM12 0a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0V.75A.75.75 0 0112 0zm0 20a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0112 20zM3.515 3.515a.75.75 0 011.06 0l1.768 1.768a.75.75 0 11-1.06 1.06L3.515 4.575a.75.75 0 010-1.06zm14.142 14.142a.75.75 0 011.06 0l1.768 1.768a.75.75 0 01-1.06 1.06l-1.768-1.767a.75.75 0 010-1.061z"></path></svg>`;
    UIBoxInnerDiv4.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M8.114 2.094a.75.75 0 01.386.656V9h1.252a.75.75 0 110 1.5H5.75a.75.75 0 010-1.5H7V4.103l-.853.533a.75.75 0 01-.795-1.272l2-1.25a.75.75 0 01.762-.02zm4.889 5.66a.75.75 0 01.75-.75h5.232a.75.75 0 01.53 1.28l-2.776 2.777c.55.097 1.057.253 1.492.483.905.477 1.504 1.284 1.504 2.418 0 .966-.471 1.75-1.172 2.27-.687.511-1.587.77-2.521.77-1.367 0-2.274-.528-2.667-.756a.75.75 0 01.755-1.297c.331.193.953.553 1.912.553.673 0 1.243-.188 1.627-.473.37-.275.566-.635.566-1.067 0-.5-.219-.836-.703-1.091-.538-.284-1.375-.443-2.471-.443a.75.75 0 01-.53-1.28l2.643-2.644h-3.421a.75.75 0 01-.75-.75zM7.88 15.215a1.4 1.4 0 00-1.446.83.75.75 0 01-1.37-.61 2.9 2.9 0 012.986-1.71 2.565 2.565 0 011.557.743c.434.446.685 1.058.685 1.778 0 1.641-1.254 2.437-2.12 2.986-.538.341-1.18.694-1.495 1.273H9.75a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75c0-1.799 1.337-2.63 2.243-3.21 1.032-.659 1.55-1.031 1.55-1.8 0-.355-.116-.584-.26-.732a1.068 1.068 0 00-.652-.298z"></path></svg>`;
    UIBoxInnerDiv5.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M0 3.75A.75.75 0 01.75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.496 4.496 0 0115.75 3h7.5a.75.75 0 01.75.75v15.063a.75.75 0 01-.755.75l-7.682-.052a3 3 0 00-2.142.878l-.89.891a.75.75 0 01-1.061 0l-.902-.901a3 3 0 00-2.121-.879H.75a.75.75 0 01-.75-.75v-15zm11.247 3.747a3 3 0 00-3-2.997H1.5V18h6.947a4.5 4.5 0 012.803.98l-.003-11.483zm1.503 11.485V7.5a3 3 0 013-3h6.75v13.558l-6.927-.047a4.5 4.5 0 00-2.823.971z"></path></svg>`;
    UIBoxInnerDiv6.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M9.036 7.976a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"></path><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg>`;

    UIBox.draggable = true;
}



const mainBarEvent = () => {    // 플레이트 컷 이벤트 내용
    stickyBarTop.style.transform = "rotate(0deg)";
    stickyBarBottom.style.bottom = "0%"
    stickyBarTop.style.bottom = "12.6%";
    innerWrap.style.transform = "scale(0.5)rotate(180deg)";

    setTimeout(() => {
        stickyBarTop.style.transform = "rotate(90deg)";
        stickyBarBottom.style.bottom = "-14.9%"
        stickyBarTop.style.bottom = "0";
        innerWrap.style.transform = "scale(1)";
        firstBg.remove();
        firstPage();
    }, 2000);
    setTimeout(() => {
        stickyBarTop.remove();
        stickyBarBottom.remove();
    },4000)

}
loadBar();

if(isCheck === true){
    UIBox.addEventListener("touchstart", function(e){    // 퀵 버튼 부분 move 이벤트
        console.log(e);
        UIBox.style.zIndex = "5";
        let shiftX = e.changedTouches[0].clientX - UIBox.getBoundingClientRect().left;
        let shiftY = e.changedTouches[0].clientY - UIBox.getBoundingClientRect().top;
    
        UIBox.style.cursor = "grabbing";
    
        UIBox.addEventListener("touchmove",function(e) {
            console.log(e);
            UIBox.style.cursor = "grabbing";
            UIBox.style.left = e.changedTouches[0].pageX - shiftX + 'px';
            UIBox.style.top = e.changedTouches[0].pageY - shiftY + 'px';
        })
    
        UIBox.addEventListener("touchend",function(e) {
            UIBox.style.cursor = "pointer";
            UIBox.style.zIndex = "4";
        })
    })
}else{
    UIBox.addEventListener("mousedown", function(e){    // 퀵 버튼 부분 move 이벤트
        UIBox.style.zIndex = "5";
        let shiftX = e.clientX - UIBox.getBoundingClientRect().left;
        let shiftY = e.clientY - UIBox.getBoundingClientRect().top;
    
        UIBox.style.cursor = "grabbing";
    
        UIBox.addEventListener("dragover",function(e) {
            UIBox.style.cursor = "grabbing";
            UIBox.style.left = e.pageX - shiftX + 'px';
            UIBox.style.top = e.pageY - shiftY + 'px';
        })
    
        UIBox.addEventListener("mouseup",function(e) {
            UIBox.style.cursor = "pointer";
            UIBox.style.zIndex = "4";
        })
    })
}

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
                calculatorTopP = document.createElement("p"),
                calculatorTopDiv = document.createElement("div"),
                calculatorTopDivClose = document.createElement("div"),
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
            calculatorTop.id = "calculatorTop";
                calculatorTopP.id = "calculatorTopP";
                calculatorTopDiv.id = "calculatorTopDiv";
                calculatorTopDivClose.id = "calculatorTopDivClose";
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
        calculatorTopP.innerText = "Calculator";
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

        innerWrap.appendChild(calculatorWrap);
            calculatorWrap.appendChild(calculatorTop);
                calculatorTop.appendChild(calculatorTopP);
                calculatorTop.appendChild(calculatorTopDiv);
                calculatorTop.appendChild(calculatorTopDivClose);
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

        calculatorWrap.addEventListener("mousedown", function(e) {   // 계산기 버튼 창 move Event
            calculatorWrap.style.zIndex = "5";
            let calculatorshiftX = e.clientX - calculatorWrap.getBoundingClientRect().left;
            let calculatorshiftY = e.clientY - calculatorWrap.getBoundingClientRect().top;

            calculatorWrap.style.cursor = "grabbing";

            calculatorWrap.addEventListener("dragover",function(e) {
                calculatorWrap.style.cursor = "grabbing";
                calculatorWrap.style.left = e.pageX - calculatorshiftX + 'px';
                calculatorWrap.style.top = e.pageY - calculatorshiftY + 'px';
            })

            calculatorWrap.addEventListener("dragend",function(e) {
                calculatorWrap.style.cursor = "pointer";
                calculatorWrap.style.zIndex = "4";
            })
            calculatorWrap.addEventListener("mouseup",() => {
                calculatorWrap.style.cursor = "pointer";
            })
        })

        calculatorForm.addEventListener("submit",(e)=>{e.preventDefault();})    // 계산기의 submit이벤트 막기
        calculatorTopDiv.addEventListener("click",function() {      // 계산기 최소화 이벤트
            if (this.className === "close") {
                calculatorWrapCotainer.style.height = `485px`;
                this.className = "";
                return false;
            }
            calculatorWrapCotainer.style.height = `0px`;
            this.className = "close";
        })

        calculatorTopDivClose.addEventListener("click",(e) => { // 계산기 닫기 이벤트
            e.target.parentElement.parentElement.remove();
        })

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

    // 퀵 버튼 이벤트 부분
    UIBoxTopDiv.addEventListener("click",function() {
        if (this.className === "close") {
            UIBoxInner.style.height = `190px`;
            this.className = "";
            return false;
        }
        UIBoxInner.style.height = `0px`;
        this.className = "close";
    })

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
    UIBoxInnerDiv5.addEventListener("click",()=>{
        if(runEvent === true)   {
            alert("아직 이벤트가 진행중입니다.");
            return false;
        }
        addTextListLi(document.querySelectorAll(`.firstLi`).length+1,`입력가능한 명력어는 '시간','날씨','추가예정'등이 있습니다.`);
    })

}
window.addEventListener('load', autoText);

// mainWrap.addEventListener("click", mainBarEvent,{ once : true}); 추후 input에 submit할 경우 실행으로 바꿔보자  
// 고민중인것 들어온 사람이 위 내용을 바꿧을때 해당 내용을 로컬스토리지에 저장후 다음에도 보여줄까 말까는 조금 고민.
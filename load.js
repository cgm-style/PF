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


let nextNum = 0;
let runEvent = true;
let loadText = true;
let time = Intl.DateTimeFormat('kr',{dateStyle:'full', timeStyle: 'full'}).format(new Date);

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

function loadBar() {

    stickyBarTop.id = "stickyBarTop";   // 각 dom마다 컨트롤 하기 쉽게 선택자 입력
    firstBg.id = "firstBg";
    firstUl.id = "firstUl";
    firstliLast.id = "firstLastLi";
        firstliLastInput.id = "firstliLastInput";
        firstliLastButton.id = "firstliLastButton";
    stickyBarBottom.id = "stickyBarBottom";
    innerWrap.id = "innerWrap";
    innerContainer.id = "innerContainer";

    mainWrap.appendChild(innerWrap);    // 실제 dom 생성
    innerWrap.appendChild(firstBg);
        firstBg.appendChild(firstUl)
        innerWrap.appendChild(firstliLast);
            firstliLast.appendChild(firstliLastInput);
            firstliLast.appendChild(firstliLastButton);
    innerWrap.appendChild(innerContainer);
    innerWrap.appendChild(stickyBarTop);
    innerWrap.appendChild(stickyBarBottom);
    
    firstliLastButton.innerText = "입력";
    firstliLastInput.autocomplete="off";
    firstliLastInput.placeholder = "'자세히보기'또는 '도움말'이라고 입력해주세요"
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
            [5,"자세히보기를 입력시 위 이벤트를 무시하고 메인창으로 갈 수 있습니다."]
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
            alert("아직 load 이벤트 중입니다.");
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
                addTextListLi(document.querySelectorAll(`.firstLi`).length+1,`위 수정한 text를 save&load하는 기능 / text를 save&load하며 위 화면에 띄워주는 기능 / 계산기능`);
            }, 1000);
            firstliLastEvent.target[0].value="";
            return false;
        }

        addTextListLi(document.querySelectorAll(`.firstLi`).length+1,`${inputTypingText}`);
        firstliLastEvent.target[0].value="";
    })

}
window.addEventListener('load', autoText);

// mainWrap.addEventListener("click", mainBarEvent,{ once : true}); 추후 input에 submit할 경우 실행으로 바꿔보자  
// 고민중인것 들어온 사람이 위 내용을 바꿧을때 해당 내용을 로컬스토리지에 저장후 다음에도 보여줄까 말까는 조금 고민.
let menuOpen  = false;

function firstPage()    {
    mainWrap.style.border = "0px";
    mainWrap.style.background = "white";

    const menuBg = document.createElement("div"),
        menuLine = document.createElement("div"),
            menuLineDiv1 = document.createElement("div"),
            menuLineDiv2 = document.createElement("div"),
            menuLineDiv3 = document.createElement("div"),
        menuSpan = document.createElement("span"),
        menuNav = document.createElement("nav"),
            menuNavUl = document.createElement("ul"),
                menuNavLi1 = document.createElement("li"),
                    menuNavLi1A = document.createElement("a"),
                menuNavLi2 = document.createElement("li"),
                    menuNavLi2A = document.createElement("a"),
                menuNavLi3 = document.createElement("li"),
                    menuNavLi3A = document.createElement("a"),
                menuNavLi4 = document.createElement("li"),
                    menuNavLi4A = document.createElement("a");
    


    menuBg.id = "menuBg";
    menuLine.id = "menuLine";
    menuLineDiv1.className = "menuLineDiv",
    menuLineDiv2.className = "menuLineDiv",
    menuLineDiv3.className = "menuLineDiv",
    menuLineDiv1.id = "menuLineDiv1",
    menuLineDiv2.id = "menuLineDiv2",
    menuLineDiv3.id = "menuLineDiv3",
    menuSpan.id = "menubtn";
    menuNav.id = "menuNav";
    menuNavUl.id = "menuNavUl";
    menuNavLi1.className = "menuNavLi";
    menuNavLi2.className = "menuNavLi";
    menuNavLi3.className = "menuNavLi";
    menuNavLi4.className = "menuNavLi";
    menuNavLi1A.className = "menuNavLiA";
    menuNavLi2A.className = "menuNavLiA";
    menuNavLi3A.className = "menuNavLiA";
    menuNavLi4A.className = "menuNavLiA";

    function addMenu()  {
        menuNavLi1A.innerText ="Code Page";
        menuNavLi1A.setAttribute("data-text",`${menuNavLi1A.innerText}`);
        menuNavLi2A.innerText ="Menu2";
        menuNavLi2A.setAttribute("data-text",`${menuNavLi2A.innerText}`);
        menuNavLi3A.innerText ="Menu3";
        menuNavLi3A.setAttribute("data-text",`${menuNavLi3A.innerText}`);
        menuNavLi4A.innerText ="Menu4";
        menuNavLi4A.setAttribute("data-text",`${menuNavLi4A.innerText}`);

        if(menuOpen){
            menuNavUl.style.opacity = 0;
            menuNavUl.style.top = "25%";
            setTimeout(() => {
                menuLineDiv1.style.height = "0px";
                menuLineDiv1.style.transform = "rotate(37deg)";
                menuLineDiv2.style.height = "0px";
                menuLineDiv2.style.transform = "rotate(37deg)";
                menuLineDiv3.style.height = "0px";
                menuLineDiv3.style.transform = "rotate(37deg)";
                menuSpan.style.color = "black";
                menuNavUl.remove();
            }, 1000);
            setTimeout(() => {
                menuNav.remove();
            }, 2000);
            menuOpen = false;
            return false;
        }

        mainWrap.appendChild(menuNav);
        menuNav.appendChild(menuLine);
        menuLine.appendChild(menuLineDiv1);
        menuLine.appendChild(menuLineDiv2);
        menuLine.appendChild(menuLineDiv3);
        menuNav.appendChild(menuNavUl);
        menuNavUl.appendChild(menuNavLi1);
        menuNavUl.appendChild(menuNavLi2);
        menuNavUl.appendChild(menuNavLi3);
        menuNavUl.appendChild(menuNavLi4);
        menuNavLi1.appendChild(menuNavLi1A);
        menuNavLi2.appendChild(menuNavLi2A);
        menuNavLi3.appendChild(menuNavLi3A);
        menuNavLi4.appendChild(menuNavLi4A);

        menuNavUl.style.opacity = 0;
        menuLine.className = "open";

        setTimeout(() => {
            menuLineDiv1.style.height = "100px";
            menuLineDiv1.style.transform = "rotate(37deg) scale(7.5)";
            menuLineDiv2.style.height = "100px";
            menuLineDiv2.style.transform = "rotate(37deg) scale(6.5)";
            menuLineDiv3.style.height = "100px";
            menuLineDiv3.style.transform = "rotate(37deg) scale(6.5)";
            menuSpan.style.color = "white";
        }, 0);
        setTimeout(() => {
            menuNavUl.style.opacity = 1;
            menuNavUl.style.top = "25%";
        }, 1000);
        menuOpen = true;
    }


    menuSpan.innerText = "MENU";

    mainWrap.appendChild(menuBg);
    menuBg.appendChild(menuSpan);

    const mobileText_X_Value1 = mainWrap.clientWidth/6+5;
    const mobileText_X_Value2 = mainWrap.clientWidth/10;


    const svgMainText = document.createElement("svg");
    mainWrap.appendChild(svgMainText);
    if(isCheck) {
        svgMainText.outerHTML = `
        <video id="mainText_C_Video" class="mainTextVideo" muted autoplay loop style="height:100%; width: auto;">
            <source src="https://drive.google.com/uc?export=download&id=1w4ha9y8pkwAnmTl1TZ15tFdavtcnDTS3" type="video/mp4">
        </video>
        <h1 class="moMainTitle">
            CGM STYLE<hr/>
            <span>portFoilo</span>
        </h1>
        `
    }else{
        svgMainText.outerHTML = `
            <video id="mainText_C_Video" class="mainTextVideo" muted autoplay loop>
                <source src="https://drive.google.com/uc?export=download&id=1gQLzaeViE9JZUNQMLXGPAhAFn6K5sJXm" type="video/mp4">
            </video>
            <svg id="cgmStyleWrap" version="1.2" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <title>cgm-style</title>
                <clipPath id="mainText_C" class="mainText">
                    <text x="6%" id="mouseMoveMainTitle" y="53%" textLength="5em" lengthAdjust="spacing" font-size="35vh">
                        CGM STYLE
                    </text>
                    <text x="30%" y="66%" textLength="5em" lengthAdjust="spacing" font-size="15vh">
                        PF
                    </text>
                    <path id="mouseMoveCursor" fill="#a29bfe">
                        <animate attributeName="d"
                            dur="10s"
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
                </clipPath>
            </svg>

        `
    }
    
    const cgmStyleWrap = document.querySelector(".mainTextVideo");
    const cgmStyleWrapMouse = document.querySelector("#cgmStyleWrap")

    setTimeout(() => {  // 첫 화면 실행후 텍스트를 자연스럽게 노출
        cgmStyleWrap.style.opacity = "1";
    },2000)


    let scrollPageOn = false; // 스크롤 페이지 on 체크 
    function section2() {   // 타이틀 클릭후 나오는 화면
        let wheelTest = 0;
        let wheelUp = 0;
        let wheelDown = 0;
        const scrollPageWrap = document.createElement("div");
            const scrollPage1 = document.createElement("section");
                const scrollPage1P = document.createElement("p");
        
        scrollPageWrap.id = "scrollPageWrap";
        scrollPage1.id = "scrollPage1";
        scrollPage1P.id = "scrollPage1P";

        mainWrap.appendChild(scrollPageWrap);
        scrollPageWrap.appendChild(scrollPage1);
        scrollPage1.appendChild(scrollPage1P);


        scrollPage1P.innerText = "안녕하세요"

        scrollPageWrap.addEventListener("wheel",(e) => {    // 마우스 휠의 깊이를 파악하는 함수
            if(e.wheelDeltaY === -120){
                wheelTest= wheelTest-5;
            }else if (e.wheelDeltaY === 120)    {
                wheelTest= wheelTest+5;
            }

            if(wheelTest <= 0 && wheelTest >= 100){   // 첫번째 이벤트

            }else if(wheelTest <= 100 && wheelTest >= 200)  {

            }
        })
    } 


    const mouseMoveCursor = document.querySelector("#mouseMoveCursor");
    const mouseMoveMainTitle = document.querySelector("#mouseMoveMainTitle");
    let size = 40;

    mainWrap.addEventListener("mousemove",(e) => { // 마우스 움직임에 따라 이동하는 배경 원 
        size = 0;
        let mouseMoveX = e.clientX,
            mouseMoveY = e.clientY;
            setTimeout(() => {
                mouseMoveCursor.style.transform = `translateX(${mouseMoveX-230}px)`;
                mouseMoveCursor.style.transform += ` translateY(${mouseMoveY-230}px)`;
            }, 30);

            // 움직임에 따라 마우스 크기 변환 하는것은 재구현 필요 - 스케일을 키우는것으로 대체해야할듯함
        
        let mainTitleX = mouseMoveMainTitle.x.baseVal[0].value,
            maxMainTilteX = mouseMoveMainTitle.clientWidth - mouseMoveMainTitle.x.baseVal[0].value,
            mainTitleY = mouseMoveMainTitle.y.baseVal[0].value,
            maxMainTilteY = mouseMoveMainTitle.clientWidth - mouseMoveMainTitle.y.baseVal[0].value;
        if(mouseMoveX >= mainTitleX && mouseMoveX <= maxMainTilteX+60 && mouseMoveY >= mainTitleY/2 && mouseMoveY <= maxMainTilteY/2) { // 가운데 텍스트 안을 움직일때
            const sizeUpMove = setInterval(() => {
                if(size.toFixed(1) >= 1.5)   {
                    clearInterval(sizeUpMove);
                    return false;
                }
                size += 0.01;
                mouseMoveCursor.style.transform = `${mouseMoveCursor.style.transform } scale(${size})`; // 해당 부분 scale이 계속해서 더해지는 오류가 있음 수정필요
            }, 30);


            cgmStyleWrapMouse.addEventListener("click",(e) => {
                if(scrollPageOn !== true){  // 스크롤 페이지 실행 함수
                    section2();
                }
                scrollPageOn = true;

                if(Math.floor(size) >= 4) { // 클릭하여 최대 크기가 되었을때  다시 실행 방지
                    return false;
                }
                const sizeUpClick = setInterval(() => { // 사이즈 확장
                    if(Math.floor(size) >= 4)   {
                        clearInterval(sizeUpClick);
                        return false;
                    }
                    size += 0.01;
                    mouseMoveCursor.style.transform = `${mouseMoveCursor.style.transform } scale(${size})`;
                }, 25);
            })
        }else { // 가운데 텍스트 외를 움직일때
            const sizeDownMove = setInterval(() => {
                if(Math.floor(size) >= 4) { // 클릭 후 최대 크기가 되어 해당 영역을 움직여도 줄어들지 않도록 방지
                    return false;
                }
                if(Math.floor(size) <= 1)   { // 최소 크기가 되었을때 이벤트 중지
                    clearInterval(sizeDownMove);
                    return false;
                }
                size -= 0.01;
                mouseMoveCursor.style.transform = `${mouseMoveCursor.style.transform } scale(${size})`;
            }, 30);

        }
    })


    //버튼 클릭 이벤트
    menuSpan.addEventListener("click",addMenu);
    menuNavLi1A.addEventListener("click",loadBar);
    menuNavLi1A.addEventListener("click",() => {menuNav.remove();});
    menuNavLi2A.addEventListener("click",() => {menuNav.remove();});
    menuNavLi3A.addEventListener("click",() => {menuNav.remove();});
    menuNavLi4A.addEventListener("click",() => {menuNav.remove();});
}
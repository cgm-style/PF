let menuOpen  = false;

function firstPage()    {
    mainWrap.style.border = "0px";
    mainWrap.style.background = "white";

    const secondSection1 = document.createElement("section"),
        menuBg = document.createElement("div"),
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
    

    secondSection1.id = "secondSection1";
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

    mainWrap.appendChild(secondSection1);

    function addMenu()  {
        menuNavLi1A.innerText ="Git";
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

        secondSection1.appendChild(menuNav);
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

    secondSection1.appendChild(menuBg);
    menuBg.appendChild(menuSpan);

    const mobileText_X_Value1 = secondSection1.clientWidth/6+5;
    const mobileText_X_Value2 = secondSection1.clientWidth/10;


    const svgMainText = document.createElement("svg");
    secondSection1.appendChild(svgMainText);
    if(isCheck) {   // mo의 경우
        svgMainText.outerHTML = `
        <video id="mainText_C_Video" class="mainTextVideo" muted autoplay loop style="height:100%; width: auto;">
            <source src="https://drive.google.com/uc?export=download&id=1w4ha9y8pkwAnmTl1TZ15tFdavtcnDTS3" type="video/mp4">
        </video>
        <h1 class="moMainTitle">
            CGM STYLE<hr/>
            <span>portFoilo</span>
        </h1>
        `
    }else{  //pc일 경우
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
    let cgmStyleWrapMouse = document.querySelector("#cgmStyleWrap");

    cgmStyleWrap.style.height = `${window.outerHeight+40}px`; // 추후 height 이벤트를 위한 화면값 주기

    setTimeout(() => {
        cgmStyleWrap.style.opacity = 1;
    }, 1500);

    function secondPage()   {
        const minSec1 = ()=>{
            cgmStyleWrap.style.height = `300px`;    // 영상창 줄어듬
            cgmStyleWrapMouse.remove();
            scrollPageWrap.remove();
            cgmStyleWrapMouse = document.querySelector("#cgmStyleWrap");
        }
        minSec1();

        const secondSection1Wrap = document.createElement("div"),
              secondSection2 = document.createElement("section"),
              secondSection3 = document.createElement("section");

        secondSection1.id = "secondSection1";
        secondSection1Wrap.id = "secondSection1Wrap";
        secondSection2.id = "secondSection2";
        secondSection3.id = "secondSection2";


        // 섹션 1의 새로생성 되는 창
        function addPfArea(num,p1,p2,pcimg,moimg)    {    // Pf를 생성하는 재사용 함수
            mainWrap.appendChild(eval(`secondSection1WrapDiv${num} = document.createElement("div")`));
                eval(`secondSection1WrapDiv${num}`).appendChild(eval(`secondSection1WrapDiv${num}Text = document.createElement("div")`));
                    eval(`secondSection1WrapDiv${num}Text`).appendChild(eval(`secondSection1WrapDiv${num}TextP1 = document.createElement("p")`));
                    eval(`secondSection1WrapDiv${num}Text`).appendChild(eval(`secondSection1WrapDiv${num}TextP2 = document.createElement("p")`));
                eval(`secondSection1WrapDiv${num}`).appendChild(eval(`secondSection1WrapDiv${num}Pc = document.createElement("div")`));
                    eval(`secondSection1WrapDiv${num}Pc`).appendChild(eval(`secondSection1WrapDiv${num}PcImg = document.createElement("img")`));
                eval(`secondSection1WrapDiv${num}`).appendChild(eval(`secondSection1WrapDiv${num}Mo = document.createElement("div")`));
                    eval(`secondSection1WrapDiv${num}Mo`).appendChild(eval(`secondSection1WrapDiv${num}MoImg = document.createElement("img")`));

            eval(`secondSection1WrapDiv${num}`).className = `secondSection1WrapDiv`;
            eval(`secondSection1WrapDiv${num}Text`).className = `secondSection1WrapDivText`;
            eval(`secondSection1WrapDiv${num}TextP1`).className = `secondSection1WrapDivTextP`;
            eval(`secondSection1WrapDiv${num}TextP2`).className = `secondSection1WrapDivTextP`;
            eval(`secondSection1WrapDiv${num}Pc`).className = `secondSection1WrapDivPc`;
            eval(`secondSection1WrapDiv${num}PcImg`).className = `secondSection1WrapDivPcImg`;
            eval(`secondSection1WrapDiv${num}Mo`).className = `secondSection1WrapDivMo`;
            eval(`secondSection1WrapDiv${num}MoImg`).className = `secondSection1WrapDivMoImg`;

            

            eval(`secondSection1WrapDiv${num}TextP1`).innerText = `${p1}`;
            eval(`secondSection1WrapDiv${num}TextP1`).innerText = `${p2}`;

        }

        
        // Pf생성 부분
        addPfArea(1,`test50%`,`test내가함`);
        addPfArea(2,`test150%`,`test인것`);
    }


    let scrollPageOn = false; // 스크롤 페이지 on 체크 
    function section2() {   // 타이틀 클릭후 나오는 화면
        let wheelValue = 0;
        let wheelUp = 1;
        let wheelDown = 0;
        const scrollPageWrap = document.createElement("div");
            const scrollPage1 = document.createElement("section");
                const scrollPage1P = document.createElement("p");
                const scrollPage2P = document.createElement("p");
                const scrollPage3P = document.createElement("p");
                const scrollPage4P = document.createElement("p");
                const scrollPage5P = document.createElement("p");
        
        scrollPageWrap.id = "scrollPageWrap";
        scrollPage1.id = "scrollPage1";
        scrollPage1P.className = "scrollPageP";
        scrollPage2P.className = "scrollPageP";
        scrollPage3P.className = "scrollPageP";
        scrollPage4P.className = "scrollPageP";
        scrollPage5P.className = "scrollPageP";

        secondSection1.appendChild(scrollPageWrap);
        scrollPageWrap.appendChild(scrollPage1);
        scrollPage1.appendChild(scrollPage1P);
        scrollPage1.appendChild(scrollPage2P);
        scrollPage1.appendChild(scrollPage3P);
        scrollPage1.appendChild(scrollPage4P);
        scrollPage1.appendChild(scrollPage5P);


        scrollPage1P.innerText = "안녕하세요";
        scrollPage2P.innerText = "제 이름은 최근명입니다.";
        scrollPage3P.innerText = "다양한 시도 다양한 경험을 중요시하며";
        scrollPage4P.innerText = "이를 기반으로한 창의성과 문제 해결력을 기르고 있습니다.";
        scrollPage5P.innerText = "그렇다면 저에대해 더욱 자세히 설명해볼게요 :)";

        scrollPageWrap.addEventListener("wheel",(e) => {    // 마우스 휠의 깊이를 파악하는 함수
            if(e.wheelDeltaY === -120){ // 휠 이벤트 속도
                wheelValue= wheelValue+7;
            }else if (e.wheelDeltaY === 120)    {
                wheelValue= wheelValue-7;
            }

            function wheelEvent(index){ // 클릭 후 메인 화면 스크롤 텍스트 액션 
                
                if(wheelValue <= -5)    {    // 스크롤의 깊이
                    wheelUp -= 1;
                    wheelDown = 7;
                    wheelValue = 100;
                }else if(wheelValue >= 0 && wheelValue <= 15)    {    // 스크롤의 깊이
                    wheelDown = 1
                }else if(wheelValue >= 15 && wheelValue <= 30){
                    wheelDown = 2
                }else if(wheelValue >= 30 && wheelValue <= 40){
                    wheelDown = 3
                }else if(wheelValue >= 40 && wheelValue <= 60){
                    wheelDown = 4
                }else if(wheelValue >= 60 && wheelValue <= 75){
                    wheelDown = 5
                }else if(wheelValue >= 75 && wheelValue <= 90){
                    wheelDown = 6
                }else if(wheelValue >= 90 && wheelValue <= 100){
                    wheelDown = 7
                }else   {
                    wheelDown = 0;
                    wheelValue = 0;
                    wheelUp += 1;
                }

                if(index){
                    if(wheelDown === 0) {
                        index.style.opacity = 0
                        index.style.marginTop = `-130px`
                    }else if(wheelDown === 1) {
                        index.style.opacity = 0.2
                        index.style.marginTop = `130px`
                    }else if(wheelDown === 2)   {
                        index.style.opacity = 0.5
                        index.style.marginTop = `70px`
                    }else if(wheelDown === 3)   {
                        index.style.opacity = 0.8
                        index.style.marginTop = `3px`
                    }else if(wheelDown === 4)   {
                        index.style.opacity = 1
                        index.style.marginTop = `0px`
                    }else if(wheelDown === 5)   {
                        index.style.opacity = 1
                        index.style.marginTop = `0px`
                    }else if(wheelDown === 6)   {
                        index.style.opacity = 0.5
                        index.style.marginTop = `-60px`
                    }else if(wheelDown === 7)   {
                        index.style.opacity = 0
                        index.style.marginTop = `-130px`
                    }
                }else   {
                    wheelUp += 1;
                    return false;
                }
                
            }
            if(wheelUp < 0){
                wheelUp += 1;
                wheelEvent(null);
            }else if(wheelUp === 1){
                wheelEvent(scrollPage1P);
            }else if(wheelUp === 2){
                wheelEvent(scrollPage2P);
            }else if(wheelUp === 3){
                wheelEvent(scrollPage3P);
            }else if(wheelUp === 4){
                wheelEvent(scrollPage4P);
            }else if(wheelUp === 5){
                wheelEvent(scrollPage5P);
            }else if(wheelUp === 6){
                if(document.querySelector(`.secondSection1WrapDiv`)) {
                    if(wheelValue < 50) { // 5값까지 간후 다시 올라올때
                        wheelDown = 0;
                        wheelValue = 0;
                        wheelUp += 1;
                    }else if(wheelValue > 50){  // 넘어간 후 다시 돌아올때
                        wheelDown = 7;
                        wheelValue = 100;
                        wheelUp -= 1;
                    }
                    return false;
                }
                secondPage();
                wheelDown = 0;
                wheelValue = 0;
                wheelUp += 1;
                e.preventDefault();
                return false;
            }else{
                wheelEvent(null);
                wheelUp -= 1;
            }
        })
    } 


    const mouseMoveCursor = document.querySelector("#mouseMoveCursor");
    const mouseMoveMainTitle = document.querySelector("#mouseMoveMainTitle");
    let size = 1;

    secondSection1.addEventListener("mousemove",(e) => { // 마우스 움직임에 따라 이동하는 배경 원 
        if(!cgmStyleWrapMouse)  {
            e.preventDefault();
            return false;
        }

        size;
        let mouseMoveX = e.clientX,
            mouseMoveY = e.clientY;
        
        let mainTitleX = mouseMoveMainTitle.x.baseVal[0].value,
            maxMainTilteX = mouseMoveMainTitle.clientWidth - mouseMoveMainTitle.x.baseVal[0].value,
            mainTitleY = mouseMoveMainTitle.y.baseVal[0].value,
            maxMainTilteY = mouseMoveMainTitle.clientWidth - mouseMoveMainTitle.y.baseVal[0].value;

        mouseMoveCursor.style.transform = `translateX(${mouseMoveX-(230*size)}px) translateY(${mouseMoveY-(230*size)}px) scale(${size})`; 


        function sizeUpMove()   {
            if(size.toFixed(1) >= 1.5)   {
                clearInterval(sizeUpMove);
                sizeEvent = false;
                return false;
            }
                size += 0.1;
                mouseMoveCursor.style.transform = `translateX(${mouseMoveX-(230*size)}px) translateY(${mouseMoveY-(230*size)}px) scale(${size})`;
        }

        function sizeDownMove() {
            if(size >= 4) { // 클릭 후 최대 크기가 되어 해당 영역을 움직여도 줄어들지 않도록 방지
                return false;
            }
            if(size <= 0.6)   { // 최소 크기가 되었을때 이벤트 중지
                clearInterval(sizeDownMove);
                sizeEvent = true;
                return false;
            }
                size = size - 0.1;
                mouseMoveCursor.style.transform = `translateX(${mouseMoveX-(230*size)}px) translateY(${mouseMoveY-(230*size)}px) scale(${size})`; 
        }

        if(mouseMoveX >= mainTitleX && mouseMoveX <= maxMainTilteX+60 && mouseMoveY >= mainTitleY/2 && mouseMoveY <= maxMainTilteY/2) { // 가운데 텍스트 안을 움직일때
            setInterval(sizeUpMove(), 30);
            
            cgmStyleWrapMouse.addEventListener("click",(e) => {
                if(scrollPageOn !== true){  // 스크롤 페이지 실행 함수
                    section2();
                }
                scrollPageOn = true;

                if(Math.floor(size) >= 20) { // 클릭하여 최대 크기가 되었을때  다시 실행 방지
                    return false;
                }
                const sizeUpClick = setInterval(() => { // 사이즈 확장
                    if(Math.floor(size) >= 20)   {
                        clearInterval(sizeUpClick);
                        return false;
                    }
                    size += 0.01;
                    mouseMoveCursor.style.transform = `translateX(${mouseMoveX-(230*size)}px) translateY(${mouseMoveY-(230*size)}px) scale(${size})`; 
                }, 25);
            })
        }else { // 가운데 텍스트 외를 움직일때
            setInterval(sizeDownMove(), 30);
        }
    })


    //버튼 클릭 이벤트
    menuSpan.addEventListener("click",addMenu);
    menuNavLi1A.addEventListener("click",() => {menuNav.remove();});
    menuNavLi2A.addEventListener("click",() => {menuNav.remove();});
    menuNavLi3A.addEventListener("click",() => {menuNav.remove();});
    menuNavLi4A.addEventListener("click",() => {menuNav.remove();});
}
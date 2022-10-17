let menuOpen = false;
let videoPlay = true;

function firstPage() {
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
  menuLineDiv1.className = "menuLineDiv";
  menuLineDiv2.className = "menuLineDiv";
  menuLineDiv3.className = "menuLineDiv";
  menuLineDiv1.id = "menuLineDiv1";
  menuLineDiv2.id = "menuLineDiv2";
  menuLineDiv3.id = "menuLineDiv3";
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

  function addMenu() {
    menuNavLi1A.innerText = "Git";
    menuNavLi1A.setAttribute("data-text", `${menuNavLi1A.innerText}`);
    menuNavLi1A.href = `https://github.com/cgm-style`;
    menuNavLi2A.innerText = "Home";
    menuNavLi2A.setAttribute("data-text", `${menuNavLi2A.innerText}`);
    menuNavLi2A.href = `https://cgm-style.github.io/PF/`;
    menuNavLi3A.innerText = "Mail";
    menuNavLi3A.setAttribute("data-text", `${menuNavLi3A.innerText}`);
    menuNavLi3A.href = `mailto:developercgm@gmail.com`;
    menuNavLi4A.innerText = "call";
    menuNavLi4A.setAttribute("data-text", `${menuNavLi4A.innerText}`);
    menuNavLi4A.href = `tel:010-7242-4787`;


    if (menuOpen) {
      menuNavUl.style.opacity = 0;
      if (isCheck) {
        menuNavUl.style.top = "6%";
      }else{
        menuNavUl.style.top = "25%";
      }
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
      menuNavUl.style.top = "32%";
      if(!isCheck){
        menuNavUl.style.top = "30%";
      }
    }, 1000);
    menuOpen = true;
  }

  menuSpan.innerText = "MENU";

  secondSection1.appendChild(menuBg);
  menuBg.appendChild(menuSpan);

  const mobileText_X_Value1 = secondSection1.clientWidth / 6 + 5;
  const mobileText_X_Value2 = secondSection1.clientWidth / 10;

  const svgMainText = document.createElement("svg");
  secondSection1.appendChild(svgMainText);
  if (isCheck) {
    // mo의 경우 
    svgMainText.outerHTML = `
        <video id="mainText_C_Video" class="mainTextVideo" muted autoplay loop style="height:100%; width: auto;">
            <source src="https://drive.google.com/uc?export=download&id=1w0nvTwk7Gztd1i8IQwDWsUQjc-oLXxpH" type="video/mp4">
        </video>
        <h1 class="moMainTitle" style="transition:all 2s; top:0px;">
            CGM STYLE<br/>
            <span>portFoilo</span>
        </h1>
        `;
      
      const moMainTitle = document.querySelector(".moMainTitle"),
            moVideoTextList = [
              `안녕하세요`,
              `제 이름은 최근명입니다.`,
              `다양한 시도 다양한 경험을<br/> 중요시하며`,
              `이 경험으로 창의성, 문제 해결력을<br/> 기르고 있습니다.`,
              `제 작업물들을 소개하겠습니다 :)`
            ];

      
      
      secondSection1.style.display = `flex`;
      secondSection1.style.justifyContent = `center`;
          
      function moVideoText(moVideoTextNum)  {
        const addMoVideoText = document.createElement("p");
        addMoVideoText.className = "addMoVideoText";

        addMoVideoText.innerHTML = `${moVideoTextList[moVideoTextNum]}`;

        secondSection1.appendChild(addMoVideoText);

        addMoVideoText.style.top = `60%`;
        addMoVideoText.style.opacity = `0`;

        setTimeout(() => {
          addMoVideoText.style.top = `50%`;
          addMoVideoText.style.opacity = `1`;
        }, 100);

        setTimeout(() => {
          addMoVideoText.style.top = `40%`;
          addMoVideoText.style.opacity = `0`;
        }, 2000);
        setTimeout(() => {
          addMoVideoText.remove();
        }, 3000);
      }

      let moVideoTextNum = 0; // video text의 넘버
      
      moMainTitle.addEventListener("click",(e)=>{
        moMainTitle.style.top = `-100%`;
        moMainTitle.style.transform = `none`;

        setTimeout(() => {
          let textInterval = setInterval(()=>{
            if(moVideoTextNum >= 5)  {
              clearInterval(textInterval);
              moSecondPage();
              return false
            }
            moVideoText(moVideoTextNum);
            moVideoTextNum += 1;
          }, 3000);
        }, 1000);
      })

      function moSecondPage() {
        const minSec1 = () => { // text 액션이 전부 나온 후 실행
          mainWrap.style.position = `absolute`;
          mainWrap.style.width = `100%`;
          mainWrap.style.height = `auto`;
          secondSection1.style.height = `200px`; // 영상창 줄어듬
          secondSection1.style.overflow = `hidden`;
          secondSection1.style.marginTop = `70px`;
          secondSection1.style.position = `relative`;
          cgmStyleWrap.style.top = `-150px`;
          cgmStyleWrap.style.width = `100%`;
          cgmStyleWrap.style.height = `auto`;
          cgmStyleWrap.style.cursor = "pointer";
          cgmStyleWrap.addEventListener("click", () => {
            // 영상 클릭시 재생혹은 정지
            if (videoPlay === true) {
              cgmStyleWrap.play();
            } else {
              cgmStyleWrap.pause();
            }
            videoPlay = !videoPlay;
          });
          menuBg.style.position = `fixed`;
          menuBg.style.top = `0px`;
          menuBg.style.left = `0px`;
          menuBg.style.zIndex = `15`;
          moMainTitle.remove(); // mouse무브 영역 삭제
          menuNavUl.style.top = "7%";
        };

        const secondSection1Wrap = document.createElement("div"),
      secondSection1WrapP = document.createElement("p"),
      secondSection2 = document.createElement("section"),
      secondSection3 = document.createElement("section");

    secondSection1.id = "secondSection1";
    secondSection1Wrap.id = "secondSection1Wrap";
    secondSection1WrapP.id = "secondSection1WrapP";
    secondSection2.id = "secondSection2";
    secondSection3.id = "secondSection3";

    mainWrap.appendChild(secondSection1Wrap);
    mainWrap.appendChild(secondSection2);
    mainWrap.appendChild(secondSection3);

    secondSection1Wrap.appendChild(secondSection1WrapP);

    secondSection1WrapP.innerText = `portfolio`;

    // 섹션 1의 새로생성 되는 창
    function addPfArea(num, p1, p2, p3, pcimg, moimg, url) {
      // Pf를 생성하는 재사용 함수
      secondSection1Wrap.appendChild(
        eval(`secondSection1WrapDiv${num} = document.createElement("a")`)
      );
      eval(`secondSection1WrapDiv${num}`).appendChild(
        eval(`secondSection1WrapDiv${num}Text = document.createElement("div")`)
      );
      eval(`secondSection1WrapDiv${num}Text`).appendChild(
        eval(`secondSection1WrapDiv${num}TextP1 = document.createElement("p")`)
      );
      eval(`secondSection1WrapDiv${num}Text`).appendChild(
        eval(`secondSection1WrapDiv${num}TextP2 = document.createElement("p")`)
      );
      eval(`secondSection1WrapDiv${num}Text`).appendChild(
        eval(`secondSection1WrapDiv${num}TextP3 = document.createElement("p")`)
      );
      eval(`secondSection1WrapDiv${num}`).appendChild(
        eval(`secondSection1WrapDiv${num}Pc = document.createElement("div")`)
      );
      eval(`secondSection1WrapDiv${num}Pc`).appendChild(
        eval(`secondSection1WrapDiv${num}PcImg = document.createElement("img")`)
      );
      eval(`secondSection1WrapDiv${num}`).appendChild(
        eval(`secondSection1WrapDiv${num}Mo = document.createElement("div")`)
      );
      eval(`secondSection1WrapDiv${num}Mo`).appendChild(
        eval(`secondSection1WrapDiv${num}MoImg = document.createElement("img")`)
      );

      eval(`secondSection1WrapDiv${num}`).className = `secondSection1WrapDiv`;
      eval(
        `secondSection1WrapDiv${num}Text`
      ).className = `secondSection1WrapDivText`;
      eval(
        `secondSection1WrapDiv${num}TextP1`
      ).className = `secondSection1WrapDivTextP`;
      eval(
        `secondSection1WrapDiv${num}TextP2`
      ).className = `secondSection1WrapDivTextP`;
      eval(
        `secondSection1WrapDiv${num}TextP3`
      ).className = `secondSection1WrapDivTextP`;
      eval(
        `secondSection1WrapDiv${num}Pc`
      ).className = `secondSection1WrapDivPc`;
      eval(
        `secondSection1WrapDiv${num}PcImg`
      ).className = `secondSection1WrapDivPcImg`;
      eval(
        `secondSection1WrapDiv${num}Mo`
      ).className = `secondSection1WrapDivMo`;
      eval(
        `secondSection1WrapDiv${num}MoImg`
      ).className = `secondSection1WrapDivMoImg`;

      eval(`secondSection1WrapDiv${num}TextP1`).innerText = `${p1}`;
      eval(`secondSection1WrapDiv${num}TextP2`).innerText = `${p2}`;
      eval(`secondSection1WrapDiv${num}TextP3`).innerText = `${p3}`;

      eval(`secondSection1WrapDiv${num}PcImg`).src = `img${pcimg}`;
      eval(`secondSection1WrapDiv${num}MoImg`).src = `img${moimg}`;

      eval(`secondSection1WrapDiv${num}`).href = `${url}`; // 링크 넣기
      eval(`secondSection1WrapDiv${num}`).target = `_blank`;
    }

    setTimeout(() => {
      // Pf생성 부분
      addPfArea(
        1,
        `paparecipe-KR`,
        `참여도 : 100%`,
        `간략 소개 : 카페24 쇼핑몰 기반으로 제작된 사이트 이며, 스킨 구매 후 스킨의 레이아웃 및 인터랙션 스크립트 수정 모듈 변수값 수정등이 있었습니다.`,
        `/papa_pc.png`,
        `/papa_mo.png`,
        `https://fathercos.cafe24.com/skin-skin32`
      );
      addPfArea(
        2,
        `paparecipe-JP`,
        `참여도 : 100%`,
        `간략 소개 : 카페24 쇼핑몰 기반이며 라쿠텐에도 생성이 되어있습니다. 스킨 구매후 레이아웃, 인터랙션, 스마트앱 연동등이 있었으며 유투브 영상의 삽입이 참신한 방법으로 진행되었습니다.`,
        `/papajp_pc.png`,
        `/papajp_mo.png`,
        `https://www.paparecipe.jp/`
      );
      addPfArea(
        3,
        `paparecipe-CN`,
        `참여도 : 80%`,
        `간략 소개 : 카페24 쇼핑몰 기반이며 기존 스킨에 리뉴얼되는 시안대로 작업이 진행되며 레이아웃, 정품인증 스크립트, 새로운 페이지등의 생성이 있었습니다.`,
        `/papacn_pc.png`,
        `/papacn_mo.png`,
        `https://cn.paparecipe.com/`
      );
      addPfArea(
        4,
        `paparecipe-US`,
        `참여도 : 100%`,
        `간략 소개 : 카페24 쇼핑몰 기반으로 제작 되었으며 쇼피파이로도 진행이 되었습니다. 현재는 쇼피파이는 off상태이며 카페24기반 몰만 진행되고 있습니다.`,
        `/papaus_pc.png`,
        `/papaus_mo.png`,
        `https://abtmall.world/`
      );
      addPfArea(
        5,
        `inga`,
        `참여도 : 100%`,
        `간략 소개 : 카페24 쇼핑몰 기반으로 제작이 되었으며 프로모션 페이지의 제작이 많았습니다. 최근 진행된 프로모션 페이지에는 swipe 슬라이드와 aos가 들어가있습니다.`,
        `/inga_pc.png`,
        `/inga_mo.png`,
        `https://ingacos.com/`
      );
      addPfArea(
        6,
        `golf does matter`,
        `참여도 : 100%`,
        `간략 소개 : 카페24 쇼핑몰 기반으로 제작이 되었으며 처음부터 하드코딩으로 제작이 된 페이지 입니다. 해당 작업을 통하여 카페24의 모듈이나 게시판등의 변수 사용등을 익혔습니다.`,
        `/gdm_pc.png`,
        `/gdm_mo.png`,
        `http://golfdoesmatter.com/`
      );
      addPfArea(
        7,
        `react test coin`,
        `참여도 : 100%`,
        `간략 소개 : create react app을 통하여 생성이 되었으며 처음으로 react로 생성해본 페이지 입니다. react를 git에 올리는 방법이나 기초 문법등을 연습한 페이지 입니다.`,
        `/React-coin_pc.png`,
        `/React-coin_mo.png`,
        `https://cgm-style.github.io/coinTest/`
      );
      addPfArea(
        8,
        `weather-Todo`,
        `참여도 : 100%`,
        `간략 소개 : Local Storage을 사용한 페이지로 cookie가 아닌 스토리지를 최대한 사용한 페이지 입니다. 스토리지에 다양한 데이터를 저장하고 불러오는 연습등을 진행하였습니다.`,
        `/todoPage_pc.png`,
        `/todoPage_mo.png`,
        `https://cgm-style.github.io/toDoList_clock_-5d-3h-weather-18h/`
      );
      addPfArea(
        9,
        `연세 행복 치과`,
        `참여도 : 100%`,
        `간략 소개 : 첫 회사에서 진행한 사이트로 카페24 기반이나 호스팅만 기반으로 하여 하드코딩으로 제작된 페이지입니다. php를 이용하여 제작이 되었습니다.`,
        `/happy_pc.png`,
        `/happy_mo.png`,
        `http://www.yonsei-dental.com/`
      );
      addPfArea(
        10,
        `법무법인 해성`,
        `참여도 : 100%`,
        `간략 소개 : 첫 회사에서 진행한 사이트로 카페24에서 하드코딩으로 제작된 페이지입니다. 처음으로 클라이언트와 직접 소통하며 니즈를 파악하고 진행한 페이지입니다.`,
        `/heasung_pc.png`,
        `/heasung_mo.png`,
        `http://haesunglaw.co.kr/`
      );
      addPfArea(
        11,
        `더울림`,
        `참여도 : 100%`,
        `간략 소개 : 첫 회사에 입사 후 처음으로 진행했던 페이지로 그때 당시에 사용하였던 제이쿼리로 다양한 플러그인들을 사용하여 제작한 페이지 입니다.`,
        `/thewoolim_pc.png`,
        `/thewoolim_mo.png`,
        `http://thewoolim.com/`
      );

      function useSkill(num,img,skill,skillNow) {
        secondSection2Container.appendChild(eval(`secondSection2Div${num} = document.createElement("div")`));
        eval(`secondSection2Div${num}`).appendChild(eval(`secondSection2Div${num}BgBox = document.createElement("div")`));
          eval(`secondSection2Div${num}BgBox`).appendChild(eval(`secondSection2Div${num}BgImg = document.createElement("img")`));
        eval(`secondSection2Div${num}`).appendChild(eval(`secondSection2Div${num}FtBox = document.createElement("div")`));
          eval(`secondSection2Div${num}FtBox`).appendChild(eval(`secondSection2Div${num}FtImg = document.createElement("img")`));
        eval(`secondSection2Div${num}`).appendChild(eval(`secondSection2Div${num}P = document.createElement("p")`));
  
        eval(`secondSection2Div${num}`).className = `secondSection2Div`;
        eval(`secondSection2Div${num}BgBox`).className = `secondSection2DivBgBox`;
          eval(`secondSection2Div${num}BgImg`).className = `secondSection2DivBgImg`;
        eval(`secondSection2Div${num}FtBox`).className = `secondSection2DivFtBox`;
          eval(`secondSection2Div${num}FtImg`).className = `secondSection2DivFtImg`;
        eval(`secondSection2Div${num}P`).className = `secondSection2DivP`;
  
        eval(`secondSection2Div${num}BgImg`).src = `img/${img}`;
        eval(`secondSection2Div${num}FtImg`).src = `img/${img}`;
  
        eval(`secondSection2Div${num}FtBox`).style.height = `${skill}%`
        eval(`secondSection2Div${num}FtImg`).style.marginTop = `-${skillNow}%`;
        eval(`secondSection2Div${num}P`).innerText = `${skill}%`;
      }

      const secondSection2Title = document.createElement("h2"),
      secondSection2Container = document.createElement("div");

      secondSection2.appendChild(secondSection2Title);
      secondSection2.appendChild(secondSection2Container);
      secondSection2Title.id = `secondSection2Title`;
      secondSection2Container.id = `secondSection2Container`;

      secondSection2Title.innerText = `사용언어 & Tool`;

      mainWrap.style.cursor = `auto`;
      useSkill(1,`html5.png`,90,10);  // 넘버,이미지,내 기술%,남은 빈칸
      useSkill(2,`css3.png`,80,20);
      useSkill(3,`jquery.png`,80,20);
      useSkill(4,`js.png`,90,10);
      useSkill(5,`react.png`,20,80);
      useSkill(6,`typeSript.png`,20,82);
      useSkill(7,`git.png`,60,40);
      useSkill(8,`code.png`,60,40);
      useSkill(9,`photo.png`,50,50);
      useSkill(10,`Ai.png`,40,60);
      useSkill(11,`html5.png`,90,10);
      useSkill(12,`css3.png`,80,20);
      useSkill(13,`jquery.png`,80,20);
      useSkill(14,`js.png`,90,10);
      useSkill(15,`react.png`,20,80);
      useSkill(16,`typeSript.png`,20,80);
      useSkill(17,`git.png`,60,40);

    function contact()  {
      const secondSection3P1 = document.createElement("p"),
            secondSection3P2 = document.createElement("p"),
            secondSection3P3 = document.createElement("p");
  
      secondSection3.appendChild(secondSection3P1);
      secondSection3.appendChild(secondSection3P2);
      secondSection3.appendChild(secondSection3P3);
  
      secondSection3P1.className = `secondSection3P`;
      secondSection3P2.className = `secondSection3P`;
      secondSection3P3.className = `secondSection3P`;
  
      secondSection3P1.innerText = `developercgm@gmail.com`;
      secondSection3P2.innerText = `010-7242-4787`;
      secondSection3P3.innerText = `CGM-Style`;
    }
    contact();
    }, 1000);
        minSec1();
      }
  } else {
    //pc일 경우 
    svgMainText.outerHTML = `
            <video id="mainText_C_Video" class="mainTextVideo" muted autoplay loop>
                <source src="https://drive.google.com/uc?export=download&id=1w0nvTwk7Gztd1i8IQwDWsUQjc-oLXxpH" type="video/mp4">
            </video>
              <svg id="cgmStyleWrap" version="1.2" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="cursor:pointer">
                <title>cgm-style CLick~!</title>
                <clipPath id="mainText_C" class="mainText">
                    <text x="6%" id="mouseMoveMainTitle" y="53%" textLength="5em" lengthAdjust="spacing" font-size="21em">
                      CGM STYLE
                    </text>
                    <text x="30%" y="66%" id="mouseMoveMainSubTitle" textLength="5em" lengthAdjust="spacing" font-size="15vh">
                      portFoilo
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
        `;
  }

  const cgmStyleWrap = document.querySelector(".mainTextVideo");
  let cgmStyleWrapMouse = document.querySelector("#cgmStyleWrap");

  cgmStyleWrap.style.height = `${window.outerHeight + 40}px`; // 추후 height 이벤트를 위한 화면값 주기

  setTimeout(() => {
    cgmStyleWrap.style.opacity = 1;
  }, 1500);

  function secondPage() {
    // 두번째 화면에서 스크롤 전부 하락시 나오는 이벤트
    const minSec1 = () => {
      mainWrap.style.position = `absolute`;
      mainWrap.style.width = `${window.innerWidth - 17}px`;
      mainWrap.style.height = `auto`;
      mainWrap.style.overflow = `hidden`;
      secondSection1.style.height = `200px`; // 영상창 줄어듬
      secondSection1.style.overflow = `hidden`;
      secondSection1.style.marginTop = `70px`;
      secondSection1.style.position = `relative`;
      cgmStyleWrap.style.top = `-150px`;
      cgmStyleWrap.style.height = `1000px`;
      cgmStyleWrap.style.cursor = "pointer";
      cgmStyleWrap.pause();
      cgmStyleWrap.addEventListener("click", () => {
        // 영상 클릭시 재생혹은 정지
        if (videoPlay === true) {
          cgmStyleWrap.play();
        } else {
          cgmStyleWrap.pause();
        }
        videoPlay = !videoPlay;
      });
      menuBg.style.position = `fixed`;
      menuBg.style.top = `0px`;
      menuBg.style.zIndex = `15`;
      cgmStyleWrapMouse.remove(); // mouse무브 영역 삭제
      scrollPageWrap.remove(); // 스크롤 영역 삭제
      cgmStyleWrapMouse = document.querySelector("#cgmStyleWrap"); // 무브영역 재 탐색 하여 이벤트 중지를 하기 위한 영역
    };
    minSec1();

    const secondSection1Wrap = document.createElement("div"),
      secondSection1WrapP = document.createElement("p"),
      secondSection2 = document.createElement("section"),
      secondSection3 = document.createElement("section");

    secondSection1.id = "secondSection1";
    secondSection1Wrap.id = "secondSection1Wrap";
    secondSection1WrapP.id = "secondSection1WrapP";
    secondSection2.id = "secondSection2";
    secondSection3.id = "secondSection3";

    mainWrap.appendChild(secondSection1Wrap);
    mainWrap.appendChild(secondSection2);
    mainWrap.appendChild(secondSection3);

    secondSection1Wrap.appendChild(secondSection1WrapP);

    secondSection1WrapP.innerText = `portfolio`;

    // 섹션 1의 새로생성 되는 창
    function addPfArea(num, p1, p2, p3, pcimg, moimg, url) {
      // Pf를 생성하는 재사용 함수
      secondSection1Wrap.appendChild(
        eval(`secondSection1WrapDiv${num} = document.createElement("a")`)
      );
      eval(`secondSection1WrapDiv${num}`).appendChild(
        eval(`secondSection1WrapDiv${num}Text = document.createElement("div")`)
      );
      eval(`secondSection1WrapDiv${num}Text`).appendChild(
        eval(`secondSection1WrapDiv${num}TextP1 = document.createElement("p")`)
      );
      eval(`secondSection1WrapDiv${num}Text`).appendChild(
        eval(`secondSection1WrapDiv${num}TextP2 = document.createElement("p")`)
      );
      eval(`secondSection1WrapDiv${num}Text`).appendChild(
        eval(`secondSection1WrapDiv${num}TextP3 = document.createElement("p")`)
      );
      eval(`secondSection1WrapDiv${num}`).appendChild(
        eval(`secondSection1WrapDiv${num}Pc = document.createElement("div")`)
      );
      eval(`secondSection1WrapDiv${num}Pc`).appendChild(
        eval(`secondSection1WrapDiv${num}PcImg = document.createElement("img")`)
      );
      eval(`secondSection1WrapDiv${num}`).appendChild(
        eval(`secondSection1WrapDiv${num}Mo = document.createElement("div")`)
      );
      eval(`secondSection1WrapDiv${num}Mo`).appendChild(
        eval(`secondSection1WrapDiv${num}MoImg = document.createElement("img")`)
      );

      eval(`secondSection1WrapDiv${num}`).className = `secondSection1WrapDiv`;
      eval(
        `secondSection1WrapDiv${num}Text`
      ).className = `secondSection1WrapDivText`;
      eval(
        `secondSection1WrapDiv${num}TextP1`
      ).className = `secondSection1WrapDivTextP`;
      eval(
        `secondSection1WrapDiv${num}TextP2`
      ).className = `secondSection1WrapDivTextP`;
      eval(
        `secondSection1WrapDiv${num}TextP3`
      ).className = `secondSection1WrapDivTextP`;
      eval(
        `secondSection1WrapDiv${num}Pc`
      ).className = `secondSection1WrapDivPc`;
      eval(
        `secondSection1WrapDiv${num}PcImg`
      ).className = `secondSection1WrapDivPcImg`;
      eval(
        `secondSection1WrapDiv${num}Mo`
      ).className = `secondSection1WrapDivMo`;
      eval(
        `secondSection1WrapDiv${num}MoImg`
      ).className = `secondSection1WrapDivMoImg`;

      eval(`secondSection1WrapDiv${num}TextP1`).innerText = `${p1}`;
      eval(`secondSection1WrapDiv${num}TextP2`).innerText = `${p2}`;
      eval(`secondSection1WrapDiv${num}TextP3`).innerText = `${p3}`;

      eval(`secondSection1WrapDiv${num}PcImg`).src = `img${pcimg}`;
      eval(`secondSection1WrapDiv${num}MoImg`).src = `img${moimg}`;

      eval(`secondSection1WrapDiv${num}`).href = `${url}`; // 링크 넣기
      eval(`secondSection1WrapDiv${num}`).target = `_blank`;
    }

    setTimeout(() => {
      // Pf생성 부분
      addPfArea(  // 넘버,타이틀글자,참여도,간략소개,pc이미지,mo이미지,연결링크
        1,
        `paparecipe-KR`,
        `#Html #Css #JavaScript #카페24 #Module `,
        `간략 소개 : 카페24 쇼핑몰 기반으로 제작된 사이트 이며, 스킨 구매 후 스킨의 레이아웃 및 인터랙션 스크립트 수정 모듈 변수값 수정등이 있었습니다.`,
        `/papa_pc.png`,
        `/papa_mo.png`,
        `https://fathercos.cafe24.com/skin-skin32`
      );
      addPfArea(
        2,
        `paparecipe-JP`,
        `#Html #Css #JavaScript #카페24 #Module #Rakuten`,
        `간략 소개 : 카페24 쇼핑몰 기반이며 라쿠텐에도 생성이 되어있습니다. 스킨 구매후 레이아웃, 인터랙션, 스마트앱 연동등이 있었으며 유투브 영상의 삽입이 참신한 방법으로 진행되었습니다.`,
        `/papajp_pc.png`,
        `/papajp_mo.png`,
        `https://www.paparecipe.jp/`
      );
      addPfArea(
        3,
        `paparecipe-CN`,
        `#Html #Css #JavaScript #카페24 #Module`,
        `간략 소개 : 카페24 쇼핑몰 기반이며 기존 스킨에 리뉴얼되는 시안대로 작업이 진행되며 레이아웃, 정품인증 스크립트, 새로운 페이지등의 생성이 있었습니다.`,
        `/papacn_pc.png`,
        `/papacn_mo.png`,
        `https://cn.paparecipe.com/`
      );
      addPfArea(
        4,
        `paparecipe-US`,
        `#Html #Css #JavaScript #카페24 #Module #Shopify`,
        `간략 소개 : 카페24 쇼핑몰 기반으로 제작 되었으며 쇼피파이로도 진행이 되었습니다. 현재는 쇼피파이는 off상태이며 카페24기반 몰만 진행되고 있습니다.`,
        `/papaus_pc.png`,
        `/papaus_mo.png`,
        `https://abtmall.world/`
      );
      addPfArea(
        5,
        `inga`,
        `#Html #Css #JavaScript #카페24 #Module`,
        `간략 소개 : 카페24 쇼핑몰 기반으로 제작이 되었으며 프로모션 페이지의 제작이 많았습니다. 최근 진행된 프로모션 페이지에는 swipe 슬라이드와 aos가 들어가있습니다.`,
        `/inga_pc.png`,
        `/inga_mo.png`,
        `https://ingacos.com/`
      );
      addPfArea(
        6,
        `golf does matter`,
        `#Html #Css #JavaScript #카페24 #Module #반응형`,
        `간략 소개 : 카페24 쇼핑몰 기반으로 제작이 되었으며 처음부터 하드코딩으로 제작이 된 페이지 입니다. 해당 작업을 통하여 카페24의 모듈이나 게시판등의 변수 사용등을 익혔습니다.`,
        `/gdm_pc.png`,
        `/gdm_mo.png`,
        `http://golfdoesmatter.com/`
      );
      addPfArea(
        7,
        `react test coin`,
        `#React #Css #JavaScript #Github #API`,
        `간략 소개 : create react app을 통하여 생성이 되었으며 처음으로 react로 생성해본 페이지 입니다. react를 git에 올리는 방법이나 기초 문법등을 연습한 페이지 입니다.`,
        `/React-coin_pc.png`,
        `/React-coin_mo.png`,
        `https://cgm-style.github.io/coinTest/`
      );
      addPfArea(
        8,
        `weather-Todo`,
        `#Html #Css #JavaScript #LocalStorage #Github`,
        `간략 소개 : Local Storage을 사용한 페이지로 cookie가 아닌 스토리지를 최대한 사용한 페이지 입니다. 스토리지에 다양한 데이터를 저장하고 불러오는 연습등을 진행하였습니다.`,
        `/todoPage_pc.png`,
        `/todoPage_mo.png`,
        `https://cgm-style.github.io/toDoList_clock_-5d-3h-weather-18h/`
      );
      addPfArea(
        9,
        `연세 행복 치과`,
        `#Html #Css #Jquery #Plugin`,
        `간략 소개 : 첫 회사에서 진행한 사이트로 카페24 기반이나 호스팅만 기반으로 하여 하드코딩으로 제작된 페이지입니다. php를 이용하여 제작이 되었습니다.`,
        `/happy_pc.png`,
        `/happy_mo.png`,
        `http://www.yonsei-dental.com/`
      );
      addPfArea(
        10,
        `법무법인 해성`,
        `#Html #Css #Jquery #Plugin #반응형`,
        `간략 소개 : 첫 회사에서 진행한 사이트로 카페24에서 하드코딩으로 제작된 페이지입니다. 처음으로 클라이언트와 직접 소통하며 니즈를 파악하고 진행한 페이지입니다.`,
        `/heasung_pc.png`,
        `/heasung_mo.png`,
        `http://haesunglaw.co.kr/`
      );
      addPfArea(
        11,
        `더울림`,
        `#Html #Css #Jquery #Plugin #반응형`,
        `간략 소개 : 첫 회사에 입사 후 처음으로 진행했던 페이지로 그때 당시에 사용하였던 제이쿼리로 다양한 플러그인들을 사용하여 제작한 페이지 입니다.`,
        `/thewoolim_pc.png`,
        `/thewoolim_mo.png`,
        `http://thewoolim.com/`
      );

      if(!isCheck){
        let LRScroll = 0; // 스크롤의 깊이
        let LRScrollOnOff = false;
        secondSection1Wrap.addEventListener("wheel", (e) => { // PF영역 휠 이벤트시 가로 슬라이드
          if(LRScrollOnOff === false) {
            e.preventDefault();
            e.stopPropagation();
          }
          if (e.wheelDeltaY === -120) {
            LRScroll += 50;
          } else if (e.wheelDeltaY === 120) {
            LRScroll -= 50;
          }
          if (LRScroll >= 2050) {
            LRScroll = 2050;
            LRScrollOnOff = true;
            return false;
          }

          if (LRScroll <= 0) {
            LRScroll = 0;
            LRScrollOnOff = true;
          } else if (LRScroll > 0 && LRScroll < 2050) {
            LRScrollOnOff = false;
            secondSection1Wrap.style.left = `-${LRScroll}px`;
          } else {
            return false;
          }
        });
      }

      function useSkill(num,img,skill,skillNow) {
        secondSection2Container.appendChild(eval(`secondSection2Div${num} = document.createElement("div")`));
        eval(`secondSection2Div${num}`).appendChild(eval(`secondSection2Div${num}BgBox = document.createElement("div")`));
          eval(`secondSection2Div${num}BgBox`).appendChild(eval(`secondSection2Div${num}BgImg = document.createElement("img")`));
        eval(`secondSection2Div${num}`).appendChild(eval(`secondSection2Div${num}FtBox = document.createElement("div")`));
          eval(`secondSection2Div${num}FtBox`).appendChild(eval(`secondSection2Div${num}FtImg = document.createElement("img")`));
        eval(`secondSection2Div${num}`).appendChild(eval(`secondSection2Div${num}P = document.createElement("p")`));
  
        eval(`secondSection2Div${num}`).className = `secondSection2Div`;
        eval(`secondSection2Div${num}BgBox`).className = `secondSection2DivBgBox`;
          eval(`secondSection2Div${num}BgImg`).className = `secondSection2DivBgImg`;
        eval(`secondSection2Div${num}FtBox`).className = `secondSection2DivFtBox`;
          eval(`secondSection2Div${num}FtImg`).className = `secondSection2DivFtImg`;
        eval(`secondSection2Div${num}P`).className = `secondSection2DivP`;
  
        eval(`secondSection2Div${num}BgImg`).src = `img/${img}`;
        eval(`secondSection2Div${num}FtImg`).src = `img/${img}`;
  
        eval(`secondSection2Div${num}FtBox`).style.height = `${skill}%`
        eval(`secondSection2Div${num}FtImg`).style.marginTop = `-${skillNow}%`;
        eval(`secondSection2Div${num}P`).innerText = `${skill}%`;
      }

      const secondSection2Title = document.createElement("h2"),
      secondSection2Container = document.createElement("div");

      secondSection2.appendChild(secondSection2Title);
      secondSection2.appendChild(secondSection2Container);
      secondSection2Title.id = `secondSection2Title`;
      secondSection2Container.id = `secondSection2Container`;

      secondSection2Title.innerText = `사용언어 & Tool`;

      mainWrap.style.cursor = `auto`;
      useSkill(1,`html5.png`,90,10);
      useSkill(2,`css3.png`,80,20);
      useSkill(3,`jquery.png`,80,20);
      useSkill(4,`js.png`,90,10);
      useSkill(5,`react.png`,20,80);
      useSkill(6,`typeSript.png`,20,82);
      useSkill(7,`git.png`,60,40);
      useSkill(8,`code.png`,60,40);
      useSkill(9,`photo.png`,50,50);
      useSkill(10,`Ai.png`,40,60);
      useSkill(11,`html5.png`,90,10);
      useSkill(12,`css3.png`,80,20);
      useSkill(13,`jquery.png`,80,20);
      useSkill(14,`js.png`,90,10);
      useSkill(15,`react.png`,20,80);
      useSkill(16,`typeSript.png`,20,80);
      useSkill(17,`git.png`,60,40);

    function contact()  {
      const secondSection3P1 = document.createElement("p"),
            secondSection3P2 = document.createElement("p"),
            secondSection3P3 = document.createElement("p");
  
      secondSection3.appendChild(secondSection3P1);
      secondSection3.appendChild(secondSection3P2);
      secondSection3.appendChild(secondSection3P3);
  
      secondSection3P1.className = `secondSection3P`;
      secondSection3P2.className = `secondSection3P`;
      secondSection3P3.className = `secondSection3P`;
  
      secondSection3P1.innerText = `developercgm@gmail.com`;
      secondSection3P2.innerText = `010-7242-4787`;
      secondSection3P3.innerText = `CGM-Style`;
    }
    contact();
    }, 1000);
  }

  let scrollPageOn = false; // 스크롤 페이지 on 체크
  function section2() {
    function scrollHint() {
      // 스크롤 힌트를 주는 부분
      const scrollHintWrap = document.createElement("div"),
        scrollHintInner = document.createElement("div");

      scrollHintWrap.id = "scrollHintWrap";
      scrollHintInner.id = "scrollHintInner";

      mainWrap.appendChild(scrollHintWrap);
      scrollHintWrap.appendChild(scrollHintInner);
    }

    // 타이틀 클릭후 나오는 화면
    let wheelValue = 0,
      wheelUp = 1,
      wheelDown = 0;
    const scrollPageWrap = document.createElement("div"),
      scrollPage1 = document.createElement("section"),
      scrollPage1P = document.createElement("p"),
      scrollPage2P = document.createElement("p"),
      scrollPage3P = document.createElement("p"),
      scrollPage4P = document.createElement("p"),
      scrollPage5P = document.createElement("p");

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
    scrollPage4P.innerText = "이를 기반으로 창의성과 문제 해결력을 기르고 있습니다.";
    scrollPage5P.innerText = "그렇다면 저에대해 더욱 자세히 설명해볼게요 :)";

    let scrollHintOnOff = true;

    setTimeout(() => {
      // 스크롤 힌트 함수 실행
      scrollHint();
    }, 1000);

    scrollPageWrap.addEventListener("wheel", (e) => {
      if (scrollHintOnOff === true) {
        scrollHintWrap.style.opacity = 0;
        scrollHintWrap.remove();
        scrollHintOnOff = false;
      }

      // 마우스 휠의 깊이를 파악하는 함수
      if (e.wheelDeltaY === -120) {
        // 휠 이벤트 속도
        wheelValue = wheelValue + 7;
      } else if (e.wheelDeltaY === 120) {
        wheelValue = wheelValue - 7;
      }

      function wheelEvent(index) {
        // 클릭 후 메인 화면 스크롤 텍스트 액션

        if (wheelValue <= -5) {
          // 스크롤의 깊이
          wheelUp -= 1;
          wheelDown = 7;
          wheelValue = 100;
        } else if (wheelValue >= 0 && wheelValue <= 15) {
          // 스크롤의 깊이
          wheelDown = 1;
        } else if (wheelValue >= 15 && wheelValue <= 30) {
          wheelDown = 2;
        } else if (wheelValue >= 30 && wheelValue <= 40) {
          wheelDown = 3;
        } else if (wheelValue >= 40 && wheelValue <= 60) {
          wheelDown = 4;
        } else if (wheelValue >= 60 && wheelValue <= 75) {
          wheelDown = 5;
        } else if (wheelValue >= 75 && wheelValue <= 90) {
          wheelDown = 6;
        } else if (wheelValue >= 90 && wheelValue <= 100) {
          wheelDown = 7;
        } else {
          wheelDown = 0;
          wheelValue = 0;
          wheelUp += 1;
        }

        if (index) {
          if (wheelDown === 0) {
            index.style.opacity = 0;
            index.style.marginTop = `-130px`;
          } else if (wheelDown === 1) {
            index.style.opacity = 0.2;
            index.style.marginTop = `130px`;
          } else if (wheelDown === 2) {
            index.style.opacity = 0.5;
            index.style.marginTop = `70px`;
          } else if (wheelDown === 3) {
            index.style.opacity = 0.8;
            index.style.marginTop = `3px`;
          } else if (wheelDown === 4) {
            index.style.opacity = 1;
            index.style.marginTop = `0px`;
          } else if (wheelDown === 5) {
            index.style.opacity = 1;
            index.style.marginTop = `0px`;
          } else if (wheelDown === 6) {
            index.style.opacity = 0.5;
            index.style.marginTop = `-60px`;
          } else if (wheelDown === 7) {
            index.style.opacity = 0;
            index.style.marginTop = `-130px`;
          }
        } else {
          wheelUp += 1;
          return false;
        }
      }
      if (wheelUp < 0) {
        wheelUp += 1;
        wheelEvent(null);
      } else if (wheelUp === 1) {
        wheelEvent(scrollPage1P);
      } else if (wheelUp === 2) {
        wheelEvent(scrollPage2P);
      } else if (wheelUp === 3) {
        wheelEvent(scrollPage3P);
      } else if (wheelUp === 4) {
        wheelEvent(scrollPage4P);
      } else if (wheelUp === 5) {
        wheelEvent(scrollPage5P);
      } else if (wheelUp === 6) {
        if (document.querySelector(`.secondSection1WrapDiv`)) {
          if (wheelValue < 50) {
            // 5값까지 간후 다시 올라올때
            wheelDown = 0;
            wheelValue = 0;
            wheelUp += 1;
          } else if (wheelValue > 50) {
            // 넘어간 후 다시 돌아올때
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
      } else {
        wheelEvent(null);
        wheelUp -= 1;
      }
    });
  }

  const mouseMoveCursor = document.querySelector("#mouseMoveCursor"),
    mouseMoveMainTitle = document.querySelector("#mouseMoveMainTitle");
  let size = 1;

  const section1MouseMoveEvent = function (e) {
    if (!cgmStyleWrapMouse) {
      // 이벤트 중지
      secondSection1.removeEventListener("mousemove", section1MouseMoveEvent);
      e.preventDefault();
      return false;
    }

    size;
    let mouseMoveX = e.clientX,
      mouseMoveY = e.clientY;

    let mainTitleX = mouseMoveMainTitle.x.baseVal[0].value,
      maxMainTilteX =
        mouseMoveMainTitle.clientWidth - mouseMoveMainTitle.x.baseVal[0].value,
      mainTitleY = mouseMoveMainTitle.y.baseVal[0].value,
      maxMainTilteY =
        mouseMoveMainTitle.clientWidth - mouseMoveMainTitle.y.baseVal[0].value;

    mouseMoveCursor.style.transform = `translateX(${
      mouseMoveX - 230 * size
    }px) translateY(${mouseMoveY - 230 * size}px) scale(${size})`;

    function sizeUpMove() {
      if (size.toFixed(1) >= 1.5) {
        clearInterval(sizeUpMove);
        sizeEvent = false;
        mainWrap.style.cursor = "pointer";
        return false;
      }
      size += 0.1;
      mouseMoveCursor.style.transform = `translateX(${
        mouseMoveX - 230 * size
      }px) translateY(${mouseMoveY - 230 * size}px) scale(${size})`;
    }

    function sizeDownMove() {
      if (size >= 4) {
        // 클릭 후 최대 크기가 되어 해당 영역을 움직여도 줄어들지 않도록 방지
        return false;
      }
      if (size <= 0.6) {
        // 최소 크기가 되었을때 이벤트 중지
        clearInterval(sizeDownMove);
        sizeEvent = true;
        mainWrap.style.cursor = "auto";
        return false;
      }
      size = size - 0.1;
      mouseMoveCursor.style.transform = `translateX(${
        mouseMoveX - 230 * size
      }px) translateY(${mouseMoveY - 230 * size}px) scale(${size})`;
    }

    if (
      mouseMoveX >= mainTitleX &&
      mouseMoveX <= maxMainTilteX + 60 &&
      mouseMoveY >= mainTitleY / 2 &&
      mouseMoveY <= maxMainTilteY / 2
    ) {
      // 가운데 텍스트 안을 움직일때
      setInterval(sizeUpMove(), 100);

      cgmStyleWrapMouse.addEventListener("click", (e) => {
        setTimeout(() => {
          e.target.style.cursor = "auto";
        }, 1000);
        if (scrollPageOn !== true) {
          // 스크롤 페이지 실행 함수
          section2();
        }
        scrollPageOn = true;

        if (Math.floor(size) >= 20) {
          // 클릭하여 최대 크기가 되었을때  다시 실행 방지
          return false;
        }
        const sizeUpClick = setInterval(() => {
          // 사이즈 확장
          if (Math.floor(size) >= 20) {
            clearInterval(sizeUpClick);
            return false;
          }
          size += 0.01;
          mouseMoveCursor.style.transform = `translateX(${
            mouseMoveX - 230 * size
          }px) translateY(${mouseMoveY - 230 * size}px) scale(${size})`;
        }, 25);
      });
    } else {
      // 가운데 텍스트 외를 움직일때
      setInterval(sizeDownMove(), 100);
    }
  };
  secondSection1.addEventListener("mousemove", (e) => {
    if (!cgmStyleWrapMouse) {
      return false;
    } else {
      section1MouseMoveEvent(e);
    }
  });

  //버튼 클릭 이벤트
  menuSpan.addEventListener("click", addMenu);
  menuNavLi1A.addEventListener("click", () => {
    menuNav.remove();
  });
  menuNavLi2A.addEventListener("click", () => {
    menuNav.remove();
  });
  menuNavLi3A.addEventListener("click", () => {
    menuNav.remove();
  });
  menuNavLi4A.addEventListener("click", () => {
    menuNav.remove();
  });
}

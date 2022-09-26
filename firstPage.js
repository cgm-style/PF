function firstPage()    {
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
        menuNavLi1A.innerText ="Menu1";
        menuNavLi1A.setAttribute("data-text",`${menuNavLi1A.innerText}`);
        menuNavLi2A.innerText ="Menu2";
        menuNavLi2A.setAttribute("data-text",`${menuNavLi1A.innerText}`);
        menuNavLi3A.innerText ="Menu3";
        menuNavLi3A.setAttribute("data-text",`${menuNavLi1A.innerText}`);
        menuNavLi4A.innerText ="Menu4";
        menuNavLi4A.setAttribute("data-text",`${menuNavLi1A.innerText}`);

        menuBg.appendChild(menuNav);
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
        }, 0);
        setTimeout(() => {
            menuNavUl.style.opacity = 1;
            menuNavUl.style.top = "25%";
        }, 1000);

    }


    menuSpan.innerText = "MENU";

    innerContainer.appendChild(menuBg);
    menuBg.appendChild(menuSpan);


    //버튼 클릭 이벤트
    menuSpan.addEventListener("click",addMenu);
    menuNavLi1A.addEventListener("click",loadBar);
    menuNavLi1A.addEventListener("click",() => {menuNav.remove();});
    menuNavLi2A.addEventListener("click",() => {menuNav.remove();});
    menuNavLi3A.addEventListener("click",() => {menuNav.remove();});
    menuNavLi4A.addEventListener("click",() => {menuNav.remove();});
}


// 검색 누르면 나오는 이벤트들
const subMenu = document.getElementById("search-submenu-container");    // 검색 누르면 나오는 서브메뉴 위치 저장
const menuItem = document.getElementById("search-toggle");    // 검색과 검색 아이콘이 있는 박스의 아이디 위치 저장

const menuWord = document.querySelectorAll(".menu-word");  // 사이드바의 글자들 (홈, 검색...)
const menuLogo = document.getElementById("menu-logo-id");  //  Travelgram의 위치 저장



// 클릭하면 검색의 서브메뉴는 뜨고 글자와 travelgram은 없어지고
menuItem.addEventListener("click", (e) => {
    e.stopPropagation();

    const subMenuPlay = window.getComputedStyle(subMenu).display;

    if (subMenuPlay === "none") {                 // 클릭하면 검색 서브메뉴 나와라
        subMenu.style.display = "block";
    } else {
        subMenu.style.display = "none";
    }

    const menuLogoPlay = window.getComputedStyle(menuLogo).display;

    if (menuLogoPlay === "block") {               // Travelgram 로고 클릭하면 없어져라
        menuLogo.style.display = "none";
    } else {
        menuLogo.style.display = "block";
    }

    menuWord.forEach((i) => {
        const iPlay = window.getComputedStyle(i).display;

        if (iPlay === "block") {
            i.style.display = "none";
        } else {
            i.style.display = "block";
        }
    })
});


// 알림 누르면 나오는 이벤트들
const menuItemAlarm = document.getElementById("alarm-toggle");  // 알림과 알림 아이콘이 있는 박스
const subMenuAlarm = document.getElementById("alarm-submenu-container");    // 알림 누르면 나오게 할 서브 메뉴



menuItemAlarm.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();

    const subMenuAlarmPlay = window.getComputedStyle(subMenuAlarm).display;

    if (subMenuAlarmPlay === "none") {
        subMenuAlarm.style.display = "block";
    } else {
        subMenuAlarm.style.display = "none";
    }

    const menuLogoPlay = window.getComputedStyle(menuLogo).display;

    if (menuLogoPlay === "block") {               // Travelgram 로고 클릭하면 없어져라
        menuLogo.style.display = "none";
    } else {
        menuLogo.style.display = "block";
    }

    menuWord.forEach((i) => {
        const iPlay = window.getComputedStyle(i).display;

        if (iPlay === "block") {
            i.style.display = "none";
        } else {
            i.style.display = "block";
        }
    })


});


// 더 보기를 클릭하면 서브 메뉴 띄우기

const settingsSub = document.getElementById("settings-sub-id"); // 더 보기 누르면 나올 서브 메뉴
const settings = document.getElementById("settings-id")  // 더보기 

settings.addEventListener("click", (e) => {

    e.preventDefault();
    e.stopPropagation();

    const settingsSubPlay = window.getComputedStyle(settingsSub).display;

    if (settingsSubPlay === "none") {
        settingsSub.classList.add("show");
    } else {
        settingsSub.classList.remove("show");
    }

    // const menuLogoPlay = window.getComputedStyle(menuLogo).display;

    // if (menuLogoPlay === "block") {               // Travelgram 로고 클릭하면 없어져라
    //     menuLogo.style.display = "none";
    // } else {
    //     menuLogo.style.display = "block";
    // }

    // menuWord.forEach((i) => {
    //     const iPlay = window.getComputedStyle(i).display;

    //     if (iPlay === "block") {
    //         i.style.display = "none";
    //     } else {
    //         i.style.display = "block";
    //     }
    // });

});

document.addEventListener("click", (e) => {

    const clickInside = menuItem.contains(e.target);    // 검색칸 클릭
    const clickSearch = subMenu.contains(e.target) || submenu.contains(e.target.closet(".delete-box"));     // 검색 서브메뉴 클릭


    const clickInsideAlarm = menuItemAlarm.contains(e.target);  // 알림칸 클릭
    const clickAlarm = subMenuAlarm.contains(e.target);         // 알림 서브메뉴 클릭

    const clickInsideSettings = settingsSub.contains(e.target);
    const clickSettings = settings.contains(e.target);

    const isSerachArea = clickInside || clickSearch;
    const isAlarmArea = clickInsideAlarm || clickAlarm;
    const isSettingsArea = clickSettings || clickInsideSettings;

    if (!isSerachArea) {
        subMenu.style.display = "none";
    }

    if (!isAlarmArea) {
        subMenuAlarm.style.display = "none";
    }

    if (!isSettingsArea) {
        settingsSub.classList.remove("show");
    }

    if (!isAlarmArea && !isSerachArea) {
        menuLogo.style.display = "block";
        menuWord.forEach((i) => {
            i.style.display = "block";
        });
    }

});

// 검색하면 그 검색 기록을 밑에 나오게 할거야. 그리고 모두 지우기 누르면 삭제도 할거야
window.addEventListener('DOMContentLoaded', (e) => {    // 검색창에 입력하면 그 텍스트를 저장하는 코드
    console.log(e);
    const searchEl = document.getElementById('search-input-id');     // 검색창의 위치
    const SearchHistoryEl = document.getElementById('search-history-id');   // 검색 서브 메뉴
    const deleteBtn = document.getElementById('all-delete-id')  // 모두 지우기 위치

    searchEl.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {     // 입력창에 Enter를 누르면
            const text = searchEl.value.trim();

            if (!isvalid(text)) {         // 유효성 검사  텍스트가 비워있다면 return
                return;
            }

            createNode(text);   // 검색창에 입력된 텍스트의 노드 생성
            searchEl.value = "";    // 엔터누르면 다시 비워줘야지
        }
    })

    deleteBtn.addEventListener('click', () => {     // 모두 지우기 버튼 누르면 다 삭제
        SearchHistoryEl.innerHTML = "";
    });

    // 입력받은 텍스트를 새로 만들기 위한 노드 생성과 붙이기
    function createNode(text) {

        const historyEl = document.createElement('div');    // 검색기록의 전체 컨테이너
        const peopleListEl = document.createElement('div'); // 검색기록 리스트들
        const imgEl = document.createElement('img');    // 프로필 사진
        const niknameBoxEl = document.createElement('div'); // 닉네임과 이름 박스
        const niknameEl = document.createElement('span');   // 닉네임 부분
        const nameEl = document.createElement('span');  // 이름 부분
        const aXEl = document.createElement('a');   // x를 감싸고 있는 a태그
        const xEl = document.createElement('span');    // x 이미지 부분

        historyEl.className = "item";
        peopleListEl.className = "people-list-box";
        niknameBoxEl.className = "niknmae-name";
        aXEl.className = "delete-box";
        xEl.className = "material-symbols-outlined"

        nameEl.textContent = text;        // 입력받은 text를 nameEl에 저장
        xEl.textContent = "close";      // 새로운 x노드 생성
        aXEl.setAttribute('href', 'javascript:void(0)');     // 새로운 x를 감쌀 새로운 a태그의 속성부여

        aXEl.addEventListener('click', (e) => {  // x를 누르면 그 검색기록만 삭제
            // console.log(e.target);
            e.stopPropagation();
            historyEl.remove();
        });



        // aEl.addEventListener('click', (e) => {
        //     const itemEl = e.target.parentNode.parentNode.parentNode;   
        //     // console.log(e.target.parentNode.parentNode.parentNode);
        //     itemEl.remove();    // 삭제버튼 누르면 삭제
        // });

        aXEl.appendChild(xEl);
        niknameBoxEl.appendChild(aXEl);
        niknameBoxEl.appendChild(nameEl);
        peopleListEl.appendChild(niknameBoxEl);
        historyEl.appendChild(peopleListEl);
        SearchHistoryEl.appendChild(historyEl);
    }

});

function isvalid(text) {
    // 공백여부 확인
    if (text.trim() === '' || text.trim() === null) {        // .trim은 앞 뒤 공백을 제거하는 함수
        alert("내용을 입력하세요");
        return false;
    }
    return true;
}


document.querySelector('.menu-item.make')?.addEventListener('click', (e) => {
    e.stopPropagation(); // 전파는 막되
    // e.preventDefault(); // ❌ 이건 절대 넣지 마
    // 기본 링크 동작이 일어나야 UPLOAD.html로 이동됨
});



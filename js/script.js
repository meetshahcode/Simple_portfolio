/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";

/*
* light and dark theme
*/


const $themeBtn = document.querySelector("[data-theme-btn]");
const $doc = document.documentElement;
let isDark = window.matchMedia("(prefers-color-schema:dark)").matches;

if (sessionStorage.getItem("theme")) {
    $doc.dataset.theme = sessionStorage.getItem("theme");
}
else {
    $doc.dataset.theme = isDark? "dark":"light";
    sessionStorage.setItem("theme",$doc.dataset.theme)
}

const changeTheme = () => {
    $doc.dataset.theme = sessionStorage.getItem("theme") === "light"?"dark":"light";
    sessionStorage.setItem("theme",$doc.dataset.theme)
}

$themeBtn.addEventListener("click",changeTheme);


/* 
TAB logic
*/

const $tabBtn = document.querySelectorAll("[data-tab-btn]");
let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(items => {
    items.addEventListener("click",function(){
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const $tabContent = document.querySelector(`[data-tab-content="${items.dataset.tabBtn}"]`);
        
        $tabContent.classList.add("active");
        this.classList.add("active");
        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});
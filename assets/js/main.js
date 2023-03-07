function createMeta(name, content) {
    var metaElement = document.createElement('meta');
    metaElement.setAttribute('name', name);
    metaElement.setAttribute('content', content);
    document.head.appendChild(metaElement);
}
function createCssVariable(variableName, variableValue) {
    document.body.style.setProperty("--" + variableName, variableValue);
}
function setCssProperty(propertyName, propertyValue) {
    document.body.style.setProperty("--" + propertyName, propertyValue);
}
function setBodyDataAttribute(AttributeName, AttributeValue) {
    document.body.setAttribute("data-" + AttributeName, AttributeValue);
}
fetch('../../youssef.json').then(function (results) { return results.json(); }).then(function (data) {
    document.title = data.title;
    // ======================= //
    // === create html meta == //
    // ======================= //
    createMeta('description', data.description);
    createMeta('keywords', data.keywords.toString());
    createMeta('auther', data.user.name.fullName);
    // =========================== //
    // === create css variables == //
    // =========================== //
    createCssVariable("hue", data.style.colors.hue);
    createCssVariable("mc", data.style.colors.mainColor);
    createCssVariable("smc", data.style.colors.socundMainColor);
    createCssVariable("wc", data.style.colors.whiteColor);
    createCssVariable("lc", data.style.colors.lightColor);
    createCssVariable("dc", data.style.colors.darkColor);
    createCssVariable("tcl", data.style.colors.textColorLight);
    // create log font Family variable
    createCssVariable("logoFontFamily", data.style.font.family.logo);
    // ========================= //
    // === set css properties == //
    // ========================= //
    // set font properties 
    setCssProperty("font-family", data.style.font.family["default"]);
    setCssProperty("font-size", data.style.font.size);
    setCssProperty("font-weight", data.style.font.weight);
    // =============================== //
    // === set body data attributes == //
    // =============================== //
    // set mode vaule
    setBodyDataAttribute("mode", data.style.mode["default"]);
    // set theme vaule
    setBodyDataAttribute("theme", data.style.theme["default"]);
    // =============================== //
    // === set css mode style data === //
    // =============================== //
    if (document.body.dataset.mode === 'light') {
        createCssVariable("lc", data.style.colors.lightColor);
        createCssVariable("dc", data.style.colors.darkColor);
        createCssVariable("wc", data.style.colors.whiteColor);
    }
    else if (document.body.dataset.mode === 'dark') {
        createCssVariable("lc", data.style.colors.darkColor);
        createCssVariable("dc", data.style.colors.lightColor);
        createCssVariable("wc", data.style.colors.darkColor);
    }
});
// let Elements: Element[] = Array.from(document.querySelectorAll('[data-tooltip]'));
// Elements.forEach( (ele: any) => { 
//     ele.addEventListener('mouseenter', ():void => {
//         let createTooltip = setTimeout(():void => {
//             let tooltip:Element = document.createElement('span') as HTMLSpanElement;
//             let tooltipContent: Text = document.createTextNode(ele.dataset.tooltip);
//             tooltip.className = "tooltip";
//             tooltip.appendChild(tooltipContent);
//             ele.appendChild(tooltip);
//         },5000);
//         ele.addEventListener('mouseleave', ():void => {
//             clearTimeout(createTooltip);
//             if (ele.lastElementChild.classList.contains('tooltip')) {
//                 ele.lastElementChild.remove();
//             }
//         });
//     })
// })
// let Elements = Array.from(document.querySelectorAll('[data-tooltip]'));
// Elements.forEach( (ele) => { 
//     ele.addEventListener('mouseenter', () => {
//         let createTooltip = setTimeout(() => {
//             let tooltip = document.createElement('span');
//             let tooltipContent = document.createTextNode(ele.dataset.tooltip);
//             tooltip.className = "tooltip";
//             tooltip.appendChild(tooltipContent);
//             ele.appendChild(tooltip);
//         },5000);
//         ele.addEventListener('mouseleave', () => {
//             clearTimeout(createTooltip);
//             if (ele.lastElementChild.classList.contains('tooltip')) {
//                 ele.lastElementChild.remove();
//             }
//         });
//     })
// })

let navigations = document.getElementById('navigations')
let arrNavigations = ['Slack','Google Sheets','Google Drive','Zapier','Stripe','GitHub','Notion','Mailchimp','HubSpot','Airtable','Intercom','Salesforce','Figma','Linear','Jira','Webflow']

for(let i = 0 ; i < arrNavigations.length ; i++){
    navigations.innerHTML += `<button>${arrNavigations[i]}</button>`
}

//// start faq
let faq = document.getElementsByClassName('openFaq')
let answer = document.getElementsByClassName('answer')
let showAll = document.getElementById('showAll')


for( let i = 0 ; i < faq.length; i++ ){
    faq[i].onclick = function(){
    answer[i].classList.toggle('showP')
    faq[i].classList.toggle('showPlus')

    if(faq[i].classList.contains('showPlus')){
    faq[i].classList.add('showPlus')
    faq[i].textContent = '-'
    }else{
    faq[i].classList.remove('showPlus')
    faq[i].textContent = '+'
    }
}

}
showAll.onclick = function(){
for( let i = 0 ; i < faq.length; i++ ){
    answer[i].classList.toggle('showP')
    if(answer[i].classList.contains('showP')){
        showAll.textContent = 'Close All'
    faq[i].innerHTML = '<span>-</span>'

    }else{
        showAll.textContent = 'Open All'
    faq[i].innerHTML = '<span>+</span>'

    }
}
}
//// end faq
let price = document.getElementById('price')
let priceText1 = document.getElementById('priceText1')
let priceText2 = document.getElementById('priceText2')
let priceText3 = document.getElementById('priceText3')
let annly = document.getElementsByClassName('annly')

isCheck = true
price.onclick = function(){
    for(let i = 0 ; i < annly.length ; i++){
    if(isCheck === false){
        annly[i].classList.remove('show')
    }else{
        annly[i].classList.add('show')
    }
    }
    if(isCheck === false){
        priceText1.innerHTML = `<span>$</span>13 <span>/ mo</span>`
        priceText2.innerHTML = `<span>$</span>39 <span>/ mo</span>`
        priceText3.innerHTML = `<span>$</span>98 <span>/ mo</span>`
        isCheck = true
    }else{
        priceText1.innerHTML = `<span>$</span>20 <span>/ mo</span>`
        priceText2.innerHTML = `<span>$</span>60 <span>/ mo</span>`
        priceText3.innerHTML = `<span>$</span>150 <span>/ mo</span>`
        isCheck = false
    }
}

let darkMode = document.getElementById('darkMode')
let body = document.body
isDark = false

darkMode.onclick = function(){
    if(!isDark){
        body.classList.add('dark')
        darkMode.innerHTML = ` <i style='color:yellow' class="fas fa-sun"></i> <span class="btn-text">Light</span>`
        isDark = true
    }else{
        body.classList.remove('dark')
        darkMode.innerHTML =` <i class="fas fa-moon"></i> <span class="btn-text">Dark</span>`
        isDark = false
    }
}

let bars =document.getElementById('bars')
let linksNv =document.getElementById('links')

bars.onclick = function(){
        linksNv.classList.toggle('open')

    if(linksNv.classList.contains('open')){
        bars.innerHTML = `<i style='color:#c92626' class="fa-solid fa-xmark"></i>`
    }else{
        bars.innerHTML = `<i style='color:var(--main-color)' class="fa-solid fa-bars"></i>`
    }
}

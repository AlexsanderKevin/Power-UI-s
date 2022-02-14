export default class DOMelement{
    constructor(title, url){
        this.title = title,
        this.url = url,
        this.id = title.toLowerCase().replace(' ', '-')
    }
    appendTo(target){
        const container = document.querySelector(target)
        container.appendChild(this.element())
        return container
    }
    activate(){
        const activated = this.element()
        activated.classList.add('active')
        return activated
    }
}
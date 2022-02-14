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
    activate(target){
        const activated = this.element().querySelector(target)
        activated.classList.add('active')
        return activated
    }
}
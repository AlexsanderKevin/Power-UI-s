export default class Radio{
    constructor(title, url){
        this.title = title,
        this.url = url,
        this.id = title.toLowerCase().replace(' ', '-')
    }
    label(){
        const label = document.createElement('label')
        label.setAttribute('for', `${this.id}-input`)
        label.innerText = this.title

        return label
    }
    
    radio(){
        const radio = document.createElement('input')
        radio.setAttribute('type', 'radio')
        radio.setAttribute('name', 'graph-link')
        radio.setAttribute('id', `${this.id}-input`)
        radio.setAttribute('data-radio', 'graph')
        radio.setAttribute('data-target', `${this.id}`)

        return radio
    }

    element(){
        const container = document.createElement('div')
        container.setAttribute('data-container', 'radio')

        container.appendChild(this.label())
        container.appendChild(this.radio())

        return container
    }

    activate(){
        const activated = this.element()
        activated.classList.add('active')
        return activated
    }
}
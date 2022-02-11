export default class Graph{
    constructor(title, url){
        this.title = title,
        this.url = url,
        this.id = title.toLowerCase().replace(' ', '-')
    }

    header(){
        const headerContainer = document.createElement('div')
        headerContainer.setAttribute('class', 'graph-header')

        const graphTitle = document.createElement('span')
        graphTitle.setAttribute('class', 'graph-title')
        graphTitle.innerText = this.title

        const divider = document.createElement('div')
        divider.setAttribute('class', 'divider')

        headerContainer.appendChild(graphTitle)
        headerContainer.appendChild(divider)

        return headerContainer
    }
     
    frame(){
        const frame = document.createElement('iframe')
        frame.setAttribute('src', this.url)
        frame.setAttribute('title', this.title)

        return frame
    }

    element(){
        const container = document.createElement('div')
        container.setAttribute('class', 'graph-container')
        container.setAttribute('id', this.id)
        container.setAttribute('data-graph', this.id)

        container.appendChild(this.header())
        container.appendChild(this.frame())

        return container
    }

    activate(){
        const element  = this.element()

        element.classList.add('active')
        console.log(element)
        return element
    }
}
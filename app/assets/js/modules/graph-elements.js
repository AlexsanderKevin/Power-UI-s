function createGraphHeader(title){
    const headerContainer = document.createElement('div')
    headerContainer.setAttribute('class', 'graph-header')

    const graphTitle = document.createElement('span')
    graphTitle.setAttribute('class', 'graph-title')
    graphTitle.innerText = title

    const divider = document.createElement('div')
    divider.setAttribute('class', 'divider')

    headerContainer.appendChild(graphTitle)
    headerContainer.appendChild(divider)

    return headerContainer
}

export function createGraphContainer(title, url, id){
    const container = document.createElement('div')
    container.setAttribute('class', 'graph-container')
    container.setAttribute('id', id)
    container.setAttribute('data-graph', id)

    const header = createGraphHeader(title)

    const graphFrame = document.createElement('iframe')
    graphFrame.setAttribute('src', url)

    container.appendChild(header)
    container.appendChild(graphFrame)

    return container
}

export default function fillGraphSection(obj){
    const section = document.querySelector('[data-container="graphs"]')
    const graphID = obj.title.toLowerCase().split(' ').join('-')
    const graph = createGraphContainer(obj.title, obj.url, graphID)
    
    section.appendChild(graph)

    return section
}
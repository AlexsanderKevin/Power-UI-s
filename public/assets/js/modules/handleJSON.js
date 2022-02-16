import Radio from "./nav-elements.js";
import Graph from "./graph-elements.js";
import initNav from './nav.js'
import keyboardEvents from './keyboardEvents.js'

export default async function handleJSON(){
    const fetchGraphs = await fetch('json-database/graphics.json')
    const graphsJSON = await fetchGraphs.json()
    const graphsArray = [...graphsJSON]

    const containers = graphsArray.reduce((containers, item) => {
        const radio = new Radio(item.title, item.url)
        const graph = new Graph(item.title, item.url)

        const graphSection = graph.appendTo('[data-container="graphs"]')
        const linkContainer = radio.appendTo('[data-container="links"]')

        const links = linkContainer.querySelectorAll('[data-container="radio"]')
        const graphs = graphSection.querySelectorAll('[data-graph]')

        containers = [[...links],[...graphs]]

        return containers
    },0)

    const [links, graphs] = containers

    links[0].classList.add('active')
    graphs[0].classList.add('active')
    initNav(links, graphs)

    keyboardEvents(links)
    keyboardEvents(graphs)
}
import Radio from "./nav-elements.js";
import Graph from "./graph-elements.js";
import initNav from './nav.js'
import keyboardEvents from './keyboardEvents.js'

export default async function handleJSON(){
    const fetchGraphs = await fetch('json-database/graphics.json')
    const graphsJSON = await fetchGraphs.json()
    const graphsArray = Array.from(graphsJSON)

    const containers = graphsArray.reduce((containers, item) => {
        const radio = new Radio(item.title, item.url)
        const graph = new Graph(item.title, item.url)

        return {
            graphs: graph.appendTo('[data-container="graphs"]'),
            nav: radio.appendTo('[data-container="links"]')
        }
    },0)

    const {nav, graphs} = containers

    nav.querySelector('[data-container="radio"]').classList.add('active')
    graphs.querySelector('[data-graph]').classList.add('active')
    initNav(nav, graphs)

    function handleKeydown({key}){
        switch(key){
            case 'ArrowUp': console.log('sima')
            break
            case 'ArrowDown': console.log('baxo')
        }
    }

    keyboardEvents(nav)
    keyboardEvents(graphs)
}
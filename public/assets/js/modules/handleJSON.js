import Radio from "./nav-elements.js";
import Graph from "./graph-elements.js";
import initNav from './nav.js'

export default async function handleJSON(){
    const fetchGraphs = await fetch('json-database/graphics.json')
    const graphsJSON = await fetchGraphs.json()
    const graphsArray = Array.from(graphsJSON)

    const containers = graphsArray.reduce( (containers, item, index) => {
        // const nav = fillNavContainer(item)
        const radio = new Radio(item.title, item.url)
        const graph = new Graph(item.title, item.url)
        const graphContainer = document.querySelector('section')
        const navContainer = document.querySelector('[data-container="links"]')
        
        if(index === 0){
            // const firstLabel = nav.querySelector('label')
            // firstLabel.classList.add('active')
            graphContainer.appendChild(graph.activate())
            console.log(radio.element())
            console.log(navContainer)
            navContainer.appendChild(radio.activate())
        }else{
            graphContainer.appendChild(graph.element())
            navContainer.appendChild(radio.element())
        }

        return containers = [navContainer, graphContainer]
    },0)

    initNav(containers[0], containers[1])
}
import fillNavContainer from "./nav-elements.js";
import Graph from "./graph-elements.js";
import initNav from './nav.js'

export default async function handleJSON(){
    const fetchGraphs = await fetch('json-database/graphics.json')
    const graphsJSON = await fetchGraphs.json()
    const graphsArray = Array.from(graphsJSON)
    // const graphsArray = JSON.parse(graphsJSON)

    const containers = graphsArray.reduce( (containers, item, index) => {
        const nav = fillNavContainer(item)
        const graph = new Graph(item.title, item.url)
        // const graphContainer = graph.appendToSection()
        const graphContainer = document.querySelector('section')
        
        if(index === 0){
            const firstLabel = nav.querySelector('label')
            firstLabel.classList.add('active')

            graphContainer.appendChild(graph.activate())
        }else{
            graphContainer.appendChild(graph.element())

        }

        return containers = [nav, graphContainer]
    },0)

    initNav(containers[0], containers[1])
}
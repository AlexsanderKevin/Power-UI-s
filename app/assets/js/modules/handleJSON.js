import fillNavContainer from "./nav-elements.js";
import fillGraphSection from "./graph-elements.js";
import initNav from './nav.js'

export default async function handleJSON(){
    const fetchGraphs = await fetch('../../../json/graphics.json')
    const graphsJSON = await fetchGraphs.json()
    const graphsArray = Array.from(graphsJSON)

    const containers = graphsArray.reduce( (containers, item, index) => {
        const nav = fillNavContainer(item)
        const graphs = fillGraphSection(item)

        if(index === 0){
            const firstLabel = nav.querySelector('label')
            const firstGraph = graphs.querySelector('[data-graph]')
            firstLabel.classList.add('active')
            firstGraph.classList.add('active')
        }

        return containers = [nav, graphs]
    },0)

    initNav(containers[0], containers[1])
}
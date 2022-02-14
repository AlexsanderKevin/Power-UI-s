export default function initNav(navMenu, graphSection){

    const radios = navMenu.querySelectorAll('[data-radio="graph"]')

    function handleClick(){
        radios.forEach( radio => {
            const radioTarget = radio.getAttribute('data-target')
            const targetGraph = graphSection.querySelector(`#${radioTarget}`)
            const radioLabel = radio.parentElement

            if( radio.checked ){
                radioLabel.classList.add('active')
                targetGraph.classList.add('active')
            }
            else{
                radioLabel.classList.remove('active')
                targetGraph.classList.remove('active')
            }
        })
    }
    radios.forEach( radio => radio.addEventListener('click', handleClick))
}
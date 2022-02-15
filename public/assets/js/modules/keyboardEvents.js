export default function keyboardEvents(container){

    function activateNext(){
        const actual = container.querySelector('.active')
        const next = actual.nextElementSibling

        if(next){
            actual.classList.remove('active')
            next.classList.add('active')
        }
    }
    function activatePrevious(){
        const actual = container.querySelector('.active')
        const prev = actual.previousElementSibling

        if(prev){
            actual.classList.remove('active')
            prev.classList.add('active')
        }
    }
    function focusIn(){
        console.log('focused')
    }

    function handleKeydown({key}){
        console.log(key)
        switch(key){
            case 'ArrowLeft': activatePrevious()
                break
            case 'a': activatePrevious()
                break
            case 'ArrowRight': activateNext()
                break
            case 'd': activateNext()
                break
            case 'Enter': focusIn()
                break 
        }
    }

    document.addEventListener('keydown', handleKeydown)
}
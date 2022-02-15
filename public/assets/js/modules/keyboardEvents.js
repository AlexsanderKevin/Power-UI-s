export default function keyboardEvents(container){

    function activateNext(){
        const actual = container.querySelector('.active')
        if(actual){
            const next = actual.nextElementSibling
    
            if(next){
                actual.classList.remove('active')
                next.classList.add('active')
            }
        }
    }
    function activatePrevious(){
        const actual = container.querySelector('.active')
        if(actual){
            const prev = actual.previousElementSibling
    
            if(prev){
                actual.classList.remove('active')
                prev.classList.add('active')
            }
        }
    }
    function focusIn(){
        console.log('focused')
        const actual = container.querySelector('.active')
        actual.classList.remove('active')
        actual.classList.add('focused')
    }
    function focusOut(){
        const actual = container.querySelector('.focused')
        actual.classList.remove('focused')
        actual.classList.add('active')
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
            case 'w': focusIn()
                break
            case 'Escape': focusOut()
                break
            case 's': focusOut()
                break
            case 'Backspace': focusOut()
                break
        }
    }

    document.addEventListener('keydown', handleKeydown)
}
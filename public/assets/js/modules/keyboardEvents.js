import { activateNext, activatePrevious, focusIn, focusOut } from "./navigationMethods.js"

export default function keyboardEvents(container){

    function handleKeydown({key}){
        console.log(key)
        switch(key){
            case 'ArrowLeft': activatePrevious(container)
            break
            case 'a': activatePrevious(container)
            break
            case 'ArrowRight': activateNext(container)
            break
            case 'd': activateNext(container)
            break
            case 'Enter': focusIn(container)
            break 
            case 'w': focusIn(container)
            break
            case 'Escape': focusOut(container)
            break
            case 's': focusOut(container)
            break
            case 'Backspace': focusOut(container)
            break
        }
    }

    document.addEventListener('keydown', handleKeydown)
}
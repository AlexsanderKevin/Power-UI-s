import { activate, focusIn, focusOut, focusTarget } from "./navigationMethods.js"

export default function keyboardEvents(container){

    function handleKeydown({key}){
        console.log(key)
        switch(key){
            case 'ArrowLeft': 
                activate(container, 'previousElementSibling')
                focusTarget(container, 'previousElementSibling')
                break
            case 'a': 
                activate(container, 'previousElementSibling')
                focusTarget(container, 'previousElementSibling')
                break
            case 'ArrowRight': 
                activate(container, 'nextElementSibling')
                focusTarget(container, 'nextElementSibling')
                break
            case 'd': 
                activate(container, 'nextElementSibling')
                focusTarget(container, 'nextElementSibling')
                break
            case 'Enter': 
                focusIn(container)
                break 
            case 'w': 
                focusIn(container)
                break
            case 'Escape': 
                focusOut(container)
                break
            case 's': 
                focusOut(container)
                break
            case 'Backspace': 
                focusOut(container)
                break
        }
    }

    document.addEventListener('keydown', handleKeydown)
}
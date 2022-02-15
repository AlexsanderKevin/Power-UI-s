export function activateNext(container){
    const actual = container.querySelector('.active')
    if(actual){
        const next = actual.nextElementSibling

        if(next){
            actual.classList.remove('active')
            next.classList.add('active')
        }
    }
}
export function activatePrevious(container){
    const actual = container.querySelector('.active')
    if(actual){
        const prev = actual.previousElementSibling

        if(prev){
            actual.classList.remove('active')
            prev.classList.add('active')
        }
    }
}
export function focusIn(container){
    const actual = container.querySelector('.active')
    actual.classList.remove('active')
    actual.classList.add('focused')
}
export function focusOut(container){
    const actual = container.querySelector('.focused')
    actual.classList.remove('focused')
    actual.classList.add('active')
}
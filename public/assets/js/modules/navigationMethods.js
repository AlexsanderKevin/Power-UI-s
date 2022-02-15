export function activate(container, targetSibling){
    const actual = container.querySelector('.active')
    if(actual){
        const target = actual[targetSibling]

        if(target){
            actual.classList.remove('active')
            target.classList.add('active')
        }
    }
}

export function focusTarget(container, targetSibling){
    const actual = container.querySelector('.focused')
    if(actual){
        const target = actual[targetSibling]

        if(target){
            actual.classList.remove('focused')
            target.classList.add('focused')
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
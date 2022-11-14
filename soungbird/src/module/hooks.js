export function useState(value, _block) {
  const setVal = (newVal) => {
    value = newVal
    _block.textContent = value
  }
  return {value, setVal}
}

export function useImageState(value, _block) {
  const setVal = (newVal) => {
    value = newVal
    if(value != '') {
      _block.style.backgroundImage = `url(${value})`;
    } else {
      _block.removeAttribute('style');
    }
  }
  setVal(value)
  return {value, setVal}
}

export function useClassState(className, _block) {
  const setVal = (isClassAdded) => {
    isClassAdded ? 
    _block.classList.add(className) :
    _block.classList.remove(className)
  }
  setVal(false)
  return {setVal}
}
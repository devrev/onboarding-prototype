const typeWriter = (elem, text, index, speed, resolve) => {
  if (index < text.length) {
    elem.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => {
      typeWriter(elem, text, index, speed, resolve);
    }, speed);
  } else {
    resolve();
  }
};

export { typeWriter };

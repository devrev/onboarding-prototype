import { typeWriter } from "./typeWriter";

let index = 0;

const clickHandler = (step, store, resolve, setStepIndex) => {
  setTimeout(() => {
    document.querySelector(step.target).addEventListener(
      "click",
      () => {
        step.func(store);
        resolve();
      },
      { once: true }
    );
  }, 1000);
};

const fillHandler = (step, store, resolve, setStepIndex) => {
  const elem = document.querySelector(step.target);
  elem.innerHTML = "";
  typeWriter(elem, step.text, 0, 30, resolve);
};

const pointHandler = (step, store, resolve, setStepIndex) => {
  setTimeout(() => {
    index++;
    setStepIndex(index);
    resolve();
  }, 400);
};

const waitHandler = (step, store, resolve, setStepIndex) => {
  setTimeout(() => {
    resolve();
  }, step.delay);
};

const execHandler = (step, store, resolve, setStepIndex) => {
  setTimeout(() => {
    step.func(store);
    resolve();
  }, step?.delay || 0);
};

const postMessageHandler = (event) => {
   window.parent.postMessage(
     {
       type: "walkthrough",
       event: event.name,
     },
     "*"
   );
}

const tourParser = {
  click: clickHandler,
  point: pointHandler,
  fill: fillHandler,
  wait: waitHandler,
  exec: execHandler,
  post: postMessageHandler
};

export default tourParser;

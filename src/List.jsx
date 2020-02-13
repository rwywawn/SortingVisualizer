//imports  //TODO: Maybe add radix sort (LSD) and (MSD), add Other Quick Sort Hoare partition scheme
import React from "react";
import "./List.css";
import mergeSortStart from "./algorithms/mergeSort.js";
import quickSortStart from "./algorithms/quickSort.js";
import bubbleSortStart from "./algorithms/bubbleSort.js";
import insertionSortStart from "./algorithms/insertionSort.js";
import selectionSortStart from "./algorithms/selectionSort.js";
//Adjustable Variables
const MAX_LENGTH = 800;
const MIN_LENGTH = 5;
const LENGTH = 475;
const COLOR1 = "white";
const COLOR2 = "black"; //BUG: since style.background converts hexadecimal to rgb but not strings, using hex colors will cause the program to fail
const TIMER = 1;
const WIDTH = 2;

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }
  rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }

  hexToRgb(hex) {
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map(x => parseInt(x, 16));
  }

  componentDidMount() {
    this.createArray();
  }

  createArray() {
    let temp = [];
    for (let i = 0; i < LENGTH; i++) {
      let rand = getRandomArbitrary(MIN_LENGTH, MAX_LENGTH);
      temp.push(rand);
    }
    this.setState({ array: temp });
  }
  swapRandom(i = 0) {
    let bars = document.getElementsByClassName("bar");
    let rand1 = getRandomArbitrary(0, LENGTH - 1);
    let rand2 = getRandomArbitrary(0, LENGTH - 1);
    setTimeout(() => {
      bars[rand1].style.backgroundColor = COLOR2;
      bars[rand2].style.backgroundColor = COLOR2;
    }, TIMER * i);

    setTimeout(() => {
      let len1 = this.state.array[rand1];
      let len2 = this.state.array[rand2];
      bars[rand1].style.backgroundColor = COLOR1;
      bars[rand2].style.backgroundColor = COLOR1;
      this.setState(prev => {
        prev.array[rand2] = len1;
        prev.array[rand1] = len2;
        return prev.array;
      });
    }, TIMER * (i + 1));
  }
  swapRandomArray() {
    for (let i = 0; i < LENGTH; i++) {
      this.swapRandom(i);
    }
  }

  mergeSort() {
    let animations = mergeSortStart(this.state.array);
    this.animater(animations);
  }
  insertionSort() {
    let animations = insertionSortStart(this.state.array);
    this.insertionAnimater(animations);
  }
  bubbleSort() {
    let animations = bubbleSortStart(this.state.array);
    this.animater(animations);
  }
  quickSort() {
    let animations = quickSortStart(this.state.array);
    this.animater(animations);
  } // lomuto partition quick sort
  selectionSort() {
    let animations = selectionSortStart(this.state.array);
    this.animater(animations);
  }
  heapSort() {}

  animater(animations) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      let [bar1, bar2, newHeight1, newHeight2] = animations[i];
      let colorChange = newHeight1 === null;
      if (colorChange) {
        setTimeout(() => {
          let newColor =
            bars[bar1].style.backgroundColor === COLOR2 ? COLOR1 : COLOR2;
          bars[bar1].style.backgroundColor = newColor;
          bars[bar2].style.backgroundColor = newColor;
        }, TIMER * i);
      } else {
        setTimeout(() => {
          let newColor =
            bars[bar1].style.backgroundColor === COLOR2 ? COLOR1 : COLOR2;
          bars[bar1].style.backgroundColor = newColor;
          bars[bar2].style.backgroundColor = newColor;
          bars[bar1].style.height = `${newHeight1}px`;
          bars[bar2].style.height = `${newHeight2}px`;
        }, TIMER * i);
      }
    }
  }

  insertionAnimater(animations) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      let [colorChange, mini] = animations[i];
      if (colorChange) {
        setTimeout(() => {
          let [bar1, bar2] = mini;
          let newColor =
            bars[bar1].style.backgroundColor === COLOR2 ? COLOR1 : COLOR2;
          bars[bar1].style.backgroundColor = newColor;
          bars[bar2].style.backgroundColor = newColor;
        }, TIMER * i);
      } else {
        setTimeout(() => {
          for (let j = 0; j < mini.length; j++) {
            let [bar,newHeight]=mini[j];
            let newColor =
              bars[bar].style.backgroundColor === COLOR2 ? COLOR1 : COLOR2;
            bars[bar].style.backgroundColor = newColor;
            bars[bar].style.height = `${newHeight}px`;
            
          }
        }, TIMER * i);
      }
    }
  }
  render() {
    let { array } = this.state;

    return (
      <div>
        <div className="NavBar">
          <ul>
            <li>
              <button onClick={() => this.mergeSort()}> Merge Sort </button>
            </li>
            <li>
              <button onClick={() => this.insertionSort()}>
                {" "}
                Insertion Sort{" "}
              </button>
            </li>
            <li>
              <button onClick={() => this.bubbleSort()}> Bubble Sort </button>
            </li>
            <li>
              <button onClick={() => this.quickSort()}> Quick Sort </button>
            </li>
            <li>
              <button onClick={() => this.selectionSort()}>
                {" "}
                Selection Sort{" "}
              </button>
            </li>
            <li>
              <button onClick={() => this.heapSort()}> Heap Sort </button>
            </li>
            <li>
              <button onClick={() => this.swapRandomArray()}>
                {" "}
                Random Swaps{" "}
              </button>
            </li>
            <li>
              <button onClick={() => this.swapRandom()}> Swap Random </button>
            </li>
            <li>
              <button onClick={() => this.createArray()}> Reset </button>
            </li>
          </ul>
        </div>

        {/* Bars -----------------------------------------------------------------------------------------------------------*/}

        <div className="bars-container">
          {array.map((num, index) => (
            <div
              className="bar"
              key={index}
              style={{
                backgroundColor: COLOR1,
                width: `${WIDTH}px`,
                height: `${num}px`
              }}></div>
          ))}
        </div>
      </div>
    );
  }
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

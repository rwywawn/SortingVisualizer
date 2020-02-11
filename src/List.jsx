import React from "react";
import "./List.css";
import mergeSortStart from "./algorithm.js";
const MAX_LENGTH = 800;
const MIN_LENGTH = 5;
const LENGTH = 475;
const COLOR1 = "#333";
const COLOR2 = "red";
const TIMER = 1;
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
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
  animater(animations) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      let [bar1, bar2, newHeight] = animations[i];
      let colorChange = newHeight === null;
      
      if (colorChange) {
        setTimeout(() => {
          let newColor = bars[bar1].style.backgroundColor === COLOR2 ? COLOR1 : COLOR2;
          bars[bar1].style.backgroundColor = newColor;
          bars[bar2].style.backgroundColor = newColor;
        }, TIMER * i);
      } else {
        setTimeout(() => {
          let newColor = bars[bar1].style.backgroundColor === COLOR2 ? COLOR1 : COLOR2;
          bars[bar1].style.backgroundColor = newColor;
          bars[bar1].style.height = `${animations[i][2]}px`;
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
              <button> Insertion Sort </button>
            </li>
            <li>
              <button> Bubble Sort </button>
            </li>
            <li>
              <button> Quick Sort </button>
            </li>
            <li>
              <button> Selection Sort </button>
            </li>
            <li>
              <button> Heap Sort </button>
            </li>
            <li>
              <button onClick={() => this.swapRandomArray()}>
               
                Random Swaps
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
        {/* Bars ---------------------------------------------------------------------------------*/}
        <div className="bars-container">
          {array.map((num, index) => (
            <div
              className="bar"
              key={index}
              style={{
                backgroundColor: COLOR1,
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

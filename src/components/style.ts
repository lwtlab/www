// explaination of each class:
// btn-icon-lg 53px
// rounded-full make a circle
// hover:bg-gray-400
// The transition duration-500 ease-in-out classes are used to animate any changes over 500 milliseconds with an 'ease-in-out' timing function, which causes the animation to start slowly, speed up, then end slowly.
// The transform hover:-translate-y-1 hover:scale-110 classes add a slight upward shift (-translate-y-1) and a scaling effect (scale-110 to increase the size to 110%) to the button when it's hovered over.
export const roundTextButtonClass =
  "btn rounded-lg hover:bg-gray-400 transition duration-500 ease-in-out"; // transform hover:-translate-y-1 hover:scale-110";
export const circleIconButtonClass =
  "btn-icon btn-icon-lg rounded-full hover:bg-gray-400 transition duration-500 ease-in-out"; // transform hover:-translate-y-1 hover:scale-110";
export const roundIconButtonClass =
  "btn-icon btn-icon-lg rounded-lg hover:bg-gray-400 transition duration-500 ease-in-out"; // transform hover:-translate-y-1 hover:scale-110";

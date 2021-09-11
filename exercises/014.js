/* 
  Write a JavaScript program to find the types of a given angle.
  Types of angles:
    • Zero angle /æŋɡəl/: A zero angle has an exact measurement of 0°.
    • Acute angle /əˈkjuːt æŋɡəl/: An angle between 0 and 90°s.
    • Right angle /raɪt æŋɡəl/: An angle that has an exact measurement of 90°.
    • Obtuse angle /əbˈtjuːs æŋɡəl/: An angle between 90 and 180°.
    • Straight angle /streɪt æŋɡəl/: An angle that has an exact measurement of 180°.
    • Reflex angle /riːfleks æŋɡəl/: An angle between 180 and 360°.
    • Complete/Round/Full (rotation) angle: A full angle has an exact measurement of 360°.
*/

function checkAngleType(angle) {
  switch (true) {
    case (angle === 0):
      return 'Zero angle.';
    case (angle > 0 && angle < 90):
      return 'Acute angle';
    case (angle === 90):
      return 'Right angle.';
    case (angle < 180):
      return 'Obtuse angle.';
    case (angle === 180):
      return 'Straight angle.';
    case (angle > 180 && angle < 360):
      return 'Reflex angle.';
    case (angle === 360):
      return 'Full rotation angle.'
    default:
      return 'Unsupported measurement.';
  }
}

console.log(checkAngleType(0)); // "Zero angle."
console.log(checkAngleType(42)); // "Acute angle."
console.log(checkAngleType(90)); // "Right angle."
console.log(checkAngleType(98)); // "Obtuse angle."
console.log(checkAngleType(180)); // "Straight angle."
console.log(checkAngleType(243)); // "Reflex angle."
console.log(checkAngleType(360)); // "Full rotation angle."
console.log(checkAngleType(666)); // "Unsupported measurement."
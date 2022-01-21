/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const Ship = (len) => {
    return {
        length: len,
        hitLocation: [],
        sunk: false,
        orientation: undefined,
        gridLocation: [],
        hit(num) {
            if(num - 1 < this.length && !this.hitLocation.includes(num)) {
                this.hitLocation.push(num)
            }
            this.isSunk()
        },
        isSunk() {
            if(this.hitLocation.length === this.length) {
                this.sunk = true
            }
        },
    }       
}

const Gameboard = (size) => {
    // how to "place" a ship at a certain point in the array using Ship()??
    // 
    const ships = []
    const board = []
    const createShips = () => {
        const oneShipOne = Ship(1);
        const oneShipTwo = Ship(1);
        const oneShipThree = Ship(1);
        const oneShipFour = Ship(1);
        const twoShipOne = Ship(2);
        const twoShipTwo = Ship(2);
        const twoShipThree = Ship(2);
        const threeShipOne = Ship(3);
        const threeShipTwo = Ship(3);
        const fourShipOne = Ship(4);
        ships.push(
            oneShipOne, 
            oneShipTwo, 
            oneShipThree, 
            oneShipFour,
            twoShipOne, 
            twoShipTwo, 
            twoShipThree, 
            threeShipOne, 
            threeShipTwo,
            fourShipOne
        )

    }
    createShips()

    const createBoard = (size) => {
        for(let y = 0; y < size; y++){
            const yArr = [] 
            for(let x = 0; x < size; x++){
                const xArr = {
                    column: String.fromCharCode(65 + x),
                    row: y,
                    occupied: false,
                    hit: false,
                    miss: false
                }    
                yArr.push(xArr)
            }
            board.push(yArr)
        }
    }
    createBoard(size)


    // THIS WHOLE THING IS A TIGHTLY COUPLED MESS
    const placeShips = (size) => {
        ships.forEach(ship => {
            const orientation = Boolean(Math.round(Math.random()))
            if (orientation) {
                ship.orientation = 'horizontal'
            } else {
                ship.orientation = 'vertical'
            }
            
            // create random numbers between 0 and size to define starting point
            let columnLetter, columnLetterCharCode, rowNumber
            const generateRandomStartingCoordinate = () => {
                columnLetter = String.fromCharCode(Math.floor(Math.random() * size) + 65)
                columnLetterCharCode = columnLetter.charCodeAt(0)
                rowNumber = Math.floor(Math.random() * size)
            }
            
            // if a space is not occupied, AND if the next (length) places are not occupied, place the ship at the startingCoordinate...
            const placeShip= () => {
                board.forEach(rowArr => {
                    rowArr.forEach(position => {
                        // prevents randomly generated starting coordinate from being placed on an occupied space 
                        while ((position.column + position.row) === (columnLetter + rowNumber) && position.occupied) {
                            console.log('while')
                            generateRandomStartingCoordinate(size)
                        }  
                        // prevents a horizontal ship from starting too close to right side, push a valid coordinate to the gridLocation array
                        if (ship.orientation === 'horizontal' && (size - (columnLetterCharCode - 65)) < ship.length) {
                            generateRandomStartingCoordinate(size)
                        } else if (ship.orientation === 'horizontal' && size - ship.length >= (columnLetterCharCode - 65)){ 
                            for(let i = 0 ; i < ship.length; i++) {
                                if (ship.gridLocation.length < ship.length){
                                    ship.gridLocation.push(String.fromCharCode((columnLetterCharCode + i)) + rowNumber)
                                } 
                            }
                        }
                        // prevents a vertical ship from starting too close to bottom, push a valid coordinate to the gridLocation array
                        if (ship.orientation === 'vertical' && (size - rowNumber) < ship.length) {
                            generateRandomStartingCoordinate(size)
                        } else if (ship.orientation === 'vertical' && size - ship.length >= rowNumber) {                            
                            for(let i = 0 ; i < ship.length; i++) {
                                if (ship.gridLocation.length < ship.length){
                                    ship.gridLocation.push((columnLetter + (rowNumber + i)))
                                }    
                            }
                        }
                        // marks position.occupied true so next ship isn't 
                        if (position.occupied) {
                            console.log(position.column + position.row + ' is occupied')
                            generateRandomStartingCoordinate()
                        } else if (ship.gridLocation.indexOf(position.column + position.row) !== -1) {
                            position.occupied = true
                        }
                    })    
                })  
            }
            generateRandomStartingCoordinate()
            placeShip()            
        })    
    }
    placeShips(size)
    console.log(board)
    console.log(ships)


    return {
        board,  
        ships
    }
}

Gameboard(10)

exports.Ship = Ship
exports.Gameboard = Gameboard
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLDRDQUE0QyxpQkFBaUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQiw0Q0FBNEMsaUJBQWlCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsWUFBWTtBQUNaLGlCQUFpQixZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGlwID0gKGxlbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aDogbGVuLFxuICAgICAgICBoaXRMb2NhdGlvbjogW10sXG4gICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICBvcmllbnRhdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBncmlkTG9jYXRpb246IFtdLFxuICAgICAgICBoaXQobnVtKSB7XG4gICAgICAgICAgICBpZihudW0gLSAxIDwgdGhpcy5sZW5ndGggJiYgIXRoaXMuaGl0TG9jYXRpb24uaW5jbHVkZXMobnVtKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0TG9jYXRpb24ucHVzaChudW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzU3VuaygpXG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaGl0TG9jYXRpb24ubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9ICAgICAgIFxufVxuXG5jb25zdCBHYW1lYm9hcmQgPSAoc2l6ZSkgPT4ge1xuICAgIC8vIGhvdyB0byBcInBsYWNlXCIgYSBzaGlwIGF0IGEgY2VydGFpbiBwb2ludCBpbiB0aGUgYXJyYXkgdXNpbmcgU2hpcCgpPz9cbiAgICAvLyBcbiAgICBjb25zdCBzaGlwcyA9IFtdXG4gICAgY29uc3QgYm9hcmQgPSBbXVxuICAgIGNvbnN0IGNyZWF0ZVNoaXBzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBvbmVTaGlwT25lID0gU2hpcCgxKTtcbiAgICAgICAgY29uc3Qgb25lU2hpcFR3byA9IFNoaXAoMSk7XG4gICAgICAgIGNvbnN0IG9uZVNoaXBUaHJlZSA9IFNoaXAoMSk7XG4gICAgICAgIGNvbnN0IG9uZVNoaXBGb3VyID0gU2hpcCgxKTtcbiAgICAgICAgY29uc3QgdHdvU2hpcE9uZSA9IFNoaXAoMik7XG4gICAgICAgIGNvbnN0IHR3b1NoaXBUd28gPSBTaGlwKDIpO1xuICAgICAgICBjb25zdCB0d29TaGlwVGhyZWUgPSBTaGlwKDIpO1xuICAgICAgICBjb25zdCB0aHJlZVNoaXBPbmUgPSBTaGlwKDMpO1xuICAgICAgICBjb25zdCB0aHJlZVNoaXBUd28gPSBTaGlwKDMpO1xuICAgICAgICBjb25zdCBmb3VyU2hpcE9uZSA9IFNoaXAoNCk7XG4gICAgICAgIHNoaXBzLnB1c2goXG4gICAgICAgICAgICBvbmVTaGlwT25lLCBcbiAgICAgICAgICAgIG9uZVNoaXBUd28sIFxuICAgICAgICAgICAgb25lU2hpcFRocmVlLCBcbiAgICAgICAgICAgIG9uZVNoaXBGb3VyLFxuICAgICAgICAgICAgdHdvU2hpcE9uZSwgXG4gICAgICAgICAgICB0d29TaGlwVHdvLCBcbiAgICAgICAgICAgIHR3b1NoaXBUaHJlZSwgXG4gICAgICAgICAgICB0aHJlZVNoaXBPbmUsIFxuICAgICAgICAgICAgdGhyZWVTaGlwVHdvLFxuICAgICAgICAgICAgZm91clNoaXBPbmVcbiAgICAgICAgKVxuXG4gICAgfVxuICAgIGNyZWF0ZVNoaXBzKClcblxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkID0gKHNpemUpID0+IHtcbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHNpemU7IHkrKyl7XG4gICAgICAgICAgICBjb25zdCB5QXJyID0gW10gXG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgc2l6ZTsgeCsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCB4QXJyID0ge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyB4KSxcbiAgICAgICAgICAgICAgICAgICAgcm93OiB5LFxuICAgICAgICAgICAgICAgICAgICBvY2N1cGllZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1pc3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICB5QXJyLnB1c2goeEFycilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLnB1c2goeUFycilcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVCb2FyZChzaXplKVxuXG5cbiAgICAvLyBUSElTIFdIT0xFIFRISU5HIElTIEEgVElHSFRMWSBDT1VQTEVEIE1FU1NcbiAgICBjb25zdCBwbGFjZVNoaXBzID0gKHNpemUpID0+IHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gQm9vbGVhbihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKVxuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgc2hpcC5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjcmVhdGUgcmFuZG9tIG51bWJlcnMgYmV0d2VlbiAwIGFuZCBzaXplIHRvIGRlZmluZSBzdGFydGluZyBwb2ludFxuICAgICAgICAgICAgbGV0IGNvbHVtbkxldHRlciwgY29sdW1uTGV0dGVyQ2hhckNvZGUsIHJvd051bWJlclxuICAgICAgICAgICAgY29uc3QgZ2VuZXJhdGVSYW5kb21TdGFydGluZ0Nvb3JkaW5hdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sdW1uTGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKSArIDY1KVxuICAgICAgICAgICAgICAgIGNvbHVtbkxldHRlckNoYXJDb2RlID0gY29sdW1uTGV0dGVyLmNoYXJDb2RlQXQoMClcbiAgICAgICAgICAgICAgICByb3dOdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBpZiBhIHNwYWNlIGlzIG5vdCBvY2N1cGllZCwgQU5EIGlmIHRoZSBuZXh0IChsZW5ndGgpIHBsYWNlcyBhcmUgbm90IG9jY3VwaWVkLCBwbGFjZSB0aGUgc2hpcCBhdCB0aGUgc3RhcnRpbmdDb29yZGluYXRlLi4uXG4gICAgICAgICAgICBjb25zdCBwbGFjZVNoaXA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBib2FyZC5mb3JFYWNoKHJvd0FyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd0Fyci5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZlbnRzIHJhbmRvbWx5IGdlbmVyYXRlZCBzdGFydGluZyBjb29yZGluYXRlIGZyb20gYmVpbmcgcGxhY2VkIG9uIGFuIG9jY3VwaWVkIHNwYWNlIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChwb3NpdGlvbi5jb2x1bW4gKyBwb3NpdGlvbi5yb3cpID09PSAoY29sdW1uTGV0dGVyICsgcm93TnVtYmVyKSAmJiBwb3NpdGlvbi5vY2N1cGllZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aGlsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVSYW5kb21TdGFydGluZ0Nvb3JkaW5hdGUoc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldmVudHMgYSBob3Jpem9udGFsIHNoaXAgZnJvbSBzdGFydGluZyB0b28gY2xvc2UgdG8gcmlnaHQgc2lkZSwgcHVzaCBhIHZhbGlkIGNvb3JkaW5hdGUgdG8gdGhlIGdyaWRMb2NhdGlvbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyAmJiAoc2l6ZSAtIChjb2x1bW5MZXR0ZXJDaGFyQ29kZSAtIDY1KSkgPCBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUmFuZG9tU3RhcnRpbmdDb29yZGluYXRlKHNpemUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyAmJiBzaXplIC0gc2hpcC5sZW5ndGggPj0gKGNvbHVtbkxldHRlckNoYXJDb2RlIC0gNjUpKXsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLmdyaWRMb2NhdGlvbi5sZW5ndGggPCBzaGlwLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmdyaWRMb2NhdGlvbi5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoKGNvbHVtbkxldHRlckNoYXJDb2RlICsgaSkpICsgcm93TnVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZlbnRzIGEgdmVydGljYWwgc2hpcCBmcm9tIHN0YXJ0aW5nIHRvbyBjbG9zZSB0byBib3R0b20sIHB1c2ggYSB2YWxpZCBjb29yZGluYXRlIHRvIHRoZSBncmlkTG9jYXRpb24gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnICYmIChzaXplIC0gcm93TnVtYmVyKSA8IHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVSYW5kb21TdGFydGluZ0Nvb3JkaW5hdGUoc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiBzaXplIC0gc2hpcC5sZW5ndGggPj0gcm93TnVtYmVyKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcC5ncmlkTG9jYXRpb24ubGVuZ3RoIDwgc2hpcC5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5ncmlkTG9jYXRpb24ucHVzaCgoY29sdW1uTGV0dGVyICsgKHJvd051bWJlciArIGkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJrcyBwb3NpdGlvbi5vY2N1cGllZCB0cnVlIHNvIG5leHQgc2hpcCBpc24ndCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi5vY2N1cGllZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uLmNvbHVtbiArIHBvc2l0aW9uLnJvdyArICcgaXMgb2NjdXBpZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUmFuZG9tU3RhcnRpbmdDb29yZGluYXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5ncmlkTG9jYXRpb24uaW5kZXhPZihwb3NpdGlvbi5jb2x1bW4gKyBwb3NpdGlvbi5yb3cpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLm9jY3VwaWVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSAgICBcbiAgICAgICAgICAgICAgICB9KSAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZW5lcmF0ZVJhbmRvbVN0YXJ0aW5nQ29vcmRpbmF0ZSgpXG4gICAgICAgICAgICBwbGFjZVNoaXAoKSAgICAgICAgICAgIFxuICAgICAgICB9KSAgICBcbiAgICB9XG4gICAgcGxhY2VTaGlwcyhzaXplKVxuICAgIGNvbnNvbGUubG9nKGJvYXJkKVxuICAgIGNvbnNvbGUubG9nKHNoaXBzKVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZCwgIFxuICAgICAgICBzaGlwc1xuICAgIH1cbn1cblxuR2FtZWJvYXJkKDEwKVxuXG5leHBvcnRzLlNoaXAgPSBTaGlwXG5leHBvcnRzLkdhbWVib2FyZCA9IEdhbWVib2FyZCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
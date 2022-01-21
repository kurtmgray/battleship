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
                board.forEach(row => {
                    row.forEach(position => {
                        // prevents randomly generated starting coordinate from being placed on an occupied space 
                        while ((position.column + position.row) === (columnLetter + rowNumber) && position.occupied) {
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
    const receiveAttack = (coordinate) => {
        board.forEach(row => {
            row.forEach(position => {
                if (coordinate === position.column + position.row && position.occupied) {
                    position.hit = true
                    position.miss = false
                    console.log('hit!')
                } else {
                    console.log('miss')
                }
            })
        })   
    }
    placeShips(size)

    return {
        board,  
        ships, 
        receiveAttack
    }
}

// const Player = 

const userBoard = Gameboard(10)
console.log(userBoard.board)
console.log(userBoard.ships)
userBoard.receiveAttack('B2')

const enemyBoard = Gameboard(10)

exports.Ship = Ship
exports.Gameboard = Gameboard
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLDRDQUE0QyxpQkFBaUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQiw0Q0FBNEMsaUJBQWlCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsWUFBWTtBQUNaLGlCQUFpQixZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGlwID0gKGxlbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aDogbGVuLFxuICAgICAgICBoaXRMb2NhdGlvbjogW10sXG4gICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICBvcmllbnRhdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBncmlkTG9jYXRpb246IFtdLFxuICAgICAgICBoaXQobnVtKSB7XG4gICAgICAgICAgICBpZihudW0gLSAxIDwgdGhpcy5sZW5ndGggJiYgIXRoaXMuaGl0TG9jYXRpb24uaW5jbHVkZXMobnVtKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0TG9jYXRpb24ucHVzaChudW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzU3VuaygpXG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaGl0TG9jYXRpb24ubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9ICAgICAgIFxufVxuXG5jb25zdCBHYW1lYm9hcmQgPSAoc2l6ZSkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gW11cbiAgICBjb25zdCBib2FyZCA9IFtdXG4gICAgY29uc3QgY3JlYXRlU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9uZVNoaXBPbmUgPSBTaGlwKDEpO1xuICAgICAgICBjb25zdCBvbmVTaGlwVHdvID0gU2hpcCgxKTtcbiAgICAgICAgY29uc3Qgb25lU2hpcFRocmVlID0gU2hpcCgxKTtcbiAgICAgICAgY29uc3Qgb25lU2hpcEZvdXIgPSBTaGlwKDEpO1xuICAgICAgICBjb25zdCB0d29TaGlwT25lID0gU2hpcCgyKTtcbiAgICAgICAgY29uc3QgdHdvU2hpcFR3byA9IFNoaXAoMik7XG4gICAgICAgIGNvbnN0IHR3b1NoaXBUaHJlZSA9IFNoaXAoMik7XG4gICAgICAgIGNvbnN0IHRocmVlU2hpcE9uZSA9IFNoaXAoMyk7XG4gICAgICAgIGNvbnN0IHRocmVlU2hpcFR3byA9IFNoaXAoMyk7XG4gICAgICAgIGNvbnN0IGZvdXJTaGlwT25lID0gU2hpcCg0KTtcbiAgICAgICAgc2hpcHMucHVzaChcbiAgICAgICAgICAgIG9uZVNoaXBPbmUsIFxuICAgICAgICAgICAgb25lU2hpcFR3bywgXG4gICAgICAgICAgICBvbmVTaGlwVGhyZWUsIFxuICAgICAgICAgICAgb25lU2hpcEZvdXIsXG4gICAgICAgICAgICB0d29TaGlwT25lLCBcbiAgICAgICAgICAgIHR3b1NoaXBUd28sIFxuICAgICAgICAgICAgdHdvU2hpcFRocmVlLCBcbiAgICAgICAgICAgIHRocmVlU2hpcE9uZSwgXG4gICAgICAgICAgICB0aHJlZVNoaXBUd28sXG4gICAgICAgICAgICBmb3VyU2hpcE9uZVxuICAgICAgICApXG5cbiAgICB9XG4gICAgY3JlYXRlU2hpcHMoKVxuXG4gICAgY29uc3QgY3JlYXRlQm9hcmQgPSAoc2l6ZSkgPT4ge1xuICAgICAgICBmb3IobGV0IHkgPSAwOyB5IDwgc2l6ZTsgeSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHlBcnIgPSBbXSBcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCBzaXplOyB4Kyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHhBcnIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIHgpLFxuICAgICAgICAgICAgICAgICAgICByb3c6IHksXG4gICAgICAgICAgICAgICAgICAgIG9jY3VwaWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWlzczogZmFsc2VcbiAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgIHlBcnIucHVzaCh4QXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQucHVzaCh5QXJyKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUJvYXJkKHNpemUpXG5cblxuICAgIC8vIFRISVMgV0hPTEUgVEhJTkcgSVMgQSBUSUdIVExZIENPVVBMRUQgTUVTU1xuICAgIGNvbnN0IHBsYWNlU2hpcHMgPSAoc2l6ZSkgPT4ge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBCb29sZWFuKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoaXAub3JpZW50YXRpb24gPSAndmVydGljYWwnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNyZWF0ZSByYW5kb20gbnVtYmVycyBiZXR3ZWVuIDAgYW5kIHNpemUgdG8gZGVmaW5lIHN0YXJ0aW5nIHBvaW50XG4gICAgICAgICAgICBsZXQgY29sdW1uTGV0dGVyLCBjb2x1bW5MZXR0ZXJDaGFyQ29kZSwgcm93TnVtYmVyXG4gICAgICAgICAgICBjb25zdCBnZW5lcmF0ZVJhbmRvbVN0YXJ0aW5nQ29vcmRpbmF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb2x1bW5MZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpICsgNjUpXG4gICAgICAgICAgICAgICAgY29sdW1uTGV0dGVyQ2hhckNvZGUgPSBjb2x1bW5MZXR0ZXIuY2hhckNvZGVBdCgwKVxuICAgICAgICAgICAgICAgIHJvd051bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGlmIGEgc3BhY2UgaXMgbm90IG9jY3VwaWVkLCBBTkQgaWYgdGhlIG5leHQgKGxlbmd0aCkgcGxhY2VzIGFyZSBub3Qgb2NjdXBpZWQsIHBsYWNlIHRoZSBzaGlwIGF0IHRoZSBzdGFydGluZ0Nvb3JkaW5hdGUuLi5cbiAgICAgICAgICAgIGNvbnN0IHBsYWNlU2hpcD0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJvYXJkLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldmVudHMgcmFuZG9tbHkgZ2VuZXJhdGVkIHN0YXJ0aW5nIGNvb3JkaW5hdGUgZnJvbSBiZWluZyBwbGFjZWQgb24gYW4gb2NjdXBpZWQgc3BhY2UgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKHBvc2l0aW9uLmNvbHVtbiArIHBvc2l0aW9uLnJvdykgPT09IChjb2x1bW5MZXR0ZXIgKyByb3dOdW1iZXIpICYmIHBvc2l0aW9uLm9jY3VwaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVSYW5kb21TdGFydGluZ0Nvb3JkaW5hdGUoc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldmVudHMgYSBob3Jpem9udGFsIHNoaXAgZnJvbSBzdGFydGluZyB0b28gY2xvc2UgdG8gcmlnaHQgc2lkZSwgcHVzaCBhIHZhbGlkIGNvb3JkaW5hdGUgdG8gdGhlIGdyaWRMb2NhdGlvbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyAmJiAoc2l6ZSAtIChjb2x1bW5MZXR0ZXJDaGFyQ29kZSAtIDY1KSkgPCBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUmFuZG9tU3RhcnRpbmdDb29yZGluYXRlKHNpemUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyAmJiBzaXplIC0gc2hpcC5sZW5ndGggPj0gKGNvbHVtbkxldHRlckNoYXJDb2RlIC0gNjUpKXsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLmdyaWRMb2NhdGlvbi5sZW5ndGggPCBzaGlwLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmdyaWRMb2NhdGlvbi5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoKGNvbHVtbkxldHRlckNoYXJDb2RlICsgaSkpICsgcm93TnVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZlbnRzIGEgdmVydGljYWwgc2hpcCBmcm9tIHN0YXJ0aW5nIHRvbyBjbG9zZSB0byBib3R0b20sIHB1c2ggYSB2YWxpZCBjb29yZGluYXRlIHRvIHRoZSBncmlkTG9jYXRpb24gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnICYmIChzaXplIC0gcm93TnVtYmVyKSA8IHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVSYW5kb21TdGFydGluZ0Nvb3JkaW5hdGUoc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiBzaXplIC0gc2hpcC5sZW5ndGggPj0gcm93TnVtYmVyKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcC5ncmlkTG9jYXRpb24ubGVuZ3RoIDwgc2hpcC5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5ncmlkTG9jYXRpb24ucHVzaCgoY29sdW1uTGV0dGVyICsgKHJvd051bWJlciArIGkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJrcyBwb3NpdGlvbi5vY2N1cGllZCB0cnVlIHNvIG5leHQgc2hpcCBpc24ndCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbi5vY2N1cGllZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUmFuZG9tU3RhcnRpbmdDb29yZGluYXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5ncmlkTG9jYXRpb24uaW5kZXhPZihwb3NpdGlvbi5jb2x1bW4gKyBwb3NpdGlvbi5yb3cpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLm9jY3VwaWVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSAgICBcbiAgICAgICAgICAgICAgICB9KSAgXG4gICAgICAgICAgICB9XG4gICAgICAgIGdlbmVyYXRlUmFuZG9tU3RhcnRpbmdDb29yZGluYXRlKClcbiAgICAgICAgcGxhY2VTaGlwKCkgICAgICAgICAgICBcbiAgICAgICAgfSkgICAgXG4gICAgfVxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBib2FyZC5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGUgPT09IHBvc2l0aW9uLmNvbHVtbiArIHBvc2l0aW9uLnJvdyAmJiBwb3NpdGlvbi5vY2N1cGllZCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5oaXQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLm1pc3MgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGl0IScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21pc3MnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pICAgXG4gICAgfVxuICAgIHBsYWNlU2hpcHMoc2l6ZSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLCAgXG4gICAgICAgIHNoaXBzLCBcbiAgICAgICAgcmVjZWl2ZUF0dGFja1xuICAgIH1cbn1cblxuLy8gY29uc3QgUGxheWVyID0gXG5cbmNvbnN0IHVzZXJCb2FyZCA9IEdhbWVib2FyZCgxMClcbmNvbnNvbGUubG9nKHVzZXJCb2FyZC5ib2FyZClcbmNvbnNvbGUubG9nKHVzZXJCb2FyZC5zaGlwcylcbnVzZXJCb2FyZC5yZWNlaXZlQXR0YWNrKCdCMicpXG5cbmNvbnN0IGVuZW15Qm9hcmQgPSBHYW1lYm9hcmQoMTApXG5cbmV4cG9ydHMuU2hpcCA9IFNoaXBcbmV4cG9ydHMuR2FtZWJvYXJkID0gR2FtZWJvYXJkIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
// handle edge cases, organize

import './style.css'

const Ship = (len) => {
    return {
        length: len,
        hitLocation: [],
        sunk: false,
        orientation: undefined,
        gridLocation: [],
        hit(x, y) {
            if(!this.hitLocation.includes(x + y) && this.gridLocation.includes(x + y)) {
                this.hitLocation.push(x + y)
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
    const moves = []
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
    
    const createBoard = (size) => {
        for(let y = 0; y < size; y++){
            const yArr = [] 
            for(let x = 0; x < size; x++){
                const xArr = {
                    index: '' + x + y,
                    column: '' + x,
                    row: '' + y,
                    occupied: false,
                    hit: false,
                    miss: false
                }    
                yArr.push(xArr)
            }
            board.push(yArr)
        }
    }
    
    const placeShips = (size) => {
        ships.forEach(ship => {
            const orientation = Boolean(Math.round(Math.random()))
            if (orientation) {
                ship.orientation = 'horizontal'
            } else {
                ship.orientation = 'vertical'
            }
            
            let x, y 
            const generateNewStartingCoordinate = (size) => {
                x = '' + Math.floor(Math.random() * size)
                y = '' + Math.floor(Math.random() * size)
            }

            const placeShip = () => {
                generateNewStartingCoordinate(size)
                board.forEach(row => {
                    row.forEach(position => {
                        while (position.index === x + y && position.occupied) {
                            generateNewStartingCoordinate(size)
                        }  
                        if (ship.orientation === 'horizontal' && size - x < ship.length) {
                            generateNewStartingCoordinate(size)
                        } else if (ship.orientation === 'horizontal' && size - ship.length >= x){ 
                            for(let i = 0 ; i < ship.length; i++) {
                                if (ship.gridLocation.length < ship.length){
                                    ship.gridLocation.push((parseInt(x) + i) + y)
                                } 
                            }
                        }
                        if (ship.orientation === 'vertical' && size - y < ship.length) {
                            generateNewStartingCoordinate(size)
                        } else if (ship.orientation === 'vertical' && size - ship.length >= y) {                            
                            for(let i = 0 ; i < ship.length; i++) {
                                if (ship.gridLocation.length < ship.length){
                                    ship.gridLocation.push((x + (parseInt(y) + i)))
                                }    
                            }
                        }
                        if (position.occupied) {
                            generateNewStartingCoordinate(size)
                        // } else if (// for loop to check for (length) spaces to the right (column values)) {
                        // //another for loop to check for (length) spaces below (row values) for occupied spaces
                        } else if (ship.gridLocation.indexOf(position.index) !== -1) {
                            position.occupied = true
                        }
                    })    
                })  
            }
        generateNewStartingCoordinate()
        placeShip()            
        })
        return {size}    
    }
    
    const receiveAttack = (x, y) => {
        let result
        board.forEach(row => {
            row.forEach(position => {
                if (position.index === x + y && position.occupied && !position.hit) {
                    position.hit = true
                    ships.forEach(ship => {
                        ship.hit(x,y)
                    })
                    result = 'hit'
                } else if (position.index === x + y && !position.occupied && !position.miss) {
                    position.miss = true
                    result = 'miss'               
                } else if (position.index === x + y && (position.hit || position.miss)){
                    result = false
                }
            })
        })
        return result
    }

    const gameOver = () => {
        return ships.every(ship => ship.sunk)
    }
    
    createShips()
    createBoard(size)
    placeShips(size)

    return {
        board,  
        ships,
        moves,
        size,
        gameOver,
        receiveAttack,
    }
}

const Player = (name) => {
    return {
        name: name,
        active: false,
        attack(e) {
            const x = e.target.dataset.index.charAt(0)
            const y = e.target.dataset.index.charAt(1)
            return {x, y}
        },
        randomAttack(size) {
            const x = '' + Math.floor(Math.random() * size)
            const y = '' + Math.floor(Math.random() * size)
            console.log(x, y)
            return {x, y}
        }
    }
}

// UI
const contentDIV = document.querySelector('.content')
const boardsDIV = document.querySelector('.boards-wrapper')
const userBoardDIV = document.querySelector('.user-board')
const enemyBoardDIV = document.querySelector('.enemy-board')

const Game = () => {
    const enemyBoard = Gameboard(10)
    const userBoard = Gameboard(10)

    const enemy = Player('Computer')
    const user = Player('Kurt')
    user.active = true

    // DOM
    const createBoardUI = (userBoard, enemyBoard) => {
        userBoard.board.forEach(row => {
            row.forEach(position => {
                const square = document.createElement('div')
                square.classList.add('user-position')
                square.innerText = position.column + position.row
                square.dataset.index = position.column + position.row
                userBoardDIV.appendChild(square)
    
                if(position.occupied){
                    square.classList.add('user-occupied')
                }
            })
        })
        enemyBoard.board.forEach(row => {
            row.forEach(position => {
                const square = document.createElement('div')
                square.classList.add('enemy-position')
                square.innerText = position.column + position.row
                square.dataset.index = position.column + position.row
                enemyBoardDIV.appendChild(square)
                
                if(position.occupied){
                    square.classList.add('enemy-occupied')
                }
            })
        })    
    }
    createBoardUI(userBoard, enemyBoard)

    const updateUI = () => {
        const userPositionsNL = document.querySelectorAll('.user-position')
        const userPositions = Array.from(userPositionsNL)
        const enemyPositionsNL = document.querySelectorAll('.enemy-position')
        const enemyPositions = Array.from(enemyPositionsNL)
        enemyBoard.board.forEach(row => {
            row.forEach(position => {
                if (position.hit) {
                    enemyPositions.forEach(div => {
                        if(position.index === div.dataset.index) {
                            div.classList.add('hit')
                        }
                    })
                } else if (position.miss) {
                    enemyPositions.forEach(div => {
                        if(position.index === div.dataset.index) {
                            div.classList.add('miss')
                        }
                    })
                }
            });
        })
        userBoard.board.forEach(row => {
            row.forEach(position => {
                if (position.hit) {
                    userPositions.forEach(div => {
                        if(position.index === div.dataset.index) {
                            div.classList.add('hit')
                        }
                    })
                } else if (position.miss) {
                    userPositions.forEach(div => {
                        if(position.index === div.dataset.index) {
                            div.classList.add('miss')
                        }
                    })
                }
            });
        })
    }
    
    // util
    const gameMoves = async () => {
        
        const computerMove = () => {
            console.log('computer move')
            return enemy.randomAttack(userBoard.size)
        }

        const userMove = async () => {
            return new Promise((resolve) => {
                enemyBoardDIV.addEventListener('click', function clickListener(e) {
                    const {x, y} = user.attack(e)
                    enemyBoardDIV.removeEventListener('click', clickListener)
                    resolve({x, y})    
                })    
            })
        }
        let result
        user.active ? result = userMove() : result = computerMove()
        return result
    }
    
    const gameLoop = async () => {
        while (true) {
            let otherBoard
            user.active ? otherBoard = enemyBoard : otherBoard = userBoard
            while (true) {
                const {x, y} = await gameMoves()
                const result = otherBoard.receiveAttack(x, y)
                if(result === 'miss' && user.active){
                    user.active = false
                    enemy.active = true
                    console.log('user ' + result)
                    updateUI()
                    break
                } else if(result === 'miss' && enemy.active){
                    user.active = true
                    enemy.active = false
                    console.log('enemy ' + result)
                    updateUI()
                    break
                } else {
                    updateUI()
                    break
                }  
            }
            const activeWin = otherBoard.gameOver()
            if (activeWin) {
                return user.active ? user.name : enemy.name
            }
        }            
    }
    return {
        gameLoop
    }
}

const game = Game()
game.gameLoop().then(result => {
    alert(`${result} wins!`)
})
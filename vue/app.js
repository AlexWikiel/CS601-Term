const app = Vue.createApp({
    template: `
    <table>
        <tr>
            <td id="1_1" @click="PlaceToken($event)"><div id="c1_1" :class="{x: token1.marker === x}"  v-if="tokens[0].placed">{{tokens[0].marker}}</div></td>
            <td id="1_2" @click="PlaceToken($event)"><div id="c1_2" :class="{x: token2.marker === x}"  v-if="tokens[1].placed">{{tokens[1].marker}}</div></td>
            <td id="1_3" @click="PlaceToken($event)"><div id="c1_3" :class="{x: token3.marker === x}"  v-if="tokens[2].placed">{{tokens[2].marker}}</div></td>
        </tr>
        <tr>
            <td id="2_1" @click="PlaceToken($event)"><div id="c2_1" :class="{x: token4.marker === x}"  v-if="tokens[3].placed">{{tokens[3].marker}}</div></td>
            <td id="2_2" @click="PlaceToken($event)"><div id="c2_2" :class="{x: token5.marker === x}"  v-if="tokens[4].placed">{{tokens[4].marker}}</div></td>
            <td id="2_3" @click="PlaceToken($event)"><div id="c2_3" :class="{x: token6.marker === x}"  v-if="tokens[5].placed">{{tokens[5].marker}}</div></td>
        </tr>
        <tr>
            <td id="3_1" @click="PlaceToken($event)"><div id="c3_1" :class="{x: token7.marker === x}"  v-if="tokens[6].placed">{{tokens[6].marker}}</div></td>
            <td id="3_2" @click="PlaceToken($event)"><div id="c3_2" :class="{x: token8.marker === x}"  v-if="tokens[7].placed">{{tokens[7].marker}}</div></td>
            <td id="3_3" @click="PlaceToken($event)"><div id="c3_3" :class="{x: token9.marker === x}"  v-if="tokens[8].placed">{{tokens[8].marker}}</div></td>
        </tr>
    </table>
    <p>{{message}}</p>
    <div><button @click="PlayAgain()">play again</button></div
`,

    data() {
        return {
            x : 'X',
            o : 'O',
            placed : true,
            index: 1,
            iteration: 0,
            computerTurn : false,
            gameplay : true,
            winner: 0,
            message: "Start playing by clicking the grid...",
            token1 : { name: '1_1', placed: false, marker: 'X', row:1, col:1, isX : true},
            token2 : { name: '1_2', placed: false, marker: 'X', row:1, col:2, isX : true},
            token3 : { name: '1_3', placed: false, marker: 'X', row:1, col:3, isX : true},
            token4 : { name: '2_1', placed: false, marker: 'X', row:2, col:1, isX : true},
            token5 : { name: '2_2', placed: false, marker: 'X', row:2, col:2, isX : true},
            token6 : { name: '2_3', placed: false, marker: 'X', row:2, col:3, isX : true},
            token7 : { name: '3_1', placed: false, marker: 'X', row:3, col:1, isX : true},
            token8 : { name: '3_2', placed: false, marker: 'X', row:3, col:2, isX : true},
            token9 : { name: '3_3', placed: false, marker: 'X', row:3, col:3, isX : true},
            tokens: [],
            row1:[],
            row2:[],
            row3:[],
            col1:[],
            col2:[],
            col3:[],
            diagLtoR:[],
            diagRtoL:[],
        }
    },
    methods: {
        // Simply reload the URL
        PlayAgain(){
            //https://stackoverflow.com/questions/54956798/application-restart-by-button-on-vuejs
            location.reload()
        },

        // player place a token
        PlaceToken(event) {
            if (this.gameplay === false) return
            this.message = "GAME ON..."
            for (token of this.tokens) {
                this.computerTurn = true;
                //console.log(token.name)
                if (token.name === event.target.id) {
                    if (token.placed === true) {
                        return // lets pretend that nothing was clicked because it already exist
                    }
                    token.placed = true;
                    this.Rebuttal(event.target.id)
                }
            }
        },

        // game will no answer player move
        Rebuttal(lastMove) {
            this.iteration++;
            //console.log (this.iteration)
            if (this.iteration === 1) {
                if (this.tokens[4].placed === false) {
                    this.tokens[4].marker = this.o;
                    this.tokens[4].placed = true;
                } else {
                    this.tokens[0].marker = this.o;
                    this.tokens[0].placed = true;
                }
            } else if (this.iteration !== 1) {
                this.CheckLastMove(lastMove)
            }else if (iteration === 3) {

            }
        },

        // check what players move could be doing
        CheckLastMove(lastMove) {
            let token = this.GetToken(lastMove)
            let row = this.GetRow(token)
            let column = this.GetColumn(token)
            let diagLtoR = this.GetDiagLtoR(token)
            let diagRtoL = this.GetDiagRtoL(token)
            let listToCheck = [row,column,diagLtoR,diagRtoL]

            let index = 0
            //console.log(listToCheck)
            while (this.computerTurn && index < listToCheck.length) {
                //console.log(index + " " + listToCheck[index])
                if (listToCheck[index] === false){
                    index++
                    continue
                } 
                //console.log(index)
                this.DefensiveMove(listToCheck[index])
                index++
            }
            if (this.computerTurn && this.gameplay) {
                this.OffensiveMove()
            }
        },

        // computer doesn't need to defend so we can place where we want
        OffensiveMove() {
            
            this.FindSpot()
        },

        // lets aim at the corners
        FindSpot(){
            let row1 = this.CheckCollection(this.row1,this.x)
            let row2 = this.CheckCollection(this.row2,this.x)
            let row3 = this.CheckCollection(this.row3,this.x)
            let col1 = this.CheckCollection(this.col1,this.x)
            let col2 = this.CheckCollection(this.col2,this.x)
            let col3 = this.CheckCollection(this.col3,this.x)
            if (this.token1.placed == false) this.ComputerPlaceToken(this.token1)
            else if (this.token3.placed == false) this.ComputerPlaceToken(this.token3)
            else if (this.token7.placed == false) this.ComputerPlaceToken(this.token7)
            else if (this.token9.placed == false) this.ComputerPlaceToken(this.token9)
            else if (this.token2.placed == false) this.ComputerPlaceToken(this.token2)
            else if (this.token6.placed == false) this.ComputerPlaceToken(this.token6)
            else if (this.token8.placed == false) this.ComputerPlaceToken(this.token8)
            else if (this.token4.placed == false) this.ComputerPlaceToken(this.token4)
            this.CheckIfWon()
        },

        ComputerPlaceToken(token){
            token.marker = this.o
            token.placed = true
            this.computerTurn = false
        },

        // if i can find a place where i can win do it
        TryToWin() {
            let allPossibilites = [this.row1,this.row2,this.row3,this.col1,this.col2,this.col3,this.diagLtoR,this.diagRtoL]
            for ( collection of allPossibilites) {
                if (this.CheckCollection(collection,this.o) === 2){
                    for (token of collection) {
                        if (token.placed == false ){
                            token.marker = this.o
                            token.placed = true
                            this.computerTurn = false
                            this.CheckIfWon()
                            return
                        }
                    }
                }
            }
        },

        // Check if computer won
        CheckIfWon() {
            let allPossibilites = [this.row1, this.row2, this.row3, this.col1, this.col2, this.col3, this.diagLtoR, this.diagRtoL]
            for (collection of allPossibilites) {
                if (this.CheckCollection(collection, this.o) === 3) {
                    // alert("I win!!!!")
                    this.message = "I WIN!! try again..."
                    this.gameplay = false
                    
                }
            }
        },

        // block player from winning
        DefensiveMove(collection) {
            //console.log(collection)
            let result = this.CheckCollection(collection, this.x)
            //console.log("here " + result)
            if (result=== 3) {
                //alert ("Your are a winner")
                this.message = "YOU WIN!!!  Double or Nothing?"
                this.gameplay = false
            } else if (result === 2) {
                this.TryToWin()
                if (this.gameplay === false) return
                this.Block(collection)
                this.CheckForTie()
            } else {
                this.CheckForTie()
            }
        },

        // Check if all boxes are covered
        CheckForTie() {
            for (token of this.tokens){
                if (token.placed === false){
                    console.log(token.name + " "  + token.placed)
                    return
                }
            }
            this.message = "TIE GAME!!! We must do battle again..."
            this.gameplay = false;
        },

        // check how many of passed in marker are in the collection
        CheckCollection(collection, marker) {
            let total = 0
            for (token of collection) {
                if (token.marker === marker && token.placed === true) total++
            }
            return total;
        },

        // block the player and end turn
        Block(collection){
            for ( token of collection) {
                if (token.placed !== true) {
                    token.marker = this.o
                    token.placed = true
                    this.computerTurn = false
                    this.CheckIfWon()
                    return
                }
            }
        },

        // get the token by name
        GetToken(name) {
            for (token of this.tokens) {
                if (token.name === name) {
                    return token
                }
            }
            alert("Error: could not find token")
        },

        // Check which row the token is in
        GetRow(token) {
            if (token.row === 1) return this.row1
            else if (token.row === 2) return this.row2
            else if (token.row === 3) return this.row3
            else alert("Error: could not find row")
        },

        // Check which column the token is in
        GetColumn(token) {
            if (token.col === 1) return this.col1
            else if (token.col === 2) return this.col2
            else if (token.col === 3) return this.col3
            else alert("Error: could not find column")
        },

        // Check if token is left to right diagonal
        GetDiagLtoR(token) {
            if (token.name === '1_1') return this.diagLtoR
            else if (token.name === '2_2' ) return this.diagLtoR
            else if (token.name === '3_3' ) return this.diagLtoR
            else return false
        },

        // Check if token is a right to left diagonal
        GetDiagRtoL(token) {
            if (token.name === '1_3') return this.diagRtoL
            else if (token.name === '2_2' ) return this.diagRtoL
            else if (token.name === '3_1' ) return this.diagRtoL
            else return false
            
        }
    },
 
    // Prep Work
    created() {
        // Lets create the structures that we will need
        this.tokens= [this.token1,this.token2,this.token3,this.token4,
            this.token5,this.token6,this.token7,this.token8,this.token9]

        this.row1 = [this.token1,this.token2,this.token3]
        this.row2 = [this.token4,this.token5,this.token6]
        this.row3 = [this.token7,this.token8,this.token9]

        this.col1 = [this.token1,this.token4,this.token7]
        this.col2 = [this.token2,this.token5,this.token8]
        this.col3 = [this.token3,this.token6,this.token9]

        this.diagLtoR = [this.token1,this.token5,this.token9]
        this.diagRtoL = [this.token3,this.token5,this.token7]
        
        //console.log("everything is ready")
    }
});
app.mount('#app')

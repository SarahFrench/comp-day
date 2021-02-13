export class Competitor {

    constructor(fullName, weightClass){
        this.name = fullName;
        this.weightClass = weightClass;
        this.squat = [];
        this.bench = [];
        this.deadlift = [];
        this.squatRackHeight = 0;
        this.benchRackHeight = 0;
    }

    getName(){
        return this.name;
    }

    getNextAttempt(event, round){
        if(this[event][round]){
            return this[event][round].attempt;
        } else {
            if(this[event][round - 1]){
                //automatically add 2.5kg to last attempt, if exists
                return this[event][round - 1].attempt + 2.5;
            } else {
                //No opener provided - TODO: validation to prevent this happening!
                return 0;
            }
        }
    }

    setNextAttempt(event, round, attempt){
       this[event][round] = (
           {
               attempt: attempt,
               goodLift: null
           }
       ) 
    }

    goodLift(event, round){
        this[event][round] = {...this[event][round], goodLift: true}
    }

    noLift(event, round){
        this[event][round] = {...this[event][round], goodLift: false}
    }

}
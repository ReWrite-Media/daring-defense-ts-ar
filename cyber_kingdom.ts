/**
* Enumeration of HoldingItem
*/
enum HoldingItem
{
     //% block="no item"
     NoItem = 0,
     //% block="sword"
     Sword = None,
     //% block="hammer"
     Hammer = 1,
     //% block="map"
     Map = 2,
     //% block="stone"
     Stone = 3,
     //% block="pickaxe"
     Pickaxe = None,
     //% block="diamond"
     Diamond = None,
     //% block="apple"
     Apple = None,
}

/**
* Enumeration of WearingHat
*/
enum WearingHat
{
     //% block="wearing nothing on head"
     NoHat = 4,
     //% block="wearing hat on head"
     Hat = 5,
}

/**
* Enumeration of WearingEyeware
*/
enum WearingEyeware
{
     //% block="no eyeware"
     NoEyeware = 6,
     //% block="eyeware"
     WearingEyeware = 7,
}

/**
* Enumeration of Legs
*/
enum Legs
{
     //% block="2 legs"
     TwoLegs = 8,
     //% block="4 legs"
     FourLegs = 9,
     //% block="Over 4 legs"
     OverFourLegs = 10,
}


namespace cyber {


    class Rule{
        x=0;
        y=0;
        z=0;
        enabled=true;

        public constructor(x: number, y: number, z: number, enabled: boolean){

        }

        public addRule(){
            blocks.place(GRASS, pos(this.x, this.y, this.z))
        }

        public removeRule(){
            blocks.place(AIR, pos(this.x, this.y, this.z))
        }
    }


    class CombinedRule extends Rule{

        public constructor(rule1: Rule, rule2: Rule){

            super(0, 0, 0, true)
        }
    }

    function setupFirewallHandler(){
        player.say("Firewall setup!")
    }
    /**
     * Firewall setup event
     */
    //% block="Create Firewall"
    //% color="#569138"
    export function setupFirewall(handler: () => void) {
        setupFirewallHandler();
    }

    /**
     * Allow all
     */
    //% block="Allow all"
    export function allowAll() {

    }

    /**
     * Deny all
     */
    //% block="Deny all"
    export function denyAll() {
        
    }

     /**
     * Add a new allow firewall rule
     */
    //% block="Add allow firewall rule $firewallRule"
    export function addAllowFirewallRule(firewallRule: Rule | CombinedRule) {
        firewallRule.addRule()
    }


    /**
     * Add a new allow firewall rule
     */
    //% block="Add deny firewall rule $firewallRule"
    export function addDenyFirewallRule(firewallRule: Rule | CombinedRule) {
        firewallRule.addRule()
    }

    /**
     * Hat rule
     */
    //% block="%hat"
    //% color="#249ca3"
    export function requireHat(hat: HasHat): Rule {
        if (hat === HasHat.Hat){
            return new Rule(10, 20, 30, true);
        } else {
            return new Rule(10, 20, 30, false);
        }
        
    }

    /**
     * Holding item rule
     */
    //% block="holding %item"
    //% color="#249ca3"
    export function requireHoldingItem(item: HoldingItem): Rule {
        if (item === HoldingItem.Map){
            return new Rule(10, 20, 30, true);
        } else if (item === HoldingItem.Stone){
            return new Rule(10, 20, 30, true);
        }
        else {
            return new Rule(10, 20, 30, false);
        }
        
    }


    /**
     * Legs between rule
     */
    //% block="number of legs between %lowerLegs and %upperLegs"
    //% color="#249ca3"
    export function requireLegs(lowerLegs: number, upperLegs: number): Rule[] {
        let rules: Rule[]
        if (lowerLegs != upperLegs){
           var lowerNum = Math.min(lowerLegs, upperLegs);
           var upperNum = Math.max(lowerLegs, upperLegs); 
        } else{
            var lowerNum = lowerLegs;
            var upperNum = lowerLegs;
        }
        if (2 >= lowerNum && 2 <= upperNum) {
            rules.push(new Rule(10, 20, 30, true));
        }
        if (4 >= lowerNum && 4 <= upperNum) {
            rules.push(new Rule(10, 20, 30, true));
        }
        if (6 >= lowerNum && 6 <= upperNum) {
            rules.push(new Rule(10, 20, 30, true));
        }
        

        return rules
        
    }


     /**
     * Eyewear rule
     */
    //% block="wearing %eyewear"
    //% color="#249ca3"
    export function requireEyewear(eyewear: WearingEyeware,): Rule {
        return new Rule(10, 20, 30, true);
        
    }


    /**
     * Combining rules
     */
    //% block="%rule1 and %rule2"
    //% color="#ff8353"
    export function ruleAnd(rule1: Rule, rule2: Rule): CombinedRule {
        return new CombinedRule(rule1, rule2);
    }



}

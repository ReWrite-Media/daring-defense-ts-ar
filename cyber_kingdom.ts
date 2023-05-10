


/**
* Enumeration of HoldingItem
*/
enum HoldingItem
{
     //% block="no item"
     NoItem = 0,
     //% block="sword"
     Sword = -1,
     //% block="hammer"
     Hammer = 1,
     //% block="map"
     Map = 2,
     //% block="stone"
     Stone = 3,
     //% block="pickaxe"
     Pickaxe = -1,
     //% block="diamond"
     Diamond = -1,
     //% block="apple"
     Apple = -1,
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
     //% block="2"
     TwoLegs = 8,
     //% block="4"
     FourLegs = 9,
     //% block="Over 4"
     OverFourLegs = 10,
}


namespace cyber {


    class Rule{
        x=0;
        y=0;
        z=0;
        enabled=true;

        public constructor(x: number, y: number, z: number, enabled: boolean){
            this.x = x;
            this.y = y;
            this.z = z;
            this.enabled = enabled;
        }

        public addRule(): void {
            blocks.place(STONE, pos(this.x, this.y, this.z))
        }

        public removeRule(): void {
            blocks.place(AIR, pos(this.x, this.y, this.z))
        }
    }


    class CombinedRule extends Rule{
        rule1: Rule;
        rule2: Rule;

        public constructor(rule1: Rule, rule2: Rule){

            super(0, 0, 0, true);
            this.rule1 = rule1;
            this.rule2 = rule2;

        }

        public addRule(): void {
            blocks[`${this.rule1}-${this.rule2}`].addRule()
        }

        public removeRule(): void {
            blocks[`${this.rule1}-${this.rule2}`].removeRule()
        }
    }

    let blocks: {[key: string]: Rule} = {};
blocks[-1] = new Rule(34, 64, -24, true);
blocks[0] = new Rule(35, 64, -24, true);
blocks[1] = new Rule(36, 64, -24, true);
blocks[2] = new Rule(37, 64, -24, true);
blocks[3] = new Rule(38, 64, -24, true);
blocks[4] = new Rule(39, 64, -24, true);
blocks[5] = new Rule(40, 64, -24, true);
blocks[6] = new Rule(41, 64, -24, true);
blocks[7] = new Rule(42, 64, -24, true);
blocks[8] = new Rule(43, 64, -24, true);
blocks[9] = new Rule(44, 64, -24, true);
blocks[10] = new Rule(45, 64, -24, true);
blocks[1-0] = new Rule(35, 64, -18, true);
blocks[2-0] = new Rule(35, 64, -17, true);
blocks[3-0] = new Rule(35, 64, -16, true);
blocks[4-0] = new Rule(35, 64, -15, true);
blocks[5-0] = new Rule(35, 64, -14, true);
blocks[6-0] = new Rule(35, 64, -13, true);
blocks[7-0] = new Rule(35, 64, -12, true);
blocks[8-0] = new Rule(35, 64, -11, true);
blocks[9-0] = new Rule(35, 64, -10, true);
blocks[10-0] = new Rule(35, 64, -9, true);
blocks[2-1] = new Rule(36, 64, -17, true);
blocks[3-1] = new Rule(36, 64, -16, true);
blocks[4-1] = new Rule(36, 64, -15, true);
blocks[5-1] = new Rule(36, 64, -14, true);
blocks[6-1] = new Rule(36, 64, -13, true);
blocks[7-1] = new Rule(36, 64, -12, true);
blocks[8-1] = new Rule(36, 64, -11, true);
blocks[9-1] = new Rule(36, 64, -10, true);
blocks[10-1] = new Rule(36, 64, -9, true);
blocks[3-2] = new Rule(37, 64, -16, true);
blocks[4-2] = new Rule(37, 64, -15, true);
blocks[5-2] = new Rule(37, 64, -14, true);
blocks[6-2] = new Rule(37, 64, -13, true);
blocks[7-2] = new Rule(37, 64, -12, true);
blocks[8-2] = new Rule(37, 64, -11, true);
blocks[9-2] = new Rule(37, 64, -10, true);
blocks[10-2] = new Rule(37, 64, -9, true);
blocks[4-3] = new Rule(38, 64, -15, true);
blocks[5-3] = new Rule(38, 64, -14, true);
blocks[6-3] = new Rule(38, 64, -13, true);
blocks[7-3] = new Rule(38, 64, -12, true);
blocks[8-3] = new Rule(38, 64, -11, true);
blocks[9-3] = new Rule(38, 64, -10, true);
blocks[10-3] = new Rule(38, 64, -9, true);
blocks[5-4] = new Rule(39, 64, -14, true);
blocks[6-4] = new Rule(39, 64, -13, true);
blocks[7-4] = new Rule(39, 64, -12, true);
blocks[8-4] = new Rule(39, 64, -11, true);
blocks[9-4] = new Rule(39, 64, -10, true);
blocks[10-4] = new Rule(39, 64, -9, true);
blocks[6-5] = new Rule(40, 64, -13, true);
blocks[7-5] = new Rule(40, 64, -12, true);
blocks[8-5] = new Rule(40, 64, -11, true);
blocks[9-5] = new Rule(40, 64, -10, true);
blocks[10-5] = new Rule(40, 64, -9, true);
blocks[7-6] = new Rule(41, 64, -12, true);
blocks[8-6] = new Rule(41, 64, -11, true);
blocks[9-6] = new Rule(41, 64, -10, true);
blocks[10-6] = new Rule(41, 64, -9, true);
blocks[8-7] = new Rule(42, 64, -11, true);
blocks[9-7] = new Rule(42, 64, -10, true);
blocks[10-7] = new Rule(42, 64, -9, true);
blocks[9-8] = new Rule(43, 64, -10, true);
blocks[10-8] = new Rule(43, 64, -9, true);
blocks[10-9] = new Rule(44, 64, -9, true);


    function setupFirewallHandler(){
        player.say("Firewall setup!")
    }
    /**
     * Firewall setup event
     */
    //% block="Create Firewall"
    //% color="#569138" weight=100
    export function setupFirewall(handler: () => void) {
        setupFirewallHandler();
    }

    /**
     * Allow all
     */
    //% block="Allow all" weight=95
    export function allowAll() {
        for (let block_key in blocks) {
            blocks[block_key].addRule()
        }
    }

    /**
     * Deny all
     */
    //% block="Deny all" weight=90
    export function denyAll() {
        for (let block_key in blocks) {
            blocks[block_key].removeRule()
        }
    }

     /**
     * Add a new allow firewall rule
     */
    //% block="Add allow firewall rule $firewallRule" weight=85
    export function addAllowFirewallRule(firewallRule: Rule | CombinedRule) {
        firewallRule.addRule()
    }


    /**
     * Add a new allow firewall rule
     */
    //% block="Add deny firewall rule $firewallRule" weight=85
    export function addDenyFirewallRule(firewallRule: Rule | CombinedRule) {
        firewallRule.addRule()
    }

    /**
     * Hat rule
     */
    //% block="%hat"
    //% color="#249ca3" weight=80
    export function requireHat(hat: WearingHat): Rule {
        return blocks[hat];
    }

    /**
     * Holding item rule
     */
    //% block="holding %item"
    //% color="#249ca3" weight=80
    export function requireHoldingItem(item: HoldingItem): Rule {
        return blocks[item];
        
    }


    /**
     * Legs between rule
     */
    //% block="has %legNum legs"
    //% color="#249ca3" weight=80
    export function requireLegs(legNum: Legs): Rule {
        return blocks[legNum];
    }


     /**
     * Eyewear rule
     */
    //% block="wearing %eyewear"
    //% color="#249ca3" weight=80
    export function requireEyewear(eyewear: WearingEyeware,): Rule {
        return blocks[eyewear];
        
    }


    /**
     * Combining rules
     */
    //% block="%rule1 and %rule2"
    //% color="#ff8353" weight=81
    export function ruleAnd(rule1: Rule, rule2: Rule): CombinedRule {
        return new CombinedRule(rule1, rule2);
    }

    

}

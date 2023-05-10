


/**
* Enumeration of HoldingItem
*/
enum HoldingItem {
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
enum WearingHat {
    //% block="wearing nothing on head"
    NoHat = 4,
    //% block="wearing hat on head"
    Hat = 5,
}

/**
* Enumeration of WearingEyeware
*/
enum WearingEyeware {
    //% block="no eyeware"
    NoEyeware = 6,
    //% block="eyeware"
    WearingEyeware = 7,
}

/**
* Enumeration of Legs
*/
enum Legs {
    //% block="2"
    TwoLegs = 8,
    //% block="4"
    FourLegs = 9,
    //% block="Over 4"
    OverFourLegs = 10,
}


namespace cyber {


    class Rule {
        x = 0;
        y = 0;
        z = 0;
        enabled = true;
        rule_id = ""

        public constructor(x: number, y: number, z: number, enabled: boolean, rule_id: string) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.enabled = enabled;
            this.rule_id = rule_id
        }

        public addRule(): void {
            player.say(`Placing blocks at ${this.x} ${this.y} ${this.z}`)
            blocks.place(STONE, world(this.x, this.y, this.z))
        }

        public removeRule(): void {
            blocks.place(AIR, world(this.x, this.y, this.z))
        }
    }


    class CombinedRule extends Rule {
        rule1: Rule;
        rule2: Rule;

        public constructor(rule1: Rule, rule2: Rule) {

            super(0, 0, 0, true, "-1");
            this.rule1 = rule1;
            this.rule2 = rule2;

        }

        public addRule(): void {
            if (this.rule1.enabled && this.rule2.enabled){
                blocks_rules[`${this.rule1.rule_id}-${this.rule2.rule_id}`].addRule()
            }
        }

        public removeRule(): void {
            if (this.rule1.enabled && this.rule2.enabled){
                blocks_rules[`${this.rule1.rule_id}-${this.rule2.rule_id}`].removeRule()
            }
        }
    }

    let blocks_rules: {[key: string]: Rule} = {};
    blocks_rules["-1"] = new Rule(33, 64, -24, false, "0" );
    blocks_rules["0"] = new Rule(35, 64, -24, true, "0");
    blocks_rules["1"] = new Rule(36, 64, -24, true, "1");
    blocks_rules["2"] = new Rule(37, 64, -24, true, "2");
    blocks_rules["3"] = new Rule(38, 64, -24, true, "3");
    blocks_rules["4"] = new Rule(39, 64, -24, true, "4");
    blocks_rules["5"] = new Rule(40, 64, -24, true, "5");
    blocks_rules["6"] = new Rule(41, 64, -24, true, "6");
    blocks_rules["7"] = new Rule(42, 64, -24, true, "7");
    blocks_rules["8"] = new Rule(43, 64, -24, true, "8");
    blocks_rules["9"] = new Rule(44, 64, -24, true, "9");
    blocks_rules["10"] = new Rule(45, 64, -24, true, "10");
    blocks_rules["1-0"] = new Rule(35, 64, -18, true, "1-0");
    blocks_rules["2-0"] = new Rule(35, 64, -17, true, "2-0");
    blocks_rules["3-0"] = new Rule(35, 64, -16, true, "3-0");
    blocks_rules["4-0"] = new Rule(35, 64, -15, true, "4-0");
    blocks_rules["5-0"] = new Rule(35, 64, -14, true, "5-0");
    blocks_rules["6-0"] = new Rule(35, 64, -13, true, "6-0");
    blocks_rules["7-0"] = new Rule(35, 64, -12, true, "7-0");
    blocks_rules["8-0"] = new Rule(35, 64, -11, true, "8-0");
    blocks_rules["9-0"] = new Rule(35, 64, -10, true, "9-0");
    blocks_rules["10-0"] = new Rule(35, 64, -9, true, "10-0");
    blocks_rules["2-1"] = new Rule(36, 64, -17, true, "2-1");
    blocks_rules["3-1"] = new Rule(36, 64, -16, true, "3-1");
    blocks_rules["4-1"] = new Rule(36, 64, -15, true, "4-1");
    blocks_rules["5-1"] = new Rule(36, 64, -14, true, "5-1");
    blocks_rules["6-1"] = new Rule(36, 64, -13, true, "6-1");
    blocks_rules["7-1"] = new Rule(36, 64, -12, true, "7-1");
    blocks_rules["8-1"] = new Rule(36, 64, -11, true, "8-1");
    blocks_rules["9-1"] = new Rule(36, 64, -10, true, "9-1");
    blocks_rules["10-1"] = new Rule(36, 64, -9, true, "10-1");
    blocks_rules["3-2"] = new Rule(37, 64, -16, true, "3-2");
    blocks_rules["4-2"] = new Rule(37, 64, -15, true, "4-2");
    blocks_rules["5-2"] = new Rule(37, 64, -14, true, "5-2");
    blocks_rules["6-2"] = new Rule(37, 64, -13, true, "6-2");
    blocks_rules["7-2"] = new Rule(37, 64, -12, true, "7-2");
    blocks_rules["8-2"] = new Rule(37, 64, -11, true, "8-2");
    blocks_rules["9-2"] = new Rule(37, 64, -10, true, "9-2");
    blocks_rules["10-2"] = new Rule(37, 64, -9, true, "10-2");
    blocks_rules["4-3"] = new Rule(38, 64, -15, true, "4-3");
    blocks_rules["5-3"] = new Rule(38, 64, -14, true, "5-3");
    blocks_rules["6-3"] = new Rule(38, 64, -13, true, "6-3");
    blocks_rules["7-3"] = new Rule(38, 64, -12, true, "7-3");
    blocks_rules["8-3"] = new Rule(38, 64, -11, true, "8-3");
    blocks_rules["9-3"] = new Rule(38, 64, -10, true, "9-3");
    blocks_rules["10-3"] = new Rule(38, 64, -9, true, "10-3");
    blocks_rules["5-4"] = new Rule(39, 64, -14, true, "5-4");
    blocks_rules["6-4"] = new Rule(39, 64, -13, true, "6-4");
    blocks_rules["7-4"] = new Rule(39, 64, -12, true, "7-4");
    blocks_rules["8-4"] = new Rule(39, 64, -11, true, "8-4");
    blocks_rules["9-4"] = new Rule(39, 64, -10, true, "9-4");
    blocks_rules["10-4"] = new Rule(39, 64, -9, true, "10-4");
    blocks_rules["6-5"] = new Rule(40, 64, -13, true, "6-5");
    blocks_rules["7-5"] = new Rule(40, 64, -12, true, "7-5");
    blocks_rules["8-5"] = new Rule(40, 64, -11, true, "8-5");
    blocks_rules["9-5"] = new Rule(40, 64, -10, true, "9-5");
    blocks_rules["10-5"] = new Rule(40, 64, -9, true, "10-5");
    blocks_rules["7-6"] = new Rule(41, 64, -12, true, "7-6");
    blocks_rules["8-6"] = new Rule(41, 64, -11, true, "8-6");
    blocks_rules["9-6"] = new Rule(41, 64, -10, true, "9-6");
    blocks_rules["10-6"] = new Rule(41, 64, -9, true, "10-6");
    blocks_rules["8-7"] = new Rule(42, 64, -11, true, "8-7");
    blocks_rules["9-7"] = new Rule(42, 64, -10, true, "9-7");
    blocks_rules["10-7"] = new Rule(42, 64, -9, true, "10-7");
    blocks_rules["9-8"] = new Rule(43, 64, -10, true, "9-8");
    blocks_rules["10-8"] = new Rule(43, 64, -9, true, "10-8");
    blocks_rules["10-9"] = new Rule(44, 64, -9, true, "10-9");
    
    let AllowAllRule = new Rule(35, 64, -29, true, "-1")
    let DenyAllRule = new Rule(35, 64, -30, true, "-1")

    function setupFirewallHandler() {
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
        AllowAllRule.addRule()
        //for (let block_key of Object.keys(blocks_rules)) {
        //    blocks_rules[block_key].addRule()
        //}
    }

    /**
     * Deny all
     */
    //% block="Deny all" weight=90
    export function denyAll() {
        DenyAllRule.addRule()
        //for (let block_key of Object.keys(blocks_rules)) {
        //    blocks_rules[block_key].removeRule()
        //}
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
        firewallRule.removeRule()
    }

    /**
     * Hat rule
     */
    //% block="%hat"
    //% color="#249ca3" weight=80
    export function requireHat(hat: WearingHat): Rule {
        return blocks_rules[hat];
    }

    /**
     * Holding item rule
     */
    //% block="holding %item"
    //% color="#249ca3" weight=80
    export function requireHoldingItem(item: HoldingItem): Rule {
        return blocks_rules[item];

    }


    /**
     * Legs between rule
     */
    //% block="has %legNum legs"
    //% color="#249ca3" weight=80
    export function requireLegs(legNum: Legs): Rule {
        return blocks_rules[legNum];
    }


    /**
    * Eyewear rule
    */
    //% block="wearing %eyewear"
    //% color="#249ca3" weight=80
    export function requireEyewear(eyewear: WearingEyeware,): Rule {
        return blocks_rules[eyewear.toString()];

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

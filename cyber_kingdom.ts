


/**
* Enumeration of HoldingItem
*/
enum HoldingItem
{
     //% block="لا شيء"
     NoItem = 0,
     //% block="فأس"
     Pickaxe = 1,
     //% block="خريطة"
     Map = 2,
     //% block="سيف"
     Sword = 3,
     //% block="حجر"
     Stone = -1,
     //% block="مطرقة"
     Hammer = -1,
     //% block="ألماس"
     Diamond = -1,
     //% block="تفاحة"
     Apple = -1,
}

/**
* Enumeration of WearingHat
*/
enum WearingHat
{
     //% block="لا يرتدي شيئًا على الرأس"
     NoHat = 4,
     //% block="يرتدي قبعة على الرأس"
     Hat = 5,
}

/**
* Enumeration of WearingEyeware
*/
enum WearingEyeware
{
     //% block="بدون نظارات"
     NoEyeware = 6,
     //% block="نظارات شمسية"
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
     //% block="أكثر من"
     OverFourLegs = 10,
}

/**
* Enumeration of CrestSymbol
*/
enum CrestSymbol
{
     //% block="شعار غير معروف"
     UnknownCrest = 11,
     //% block="شعار ملكي"
     RoyalCrest = 12,
     //% block="شعار العدو"
     EnemyCrest = 13,
     //% block="لا يوجد شعار"
     NoCrest = 14,
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
            //player.say(`Placing blocks at ${this.x} ${this.y} ${this.z}`)
            loops.pause(200);
            blocks.place(STONE, world(this.x, this.y, this.z))
        }

        public removeRule(): void {
            loops.pause(200);
            blocks.place(AIR, world(this.x, this.y, this.z))
        }
    }


    class CombinedRule extends Rule {
        rule1: Rule;
        rule2: Rule;

        public constructor(rule1: Rule, rule2: Rule) {

            super(0, 0, 0, true, "-1");
            if (parseInt(rule1.rule_id) > parseInt(rule2.rule_id)) {
                this.rule2 = rule2;
                this.rule1 = rule1;
              } else if (parseInt(rule1.rule_id) < parseInt(rule2.rule_id)) {
                this.rule1 = rule2;
                this.rule2 = rule1;
              } else {
                // If both rules are the same
                this.rule1 = rule1;
                this.rule1 = rule1;
              }

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

    class SymbolGrid{
        gridText: String
        public constructor(gridText: String){
            this.gridText = gridText;
        }
    }

    let blocks_rules: {[key: string]: Rule} = {};
    blocks_rules["-1"] = new Rule(33, 64, -24, true, "0" );
    blocks_rules["0"] = new Rule(35, 64, -24, true, "0");
    blocks_rules["0-0"] = new Rule(35, 64, -24, true, "0");
    blocks_rules["1"] = new Rule(36, 64, -24, true, "1");
    blocks_rules["1-1"] = new Rule(36, 64, -24, true, "1");
    blocks_rules["2"] = new Rule(37, 64, -24, true, "2");
    blocks_rules["2-2"] = new Rule(37, 64, -24, true, "2");
    blocks_rules["3"] = new Rule(38, 64, -24, true, "3");
    blocks_rules["3-3"] = new Rule(38, 64, -24, true, "3");
    blocks_rules["4"] = new Rule(39, 64, -24, true, "4");
    blocks_rules["4-4"] = new Rule(39, 64, -24, true, "4");
    blocks_rules["5"] = new Rule(40, 64, -24, true, "5");
    blocks_rules["5-5"] = new Rule(40, 64, -24, true, "5");
    blocks_rules["6"] = new Rule(41, 64, -24, true, "6");
    blocks_rules["6-6"] = new Rule(41, 64, -24, true, "6");
    blocks_rules["7"] = new Rule(42, 64, -24, true, "7");
    blocks_rules["7-7"] = new Rule(42, 64, -24, true, "7");
    blocks_rules["8"] = new Rule(43, 64, -24, true, "8");
    blocks_rules["8-8"] = new Rule(43, 64, -24, true, "8");
    blocks_rules["9"] = new Rule(44, 64, -24, true, "9");
    blocks_rules["9-9"] = new Rule(44, 64, -24, true, "9");
    blocks_rules["10"] = new Rule(45, 64, -24, true, "10");
    blocks_rules["10-10"] = new Rule(45, 64, -24, true, "10");
    blocks_rules["11"] = new Rule(46, 64, -24, true, "11");
    blocks_rules["11-11"] = new Rule(46, 64, -24, true, "11");
    blocks_rules["12"] = new Rule(47, 64, -24, true, "12");
    blocks_rules["12-12"] = new Rule(47, 64, -24, true, "12");
    blocks_rules["13"] = new Rule(48, 64, -24, true, "13");
    blocks_rules["13-13"] = new Rule(48, 64, -24, true, "13");
    blocks_rules["14"] = new Rule(49, 64, -24, true, "14");
    blocks_rules["14-14"] = new Rule(49, 64, -24, true, "14");
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
    blocks_rules["11-0"] = new Rule(35, 64, -8, true, "11-0");
    blocks_rules["12-0"] = new Rule(35, 64, -7, true, "12-0");
    blocks_rules["13-0"] = new Rule(35, 64, -6, true, "13-0");
    blocks_rules["14-0"] = new Rule(35, 64, -5, true, "14-0");
    blocks_rules["2-1"] = new Rule(36, 64, -17, true, "2-1");
    blocks_rules["3-1"] = new Rule(36, 64, -16, true, "3-1");
    blocks_rules["4-1"] = new Rule(36, 64, -15, true, "4-1");
    blocks_rules["5-1"] = new Rule(36, 64, -14, true, "5-1");
    blocks_rules["6-1"] = new Rule(36, 64, -13, true, "6-1");
    blocks_rules["7-1"] = new Rule(36, 64, -12, true, "7-1");
    blocks_rules["8-1"] = new Rule(36, 64, -11, true, "8-1");
    blocks_rules["9-1"] = new Rule(36, 64, -10, true, "9-1");
    blocks_rules["10-1"] = new Rule(36, 64, -9, true, "10-1");
    blocks_rules["11-1"] = new Rule(36, 64, -8, true, "11-1");
    blocks_rules["12-1"] = new Rule(36, 64, -7, true, "12-1");
    blocks_rules["13-1"] = new Rule(36, 64, -6, true, "13-1");
    blocks_rules["14-1"] = new Rule(36, 64, -5, true, "14-1");
    blocks_rules["3-2"] = new Rule(37, 64, -16, true, "3-2");
    blocks_rules["4-2"] = new Rule(37, 64, -15, true, "4-2");
    blocks_rules["5-2"] = new Rule(37, 64, -14, true, "5-2");
    blocks_rules["6-2"] = new Rule(37, 64, -13, true, "6-2");
    blocks_rules["7-2"] = new Rule(37, 64, -12, true, "7-2");
    blocks_rules["8-2"] = new Rule(37, 64, -11, true, "8-2");
    blocks_rules["9-2"] = new Rule(37, 64, -10, true, "9-2");
    blocks_rules["10-2"] = new Rule(37, 64, -9, true, "10-2");
    blocks_rules["11-2"] = new Rule(37, 64, -8, true, "11-2");
    blocks_rules["12-2"] = new Rule(37, 64, -7, true, "12-2");
    blocks_rules["13-2"] = new Rule(37, 64, -6, true, "13-2");
    blocks_rules["14-2"] = new Rule(37, 64, -5, true, "14-2");
    blocks_rules["4-3"] = new Rule(38, 64, -15, true, "4-3");
    blocks_rules["5-3"] = new Rule(38, 64, -14, true, "5-3");
    blocks_rules["6-3"] = new Rule(38, 64, -13, true, "6-3");
    blocks_rules["7-3"] = new Rule(38, 64, -12, true, "7-3");
    blocks_rules["8-3"] = new Rule(38, 64, -11, true, "8-3");
    blocks_rules["9-3"] = new Rule(38, 64, -10, true, "9-3");
    blocks_rules["10-3"] = new Rule(38, 64, -9, true, "10-3");
    blocks_rules["11-3"] = new Rule(38, 64, -8, true, "11-3");
    blocks_rules["12-3"] = new Rule(38, 64, -7, true, "12-3");
    blocks_rules["13-3"] = new Rule(38, 64, -6, true, "13-3");
    blocks_rules["14-3"] = new Rule(38, 64, -5, true, "14-3");
    blocks_rules["5-4"] = new Rule(39, 64, -14, true, "5-4");
    blocks_rules["6-4"] = new Rule(39, 64, -13, true, "6-4");
    blocks_rules["7-4"] = new Rule(39, 64, -12, true, "7-4");
    blocks_rules["8-4"] = new Rule(39, 64, -11, true, "8-4");
    blocks_rules["9-4"] = new Rule(39, 64, -10, true, "9-4");
    blocks_rules["10-4"] = new Rule(39, 64, -9, true, "10-4");
    blocks_rules["11-4"] = new Rule(39, 64, -8, true, "11-4");
    blocks_rules["12-4"] = new Rule(39, 64, -7, true, "12-4");
    blocks_rules["13-4"] = new Rule(39, 64, -6, true, "13-4");
    blocks_rules["14-4"] = new Rule(39, 64, -5, true, "14-4");
    blocks_rules["6-5"] = new Rule(40, 64, -13, true, "6-5");
    blocks_rules["7-5"] = new Rule(40, 64, -12, true, "7-5");
    blocks_rules["8-5"] = new Rule(40, 64, -11, true, "8-5");
    blocks_rules["9-5"] = new Rule(40, 64, -10, true, "9-5");
    blocks_rules["10-5"] = new Rule(40, 64, -9, true, "10-5");
    blocks_rules["11-5"] = new Rule(40, 64, -8, true, "11-5");
    blocks_rules["12-5"] = new Rule(40, 64, -7, true, "12-5");
    blocks_rules["13-5"] = new Rule(40, 64, -6, true, "13-5");
    blocks_rules["14-5"] = new Rule(40, 64, -5, true, "14-5");
    blocks_rules["7-6"] = new Rule(41, 64, -12, true, "7-6");
    blocks_rules["8-6"] = new Rule(41, 64, -11, true, "8-6");
    blocks_rules["9-6"] = new Rule(41, 64, -10, true, "9-6");
    blocks_rules["10-6"] = new Rule(41, 64, -9, true, "10-6");
    blocks_rules["11-6"] = new Rule(41, 64, -8, true, "11-6");
    blocks_rules["12-6"] = new Rule(41, 64, -7, true, "12-6");
    blocks_rules["13-6"] = new Rule(41, 64, -6, true, "13-6");
    blocks_rules["14-6"] = new Rule(41, 64, -5, true, "14-6");
    blocks_rules["8-7"] = new Rule(42, 64, -11, true, "8-7");
    blocks_rules["9-7"] = new Rule(42, 64, -10, true, "9-7");
    blocks_rules["10-7"] = new Rule(42, 64, -9, true, "10-7");
    blocks_rules["11-7"] = new Rule(42, 64, -8, true, "11-7");
    blocks_rules["12-7"] = new Rule(42, 64, -7, true, "12-7");
    blocks_rules["13-7"] = new Rule(42, 64, -6, true, "13-7");
    blocks_rules["14-7"] = new Rule(42, 64, -5, true, "14-7");
    blocks_rules["9-8"] = new Rule(43, 64, -10, true, "9-8");
    blocks_rules["10-8"] = new Rule(43, 64, -9, true, "10-8");
    blocks_rules["11-8"] = new Rule(43, 64, -8, true, "11-8");
    blocks_rules["12-8"] = new Rule(43, 64, -7, true, "12-8");
    blocks_rules["13-8"] = new Rule(43, 64, -6, true, "13-8");
    blocks_rules["14-8"] = new Rule(43, 64, -5, true, "14-8");
    blocks_rules["10-9"] = new Rule(44, 64, -9, true, "10-9");
    blocks_rules["11-9"] = new Rule(44, 64, -8, true, "11-9");
    blocks_rules["12-9"] = new Rule(44, 64, -7, true, "12-9");
    blocks_rules["13-9"] = new Rule(44, 64, -6, true, "13-9");
    blocks_rules["14-9"] = new Rule(44, 64, -5, true, "14-9");
    blocks_rules["11-10"] = new Rule(45, 64, -8, true, "11-10");
    blocks_rules["12-10"] = new Rule(45, 64, -7, true, "12-10");
    blocks_rules["13-10"] = new Rule(45, 64, -6, true, "13-10");
    blocks_rules["14-10"] = new Rule(45, 64, -5, true, "14-10");
    blocks_rules["12-11"] = new Rule(46, 64, -7, true, "12-11");
    blocks_rules["13-11"] = new Rule(46, 64, -6, true, "13-11");
    blocks_rules["14-11"] = new Rule(46, 64, -5, true, "14-11");
    blocks_rules["13-12"] = new Rule(47, 64, -6, true, "13-12");
    blocks_rules["14-12"] = new Rule(47, 64, -5, true, "14-12");
    blocks_rules["14-13"] = new Rule(48, 64, -5, true, "14-13");
    
    let AllowAllRule = new Rule(35, 64, -29, true, "-1")
    let DenyAllRule = new Rule(35, 64, -30, true, "-1")

    let FirewallSetupDoneRule = new Rule(37, 64, -29, true, "-1")
    let FirewallSetupStartingRule = new Rule(39, 64, -29, true, "-1")


    function setupFirewallHandler() {
        FirewallSetupStartingRule.addRule()
        //player.say("Firewall setup!")
    }

    function firewallSetupComplete(){
        // Run once the firewall is complete placing its rule blocks
        FirewallSetupDoneRule.addRule()
    }
    /**
     * Firewall setup event
     */
    //% block="إعدادات جدار الحماية"
    //% color="#569138" weight=100
    export function setupFirewall(handler: () => void) {
        setupFirewallHandler();
        loops.pause(500)
        handler();
        firewallSetupComplete();
    }

    /**
     * Allow all
     */
    //% block="السماح للجميع" weight=95
    export function allowAll() {
        AllowAllRule.addRule()
        //for (let block_key of Object.keys(blocks_rules)) {
        //    blocks_rules[block_key].addRule()
        //}
    }

    /**
     * Deny all
     */
    //% block="رفض الجميع" weight=90
    export function denyAll() {
        DenyAllRule.addRule()
        //for (let block_key of Object.keys(blocks_rules)) {
        //    blocks_rules[block_key].removeRule()
        //}
    }

    /**
    * Add a new allow firewall rule
    */
    //% block="إضافة قاعدة سماح  إلى جدار الحماية $firewallRule" weight=85
    export function addAllowFirewallRule(firewallRule: Rule | CombinedRule) {
        firewallRule.addRule()
    }


    /**
     * Add a new allow firewall rule
     */
    //% block="إضافة قاعدة رفض  إلى جدار الحماية $firewallRule" weight=85
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
    //% block="يحمل %item"
    //% color="#249ca3" weight=80
    export function requireHoldingItem(item: HoldingItem): Rule {
        return blocks_rules[item];

    }


    /**
     * Legs between rule
     */
    //% block="لديه %legNum أرجل"
    //% color="#249ca3" weight=80
    export function requireLegs(legNum: Legs): Rule {
        return blocks_rules[legNum];
    }


    /**
    * Eyewear rule
    */
    //% block="يرتدي %eyewear"
    //% color="#249ca3" weight=80
    export function requireEyewear(eyewear: WearingEyeware,): Rule {
        return blocks_rules[eyewear.toString()];

    }


    /**
     * Combining rules
     */
    //% block="%rule1 و %rule2"
    //% color="#ff8353" weight=81
    export function ruleAnd(rule1: Rule, rule2: Rule): CombinedRule {
        return new CombinedRule(rule1, rule2);
    }

    //% weight=75
    //% blockId=buildagrid 
    //% block="الشعار"
    //% imageLiteralColumns=5
    //% imageLiteralRows=5
    //% gridLiteral=1
    export function createGridString(grid: string) {
        return new SymbolGrid(grid);
    }

    /**
    * Guard Crest
    */
    //% block="يحمل شعار %grid"
    //% color="#249ca3" weight=80
    //% grid.shadow="buildagrid"
    export function requireCrest(grid: SymbolGrid,): Rule {
        if (grid.gridText === `
    # . . . #
    . # . # .
    . . # . .
    . # # # .
    # . # . #
    ` || grid.gridText === `
    . # # # .
    # . . . #
    # # . # #
    # . . . #
    . # . # .
    `){     
            //player.say("Royal crest added")
            return blocks_rules[CrestSymbol.RoyalCrest.toString()];
        }
        else if (grid.gridText === `
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        # . . . #
        ` || grid.gridText === `
        # # . # #
        # . # . #
        . # . # .
        # . # . #
        . # # # .
        `){ 
            //player.say("Enemy crest added")
            return blocks_rules[CrestSymbol.EnemyCrest.toString()];
        }
        else{
            //player.say("Unknown crest")
            return blocks_rules[CrestSymbol.UnknownCrest.toString()];
        }

    }

}

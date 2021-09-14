/**
 * Custom blocks
 */
 namespace agent {
    /**
     * Have the agent drop fish sequentially and not in bulk
     * @param direction the direction the will to drop the fish
     * @param slot the slot in the agent's inventory to drop from
     * @param quantity the number of items to drop
     */
    //% block="agent drop items one at a time $direction from slot $slot quantity $quantity" blockId=agentdropfish
    //% groups=['Actions']
    export function dropItems(direction: SixDirection, slot: number, quantity: number) {
        let count = agent.getItemCount(slot);
        if(quantity < count) {
            count = quantity;
        }
        for(let i = 0; i < count; i++) {
            agent.drop(direction, slot, 1);
            loops.pause(100);
        }
    }
}

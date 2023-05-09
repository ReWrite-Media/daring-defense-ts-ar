/**
 * Custom blocks
 */
namespace agent {
    /**
     * Have the agent drop all inventory sequentially in a specific direction
     * @param direction the direction the will to drop the item
     */
    //% block="agent drop all items one at a time $direction" blockId=agentdropallitemsindividually
    export function dropAllItemsIndividually(direction: SixDirection) {
        for (let slot = 1; slot <= 27 ; slot++) {
            let count = agent.getItemCount(slot);
            for(let i = 0; i < count; i++) {
                agent.drop(direction, slot, 1);
                loops.pause(100);
            }
        }
    }
}

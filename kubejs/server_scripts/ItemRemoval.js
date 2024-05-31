var extraRecipesToRemove = [
    'aquaculture:iron_nugget_from_smelting',
    'farmersdelight:iron_nugget_from_smelting_knife',
    'aquaculture:gold_nugget_from_smelting',
    'farmersdelight:gold_nugget_from_smelting_knife',
    'create:smelting/iron_ingot_from_crushed',
    'create:smelting/copper_ingot_from_crushed',
    'create:smelting/gold_ingot_from_crushed',
    'aquaculture:neptunium_ingot_from_blasting',
    'aquaculture:iron_nugget_from_blasting',
    'farmersdelight:iron_nugget_from_blasting_knife',
    'aquaculture:gold_nugget_from_blasting',
    'farmersdelight:gold_nugget_from_blasting_knife',
    'create:blasting/iron_ingot_from_crushed',
    'create:blasting/copper_ingot_from_crushed',
    'create:blasting/gold_ingot_from_crushed',
    'aquaculture:steam_boiler/wooden_fillet_knife',
    'aquaculture:large_boiler/wooden_fillet_knife',
    'create:splashing/crushed_raw_gold',
    'create:splashing/crushed_raw_copper',
    'create:splashing/crushed_raw_iron',
    /gtceu:(macerator|arc_furnace)(.*)solar_boiler/,
    /gtceu:(macerator|arc_furnace)(.*)macerator/
]

var recpiesToReplace = [
    {removedItem: "ad_astra:steel_rod", replacement: '#forge:rods/steel'},
    {removedItem: "ad_astra:iron_rod", replacement: '#forge:rods/iron'},
    {removedItem: "create:iron_sheet", replacement: '#forge:plates/iron'},
    {removedItem: "create:electron_tube", replacement: '#gtceu:circuits/ulv'},
    {removedItem: "create:sturdy_sheet", replacement: '#forge:plates/obsidian'},
    {removedItem: "create:brass_sheet", replacement: '#forge:plates/brass'},
    {removedItem: "create:brass_ingot", replacement: '#forge:plates/brass'},
    {removedItem: "gtceu:lp_steam_macerator", replacement: 'greate:andesite_alloy_millstone'},
    {removedItem: "create:dough", replacement: 'farmersdelight:wheat_dough'},
    {removedItem: "gtceu:iv_macerator", replacement: 'greate:tungsten_steel_millstone'}
]

//priority: 1
ServerEvents.tags('item', event => {
    for (const item of global.ItemsToRemove) {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
	}
})

ServerEvents.tags('block', event => {
    for(const item of global.ItemsToRemove) {
        event.removeAllTagsFrom(item)
    }
})

ServerEvents.recipes(event => {
    // Remove the recipes for removed items, and replace them in inputs as Removed Item Placeholders
	for (const item of global.ItemsToRemove) {
        event.remove({ output: item })
        // Expand tags and RegExps into individual items to more easily identify what was removed
        global.Util.forEachItemExpanded(item, itemId => {
            event.replaceInput(
                { input: itemId },
                itemId,
                Item.of('kubejs:removed_item_placeholder', '{Removed: "' + itemId + '"}').strongNBT()
            )
        })
    }

    extraRecipesToRemove.forEach(recipe => {
        event.remove({id: recipe})
    })

    recpiesToReplace.forEach(recipe => {
        var item = Item.of('kubejs:removed_item_placeholder', `{Removed:"${recipe.removedItem}"}`).weakNBT()
        event.replaceInput(item, item, recipe.replacement)
    })
})

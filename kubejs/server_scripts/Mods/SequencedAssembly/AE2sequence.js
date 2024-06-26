// priority: 0
ServerEvents.recipes(event => {
	let incStorageCell = 'kubejs:incomplete_storage_cell'
	let incStorageComponent = 'kubejs:incomplete_storage_component'

	event.recipes
		.createSequencedAssembly(
			['ae2:cell_component_1k'],
			'kubejs:1k_me_storage_base',
			[
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'gtceu:red_alloy_double_wire',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'gtceu:red_alloy_double_wire',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'#forge:gems/certus_quartz',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:logic_processor',
				]),
			]
		)
		.transitionalItem('kubejs:incomplete_storage_component')
		.loops(1)
	event.recipes
		.createSequencedAssembly(
			['ae2:cell_component_4k'],
			'kubejs:4k_me_storage_base',
			[
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'gtceu:copper_double_wire',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:cell_component_1k',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:calculation_processor',
				]),
			]
		)
		.transitionalItem('kubejs:incomplete_storage_component')
		.loops(3)

	event.recipes
		.createSequencedAssembly(
			['ae2:cell_component_16k'],
			'kubejs:16k_me_storage_base',
			[
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'gtceu:silver_double_wire',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:cell_component_4k',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:calculation_processor',
				]),
			]
		)
		.transitionalItem('kubejs:incomplete_storage_component')
		.loops(3)

	event.recipes
		.createSequencedAssembly(
			['ae2:cell_component_64k'],
			'kubejs:64k_me_storage_base',
			[
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'gtceu:aluminium_quadruple_wire',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:cell_component_16k',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:calculation_processor',
				]),
			]
		)
		.transitionalItem('kubejs:incomplete_storage_component')
		.loops(3)

	event.recipes
		.createSequencedAssembly(
			['ae2:cell_component_256k'],
			'kubejs:256k_me_storage_base',
			[
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'gtceu:platinum_double_wire',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:cell_component_64k',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:calculation_processor',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:sky_dust',
				]),
			]
		)
		.transitionalItem('kubejs:incomplete_storage_component')
		.loops(3)

	event.recipes
		.createSequencedAssembly(['ae2:logic_processor'], '#gtceu:circuits/lv', [
			event.recipes.createDeploying('kubejs:incomplete_storage_component', [
				'kubejs:incomplete_storage_component',
				'ae2:printed_logic_processor',
			]),
			event.recipes.createDeploying('kubejs:incomplete_storage_component', [
				'kubejs:incomplete_storage_component',
				'ae2:printed_silicon',
			]),
		])
		.transitionalItem('kubejs:incomplete_storage_component')
		.loops(1)

	event.recipes
		.createSequencedAssembly(
			['ae2:engineering_processor'],
			'#gtceu:circuits/lv',
			[
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:printed_engineering_processor',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:printed_silicon',
				]),
			]
		)
		.transitionalItem('kubejs:incomplete_storage_component')
		.loops(1)

	event.recipes
		.createSequencedAssembly(
			['ae2:calculation_processor'],
			'#gtceu:circuits/lv',
			[
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:printed_calculation_processor',
				]),
				event.recipes.createDeploying('kubejs:incomplete_storage_component', [
					'kubejs:incomplete_storage_component',
					'ae2:printed_silicon',
				]),
			]
		)
		.transitionalItem('kubejs:incomplete_storage_component')
		.loops(1)
})

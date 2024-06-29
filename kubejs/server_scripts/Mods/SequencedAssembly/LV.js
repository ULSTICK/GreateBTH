// priority: 0
ServerEvents.recipes(event => {
// #region variables
 	let incBasicElectronicCirc = 'kubejs:inc_basic_electronic_circuit'
 	let incBasicIntegrated = 'kubejs:inc_basic_integrated_circuit'
 	let incMicrochipProcessor = 'kubejs:inc_microchip_processor'

	let incLvMotor = 'kubejs:inc_lv_motor'
 	let incLvPiston = 'kubejs:inc_lv_piston'
 	let lncLvRobotArm = 'kubejs:inc_lv_robot_arm'
 	let incLvConveyor = 'kubejs:inc_lv_conveyor'
 	let incLvPump = 'kubejs:inc_lv_pump'
 	let invLvFluidRegulator = 'kubejs:inc_lv_fluid_regulator'
 	let invLvSensor = 'kubejs:inc_lv_sensor'
 	let incLvEmitter = 'kubejs:inc_lv_emitter'
 	let rawIntegratedCirc = 'kubejs:raw_integrated_circuit_board'
 	let rawPlasticCircBoard = 'kubejs:raw_plastic_circuit_board'
// #endregion
// #region basic electronic circuit
	event.recipes.createSequencedAssembly(['gtceu:basic_electronic_circuit'], 'gtceu:resin_printed_circuit_board',
		[
			event.recipes.createDeploying(incBasicElectronicCirc, [incBasicElectronicCirc, 'gtceu:red_alloy_single_cable']),
			event.recipes.createDeploying(incBasicElectronicCirc, [incBasicElectronicCirc, ['gtceu:resistor', 'gtceu:smd_resistor']]),
			event.recipes.createDeploying(incBasicElectronicCirc, [incBasicElectronicCirc, '#gtceu:circuits/ulv']),
			event.recipes.createDeploying(incBasicElectronicCirc, [incBasicElectronicCirc, 'gtceu:steel_plate'])
		]
	).transitionalItem(incBasicElectronicCirc).loops(2)

	event.recipes.createSequencedAssembly(['gtceu:basic_electronic_circuit'], 'gtceu:resin_printed_circuit_board',
		[
			event.recipes.createDeploying(incBasicElectronicCirc, [incBasicElectronicCirc, 'gtceu:red_alloy_single_wire']),
			event.recipes.createDeploying(incBasicElectronicCirc, [incBasicElectronicCirc, ['gtceu:resistor', 'gtceu:smd_resistor']]),
			event.recipes.createDeploying(incBasicElectronicCirc, [incBasicElectronicCirc, '#gtceu:circuits/ulv']),
			event.recipes.createFilling(incBasicElectronicCirc, [incBasicElectronicCirc, Fluid.of('gtceu:tin', 72)])
		]
	).transitionalItem(incBasicElectronicCirc).loops(2)

	event.recipes.createSequencedAssembly(['gtceu:basic_electronic_circuit'], 'gtceu:resin_printed_circuit_board',
		[
			event.recipes.createDeploying(incBasicElectronicCirc, [incBasicElectronicCirc, 'gtceu:red_alloy_single_wire']),
			event.recipes.createDeploying(incBasicElectronicCirc, [incBasicElectronicCirc, ['gtceu:resistor', 'gtceu:smd_resistor']]),
			event.recipes.createDeploying(incBasicElectronicCirc, [incBasicElectronicCirc, '#gtceu:circuits/ulv']),
			event.recipes.createFilling(incBasicElectronicCirc, [incBasicElectronicCirc, Fluid.of('gtceu:soldering_alloy', 36)])
		]
	).transitionalItem(incBasicElectronicCirc).loops(2)
// #endregion
// #region basic integrated circuit
	event.recipes.createSequencedAssembly(['gtceu:basic_integrated_circuit'], rawIntegratedCirc,
		[
			event.recipes.createDeploying(incBasicIntegrated, [incBasicIntegrated, '#gtceu:resistors']),
			event.recipes.createDeploying(incBasicIntegrated, [incBasicIntegrated, '#gtceu:diodes']),
			event.recipes.createDeploying(incBasicIntegrated, [incBasicIntegrated, 'gtceu:fine_copper_wire']),
			event.recipes.createDeploying(incBasicIntegrated, [incBasicIntegrated, 'gtceu:tin_bolt'])
		]
	).transitionalItem(incBasicIntegrated).loops(2)

// #endregion
// #region microchip processor
	event.recipes.createSequencedAssembly(['2x gtceu:microchip_processor'], rawPlasticCircBoard,
		[
			event.recipes.createDeploying(incMicrochipProcessor, [incMicrochipProcessor, '#gtceu:resistors']),
			event.recipes.createDeploying(incMicrochipProcessor, [incMicrochipProcessor, '#gtceu:capacitors']),
			event.recipes.createDeploying(incMicrochipProcessor, [incMicrochipProcessor, '#gtceu:transistors']),
			event.recipes.createDeploying(incMicrochipProcessor, [incMicrochipProcessor, 'gtceu:fine_copper_wire']),
		]
	).transitionalItem(incMicrochipProcessor).loops(2)	
// #endregion
// #region components

	event.recipes.createSequencedAssembly(['gtceu:lv_electric_motor'],
		['gtceu:magnetic_iron_rod', 'gtceu:magnetic_steel_rod'],
		[
			event.recipes.createDeploying(incLvMotor, [incLvMotor, 'gtceu:copper_single_wire']),
			event.recipes.createDeploying(incLvMotor, [incLvMotor, 'gtceu:copper_single_wire']),
			event.recipes.createDeploying(incLvMotor, [incLvMotor, ['gtceu:iron_rod','gtceu:steel_rod']]),
			event.recipes.createDeploying(incLvMotor, [incLvMotor, 'gtceu:tin_single_cable']),
		]
	).transitionalItem(incLvMotor).loops(2)

	event.recipes.createSequencedAssembly(['gtceu:lv_electric_piston'],
		'gtceu:lv_electric_motor',
		[
			event.recipes.createDeploying(incLvPiston, [incLvPiston, 'gtceu:tin_single_cable']),
			event.recipes.createDeploying(incLvPiston, [incLvPiston, 'gtceu:small_steel_gear']),
			event.recipes.createDeploying(incLvPiston, [incLvPiston, 'gtceu:steel_rod']),
			event.recipes.createDeploying(incLvPiston, [incLvPiston, 'gtceu:steel_plate'])
		]
	).transitionalItem(incLvPiston).loops(2)

	event.recipes.createSequencedAssembly(['gtceu:lv_robot_arm'],
		'gtceu:lv_electric_piston',
		[
			event.recipes.createDeploying(lncLvRobotArm, [lncLvRobotArm, '#gtceu:circuits/lv']),
			event.recipes.createDeploying(lncLvRobotArm, [lncLvRobotArm, 'gtceu:lv_electric_motor']),
			event.recipes.createDeploying(lncLvRobotArm, [lncLvRobotArm, 'gtceu:tin_single_cable']),
			event.recipes.createDeploying(lncLvRobotArm, [lncLvRobotArm, 'gtceu:steel_rod'])
		]
	).transitionalItem(lncLvRobotArm).loops(2)

	event.recipes.createSequencedAssembly(['gtceu:lv_conveyor_module'],
		'gtceu:tin_single_cable',
		[
			event.recipes.createDeploying(
				incLvConveyor, 
				[incLvConveyor, 
					[
						'gtceu:rubber_plate', 
						'gtceu:silicone_rubber_plate', 
						'gtceu:styrene_butadiene_rubber_plate'
					]
				]),
			event.recipes.createDeploying(
				incLvConveyor, 
				[incLvConveyor, 
					[
						'gtceu:rubber_plate', 
						'gtceu:silicone_rubber_plate', 
						'gtceu:styrene_butadiene_rubber_plate'
					]
				]),
			event.recipes.createDeploying(
				incLvConveyor, 
				[incLvConveyor, 
					[
						'gtceu:rubber_plate', 
						'gtceu:silicone_rubber_plate', 
						'gtceu:styrene_butadiene_rubber_plate'
					]
				]),
			event.recipes.createDeploying(incLvConveyor, [incLvConveyor, 'gtceu:lv_electric_motor'])
		]
	).transitionalItem(incLvConveyor).loops(2)
	
	event.recipes.createSequencedAssembly(['gtceu:lv_electric_pump'],
		'gtceu:bronze_normal_fluid_pipe',
		[
			event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:tin_screw']),
			event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:tin_rotor']),
			event.recipes.createDeploying(incLvPump, 
				[incLvPump, 
					[
						'gtceu:rubber_ring', 
						'gtceu:silicone_rubber_ring', 
						'gtceu:styrene_butadiene_rubber_ring'
					]
				]),
			event.recipes.createDeploying(incLvPump, 
				[incLvPump, 
					[
						'gtceu:rubber_ring', 
						'gtceu:silicone_rubber_ring', 
						'gtceu:styrene_butadiene_rubber_ring'
					]
				]),
			event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:tin_single_cable']),
			event.recipes.createDeploying(incLvPump, [incLvPump, 'gtceu:lv_electric_motor']),
		]
	).transitionalItem(incLvPump).loops(1)
	
	event.recipes.createSequencedAssembly(['gtceu:lv_fluid_regulator'],
		'gtceu:lv_electric_piston',
		[
			event.recipes.createDeploying(invLvFluidRegulator, [invLvFluidRegulator, '#gtceu:circuits/lv'])
		]
	).transitionalItem(invLvFluidRegulator).loops(2)

	event.recipes.createSequencedAssembly(['gtceu:lv_sensor'],
		'#gtceu:circuits/lv',
		[
			event.recipes.createDeploying(invLvSensor, [invLvSensor, 'gtceu:double_steel_plate']),
			event.recipes.createDeploying(invLvSensor, [invLvSensor, 'gtceu:double_steel_plate']),
			event.recipes.createDeploying(invLvSensor, [invLvSensor, 'gtceu:brass_rod']),
			event.recipes.createDeploying(invLvSensor, [invLvSensor, 'gtceu:quartzite_gem'])
		]
	).transitionalItem(invLvSensor).loops(1)

	event.recipes.createSequencedAssembly(['gtceu:lv_emitter'],
		'gtceu:quartzite_gem',
		[
			event.recipes.createDeploying(incLvEmitter, [incLvEmitter, '#gtceu:circuits/lv']),
			event.recipes.createDeploying(incLvEmitter, [incLvEmitter, 'gtceu:tin_single_cable']),
			event.recipes.createDeploying(incLvEmitter, [incLvEmitter, 'gtceu:brass_rod']),
			event.recipes.createDeploying(incLvEmitter, [incLvEmitter, 'gtceu:brass_rod'])
		]
	).transitionalItem(incLvEmitter).loops(2)
 // #endregion
})
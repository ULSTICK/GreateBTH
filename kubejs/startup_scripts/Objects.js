// priority: 0

//// Enums ////

global.Quality = {
	UltraLow: 'ultra_low_quality',
	Low: 'low_quality',
	Medium: 'medium_quality',
	High: 'high_quality',
}

//// Mods ////

global.Greate = {
	Tiers: {
		Andesite: 'andesite_alloy',
		Steel: 'steel',
		Aluminium: 'aluminium',
		StainlessSteel: 'stainless_steel',
		Titanium: 'titanium',
		TungstenSteel: 'tungsten_steel',
		Palladium: 'rhodium_plated_palladium',
		Naquadah: 'naquadah_alloy',
		Darmstadtium: 'darmstadtium',
		Neutronium: 'neutronium',
	}
}

global.AE2 = {
	CellSizes: ['1k', '4k', '16k', '64k', '256k'],
	SpatialCellSizes: [2, 16, 128],
	WaferMaterialQualities: {
		'silicon': global.Quality.UltraLow,
		'phosphorus': global.Quality.Low,
		'naquadah': global.Quality.Medium,
		'neutronium': global.Quality.High,
	}
}

global.ProductiveBees = {
	LVMaterials: ['amethyst', 'cinnabar', 'topaz', 'pyrope', 'zinc', 'tin', 'sulfur', 'diamond', 'iron', 'ruby',
		'sapphire', 'opal', 'silicon', 'lapis', 'cobalt', 'copper', 'green_sapphire', 'coal', 'silver', 'emerald', 'apatite',
		'malachite', 'lead', 'sodalite', 'gold', 'nickel'],
	MVMaterials: ['chromium', 'steel', 'electrum', 'invar', 'brass', 'bronze'],
	HVMaterials: ['bismuth', 'stainless_steel'],
	EVMaterials: ['titanium', 'neodymium'],
	IVMaterials: ['platinum', 'tungsten', 'tungsten_steel', 'iridium', 'osmium', 'samarium', 'niobium'],
	LUVMaterials: ['ruthenium', 'palladium', 'rhodium', 'rhodium_plated_palladium'],
	ZPMMaterials: ['naquadah', 'naquadah_alloy', 'vanadium'],
	UVMaterials: ['yttrium'],
	UHVMaterials: ['europium'],
	AfterUHVMaterials: ['infinity', 'neutronium']
}

/* 
//Items that no longer have a use, their recipe will be removed and they will be hidden in EMI.
global.ItemsToRemoveAndHide = {
	FarmersDelight: []
} */

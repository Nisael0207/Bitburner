/** @param {NS} ns **/
export async function main(ns) {
	for (var i = 0; i < ns.hacknet.numNodes(); i++) 
	{
		var wantedlevel = 25;
		var wantedram = 16;
		var wantedcores = 3;
		if (ns.hacknet.getNodeStats(i).level < 25) {
			ns.hacknet.upgradeLevel(i, wantedlevel - ns.hacknet.getNodeStats(i).level);
		}
		while(ns.hacknet.getNodeStats(i).ram < wantedram)
		{
			ns.hacknet.upgradeRam(i, 1)
		}
		if(ns.hacknet.getNodeStats(i).cores < wantedcores)
		{
			ns.hacknet.upgradeCore(i, wantedcores - ns.hacknet.getNodeStats(i).cores)
		}
	}

}

/** @param {NS} ns **/
export async function main(ns) {
	var servers = ['foodnstuff', 'joesguns', 'iron-gym', 'sigma-cosmetics', 'harakiri-sushi', 'hong-fang-tea'];
	for(var i = 0; i < servers.length; i++)
	{
		if(ns.getServerMinSecurityLevel(servers[i]) < ns.getServerSecurityLevel(servers[i]))
		{
			await ns.weaken(servers[i]);
		}
	}
}

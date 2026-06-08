const CalculateKnapSake = function (l, v, w) {
	let n = w.length;
	let recursive = function (i, cap) {
		if (i < 0 || cap == 0) return 0;
		let val = 0;

		val = recursive(i - 1, cap);
		if (w[i] <= cap) {
			val = Math.max(val, v[i] + recursive(i - 1, cap - w[i]));
		}
		return val;
	};

	console.log(recursive(n - 1, l));
};

const CalculateKnapSakeMemo = function (l, v, w) {
	let n = w.length;
	let dp = new Array(n).fill(-1);
	let recursive = function (i, cap) {
		if (i < 0 || cap == 0) return 0;

		if (dp[i] !== -1) return dp[i];
		let val = 0;
		if (w[i] <= cap) {
			val = Math.max(val, v[i] + recursive(i + 1, cap - w[i]));
		}
		dp[i] = val;
		return val;
	};

	console.log(recursive(n - 1, l));
};

const CalculateKnapSakeTabulation = function (l, v, w) {
	let n = w.length;
	let dp = Array.from({ length: w.length + 1 }, () => Array(l + 1).fill(0));

	for (let i = 1; i < dp.length; i++) {
		for (j = w[i - 1]; j < dp[0].length; j++) {
			dp[i][j] = Math.max(dp[i - 1][j], v[i - 1] + dp[i - 1][j - w[i - 1]]);
		}
	}
	console.log(dp);
	// return dp[n+1][l+1]
};
let W = 4;
let value = [1, 2, 3];
let weight = [4, 5, 1];
// CalculateKnapSake(W, value, weight)
CalculateKnapSakeTabulation(W, value, weight);

const val = [
	{
		url: "https://www.youtube.com/watch?v=VwN91x5i25g&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=1&pp=iAQB",
		title: "Introduction to Computer Networks",
	},
	{
		url: "https://www.youtube.com/watch?v=m8eNwVel5xI&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=2&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Computer Networks - Basic Characteristics",
	},
	{
		url: "https://www.youtube.com/watch?v=ly8ikWtAY7s&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=3&pp=iAQB",
		title: "Network Protocols & Communications (Part 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=iE_kY2LVBKA&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=4&pp=iAQB",
		title: "Network Protocols & Communications (Part 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=EBTP0mpCGBM&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=5&pp=iAQB",
		title: "Components of a Computer Network",
	},
	{
		url: "https://www.youtube.com/watch?v=9BIN99rHOCQ&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=6&pp=iAQB",
		title: "Classification of Computer Networks",
	},
	{
		url: "https://www.youtube.com/watch?v=uSKdjjw5zow&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=7&pp=iAQB",
		title: "Network Topology",
	},
	{
		url: "https://www.youtube.com/watch?v=qDN6oEUsUko&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=8&pp=iAQB",
		title: "Network Topology (Solved Questions)",
	},
	{
		url: "https://www.youtube.com/watch?v=Kx6i9gwNS3w&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=9&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Basics of IP Addressing",
	},
	{
		url: "https://www.youtube.com/watch?v=FkiTOMn-XGw&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=10&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Basics of MAC Addressing",
	},
	{
		url: "https://www.youtube.com/watch?v=AroUUkB-lsA&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=11&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Basics of Port Addressing",
	},
	{
		url: "https://www.youtube.com/watch?v=-HlJ4psu5aU&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=12&pp=iAQB",
		title: "Switching Techniques in Computer Networks",
	},
	{
		url: "https://www.youtube.com/watch?v=FewtLNsjtRA&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=13&pp=iAQB",
		title: "Layering in Computer Networks",
	},
	{
		url: "https://www.youtube.com/watch?v=qBXmbJZQ5rY&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=14&pp=iAQB",
		title: "The OSI Reference Model (Part 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=xiGgrQioF2E&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=15&pp=iAQB",
		title: "The OSI Reference Model (Part 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=oQzueBVyAM4&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=16&pp=iAQB",
		title: "The OSI Reference Model (Part 3)",
	},
	{
		url: "https://www.youtube.com/watch?v=XI8kMBMMS6o&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=17&pp=iAQB",
		title: "The OSI Reference Model (Part 4)",
	},
	{
		url: "https://www.youtube.com/watch?v=yDTC6sbYFFE&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=18&pp=iAQB",
		title: "Addressing in Networking",
	},
	{
		url: "https://www.youtube.com/watch?v=wvPe4Zb0tUA&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=19&pp=iAQB",
		title: "The TCP/IP Protocol Suite",
	},
	{
		url: "https://www.youtube.com/watch?v=rurs7cdT5cc&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=20&pp=iAQB",
		title: "Basic Networking Commands (Part 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=frUQMHXhnvs&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=21&pp=iAQB",
		title: "Basics of Cisco Packet Tracer (Part 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=FZ8hRDakHvI&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=22&pp=iAQB",
		title: "Basics of Cisco Packet Tracer (Part 2) | Hub",
	},
	{
		url: "https://www.youtube.com/watch?v=eFY6mi3lmRQ&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=23&pp=iAQB",
		title: "Basics of Cisco Packet Tracer (Part 3) | Switch",
	},
	{
		url: "https://www.youtube.com/watch?v=xwaqSZHK8eM&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=24&pp=iAQB",
		title: "Basics of Router",
	},
	{
		url: "https://www.youtube.com/watch?v=FnH1XUQsoD8&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=25&pp=iAQB",
		title: "Basics of Cisco Packet Tracer (Part 4) | Router",
	},
	{
		url: "https://www.youtube.com/watch?v=Ip6H2VmfshY&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=26&pp=iAQB",
		title: "Basics of Cisco Packet Tracer (Part 5) | Repeater",
	},
	{
		url: "https://www.youtube.com/watch?v=NSDAYnixdgc&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=27&pp=iAQB",
		title: "Basics of Bridge",
	},
	{
		url: "https://www.youtube.com/watch?v=0pMm_QxCg3I&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=28&pp=iAQB",
		title: "Network Devices",
	},
	{
		url: "https://www.youtube.com/watch?v=-WhBOnH_jB8&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=29&pp=iAQB",
		title: "Network Devices (Solved Questions)",
	},
	{
		url: "https://www.youtube.com/watch?v=rKzDbdGhcdY&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=30&pp=iAQB",
		title: "Physical Layer and Media (Part 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=JP-wJOVAvXc&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=31&pp=iAQB",
		title: "Physical Layer and Media (Part 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=fEygcbiniHQ&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=32&pp=iAQB",
		title: "Physical Layer and Media (Part 3)",
	},
	{
		url: "https://www.youtube.com/watch?v=eGr2wJzFO9s&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=33&pp=iAQB",
		title: "Line Configuration",
	},
	{
		url: "https://www.youtube.com/watch?v=VBAuzvVzOQU&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=34&pp=iAQB",
		title: "Link Layer Services",
	},
	{
		url: "https://www.youtube.com/watch?v=N1apF49Ih28&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=35&pp=iAQB",
		title: "Sub-layers of the Data Link Layer",
	},
	{
		url: "https://www.youtube.com/watch?v=NhpzBldHOYo&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=36&pp=iAQB",
		title: "Framing (Part 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=ckcRxFxeOs4&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=37&pp=iAQB",
		title: "Framing (Part 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=8sV_fOzJoqI&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=38&pp=iAQB",
		title: "Framing (Part 3)",
	},
	{
		url: "https://www.youtube.com/watch?v=N2tgsPUPEBE&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=39&pp=iAQB",
		title: "High-Level Data Link Control (HDLC)",
	},
	{
		url: "https://www.youtube.com/watch?v=toS0RXNaTaE&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=40&pp=iAQB",
		title: "Bit Stuffing",
	},
	{
		url: "https://www.youtube.com/watch?v=EpVkN6YuDUk&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=41&pp=iAQB",
		title: "Binary Synchronous Communications Protocol (BISYNC)",
	},
	{
		url: "https://www.youtube.com/watch?v=kKCwkRT_U8I&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=42&pp=iAQB",
		title: "Point-to-Point Protocol (PPP)",
	},
	{
		url: "https://www.youtube.com/watch?v=whsTT8hnbJA&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=43&pp=iAQB",
		title: "Digital Data Communications Message Protocol (DDCMP)",
	},
	{
		url: "https://www.youtube.com/watch?v=EMrY-8m8D1E&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=44&pp=iAQB",
		title: "Error Detection",
	},
	{
		url: "https://www.youtube.com/watch?v=UwERCzJv-y8&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=45&pp=iAQB",
		title: "Vertical Redundancy Check (VRC)",
	},
	{
		url: "https://www.youtube.com/watch?v=nNONvBsOtrE&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=46&pp=iAQB",
		title: "Longitudinal Redundancy Check (LRC)",
	},
	{
		url: "https://www.youtube.com/watch?v=AtVWnyDDaDI&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=47&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Checksum",
	},
	{
		url: "https://www.youtube.com/watch?v=A9g6rTMblz4&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=48&pp=iAQB",
		title: "Cyclic Redundancy Check (CRC) - Part 1",
	},
	{
		url: "https://www.youtube.com/watch?v=wQGwfBS3gpk&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=49&pp=iAQB",
		title: "Cyclic Redundancy Check (CRC) - Part 2",
	},
	{
		url: "https://www.youtube.com/watch?v=tEkePtlujSA&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=50&pp=iAQB",
		title: "Cyclic Redundancy Check (Solved Problem)",
	},
	{
		url: "https://www.youtube.com/watch?v=5AVuUgEJu1E&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=51&pp=iAQB",
		title: "Network Performance",
	},
	{
		url: "https://www.youtube.com/watch?v=wo3M5G9ZHo0&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=52&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Latency",
	},
	{
		url: "https://www.youtube.com/watch?v=xr8PdnGt67k&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=53&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Latency (Simulation)",
	},
	{
		url: "https://www.youtube.com/watch?v=vPCKWhXSAEo&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=54&pp=iAQB",
		title: "Bandwidth Delay Product",
	},
	{
		url: "https://www.youtube.com/watch?v=TBD_Bj9PCOw&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=55&pp=iAQB",
		title: "Delay (Solved Problem)",
	},
	{
		url: "https://www.youtube.com/watch?v=nT9F-USjtBg&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=56&pp=iAQB",
		title: "Round Trip Time (RTT)",
	},
	{
		url: "https://www.youtube.com/watch?v=ReQiSK8W3Ag&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=57&pp=iAQB",
		title: "Flow Control",
	},
	{
		url: "https://www.youtube.com/watch?v=n09DfvemnTQ&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=58&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Stop-and-Wait Protocol",
	},
	{
		url: "https://www.youtube.com/watch?v=YdkksvhkQGQ&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=59&pp=iAQB",
		title: "Stop-and-Wait ARQ Protocol",
	},
	{
		url: "https://www.youtube.com/watch?v=LnbvhoxHn8M&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=60&pp=iAQB",
		title: "Sliding Window Protocol",
	},
	{
		url: "https://www.youtube.com/watch?v=QD3oCelHJ20&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=61&pp=iAQB",
		title: "Go-Back-N ARQ",
	},
	{
		url: "https://www.youtube.com/watch?v=cqPWjo2iLgk&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=62&pp=iAQB",
		title: "Go-Back-N ARQ (Solved Problem 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=PHcIuxvLSzc&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=63&pp=iAQB",
		title: "Go-Back-N ARQ (Solved Problem 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=WfIhQ3o2xow&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=64&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Selective Repeat ARQ",
	},
	{
		url: "https://www.youtube.com/watch?v=gG0xzEHH0iU&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=65&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Selective Repeat ARQ (Solved Problem 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=D8-jK_gVzb0&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=66&pp=iAQB",
		title: "Selective Repeat ARQ (Solved Problem 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=_amTFCVhXNw&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=67&pp=iAQB",
		title: "Sliding Window Protocol (Solved Problem 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=CBIsClf9Dpc&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=68&pp=iAQB",
		title: "Sliding Window Protocol (Solved Problem 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=YAjfUc7Tt24&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=69&pp=iAQB",
		title: "Multiple Access Protocols",
	},
	{
		url: "https://www.youtube.com/watch?v=j4-r0e7DjqY&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=70&pp=iAQB",
		title: "Pure Aloha",
	},
	{
		url: "https://www.youtube.com/watch?v=aqWTNk90zRA&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=71&pp=iAQB",
		title: "Slotted Aloha",
	},
	{
		url: "https://www.youtube.com/watch?v=MAZi6VoekYw&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=72&pp=iAQB",
		title: "Carrier Sense Multiple Access (CSMA) – Part 1",
	},
	{
		url: "https://www.youtube.com/watch?v=PyLlYQXuxvs&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=73&pp=iAQB",
		title: "Carrier Sense Multiple Access (CSMA) – Part 2",
	},
	{
		url: "https://www.youtube.com/watch?v=baaPXiQ44vs&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=74&pp=iAQB",
		title: "Controlled Access Protocol – Reservation",
	},
	{
		url: "https://www.youtube.com/watch?v=Zp8UBSEVPdc&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=75&pp=iAQB",
		title: "Controlled Access Protocol – Polling",
	},
	{
		url: "https://www.youtube.com/watch?v=ac5JI20hUjE&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=76&pp=iAQB",
		title: "Controlled Access Protocol – Token Passing",
	},
	{
		url: "https://www.youtube.com/watch?v=KviHyRss-dE&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=77&pp=iAQB",
		title: "Channelization Protocols",
	},
	{
		url: "https://www.youtube.com/watch?v=MzhiVE6OuQA&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=78&pp=iAQB",
		title: "Ethernet",
	},
	{
		url: "https://www.youtube.com/watch?v=FL_Yn8CxMKY&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=79&pp=iAQB",
		title: "Ethernet (Solved Questions) - Part 1",
	},
	{
		url: "https://www.youtube.com/watch?v=xFliq3EFN6I&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=80&pp=iAQB",
		title: "Ethernet (Solved Questions) - Part 2",
	},
	{
		url: "https://www.youtube.com/watch?v=ZXqXEzioRSs&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=81&pp=iAQB",
		title: "Ethernet Transmitter Algorithm",
	},
	{
		url: "https://www.youtube.com/watch?v=KaEPWr0ftvM&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=82&pp=iAQB",
		title: "Experience with Ethernet",
	},
	{
		url: "https://www.youtube.com/watch?v=8i7dyojFOP4&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=83&pp=iAQB",
		title: "Ethernet (Solved Question 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=0--YXSCgaa0&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=84&pp=iAQB",
		title: "Ethernet (Solved Question 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=gtYNSkPbKto&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=85&pp=iAQB",
		title: "Ethernet (Solved Question 3)",
	},
	{
		url: "https://www.youtube.com/watch?v=t3FVP5wuG4g&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=86&pp=iAQB",
		title: "IEEE 802.11 Wireless Fidelity (Wi-Fi)",
	},
	{
		url: "https://www.youtube.com/watch?v=kcqpkl_HZSQ&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=87&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "IEEE 802.11 Distribution System",
	},
	{
		url: "https://www.youtube.com/watch?v=jy4kBAzJCKM&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=88&pp=iAQB",
		title: "IEEE 802.11 Wi-Fi Frame Format",
	},
	{
		url: "https://www.youtube.com/watch?v=_oz4WTWRfGs&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=89&pp=iAQB",
		title: "Hidden Terminal Problem",
	},
	{
		url: "https://www.youtube.com/watch?v=mhuXdaRoLzA&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=90&pp=iAQB",
		title: "Exposed Terminal Problem",
	},
	{
		url: "https://www.youtube.com/watch?v=3F4DQINyx3g&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=91&pp=iAQB",
		title: "Multiple Access with Collision Avoidance (MACA)",
	},
	{
		url: "https://www.youtube.com/watch?v=Sn-vvwNlkck&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=92&pp=iAQB",
		title: "Wi-Fi (Solved Question)",
	},
	{
		url: "https://www.youtube.com/watch?v=ixY0Cau4mBM&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=93&pp=iAQB",
		title: "IEEE 802.15.1 Bluetooth",
	},
	{
		url: "https://www.youtube.com/watch?v=eJKkEzeGuuo&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=94&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Bluetooth Protocol Stack",
	},
	{
		url: "https://www.youtube.com/watch?v=ez24W5oTU3U&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=95&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Virtual LAN (VLAN)",
	},
	{
		url: "https://www.youtube.com/watch?v=GSKoQ8ZR8rw&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=96&pp=iAQB",
		title: "Spanning Tree Protocol (STP)",
	},
	{
		url: "https://www.youtube.com/watch?v=_kJo-Tj9rvg&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=97&pp=iAQB",
		title: "Spanning Tree Protocol (Solved Question)",
	},
	{
		url: "https://www.youtube.com/watch?v=phOlq9SuscM&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=98&pp=iAQB",
		title: "IPv4 Address (Part 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=m_iCPlVzN_o&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=99&pp=iAQB",
		title: "IPv4 Address (Part 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=VkgfyLf1raY&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=100&pp=iAQB",
		title: "Classful Addressing (Part 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=0MJmtjj0qCQ&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=101&pp=iAQB",
		title: "Classful Addressing (Part 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=KILaAaNWd8o&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=102&pp=iAQB",
		title: "Classful Addressing (Part 3)",
	},
	{
		url: "https://www.youtube.com/watch?v=-6bUJZcWgRo&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=103&pp=iAQB",
		title: "Classful Addressing (CPT Activity)",
	},
	{
		url: "https://www.youtube.com/watch?v=aDdArElVJvQ&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=104&pp=iAQB",
		title: "IPv4 Unicast, Multicast, and Broadcast",
	},
	{
		url: "https://www.youtube.com/watch?v=PAJpalzADCM&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=105&pp=iAQB",
		title: "Classful Addressing (Solved Question 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=-ekunwqxkL0&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=106&pp=iAQB",
		title: "Classful Addressing (Solved Question 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=asz81UtliCs&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=107&pp=iAQB",
		title: "Classful Addressing (Solved Question 3)",
	},
	{
		url: "https://www.youtube.com/watch?v=rqc1plzpV-c&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=108&pp=iAQB",
		title: "Public and Private IP Addresses",
	},
	{
		url: "https://www.youtube.com/watch?v=eR9b46Bk0Qg&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=109&pp=iAQB",
		title: "Classless Addressing (Part 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=PGwtar-BZzs&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=110&pp=iAQB",
		title: "Classless Addressing (Part 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=UHRPtNZ_Rz4&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=111&pp=iAQB",
		title: "Subnetting",
	},
	{
		url: "https://www.youtube.com/watch?v=EZTQ61njgKI&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=112&pp=iAQB",
		title: "Subnetting (Solved Problem 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=tO4vvVM0kK4&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=113&pp=iAQB",
		title: "Verifying the Subnetting (CPT Activity)",
	},
	{
		url: "https://www.youtube.com/watch?v=w5bMxHxELaI&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=114&pp=iAQB",
		title: "Subnetting (Solved Problem 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=pGZPXeqbrRs&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=115&pp=iAQB",
		title: "Subnetting (Solved Problem 3)",
	},
	{
		url: "https://www.youtube.com/watch?v=XELcQ3I3PZU&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=116&pp=iAQB",
		title: "Subnetting (CPT Activity)",
	},
	{
		url: "https://www.youtube.com/watch?v=M9URqaAy6jc&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=117&pp=iAQB",
		title: "Subnetting (Solved Problem 4)",
	},
	{
		url: "https://www.youtube.com/watch?v=PG46YejJseA&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=118&pp=iAQB0gcJCQ0LAYcqIYzv",
		title: "Subnetting (Troubleshooting 1)",
	},
	{
		url: "https://www.youtube.com/watch?v=BkAuRpIU2Y0&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=119&pp=iAQB",
		title: "Subnetting (Troubleshooting 2)",
	},
	{
		url: "https://www.youtube.com/watch?v=fkvLH1ojErM&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=120&pp=iAQB",
		title: "Subnetting (Solved Problem 5)",
	},
	{
		url: "https://www.youtube.com/watch?v=Y4p6rXdp844&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=121&pp=iAQB",
		title: "Subnetting (Solved Problem 6)",
	},
	{
		url: "https://www.youtube.com/watch?v=6S2LIlo0b70&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=122&pp=iAQB",
		title: "Subnetting (Solved Problem 7)",
	},
	{
		url: "https://www.youtube.com/watch?v=qKWb8ExPXpE&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=123&pp=iAQB",
		title: "Subnetting (Solved Problem 8)",
	},
	{
		url: "https://www.youtube.com/watch?v=FYfScxtotLA&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=124&pp=iAQB",
		title: "Subnetting (Solved Problem 9)",
	},
	{
		url: "https://www.youtube.com/watch?v=S8IOs6yyl1s&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=125&pp=iAQB",
		title: "Subnetting (Solved Problem 10)",
	},
	{
		url: "https://www.youtube.com/watch?v=q0PPJbCyRmg&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=126&pp=iAQB",
		title: "Subnetting (Solved Problem 11)",
	},
	{
		url: "https://www.youtube.com/watch?v=wZwNzCIqpvY&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=127&pp=iAQB",
		title: "Subnetting (Solved Problem 12)",
	},
	{
		url: "https://www.youtube.com/watch?v=tJ9yAkEKR1Y&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=128&pp=iAQB",
		title: "Fixed Length Subnet Masking (FLSM)",
	},
	{
		url: "https://www.youtube.com/watch?v=N7BEDtZ7G4g&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=129&pp=iAQB",
		title: "Variable Length Subnet Masking (VLSM) - Solved Problem 1",
	},
	{
		url: "https://www.youtube.com/watch?v=TJDAh_zbePI&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=130&pp=iAQB",
		title: "Variable Length Subnet Masking (VLSM) - Solved Problem 2",
	},
	{
		url: "https://www.youtube.com/watch?v=DbFmnnhf_MA&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=131&pp=iAQB0gcJCQ0LAYcqIYzv",
		title:
			"Network Layer Protocols | Chapter-4 | Computer Networks | nesoacademy.org",
	},
	{
		url: "https://www.youtube.com/watch?v=OyBIburQl6s&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=132&pp=iAQB",
		title:
			"Routing Protocols | Chapter-5 | Computer Networks | nesoacademy.org",
	},
	{
		url: "https://www.youtube.com/watch?v=TF-6G-cFi5E&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=133&pp=iAQB",
		title: "NAT & IPv6 | Chapter-6 | Computer Networks | nesoacademy.org",
	},
	{
		url: "https://www.youtube.com/watch?v=7jUWxFV1VHU&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=134&pp=iAQB",
		title: "Transport Layer | Chapter-7 | Computer Networks | nesoacademy.org",
	},
	{
		url: "https://www.youtube.com/watch?v=18VBVMgjp6w&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&index=135&pp=iAQB0gcJCQ0LAYcqIYzv",
		title:
			"Application Layer & Security | Chapter-8 | Computer Networks | nesoacademy.org",
	},
];

console.log(val.map((item, i) => i + 1 + ". " + item.title));

[
	"1. Introduction to Computer Networks",
	"2. Computer Networks - Basic Characteristics",
	"3. Network Protocols & Communications (Part 1)",
	"4. Network Protocols & Communications (Part 2)",
	"5. Components of a Computer Network",
	"6. Classification of Computer Networks",
	"7. Network Topology",
	"8. Network Topology (Solved Questions)",
	"9. Basics of IP Addressing",
	"10. Basics of MAC Addressing",
	"11. Basics of Port Addressing",
	"12. Switching Techniques in Computer Networks",
	"13. Layering in Computer Networks",
	"14. The OSI Reference Model (Part 1)",
	"15. The OSI Reference Model (Part 2)",
	"16. The OSI Reference Model (Part 3)",
	"17. The OSI Reference Model (Part 4)",
	"18. Addressing in Networking",
	"19. The TCP/IP Protocol Suite",
	"20. Basic Networking Commands (Part 1)",
	"21. Basics of Cisco Packet Tracer (Part 1)",
	"22. Basics of Cisco Packet Tracer (Part 2) | Hub",
	"23. Basics of Cisco Packet Tracer (Part 3) | Switch",
	"24. Basics of Router",
	"25. Basics of Cisco Packet Tracer (Part 4) | Router",
	"26. Basics of Cisco Packet Tracer (Part 5) | Repeater",
	"27. Basics of Bridge",
	"28. Network Devices",
	"29. Network Devices (Solved Questions)",
	"30. Physical Layer and Media (Part 1)",
	"31. Physical Layer and Media (Part 2)",
	"32. Physical Layer and Media (Part 3)",
	"33. Line Configuration",
	"34. Link Layer Services",
	"35. Sub-layers of the Data Link Layer",
	"36. Framing (Part 1)",
	"37. Framing (Part 2)",
	"38. Framing (Part 3)",
	"39. High-Level Data Link Control (HDLC)",
	"40. Bit Stuffing",
	"41. Binary Synchronous Communications Protocol (BISYNC)",
	"42. Point-to-Point Protocol (PPP)",
	"43. Digital Data Communications Message Protocol (DDCMP)",
	"44. Error Detection",
	"45. Vertical Redundancy Check (VRC)",
	"46. Longitudinal Redundancy Check (LRC)",
	"47. Checksum",
	"48. Cyclic Redundancy Check (CRC) - Part 1",
	"49. Cyclic Redundancy Check (CRC) - Part 2",
	"50. Cyclic Redundancy Check (Solved Problem)",
	"51. Network Performance",
	"52. Latency",
	"53. Latency (Simulation)",
	"54. Bandwidth Delay Product",
	"55. Delay (Solved Problem)",
	"56. Round Trip Time (RTT)",
	"57. Flow Control",
	"58. Stop-and-Wait Protocol",
	"59. Stop-and-Wait ARQ Protocol",
	"60. Sliding Window Protocol",
	"61. Go-Back-N ARQ",
	"62. Go-Back-N ARQ (Solved Problem 1)",
	"63. Go-Back-N ARQ (Solved Problem 2)",
	"64. Selective Repeat ARQ",
	"65. Selective Repeat ARQ (Solved Problem 1)",
	"66. Selective Repeat ARQ (Solved Problem 2)",
	"67. Sliding Window Protocol (Solved Problem 1)",
	"68. Sliding Window Protocol (Solved Problem 2)",
	"69. Multiple Access Protocols",
	"70. Pure Aloha",
	"71. Slotted Aloha",
	"72. Carrier Sense Multiple Access (CSMA) – Part 1",
	"73. Carrier Sense Multiple Access (CSMA) – Part 2",
	"74. Controlled Access Protocol – Reservation",
	"75. Controlled Access Protocol – Polling",
	"76. Controlled Access Protocol – Token Passing",
	"77. Channelization Protocols",
	"78. Ethernet",
	"79. Ethernet (Solved Questions) - Part 1",
	"80. Ethernet (Solved Questions) - Part 2",
	"81. Ethernet Transmitter Algorithm",
	"82. Experience with Ethernet",
	"83. Ethernet (Solved Question 1)",
	"84. Ethernet (Solved Question 2)",
	"85. Ethernet (Solved Question 3)",
	"86. IEEE 802.11 Wireless Fidelity (Wi-Fi)",
	"87. IEEE 802.11 Distribution System",
	"88. IEEE 802.11 Wi-Fi Frame Format",
	"89. Hidden Terminal Problem",
	"90. Exposed Terminal Problem",
	"91. Multiple Access with Collision Avoidance (MACA)",
	"92. Wi-Fi (Solved Question)",
	"93. IEEE 802.15.1 Bluetooth",
	"94. Bluetooth Protocol Stack",
	"95. Virtual LAN (VLAN)",
	"96. Spanning Tree Protocol (STP)",
	"97. Spanning Tree Protocol (Solved Question)",
	"98. IPv4 Address (Part 1)",
	"99. IPv4 Address (Part 2)",
	"100. Classful Addressing (Part 1)",
	"101. Classful Addressing (Part 2)",
	"102. Classful Addressing (Part 3)",
	"103. Classful Addressing (CPT Activity)",
	"104. IPv4 Unicast, Multicast, and Broadcast",
	"105. Classful Addressing (Solved Question 1)",
	"106. Classful Addressing (Solved Question 2)",
	"107. Classful Addressing (Solved Question 3)",
	"108. Public and Private IP Addresses",
	"109. Classless Addressing (Part 1)",
	"110. Classless Addressing (Part 2)",
	"111. Subnetting",
	"112. Subnetting (Solved Problem 1)",
	"113. Verifying the Subnetting (CPT Activity)",
	"114. Subnetting (Solved Problem 2)",
	"115. Subnetting (Solved Problem 3)",
	"116. Subnetting (CPT Activity)",
	"117. Subnetting (Solved Problem 4)",
	"118. Subnetting (Troubleshooting 1)",
	"119. Subnetting (Troubleshooting 2)",
	"120. Subnetting (Solved Problem 5)",
	"121. Subnetting (Solved Problem 6)",
	"122. Subnetting (Solved Problem 7)",
	"123. Subnetting (Solved Problem 8)",
	"124. Subnetting (Solved Problem 9)",
	"125. Subnetting (Solved Problem 10)",
	"126. Subnetting (Solved Problem 11)",
	"127. Subnetting (Solved Problem 12)",
	"128. Fixed Length Subnet Masking (FLSM)",
	"129. Variable Length Subnet Masking (VLSM) - Solved Problem 1",
	"130. Variable Length Subnet Masking (VLSM) - Solved Problem 2",
	"131. Network Layer Protocols | Chapter-4 | Computer Networks | nesoacademy.org",
	"132. Routing Protocols | Chapter-5 | Computer Networks | nesoacademy.org",
	"133. NAT & IPv6 | Chapter-6 | Computer Networks | nesoacademy.org",
	"134. Transport Layer | Chapter-7 | Computer Networks | nesoacademy.org",
	"135. Application Layer & Security | Chapter-8 | Computer Networks | nesoacademy.org",
];

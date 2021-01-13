

export class Observer{

	constructor(callback = this.callback,options = {
		root: null,
		rootMargin: '50px',
		threshold: this.buildThreshold(10)})
	{

		this.objectObserver = new IntersectionObserver(callback, options);

	}

	callback(entries,observer){
		entries.forEach((entry)=>{
			entry.target.style.transform = "rotate(0deg)";
		})
	}

	objectObserver=undefined

	observe(element){
		this.objectObserver.observe(element);
	}

	buildThreshold(steps) {
		let thresholds = [];

		for (let i=1.0; i<=steps; i++) {
		  	let ratio = i/steps;
		  	thresholds.push(ratio);
		}

		thresholds.push(0);
		return thresholds;
	}

};






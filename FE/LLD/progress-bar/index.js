function ProgressBar(ele, duration) {
    this.ele = document.querySelector(ele);
    this.duration = duration;
    this.noOfTimes = 0;
    this.intervalID;

    this.init();
}

ProgressBar.prototype.init = function () {
    const progressBar = document.createElement('progress');

    progressBar.classList.add('progress-bar');
    progressBar.setAttribute('max', 100);
    progressBar.value = 0;
    
    const runBtn = document.createElement('button');
    runBtn.textContent = `Run (Queue: ${this.noOfTimes})`;
    runBtn.classList.add('run-button');
    runBtn.addEventListener('click', (function() {
        this.noOfTimes++;
        this.runBtn.textContent = `Run (Queue: ${this.noOfTimes})`;


        if(!this.intervalID) {
            this.run();
        }
    }).bind(this));

    this.runBtn = runBtn;
    this.progressBar = progressBar;
    this.ele.appendChild(progressBar);
    this.ele.appendChild(runBtn);
}

ProgressBar.prototype.run = function() {
    this.progressBar.value = 0;
    this.intervalID = setInterval(() => {
        this.progressBar.value += 0.1;
        if(this.progressBar.value == 100) {
            clearInterval(this.intervalID);
            this.intervalID = null;
            this.noOfTimes--;
            this.runBtn.textContent = `Run (Queue: ${this.noOfTimes})`;

            if(this.noOfTimes > 0) {
                this.reset();
            }
        }
    }, this.duration/1000);
}

ProgressBar.prototype.reset = function() {
    this.progressBar.value = 0;
    this.run();
}